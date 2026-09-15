/**
 * Result 结果态（native：iOS / Android）—— 四态之 error（亦覆盖成功/信息/警告/404）。
 * Tamagui Stack/Text 纯组合布局；默认状态图标用几何条/点拼出 check/x/!/i（notFound 为 404 文字），
 * 颜色/间距/圆角只引用 token；操作经 action/extra slot 传入。
 */
import type { ReactNode } from 'react'
import { Stack, Text, XStack, YStack } from 'tamagui'
import type { ResultProps, ResultStatus } from './Result.types'

// status → 圆底色 / 符号色（token 字符串）
const STATUS_THEME: Record<ResultStatus, { bg: string; fg: string }> = {
  success: { bg: '$successBg', fg: '$successDefault' },
  info: { bg: '$infoBg', fg: '$infoDefault' },
  warning: { bg: '$warningBg', fg: '$warningDefault' },
  error: { bg: '$dangerBg', fg: '$dangerDefault' },
  notFound: { bg: '$bgActive', fg: '$textTertiary' },
}

/** 单根几何条（40×40 符号区内绝对定位，尺寸/坐标为组件内置图形常量） */
function Mark({
  width,
  height,
  top,
  left,
  bottom,
  rotate,
  color,
}: {
  width: number
  height: number
  top?: number
  left?: number
  bottom?: number
  rotate?: string
  color: string
}) {
  return (
    <Stack
      position="absolute"
      width={width}
      height={height}
      borderRadius={9999}
      backgroundColor={color}
      {...(top !== undefined ? { top } : {})}
      {...(left !== undefined ? { left } : {})}
      {...(bottom !== undefined ? { bottom } : {})}
      {...(rotate !== undefined ? { transform: [{ rotate }] } : {})}
    />
  )
}

function Glyph({ status, color }: { status: ResultStatus; color: string }) {
  return (
    <Stack width={40} height={40} position="relative">
      {status === 'success' && (
        <>
          <Mark width={10} height={4} left={8} top={23} rotate="45deg" color={color} />
          <Mark width={22} height={4} left={10} top={21} rotate="-45deg" color={color} />
        </>
      )}
      {status === 'error' && (
        <>
          <Mark width={22} height={4} left={9} top={18} rotate="45deg" color={color} />
          <Mark width={22} height={4} left={9} top={18} rotate="-45deg" color={color} />
        </>
      )}
      {status === 'warning' && (
        <>
          <Mark width={4} height={16} left={18} top={6} color={color} />
          <Mark width={5} height={5} left={17.5} bottom={7} color={color} />
        </>
      )}
      {status === 'info' && (
        <>
          <Mark width={5} height={5} left={17.5} top={8} color={color} />
          <Mark width={4} height={14} left={18} top={15} color={color} />
        </>
      )}
    </Stack>
  )
}

/** 默认状态图标：语义色圆底 + 几何符号（notFound 为 404 文字） */
function ResultIcon({ status }: { status: ResultStatus }) {
  const t = STATUS_THEME[status]
  return (
    <Stack
      width={96}
      height={96}
      borderRadius={9999}
      backgroundColor={t.bg}
      alignItems="center"
      justifyContent="center"
    >
      {status === 'notFound' ? (
        <Text fontSize="$titleSm" fontWeight="bold" color={t.fg}>
          404
        </Text>
      ) : (
        <Glyph status={status} color={t.fg} />
      )}
    </Stack>
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
}: ResultProps) {
  return (
    <YStack
      width="100%"
      alignItems="center"
      justifyContent="center"
      paddingVertical="$10"
      paddingHorizontal="$6"
      {...(accessibilityLabel !== undefined ? { accessibilityLabel } : {})}
    >
      <Stack marginBottom="$4" alignItems="center" justifyContent="center">
        {icon ?? <ResultIcon status={status} />}
      </Stack>
      {title !== undefined && (
        <Text fontSize="$titleSm" fontWeight="medium" color="$textPrimary" textAlign="center">
          {title}
        </Text>
      )}
      {description !== undefined && (
        <Text
          marginTop="$2"
          maxWidth={300}
          fontSize="$bodySm"
          lineHeight={20}
          color="$textSecondary"
          textAlign="center"
        >
          {description}
        </Text>
      )}
      {action !== undefined && (
        <XStack marginTop="$6" gap="$3" flexWrap="wrap" justifyContent="center" alignItems="center">
          {action as ReactNode}
        </XStack>
      )}
      {extra !== undefined && (
        <Stack marginTop="$3" alignItems="center" justifyContent="center">
          {extra as ReactNode}
        </Stack>
      )}
    </YStack>
  )
}
