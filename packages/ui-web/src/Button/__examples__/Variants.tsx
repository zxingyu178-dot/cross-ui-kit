/** Button 示例：五种视觉层级（web）。hub/play-web 直接引用本文件渲染预览卡片。 */
import { Button } from '../index'

export function Variants() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button variant="primary">主要</Button>
      <Button variant="secondary">次要</Button>
      <Button variant="ghost">幽灵</Button>
      <Button variant="danger">危险</Button>
      <Button variant="link">链接</Button>
    </div>
  )
}
