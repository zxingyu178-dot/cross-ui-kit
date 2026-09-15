/**
 * Tabs 选项卡（mini：小程序 / 移动 H5）—— NutUI Tabs + TabPane 封装，line（下划线）形态。
 * 激活色通过 activeColor 传主色 CSS 变量；未选文字/底线/字号/面板色在 Tabs.scss 全量 token 化。
 * 标签头标题 NutUI 仅接受文本（SimpleValue），故 label 统一 String() 转换。
 */
import { TabPane, Tabs as NutTabs } from '@nutui/nutui-react-taro'
import type { TabsProps } from './Tabs.types'
import './Tabs.scss'

export function Tabs({
  items,
  value,
  defaultValue,
  onValueChange,
  size = 'md',
  className = '',
}: TabsProps) {
  return (
    <NutTabs
      className={['kit-tabs', `kit-tabs--${size}`, className].filter(Boolean).join(' ')}
      {...(value !== undefined ? { value } : {})}
      {...(defaultValue !== undefined ? { defaultValue } : {})}
      activeType="line"
      activeColor="var(--kit-color-primary-default)"
      duration={250}
      onChange={(v) => onValueChange?.(String(v))}
    >
      {items.map((it) => (
        <TabPane
          key={it.value}
          value={it.value}
          title={String(it.label)}
          disabled={it.disabled === true}
        >
          {it.content}
        </TabPane>
      ))}
    </NutTabs>
  )
}
