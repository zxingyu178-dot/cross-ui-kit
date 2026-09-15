/**
 * @kit/ui-web —— 大端组件栈（React DOM + shadcn/ui + Radix + Tailwind v4）
 *
 * 规则：见 AGENTS.md 十条铁律、docs/05-component-standard.md、docs/10-stacks.md
 * 新增组件：在 src/<PascalName>/ 一组件一目录（实现+types+stories+README+__examples__），
 *           在此统一导出，并登记 registry/web/registry.json。
 */
export * from './Button'
export * from './Input'
export * from './Checkbox'
export * from './Select'
export * from './Dialog'
export * from './Toast'
export * from './Switch'
export * from './RadioGroup'
export * from './Badge'
export * from './Tabs'
export * from './Progress'
export * from './Skeleton'
export * from './Spinner'
export * from './Empty'
