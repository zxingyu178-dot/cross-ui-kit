/**
 * __ComponentName__ 类型定义（web 栈模板）
 * 规则：props 必须显式导出、JSDoc 注释齐全；枚举值遵循 docs/03 §4 固定集合。
 */

export interface __ComponentName__Props {
  /** 子内容 */
  children?: React.ReactNode
  /** 视觉层级（固定枚举，三栈一致） */
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger' | 'link'
  /** 尺寸（固定枚举，三栈一致） */
  size?: 'sm' | 'md' | 'lg'
  /** 禁用态（布尔 props 用肯定语气，不加 is 前缀） */
  disabled?: boolean
  /** 加载中：自动禁用并展示 Spinner，防重复提交 */
  loading?: boolean
  /** 样式透传（经 cn 合并，禁止内联硬编码视觉值） */
  className?: string
}
