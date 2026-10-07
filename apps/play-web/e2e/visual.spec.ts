import { expect, test } from '@playwright/test'
import { canonicalOf, FIRST_BATCH, loadStories, setDark, waitForStoryVisible } from './helpers'

/**
 * G6 亮/暗 + G9 视觉回归：首批每个组件一条独立测试，
 * 选该组件第一个“可见”的 story，分别在亮色、暗色下对 #storybook-root 截图。
 * 独立测试可隔离崩溃、并行执行、失败自动重试。
 * 首次或有意更新基线：pnpm e2e:update
 */
for (const canonical of FIRST_BATCH) {
  test(`视觉回归 ${canonical}（亮/暗）`, async ({ page, request }) => {
    const stories = (await loadStories(request)).filter((s) => canonicalOf(s) === canonical)
    expect(stories.length, `${canonical} 应至少有一个 story`).toBeGreaterThan(0)

    let chosenId: string | null = null
    for (const story of stories) {
      await page.goto(`/iframe.html?id=${story.id}`)
      if (await waitForStoryVisible(page)) {
        chosenId = story.id
        break
      }
    }

    expect(chosenId, `${canonical} 没有可见 story（需补带触发器的 story）`).not.toBeNull()

    const root = page.locator('#storybook-root')
    await setDark(page, false)
    await expect(root).toHaveScreenshot(`${canonical}-light.png`, { animations: 'disabled' })

    await setDark(page, true)
    await expect(root).toHaveScreenshot(`${canonical}-dark.png`, { animations: 'disabled' })
  })
}
