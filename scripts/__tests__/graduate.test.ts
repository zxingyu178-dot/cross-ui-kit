/**
 * 毕业门机制回归测试：证明 graduate.mjs 按 stack 独立、可信。
 * 通过 KIT_ROOT / KIT_HEAD_SHA 测试接缝在临时夹具上运行真实脚本。
 */
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, rmSync, existsSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { spawnSync } from 'node:child_process'
import { afterEach, describe, expect, it } from 'vitest'

const here = dirname(fileURLToPath(import.meta.url))
const graduatePath = resolve(here, '..', 'graduate.mjs')
const CANONS = ['Button', 'Input']
const HEAD = 'testsha1234567890'

const dirs: string[] = []
function makeFixture(): string {
  const dir = mkdtempSync(join(tmpdir(), 'grad-'))
  dirs.push(dir)
  const put = (rel: string, content: string) => {
    const p = join(dir, rel)
    mkdirSync(dirname(p), { recursive: true })
    writeFileSync(p, content)
  }

  const stackStatus = { web: 'beta', mini: 'beta', native: 'beta' }
  const mapping = {
    version: 'test',
    description: 'fixture',
    components: CANONS.map((canonical) => ({
      canonical,
      category: 'base',
      sharedProps: {},
      eventMap: {},
      stacks: {
        web: { item: `@kit/web-${canonical.toLowerCase()}`, status: stackStatus.web },
        mini: { item: `@kit/mini-${canonical.toLowerCase()}`, status: stackStatus.mini },
        native: { item: `@kit/native-${canonical.toLowerCase()}`, status: stackStatus.native },
      },
    })),
  }
  put('registry/component-mapping.json', JSON.stringify(mapping, null, 2))

  for (const s of ['web', 'mini', 'native'] as const) {
    put(
      `registry/${s}/registry.json`,
      JSON.stringify(
        {
          name: 'reg',
          stack: s,
          description: 'fixture',
          items: CANONS.map((canonical) => ({
            name: canonical.toLowerCase(),
            type: 'registry:component',
            canonical,
            status: 'beta',
            stack: s,
          })),
        },
        null,
        2,
      ),
    )
  }

  put(
    'registry/graduation/first-batch.json',
    JSON.stringify({
      batch: 1,
      description: 'fixture',
      components: CANONS.map((canonical) => ({ canonical })),
    }),
  )
  return dir
}

/** 让 web 满足全部自动门 + 证据门 + pipeline 产物 */
function enableWeb(
  dir: string,
  opts: { artifactSha?: string; verifiedStacks?: string[]; evidence?: string[] } = {},
) {
  const put = (rel: string, content: string) => {
    const p = join(dir, rel)
    mkdirSync(dirname(p), { recursive: true })
    writeFileSync(p, content)
  }
  for (const c of opts.evidence ?? CANONS) {
    put(
      `registry/graduation/evidence/web/${c}.json`,
      JSON.stringify({
        canonical: c,
        gates: Object.fromEntries(
          ['interaction', 'lightDark', 'a11y', 'visual', 'demo'].map((g) => [
            g,
            { status: 'pass', ref: 'x' },
          ]),
        ),
      }),
    )
    put(`packages/ui-web/src/${c}/${c}.test.tsx`, `describe('${c}', () => {})`)
    put(
      `packages/ui-web/src/${c}/${c}.stories.tsx`,
      `export const Basic = () => null\nexport const LongText = () => null\n`,
    )
  }
  const sha = opts.artifactSha ?? HEAD
  put(
    `registry/graduation/verify/${sha}.json`,
    JSON.stringify({
      sha,
      shortSha: sha.slice(0, 7),
      generatedAt: new Date().toISOString(),
      treeClean: true,
      verifiedStacks: opts.verifiedStacks ?? ['web'],
      stages: {},
      allPass: true,
    }),
  )
}

function run(dir: string, args: string[], head = HEAD) {
  return spawnSync('node', [graduatePath, ...args], {
    env: { ...process.env, KIT_ROOT: dir, KIT_HEAD_SHA: head },
    encoding: 'utf8',
  })
}

const read = (dir: string, rel: string) => JSON.parse(readFileSync(join(dir, rel), 'utf8'))
function statuses(dir: string) {
  const m = read(dir, 'registry/component-mapping.json')
  const out: Record<string, Record<string, string>> = {}
  for (const c of m.components)
    out[c.canonical] = Object.fromEntries(
      Object.entries(c.stacks).map(([s, v]: [string, any]) => [s, v.status]),
    )
  for (const s of ['web', 'mini', 'native']) {
    const r = read(dir, `registry/${s}/registry.json`)
    for (const i of r.items) (out[i.canonical] ??= {})[`${s}Reg`] = i.status
  }
  return out
}

