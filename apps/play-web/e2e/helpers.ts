import type { APIRequestContext, Page } from '@playwright/test'

/**
 * 首批毕业 20 组件，与 registry/graduation/first-batch.json 保持一致。
 * 视觉/无障碍验收先覆盖这 20 个，毕业门通过后再逐步扩大覆盖。
 */
export const FIRST_BATCH: string[] = [
  'Button',
  'Input',
  'TextArea',
  'Checkbox',
  'RadioGroup',
  'Switch',
  'Select',
  'Tabs',
  'Dialog',
  'Toast',
  'Card',
  'Tag',
  'Avatar',
  'Progress',
  'Spinner',
  'Skeleton',
  'Empty',
  'Steps',
  'Pagination',
  'DataTable',
]

export interface StoryEntry {
  id: string
  title: string
  name: string
  type: 'story' | 'docs'
  importPath: string
}

/** 读取 Storybook 运行时的 story 清单（仅真实 story，排除 autodocs 条目——docs 渲染在 #storybook-docs） */
export async function loadStories(request: APIRequestContext): Promise<StoryEntry[]> {
  const res = await request.get('/index.json')
  const index = (await res.json()) as { entries: Record<string, StoryEntry> }
  return Object.values(index.entries).filter((e) => e.type !== 'docs')
}

/** 由 importPath（…/src/<Canonical>/X.stories.tsx）推导组件规范名 */
export function canonicalOf(entry: StoryEntry): string | null {
  const m = entry.importPath.match(/[\\/]src[\\/]([^\\/]+)[\\/]/)
  return m ? m[1] : null
}

/** 等待 story 真正挂载并可见（#storybook-root 有尺寸）；超时说明该 story 确实为空（如未触发的 Dialog） */
export async function waitForStoryVisible(page: Page, timeout = 5000): Promise<boolean> {
  try {
    await page.locator('#storybook-root').waitFor({ state: 'visible', timeout })
    return true
  } catch {
    return false
  }
}

/** 暗色瞬时切换：加 .dark 的同时禁用过渡，避免截图卡在过渡中间态 */
export async function setDark(page: Page, dark: boolean): Promise<void> {
  await page.evaluate((isDark) => {
    const html = document.documentElement
    html.classList.toggle('dark', isDark)
    if (isDark) html.setAttribute('data-theme-switching', 'true')
    else html.removeAttribute('data-theme-switching')
  }, dark)
}
