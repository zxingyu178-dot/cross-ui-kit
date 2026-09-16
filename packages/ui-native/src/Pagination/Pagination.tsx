/**
 * Pagination 分页（native：iOS / Android）—— 受控分页，页码列表由 @kit/core 的 getPageList 生成。
 * 上一页/下一页边界自动禁用；当前页高亮；showTotal / size / disabled；可点项 accessibilityRole=button。
 */
import { Stack, Text, XStack } from 'tamagui'
import { getPageCount, getPageList } from '@kit/core'
import type { PaginationProps, PaginationSize } from './Pagination.types'

const BTN_SIZE: Record<
  PaginationSize,
  { height: number; minWidth: number; paddingHorizontal: number; fontSize: string }
> = {
  md: { height: 32, minWidth: 32, paddingHorizontal: 8, fontSize: '$bodySm' },
  sm: { height: 28, minWidth: 28, paddingHorizontal: 6, fontSize: '$caption' },
}

const ELLIPSIS_SIZE: Record<PaginationSize, { height: number; minWidth: number }> = {
  md: { height: 32, minWidth: 28 },
  sm: { height: 28, minWidth: 24 },
}

export function Pagination({
  current = 1,
  pageSize = 10,
  total,
  onChange,
  showTotal = true,
  size = 'md',
  disabled = false,
}: PaginationProps) {
  const totalPages = getPageCount(total, pageSize)
  const pages = getPageList(current, totalPages)
  const btn = BTN_SIZE[size]
  const ell = ELLIPSIS_SIZE[size]

  const go = (page: number) => {
    if (disabled) return
    if (page < 1 || page > totalPages || page === current) return
    onChange(page)
  }

  const prevDisabled = disabled || current <= 1
  const nextDisabled = disabled || current >= totalPages

  const renderBtn = (
    content: string,
    page: number,
    active: boolean,
    btnDisabled: boolean,
    label: string,
  ) => (
    <Stack
      height={btn.height}
      minWidth={btn.minWidth}
      paddingHorizontal={btn.paddingHorizontal}
      borderRadius="$md"
      alignItems="center"
      justifyContent="center"
      backgroundColor={active ? '$primaryDefault' : '$bgCard'}
      borderWidth={active ? 0 : 1}
      borderColor={active ? 'transparent' : '$borderDefault'}
      opacity={btnDisabled ? 0.5 : 1}
      {...(btnDisabled
        ? {}
        : {
            onPress: () => go(page),
            accessibilityRole: 'button' as const,
            accessibilityLabel: label,
          })}
      {...(active ? { accessibilityState: { selected: true } } : {})}
    >
      <Text
        fontSize={btn.fontSize}
        color={active ? '$primaryText' : '$textPrimary'}
        fontWeight={active ? 'medium' : 'normal'}
      >
        {content}
      </Text>
    </Stack>
  )

  return (
    <XStack alignItems="center" gap="$2">
      {showTotal && (
        <Text fontSize="$caption" color="$textTertiary" marginRight="$1">
          共 {total} 条
        </Text>
      )}
      {renderBtn('‹', current - 1, false, prevDisabled, '上一页')}
      {pages.map((p, i) => {
        if (p === 'ellipsis') {
          return (
            <Stack
              key={`e-${i}`}
              height={ell.height}
              minWidth={ell.minWidth}
              alignItems="center"
              justifyContent="center"
            >
              <Text color="$textTertiary">…</Text>
            </Stack>
          )
        }
        return renderBtn(String(p), p, p === current, disabled, `第 ${p} 页`)
      })}
      {renderBtn('›', current + 1, false, nextDisabled, '下一页')}
    </XStack>
  )
}
