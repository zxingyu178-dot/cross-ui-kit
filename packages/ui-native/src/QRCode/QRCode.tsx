/**
 * QRCode 二维码（native：iOS / Android）—— 矩阵渲染为色块网格。
 */
import { useMemo } from 'react'
import QRCodeJS from 'qrcode'
import { View, YStack } from 'tamagui'
import type { QRCodeProps } from './QRCode.types'

export function QRCode({
  value,
  size = 128,
  level = 'M',
  color = '#0f172a',
  bgColor = '#ffffff',
  style,
}: QRCodeProps) {
  const matrix = useMemo(() => {
    try {
      const qr = QRCodeJS.create(value, { errorCorrectionLevel: level })
      const msize = qr.modules.size
      const data = qr.modules.data
      const cells: boolean[] = []
      for (let i = 0; i < msize * msize; i++) cells.push(data[i] === 1)
      return { size: msize, cells }
    } catch {
      return { size: 0, cells: [] }
    }
  }, [value, level])

  if (matrix.size === 0) return null

  const cell = Math.max(1, Math.floor((size - 16) / matrix.size))

  return (
    <YStack
      width={size}
      height={size}
      padding={8}
      borderRadius="$md"
      backgroundColor={bgColor}
      alignItems="center"
      justifyContent="center"
      style={style}
    >
      <View
        width={cell * matrix.size}
        height={cell * matrix.size}
        flexDirection="row"
        flexWrap="wrap"
      >
        {matrix.cells.map((dark, i) => (
          <View key={i} width={cell} height={cell} backgroundColor={dark ? color : 'transparent'} />
        ))}
      </View>
    </YStack>
  )
}
