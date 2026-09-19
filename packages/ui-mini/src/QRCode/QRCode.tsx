/**
 * QRCode 二维码（mini：小程序 / 移动 H5）—— 矩阵渲染为色块网格。
 */
import { useMemo } from 'react'
import QRCodeJS from 'qrcode'
import { View } from '@tarojs/components'
import type { QRCodeProps } from './QRCode.types'
import './QRCode.scss'

export function QRCode({
  value,
  size = 240,
  level = 'M',
  color = '#0f172a',
  bgColor = '#ffffff',
  className = '',
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

  const cell = Math.floor((size - 32) / matrix.size)

  return (
    <View
      className={`kit-qrcode ${className}`.trim()}
      style={{ backgroundColor: bgColor, width: size, height: size, padding: 16 }}
    >
      <View
        style={{
          width: cell * matrix.size,
          height: cell * matrix.size,
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: 'row',
        }}
      >
        {matrix.cells.map((dark, i) =>
          dark ? (
            <View key={i} style={{ width: cell, height: cell, backgroundColor: color }} />
          ) : (
            <View key={i} style={{ width: cell, height: cell }} />
          ),
        )}
      </View>
    </View>
  )
}
