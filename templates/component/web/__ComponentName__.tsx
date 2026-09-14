/**
 * __ComponentName__（web 栈模板）
 * 复制到 packages/ui-web/src/__ComponentName__/__ComponentName__.tsx，全局替换：
 *   __ComponentName__ → PascalCase 组件名（与映射表 canonical 一致）
 *   __component-name__ → kebab-case registry 名
 * 底座接入 shadcn/Radix 时替换内部实现；视觉值一律 token，禁止硬编码。
 */
import { forwardRef } from 'react'
import { cn } from '@kit/core'
import type { __ComponentName__Props } from './__ComponentName__.types'

export const __ComponentName__ = forwardRef<HTMLDivElement, __ComponentName__Props>(
  ({ className, children, ...rest }, ref) => {
    return (
      <div ref={ref} className={cn('kit-__component-name__', className)} {...rest}>
        {children}
      </div>
    )
  },
)

__ComponentName__.displayName = '__ComponentName__'
