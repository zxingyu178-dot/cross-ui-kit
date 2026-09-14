import { clsx, type ClassValue } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'

/**
 * 定制版 tailwind-merge：
 * Tailwind v4 下字号（text-body-md，来自 @theme --text-*）与文字颜色（text-primary-text /
 * text-text-primary，来自 @theme --color-*）共享 text- 前缀。tailwind-merge 不认识这些自定义
 * token 类时会把它们误判为同一冲突组而互相删除（字号类挤掉颜色类，导致按钮文字色丢失）。
 * 这里显式把自定义 token 类登记到正确的类组，字号与颜色互不合并。
 * 新增 token 主题类时，同步在此登记。
 */
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      // 自定义字号类（@theme --text-*）：text-caption / text-body-sm / text-title-md ...
      'font-size': [
        {
          text: ['caption', 'body-sm', 'body-md', 'body-lg', 'title-sm', 'title-md', 'title-lg'],
        },
      ],
      // 自定义文字颜色类（@theme --color-*）：text-text-primary / text-primary-text / text-text-link ...
      'text-color': [
        {
          text: [
            'text-primary',
            'text-secondary',
            'text-tertiary',
            'text-disabled',
            'text-inverse',
            'text-link',
            'text-danger',
            'text-success',
            'text-warning',
            'primary-text',
          ],
        },
      ],
    },
  },
})

/** 合并类名：clsx 处理条件类，tailwind-merge 去重冲突的 Tailwind 类 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}
