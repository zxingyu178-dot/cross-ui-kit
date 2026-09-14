/** 示例：变体与状态（web）。每个示例都会被 hub 收录为可预览卡片。 */
import { __ComponentName__ } from '../index'

export function Variants() {
  return (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
      <__ComponentName__ variant="primary">主要</__ComponentName__>
      <__ComponentName__ variant="secondary">次要</__ComponentName__>
      <__ComponentName__ variant="ghost">幽灵</__ComponentName__>
      <__ComponentName__ variant="danger">危险</__ComponentName__>
      <__ComponentName__ loading>加载中</__ComponentName__>
      <__ComponentName__ disabled>禁用</__ComponentName__>
    </div>
  )
}
