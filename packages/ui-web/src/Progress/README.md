# Progress 进度条（web）

基于 **Radix `@radix-ui/react-progress`** 封装的线性进度条，用于展示任务完成比例、加载/上传进度等。自带 `role=progressbar` 与 `aria-valuenow/min/max/text`。

## Props

| Prop | 类型 | 默认 | 说明 |
|---|---|---|---|
| value | number | - | 当前进度（受控，0 到 max），必填 |
| max | number | `100` | 最大值（非正数回退 100） |
| size | `'sm'|'md'` | `'md'` | 轨道高度：sm 4px / md 8px |
| tone | `'primary'|'success'|'warning'|'danger'` | `'primary'` | 填充语义色 |
| showLabel | boolean | `false` | 末尾显示百分比文本 |
| className / id | string | - | 透传 |

## 行为约定

- 百分比 `clamp(value/max, 0, 100)`，`showLabel` 与无障碍 `getValueLabel` 都用四舍五入后的整数百分比；
- 填充宽度用内联 `width:%`（结构值），颜色/高度/圆角/动效时长全部走 token 语义类；
- 宽度变化带 `transition-[width] duration-base ease-standard` 过渡。

## 视觉与 token

- 轨道：`bg-bg-active` + `rounded-full`；填充：`bg-{tone}-default` + `rounded-full`；
- 高度 sm `h-1`(4) / md `h-2`(8)；标签 `text-caption text-text-secondary`；
- 暗色由语义类自动适配。

## 示例 / 文档

- 示例：`__examples__/States.tsx`（基础、语义色、尺寸、百分比、自定义 max）
- Storybook：`Progress.stories.tsx`

## Do / Don't

- Do：只展示确定比例；随业务进度实时更新 `value`。
- Don't：不硬编码轨道/填充颜色与高度；不确定时长的加载用骨架屏/Spinner 而非进度条。
