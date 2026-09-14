# @kit/icons · 图标源与三栈产物

## 规则

- 图标**源文件统一为 SVG**（24×24 viewBox，currentColor 单色，禁止在 SVG 内写死颜色），放 `src/svg/`；
- 图标名 kebab-case，语义命名（`arrow-left.svg` 而非 `icon123.svg`）；
- 构建产物（P1 接入脚本）：
  - web/native：SVG → React/RN 组件（`IconArrowLeft`），颜色继承 `currentColor`，尺寸取 `iconSize` token；
  - mini：SVG → 图标字体或 base64/雪碧图（按 Taro 工程约定），同样语义命名；
- 图标多色/品牌色图标单独放 `src/brand/`，不进入单色体系；
- 使用时只允许通过 `@kit/icons` 引用，禁止各包内散落图标文件。
