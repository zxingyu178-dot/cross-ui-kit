import { QRCode } from '../index'

export function States() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">基础二维码</span>
        <QRCode value="https://example.com" size={128} />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">自定义颜色 + 高容错</span>
        <QRCode value="cross-ui-kit" size={160} color="#2563eb" level="H" />
      </div>
    </div>
  )
}
