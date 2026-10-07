// token 产物（亮/暗 CSS 变量）+ Tailwind 装配（与 play-web main.tsx 一致）
import '@kit/tokens/web-light.css'
import '@kit/tokens/web-dark.css'
import '../src/index.css'
import type { Preview } from '@storybook/react'

const preview: Preview = {
  parameters: {
    // 使用 token 背景，禁用 Storybook 自带的背景切换
    backgrounds: { disable: true },
    controls: {
      matchers: { color: /(background|color)$/i, date: /Date$/i },
    },
  },
}

export default preview
