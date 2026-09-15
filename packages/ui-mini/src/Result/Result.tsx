/**
 * Result 结果态（mini：小程序 / 移动 H5）—— 四态之 error（亦覆盖成功/信息/警告/404）。
 * Taro View/Text 纯组合布局；默认状态图标用几何条/点拼出 check/x/!/i（notFound 为 404 文字），
 * 语义色在 Result.scss 按 status 修饰类全量 token 化；操作经 action/extra slot 传入。
 */
import type { CSSProperties, ReactNode } from 'react'
import { View, Text } from '@tarojs/components'
import { cn } from '@kit/core'
import type { ResultProps, ResultStatus } from './Result.types'
import './Result.scss'

// 几何条/点的定位为组件内置图形常量（40×40 符号区，单位 px）
const MARK = 'kit-result__mark'

function Glyph({ status }: { status: ResultStatus }) {
  const abs = (style: CSSProperties): CSSProperties => ({ position: 'absolute', ...style })
  if (status === 'success') {
    return (
      <View className="kit-result__glyph">
        <View
          className={MARK}
          style={abs({ width: 10, height: 4, left: 8, top: 23, transform: 'rotate(45deg)' })}
        />
        <View
          className={MARK}
          style={abs({ width: 22, height: 4, left: 10, top: 21, transform: 'rotate(-45deg)' })}
        />
      </View>
    )
  }
  if (status === 'error') {
    return (
      <View className="kit-result__glyph">
        <View
          className={MARK}
          style={abs({ width: 22, height: 4, left: 9, top: 18, transform: 'rotate(45deg)' })}
        />
        <View
          className={MARK}
          style={abs({ width: 22, height: 4, left: 9, top: 18, transform: 'rotate(-45deg)' })}
        />
      </View>
    )
  }
  if (status === 'warning') {
    return (
      <View className="kit-result__glyph">
        <View className={MARK} style={abs({ width: 4, height: 16, left: 18, top: 6 })} />
        <View className={MARK} style={abs({ width: 5, height: 5, left: 17.5, bottom: 7 })} />
      </View>
    )
  }
  // info：上圆点 + 下竖条
  return (
    <View className="kit-result__glyph">
      <View className={MARK} style={abs({ width: 5, height: 5, left: 17.5, top: 8 })} />
      <View className={MARK} style={abs({ width: 4, height: 14, left: 18, top: 15 })} />
    </View>
  )
}

/** 默认状态图标：语义色圆底 + 几何符号（notFound 为 404 文字） */
function ResultIcon({ status }: { status: ResultStatus }) {
  return (
    <View className={cn('kit-result__icon', `kit-result__icon--${status}`)}>
      {status === 'notFound' ? (
        <Text className="kit-result__num">404</Text>
      ) : (
        <Glyph status={status} />
      )}
    </View>
  )
}

export function Result({
  status = 'info',
  title,
  description,
  icon,
  action,
  extra,
  accessibilityLabel,
  className,
}: ResultProps) {
  return (
    <View
      className={cn('kit-result', className)}
      {...(accessibilityLabel !== undefined ? { 'aria-label': accessibilityLabel } : {})}
    >
      <View className="kit-result__figure">{icon ?? <ResultIcon status={status} />}</View>
      {title !== undefined && <Text className="kit-result__title">{title}</Text>}
      {description !== undefined && <Text className="kit-result__desc">{description}</Text>}
      {action !== undefined && <View className="kit-result__action">{action as ReactNode}</View>}
      {extra !== undefined && <View className="kit-result__extra">{extra as ReactNode}</View>}
    </View>
  )
}
