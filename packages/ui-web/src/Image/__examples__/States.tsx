import { Image } from '../index'

export function States() {
  return (
    <div className="flex flex-wrap gap-4">
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">基础（cover）</span>
        <Image src="https://picsum.photos/200/150" alt="示例" width={200} height={150} radius={8} />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">圆形（contain）</span>
        <Image
          src="https://picsum.photos/120"
          alt="头像"
          width={120}
          height={120}
          fit="contain"
          radius={60}
        />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">加载失败</span>
        <Image
          src="https://invalid-url.example.com/nonexistent.jpg"
          alt="失败"
          width={200}
          height={150}
          radius={8}
          fallback={<span className="text-bodySm text-text-tertiary">图片加载失败</span>}
        />
      </div>
    </div>
  )
}
