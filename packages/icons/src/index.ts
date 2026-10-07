/**
 * @kit/icons —— 图标源与三栈产物。
 *
 * 全端图标唯一出口：
 *   - web：本文件，基于 lucide-react 的 <Icon name="..." />（精选集见 manifest）
 *   - native（规划）：lucide-react-native / @expo/vector-icons，同名 <Icon>
 *   - mini（规划）：图标字体或 base64，同名语义
 * 规则：只允许从此处引用图标；禁止各包散落图标文件或直接 import 图标库；
 *      品牌多色图标放独立 brand 出口。三栈命名以 registry/component-mapping.json 为准。
 */
export { Icon } from './Icon'
export type { IconProps, KitIconName } from './Icon'
export { KIT_ICONS, ICON_CATEGORY_ORDER } from './manifest'
export type { IconMeta, IconCategory } from './manifest'

export const KIT_ICONS_VERSION = '0.1.0'
