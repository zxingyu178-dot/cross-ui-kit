import AxeBuilder from '@axe-core/playwright'
import { expect, test } from '@playwright/test'
import { canonicalOf, FIRST_BATCH, loadStories, waitForStoryVisible } from './helpers'

/**
 * G8 无障碍：首批每个组件一条独立测试，遍历该组件全部 story，
 * 不允许出现 serious / critical 级违规；失败时列出具体 story 与规则。
 */
for (const canonical of FIRST_BATCH) {
  test(`无障碍 ${canonical} 无 serious/critical 违规`, async ({ page, request }) => {
    test.setTimeout(90000)
    const stories = (await loadStories(request)).filter((s) => canonicalOf(s) === canonical)
    expect(stories.length, `${canonical} 应至少有一个 story`).toBeGreaterThan(0)

    const report: { story: string; violations: string[] }[] = []

    for (const story of stories) {
      await page.goto(`/iframe.html?id=${story.id}`)
      await waitForStoryVisible(page)

      const results = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
        .analyze()

      const blocking = results.violations
        .filter((v) => v.impact === 'serious' || v.impact === 'critical')
        .map((v) => `${v.id} [${v.impact ?? '?'}]`)

      if (blocking.length > 0) report.push({ story: story.id, violations: blocking })
    }

    expect(report, JSON.stringify(report, null, 2)).toEqual([])
  })
}
