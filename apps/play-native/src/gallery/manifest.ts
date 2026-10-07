/**
 * Native Gallery 清单：canonical 名 → 独立演示。
 * 注意：native 尚未通过独立 Graduation Gate，本批 20 个在 native 端状态均为 beta。
 */
import type { ComponentType } from 'react'

import ButtonDemo from './demos/ButtonDemo'
import InputDemo from './demos/InputDemo'
import TextAreaDemo from './demos/TextAreaDemo'
import CheckboxDemo from './demos/CheckboxDemo'
import RadioGroupDemo from './demos/RadioGroupDemo'
import SwitchDemo from './demos/SwitchDemo'
import SelectDemo from './demos/SelectDemo'
import TabsDemo from './demos/TabsDemo'
import DialogDemo from './demos/DialogDemo'
import ToastDemo from './demos/ToastDemo'
import CardDemo from './demos/CardDemo'
import TagDemo from './demos/TagDemo'
import AvatarDemo from './demos/AvatarDemo'
import ProgressDemo from './demos/ProgressDemo'
import SpinnerDemo from './demos/SpinnerDemo'
import SkeletonDemo from './demos/SkeletonDemo'
import EmptyDemo from './demos/EmptyDemo'
import StepsDemo from './demos/StepsDemo'
import PaginationDemo from './demos/PaginationDemo'
import DataTableDemo from './demos/DataTableDemo'

export interface GalleryItem {
  name: string
  title: string
  status: 'stable' | 'beta'
  Demo: ComponentType
}

export const GALLERY: GalleryItem[] = [
  { name: 'Button', title: '按钮', status: 'beta', Demo: ButtonDemo },
  { name: 'Input', title: '输入框', status: 'beta', Demo: InputDemo },
  { name: 'TextArea', title: '多行输入', status: 'beta', Demo: TextAreaDemo },
  { name: 'Checkbox', title: '复选框', status: 'beta', Demo: CheckboxDemo },
  { name: 'RadioGroup', title: '单选组', status: 'beta', Demo: RadioGroupDemo },
  { name: 'Switch', title: '开关', status: 'beta', Demo: SwitchDemo },
  { name: 'Select', title: '选择器', status: 'beta', Demo: SelectDemo },
  { name: 'Tabs', title: '标签页', status: 'beta', Demo: TabsDemo },
  { name: 'Dialog', title: '对话框', status: 'beta', Demo: DialogDemo },
  { name: 'Toast', title: '轻提示', status: 'beta', Demo: ToastDemo },
  { name: 'Card', title: '卡片', status: 'beta', Demo: CardDemo },
  { name: 'Tag', title: '标签', status: 'beta', Demo: TagDemo },
  { name: 'Avatar', title: '头像', status: 'beta', Demo: AvatarDemo },
  { name: 'Progress', title: '进度条', status: 'beta', Demo: ProgressDemo },
  { name: 'Spinner', title: '加载圈', status: 'beta', Demo: SpinnerDemo },
  { name: 'Skeleton', title: '骨架屏', status: 'beta', Demo: SkeletonDemo },
  { name: 'Empty', title: '空态', status: 'beta', Demo: EmptyDemo },
  { name: 'Steps', title: '步骤条', status: 'beta', Demo: StepsDemo },
  { name: 'Pagination', title: '分页', status: 'beta', Demo: PaginationDemo },
  { name: 'DataTable', title: '数据表格', status: 'beta', Demo: DataTableDemo },
]

export const byName: Record<string, GalleryItem> = Object.fromEntries(
  GALLERY.map((i) => [i.name, i]),
)
