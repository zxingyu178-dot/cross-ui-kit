import { expect, request, test, type Page } from '@playwright/test'
import { canonicalOf, loadStories, waitForStoryVisible, type StoryEntry } from './helpers'

/**
 * 关键交互测试（毕业门 G5）：对承载用户操作的组件，断言真实交互后状态正确变化。
 * 展示型组件（Card/Avatar/Progress/Spinner/Skeleton/Empty/Steps）无关键交互，
 * 其 G5 证据以视觉/无障碍验收为准；Button 的点击回调由 ui-web vitest 覆盖。
 */
async function openStory(page: Page, canonical: string, name?: string): Promise<StoryEntry> {
  const ctx = await request.newContext()
  const stories = await loadStories(ctx)
  const list = stories.filter((s) => canonicalOf(s) === canonical)
  const entry = (name ? list.find((s) => s.name === name) : list[0]) as StoryEntry
  if (!entry) throw new Error(`未找到 story：${canonical}/${name ?? 'first'}`)
  await page.goto(`/iframe.html?id=${entry.id}`)
  await waitForStoryVisible(page)
  return entry
}

test('Input 输入更新值', async ({ page }) => {
  await openStory(page, 'Input')
  const tb = page.getByRole('textbox')
  await tb.fill('你好')
  await expect(tb).toHaveValue('你好')
})

test('TextArea 输入更新值', async ({ page }) => {
  await openStory(page, 'TextArea')
  const tb = page.getByRole('textbox')
  await tb.fill('多行内容')
  await expect(tb).toHaveValue('多行内容')
})

test('Checkbox 点击勾选', async ({ page }) => {
  await openStory(page, 'Checkbox')
  const cb = page.getByRole('checkbox').first()
  await cb.click()
  await expect(cb).toHaveAttribute('aria-checked', 'true')
})

test('RadioGroup 选择第二项', async ({ page }) => {
  await openStory(page, 'RadioGroup')
  const radios = page.getByRole('radio')
  await radios.nth(1).check()
  await expect(radios.nth(1)).toBeChecked()
})

test('Switch 点击翻转状态', async ({ page }) => {
  await openStory(page, 'Switch')
  const sw = page.getByRole('switch')
  const before = await sw.getAttribute('aria-checked')
  await sw.click()
  await expect(sw).toHaveAttribute('aria-checked', before === 'true' ? 'false' : 'true')
})

test('Select 打开并选择选项', async ({ page }) => {
  await openStory(page, 'Select')
  const combo = page.getByRole('combobox')
  await combo.click()
  await page.getByRole('option', { name: '选项二' }).click()
  await expect(combo).toHaveText(/选项二/)
})

test('Tabs 切换标签', async ({ page }) => {
  await openStory(page, 'Tabs')
  const tabs = page.getByRole('tab')
  await tabs.nth(1).click()
  await expect(tabs.nth(1)).toHaveAttribute('aria-selected', 'true')
  await expect(tabs.nth(0)).toHaveAttribute('aria-selected', 'false')
})

test('Dialog 打开后取消关闭', async ({ page }) => {
  await openStory(page, 'Dialog', 'Basic')
  await page.getByRole('button', { name: '打开弹窗' }).click()
  const dialog = page.getByRole('dialog')
  await expect(dialog).toBeVisible()
  await page.getByRole('button', { name: '取消' }).click()
  await expect(dialog).toBeHidden()
})

test('Toast 触发后显示消息', async ({ page }) => {
  await openStory(page, 'Toast', 'Basic')
  await page.getByRole('button', { name: '成功' }).click()
  // exact 排除 Radix 常驻隐藏 region 中的同名文本
  await expect(page.getByText('提示内容示例', { exact: true })).toBeVisible()
})

test('Tag 点击翻转选中态', async ({ page }) => {
  await openStory(page, 'Tag', 'Selectable')
  // 首个标签“可选中”初始选中，点击在 选中/未选中 间翻转
  const tag = page.locator('[role="button"]').first()
  await expect(tag).toHaveAttribute('aria-pressed', 'true')
  await tag.click()
  await expect(tag).toHaveAttribute('aria-pressed', 'false')
  await tag.click()
  await expect(tag).toHaveAttribute('aria-pressed', 'true')
})

test('Pagination 点击下一页翻页', async ({ page }) => {
  await openStory(page, 'Pagination', 'Default')
  await page.getByRole('button', { name: '下一页' }).click()
  await expect(page.getByRole('button', { name: '第 6 页' })).toHaveAttribute(
    'aria-current',
    'page',
  )
})