afterEach(() => {
  for (const d of dirs) if (existsSync(d)) rmSync(d, { recursive: true, force: true })
  dirs.length = 0
})

describe('graduate 按 stack 独立毕业', () => {
  it('--stack web 毕业 web，但不修改 mini/native', () => {
    const dir = makeFixture()
    enableWeb(dir)
    const r = run(dir, ['--stack', 'web'])
    expect(r.status, r.stderr + r.stdout).toBe(0)
    const st = statuses(dir)
    for (const c of CANONS) {
      expect(st[c].web).toBe('stable')
      expect(st[c].webReg).toBe('stable')
      expect(st[c].mini).toBe('beta')
      expect(st[c].miniReg).toBe('beta')
      expect(st[c].native).toBe('beta')
      expect(st[c].nativeReg).toBe('beta')
    }
  })

  it('--stack mini 缺环境不能毕业，且不修改任何栈（含 web/native）', () => {
    const dir = makeFixture()
    const before = JSON.stringify(statuses(dir))
    const r = run(dir, ['--stack', 'mini'])
    expect(r.status).toBe(1)
    expect(JSON.stringify(statuses(dir))).toBe(before)
  })

  it('某组件缺 web 证据时不能毕业，且不做任何修改', () => {
    const dir = makeFixture()
    enableWeb(dir, { evidence: ['Button'] }) // Input 无证据
    const before = JSON.stringify(statuses(dir))
    const r = run(dir, ['--stack', 'web'])
    expect(r.status).toBe(1)
    expect(r.stdout + r.stderr).toContain('Input')
    expect(JSON.stringify(statuses(dir))).toBe(before)
  })

  it('重复执行 graduate 幂等（第二次无改动、退出 0）', () => {
    const dir = makeFixture()
    enableWeb(dir)
    expect(run(dir, ['--stack', 'web']).status).toBe(0)
    const afterFirst = JSON.stringify(statuses(dir))
    const second = run(dir, ['--stack', 'web'])
    expect(second.status).toBe(0)
    expect(second.stdout).toContain('幂等')
    expect(JSON.stringify(statuses(dir))).toBe(afterFirst)
  })

  it('regress 只回退指定 stack（mini→beta，web/native 保持 stable）', () => {
    const dir = makeFixture()
    // 直接把三栈都置为 stable
    const setAllStable = (rel: string) => {
      const p = join(dir, rel)
      const j = JSON.parse(readFileSync(p, 'utf8'))
      const mutate = (arr: any[]) => arr.forEach((x) => (x.status = 'stable'))
      if (j.components)
        j.components.forEach((c: any) =>
          Object.values(c.stacks).forEach((s: any) => (s.status = 'stable')),
        )
      if (j.items) mutate(j.items)
      writeFileSync(p, JSON.stringify(j, null, 2))
    }
    setAllStable('registry/component-mapping.json')
    for (const s of ['web', 'mini', 'native']) setAllStable(`registry/${s}/registry.json`)

    const r = run(dir, ['--stack', 'mini', '--regress'])
    expect(r.status, r.stderr + r.stdout).toBe(0)
    const st = statuses(dir)
    for (const c of CANONS) {
      expect(st[c].mini).toBe('beta')
      expect(st[c].miniReg).toBe('beta')
      expect(st[c].web).toBe('stable')
      expect(st[c].native).toBe('stable')
    }
  })

  it('旧 commit 的验证产物不能使当前 HEAD 毕业', () => {
    const dir = makeFixture()
    enableWeb(dir, { artifactSha: 'oldcommit000000000000000000000000000000' })
    const before = JSON.stringify(statuses(dir))
    const r = run(dir, ['--stack', 'web'], HEAD)
    expect(r.status).toBe(1)
    expect(r.stdout + r.stderr).toMatch(/无验证产物|quality:stable/)
    expect(JSON.stringify(statuses(dir))).toBe(before)
  })

  it('验证产物未覆盖 web（verifiedStacks=mini）时 web 不能毕业，禁止跨栈', () => {
    const dir = makeFixture()
    enableWeb(dir, { verifiedStacks: ['mini'] })
    const before = JSON.stringify(statuses(dir))
    const r = run(dir, ['--stack', 'web'])
    expect(r.status).toBe(1)
    expect(r.stdout + r.stderr).toContain('禁止跨栈毕业')
    expect(JSON.stringify(statuses(dir))).toBe(before)
  })
})
