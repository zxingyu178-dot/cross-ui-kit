#!/usr/bin/env node
/**
 * registry 结构与一致性校验（质量门第一道，零第三方依赖）
 * 运行：pnpm registry:validate
 * 校验项：
 *  1. 三份 registry.json 与 component-mapping.json 为合法 JSON
 *  2. item 必填字段、枚举值、name 命名与唯一性
 *  3. files/docs/examples 路径合法性；非 planned 项路径必须真实存在
 *  4. item.canonical 必须在映射表登记
 *  5. 映射表中 beta/stable 的栈必须能在对应 registry 找到 item
 *  6. deprecated 项必须给出 replacement
 */
import { readFileSync, existsSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const REG_DIR = join(root, 'registry')

const STACKS = ['web', 'mini', 'native']
const STATUSES = ['planned', 'beta', 'stable', 'deprecated']
const TYPES = [
  'registry:component',
  'registry:block',
  'registry:template',
  'registry:ui',
  'registry:lib',
  'registry:hook',
  'registry:page',
]
const KEBAB = /^[a-z0-9]+(?:-[a-z0-9]+)*$/
const REQUIRED_FIELDS = [
  'name',
  'type',
  'title',
  'description',
  'canonical',
  'status',
  'stack',
  'files',
  'props',
  'events',
  'tokens',
  'states',
  'docs',
  'examples',
  'usage',
]

const errors = []
const fail = (msg) => errors.push(msg)

const readJson = (p) => {
  try {
    return JSON.parse(readFileSync(p, 'utf8'))
  } catch (e) {
    fail(`JSON 解析失败 ${p}: ${e.message}`)
    return null
  }
}

const isRelPath = (p) =>
  typeof p === 'string' && !p.startsWith('/') && !p.includes(':\\') && !p.startsWith('..')

// --- 1. 载入映射表 ---
const mapping = readJson(join(REG_DIR, 'component-mapping.json'))
const canonicalIndex = new Map()
if (mapping?.components) {
  for (const c of mapping.components) {
    if (!c.canonical || !c.stacks)
      fail(`映射表条目缺 canonical/stacks: ${JSON.stringify(c).slice(0, 80)}`)
    else canonicalIndex.set(c.canonical, c)
  }
}

// --- 2. 逐栈校验 registry ---
const itemIndex = new Map() // `${stack}/${name}` -> item
for (const stack of STACKS) {
  const reg = readJson(join(REG_DIR, stack, 'registry.json'))
  if (!reg) continue
  if (!Array.isArray(reg.items)) {
    fail(`${stack}/registry.json 缺少 items 数组`)
    continue
  }
  const names = new Set()
  for (const item of reg.items) {
    const where = `${stack}/registry.json#${item.name ?? '<unknown>'}`

    for (const f of REQUIRED_FIELDS) {
      if (item[f] === undefined || item[f] === null) fail(`${where} 缺少必填字段 "${f}"`)
    }
    if (item.name && !KEBAB.test(item.name)) fail(`${where} name 必须为 kebab-case`)
    if (item.name && names.has(item.name)) fail(`${where} name 重复`)
    if (item.name) names.add(item.name)

    if (item.type && !TYPES.includes(item.type)) fail(`${where} type 非法: ${item.type}`)
    if (item.status && !STATUSES.includes(item.status)) fail(`${where} status 非法: ${item.status}`)
    if (item.stack && item.stack !== stack)
      fail(`${where} stack 字段(${item.stack}) 与所在文件(${stack})不一致`)

    if (item.status === 'deprecated' && !item.replacement)
      fail(`${where} deprecated 项必须提供 replacement`)

    if (item.canonical && !canonicalIndex.has(item.canonical)) {
      fail(`${where} canonical "${item.canonical}" 未在 component-mapping.json 登记`)
    }

    // props/events 为数组且结构基本合法
    for (const key of ['props', 'events', 'tokens', 'states', 'files', 'examples']) {
      if (item[key] !== undefined && !Array.isArray(item[key])) fail(`${where} ${key} 必须是数组`)
    }
    if (Array.isArray(item.props)) {
      for (const p of item.props) {
        if (!p.name || !p.type)
          fail(`${where} props 存在缺 name/type 的条目: ${JSON.stringify(p).slice(0, 60)}`)
      }
    }
    if (item.usage && (!item.usage.do || !item.usage.dont))
      fail(`${where} usage 必须同时包含 do 与 dont 数组`)

    // 路径校验
    const pathFields = [
      ...(Array.isArray(item.files)
        ? item.files.map((f) => (typeof f === 'string' ? f : f.path))
        : []),
      ...(Array.isArray(item.examples) ? item.examples : []),
      item.docs,
    ].filter(Boolean)
    for (const p of pathFields) {
      if (!isRelPath(p)) {
        fail(`${where} 路径必须为仓库内相对路径: ${p}`)
        continue
      }
      const abs = join(root, p)
      if (item.status !== 'planned' && !existsSync(abs))
        fail(`${where} 文件不存在(${item.status} 项必须落地): ${p}`)
    }

    itemIndex.set(`${stack}/${item.name}`, item)
  }
}

// --- 3. 映射表反向校验：beta/stable 必须有 registry item ---
if (mapping?.components) {
  for (const c of mapping.components) {
    for (const stack of STACKS) {
      const entry = c.stacks?.[stack]
      if (!entry) {
        fail(`canonical "${c.canonical}" 映射表缺少 ${stack} 栈条目`)
        continue
      }
      const expectItem = `@kit/${stack}-`
      if (typeof entry.item === 'string' && !entry.item.startsWith(expectItem)) {
        fail(
          `canonical "${c.canonical}" 的 ${stack} item 名应以 "${expectItem}" 开头，实际 "${entry.item}"`,
        )
      }
      if (!STATUSES.includes(entry.status))
        fail(`canonical "${c.canonical}" ${stack} status 非法: ${entry.status}`)
      if (entry.status === 'beta' || entry.status === 'stable') {
        const name = entry.item.replace(`@kit/${stack}-`, '')
        if (!itemIndex.has(`${stack}/${name}`)) {
          fail(
            `canonical "${c.canonical}" 在映射表标记 ${stack} 为 ${entry.status}，但 registry 中找不到该 item`,
          )
        }
      }
    }
  }
}

// --- 4. 汇总 ---
console.log(
  `registry 校验完成：映射 canonical ${canonicalIndex.size} 个，登记 item ${itemIndex.size} 个`,
)
if (errors.length) {
  console.error(`\n✗ 发现 ${errors.length} 个问题：`)
  for (const e of errors) console.error(`  ✗ ${e}`)
  process.exit(1)
}
console.log('✓ registry 全部校验通过')
