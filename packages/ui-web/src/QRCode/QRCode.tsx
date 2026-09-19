/**
 * QRCode 二维码（web）—— 基于 qrcode 矩阵渲染为色块网格。
 */
import { useMemo } from 'react'
import QRCodeJS from 'qrcode'
import { cn } from '@kit/core'
import type { QRCodeProps } from './QRCode.types'

export function QRCode({
  value,
  size = 128,
  level = 'M',
  color = '#0f172a',
  bgColor = '#ffffff',
  className,
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

  return (
    <div
      className={cn('inline-block rounded p-2', className)}
      style={{ backgroundColor: bgColor, width: size + 16, height: size + 16 }}
      role="img"
      aria-label="QR Code"
    >
      <svg width={size} height={size} viewBox={`0 0 ${matrix.size} ${matrix.size}`}>
        {Array.from({ length: matrix.size }).map((_, y) =>
          Array.from({ length: matrix.size }).map((_, x) =>
            matrix.cells[y * matrix.size + x] ? (
              <rect key={`${x}-${y}`} x={x} y={y} width={1.02} height={1.02} fill={color} />
            ) : null,
          ),
        )}
      </svg>
    </div>
  )
}
