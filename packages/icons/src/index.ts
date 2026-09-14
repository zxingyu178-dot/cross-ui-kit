/**
 * @kit/icons —— 图标源与三栈产物（P0 占位，P1 接入 SVG 构建脚本）
 *
 * 规划：src/svg/*.svg（24x24、currentColor 单色）
 *   - web/native：生成 React/RN 图标组件（IconXxx，颜色继承 currentColor，尺寸取 iconSize token）
 *   - mini：生成图标字体或雪碧图/base64
 * 规则：只允许从此处引用图标；禁止各包散落图标文件；品牌多色图标放 src/brand。
 */
export const KIT_ICONS_VERSION = '0.0.1'
