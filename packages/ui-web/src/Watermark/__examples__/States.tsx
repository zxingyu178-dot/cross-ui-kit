import { Watermark } from '../index'

export function States() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">基础水印</span>
        <Watermark text="机密文件">
          <div className="h-32 rounded-md border border-border-default bg-bg-card p-4">
            <p className="text-bodyMd text-text-primary">
              这是一段需要加水印的内容。水印会覆盖在内容上方，不影响交互。
            </p>
          </div>
        </Watermark>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">自定义颜色和角度</span>
        <Watermark text="内部资料" color="rgba(37, 99, 235, 0.2)" rotate={-15} fontSize={16}>
          <div className="h-32 rounded-md border border-border-default bg-bg-card p-4">
            <p className="text-bodyMd text-text-primary">蓝色水印，旋转 -15 度，字号 16px。</p>
          </div>
        </Watermark>
      </div>
    </div>
  )
}
