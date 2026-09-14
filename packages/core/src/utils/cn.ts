import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * 类名合并：clsx 处理条件类名，tailwind-merge 消解冲突的 Tailwind 工具类。
 * 三栈中的 web 栈统一使用本函数合并 className；mini/native 栈在各自适配层处理。
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}
