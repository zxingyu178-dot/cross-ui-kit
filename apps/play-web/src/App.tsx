import { useLayoutEffect, useState } from 'react'
import { Button } from '@kit/ui-web'
// 直接引用库内示例（与 hub/Storybook 同源，保证演示即真实资产）
import { Variants } from '@kit/ui-web/src/Button/__examples__/Variants'
import { States } from '@kit/ui-web/src/Button/__examples__/States'
import { States as InputStates } from '@kit/ui-web/src/Input/__examples__/States'
import { States as CheckboxStates } from '@kit/ui-web/src/Checkbox/__examples__/States'
import { States as SelectStates } from '@kit/ui-web/src/Select/__examples__/States'
import { States as DialogStates } from '@kit/ui-web/src/Dialog/__examples__/States'
import { States as ToastStates } from '@kit/ui-web/src/Toast/__examples__/States'
import { States as SwitchStates } from '@kit/ui-web/src/Switch/__examples__/States'
import { States as RadioGroupStates } from '@kit/ui-web/src/RadioGroup/__examples__/States'
import { States as BadgeStates } from '@kit/ui-web/src/Badge/__examples__/States'
import { States as TabsStates } from '@kit/ui-web/src/Tabs/__examples__/States'
import { States as ProgressStates } from '@kit/ui-web/src/Progress/__examples__/States'
import { States as SkeletonStates } from '@kit/ui-web/src/Skeleton/__examples__/States'
import { States as SpinnerStates } from '@kit/ui-web/src/Spinner/__examples__/States'
import { States as EmptyStates } from '@kit/ui-web/src/Empty/__examples__/States'
import { States as ResultStates } from '@kit/ui-web/src/Result/__examples__/States'
import { States as StateContainerStates } from '@kit/ui-web/src/StateContainer/__examples__/States'
import { States as CardStates } from '@kit/ui-web/src/Card/__examples__/States'
import { States as AvatarStates } from '@kit/ui-web/src/Avatar/__examples__/States'
import { States as TagStates } from '@kit/ui-web/src/Tag/__examples__/States'
import { States as StepsStates } from '@kit/ui-web/src/Steps/__examples__/States'
import { States as PaginationStates } from '@kit/ui-web/src/Pagination/__examples__/States'
import { States as BreadcrumbStates } from '@kit/ui-web/src/Breadcrumb/__examples__/States'
import { States as DataTableStates } from '@kit/ui-web/src/DataTable/__examples__/States'
import { States as TooltipStates } from '@kit/ui-web/src/Tooltip/__examples__/States'
import { States as AlertStates } from '@kit/ui-web/src/Alert/__examples__/States'
import { States as DividerStates } from '@kit/ui-web/src/Divider/__examples__/States'
import { States as TimelineStates } from '@kit/ui-web/src/Timeline/__examples__/States'
import { States as InputNumberStates } from '@kit/ui-web/src/InputNumber/__examples__/States'
import { States as StatisticStates } from '@kit/ui-web/src/Statistic/__examples__/States'
import { States as SegmentedStates } from '@kit/ui-web/src/Segmented/__examples__/States'
import { States as RateStates } from '@kit/ui-web/src/Rate/__examples__/States'
import { States as CollapseStates } from '@kit/ui-web/src/Collapse/__examples__/States'
import { States as DropdownMenuStates } from '@kit/ui-web/src/DropdownMenu/__examples__/States'
import { States as PopoverStates } from '@kit/ui-web/src/Popover/__examples__/States'
import { States as SliderStates } from '@kit/ui-web/src/Slider/__examples__/States'
import { States as AutoCompleteStates } from '@kit/ui-web/src/AutoComplete/__examples__/States'
import { States as DescriptionsStates } from '@kit/ui-web/src/Descriptions/__examples__/States'
import { States as DrawerStates } from '@kit/ui-web/src/Drawer/__examples__/States'
import { States as PopconfirmStates } from '@kit/ui-web/src/Popconfirm/__examples__/States'
import { States as ImageStates } from '@kit/ui-web/src/Image/__examples__/States'
import { States as BackTopStates } from '@kit/ui-web/src/BackTop/__examples__/States'
import { States as CalendarStates } from '@kit/ui-web/src/Calendar/__examples__/States'
import { States as CascaderStates } from '@kit/ui-web/src/Cascader/__examples__/States'
import { States as TimePickerStates } from '@kit/ui-web/src/TimePicker/__examples__/States'
import { States as DatePickerStates } from '@kit/ui-web/src/DatePicker/__examples__/States'
import { States as UploadStates } from '@kit/ui-web/src/Upload/__examples__/States'
import { States as ListStates } from '@kit/ui-web/src/List/__examples__/States'
import { States as SpaceStates } from '@kit/ui-web/src/Space/__examples__/States'
import { States as GridStates } from '@kit/ui-web/src/Grid/__examples__/States'
import { States as AffixStates } from '@kit/ui-web/src/Affix/__examples__/States'
import { States as ColorPickerStates } from '@kit/ui-web/src/ColorPicker/__examples__/States'
import { States as CarouselStates } from '@kit/ui-web/src/Carousel/__examples__/States'
import { States as TransferStates } from '@kit/ui-web/src/Transfer/__examples__/States'
import { States as TreeStates } from '@kit/ui-web/src/Tree/__examples__/States'
import { States as WatermarkStates } from '@kit/ui-web/src/Watermark/__examples__/States'
import { States as CountdownStates } from '@kit/ui-web/src/Countdown/__examples__/States'
import { States as FloatButtonStates } from '@kit/ui-web/src/FloatButton/__examples__/States'
import { States as TypographyStates } from '@kit/ui-web/src/Typography/__examples__/States'
import { States as TreeSelectStates } from '@kit/ui-web/src/TreeSelect/__examples__/States'
import { States as NotificationStates } from '@kit/ui-web/src/Notification/__examples__/States'
import { States as AnchorStates } from '@kit/ui-web/src/Anchor/__examples__/States'
import { States as TourStates } from '@kit/ui-web/src/Tour/__examples__/States'
import { States as MentionsStates } from '@kit/ui-web/src/Mentions/__examples__/States'
import { States as FormStates } from '@kit/ui-web/src/Form/__examples__/States'
import { States as TextAreaStates } from '@kit/ui-web/src/TextArea/__examples__/States'
import { States as InputPasswordStates } from '@kit/ui-web/src/InputPassword/__examples__/States'
import { States as SearchStates } from '@kit/ui-web/src/Search/__examples__/States'
import { States as OtpInputStates } from '@kit/ui-web/src/OtpInput/__examples__/States'
import { States as DateRangePickerStates } from '@kit/ui-web/src/DateRangePicker/__examples__/States'
import { States as TimeRangePickerStates } from '@kit/ui-web/src/TimeRangePicker/__examples__/States'
import { States as AvatarGroupStates } from '@kit/ui-web/src/AvatarGroup/__examples__/States'
import { States as TagGroupStates } from '@kit/ui-web/src/TagGroup/__examples__/States'
import { States as CardGroupStates } from '@kit/ui-web/src/CardGroup/__examples__/States'
import { States as StatisticCardStates } from '@kit/ui-web/src/StatisticCard/__examples__/States'
import { States as PasswordStrengthStates } from '@kit/ui-web/src/PasswordStrength/__examples__/States'
import { States as CaptchaStates } from '@kit/ui-web/src/Captcha/__examples__/States'
import { States as MenuStates } from '@kit/ui-web/src/Menu/__examples__/States'
import { States as PageHeaderStates } from '@kit/ui-web/src/PageHeader/__examples__/States'
import { States as LayoutStates } from '@kit/ui-web/src/Layout/__examples__/States'
import { States as CountUpStates } from '@kit/ui-web/src/CountUp/__examples__/States'
import { States as AddressStates } from '@kit/ui-web/src/Address/__examples__/States'
import {
  LoginPage,
  ListPage,
  DetailPage,
  FormPage,
  DashboardPage,
  SettingsPage,
  ProfilePage,
  OnboardingPage,
  HeroPage,
  ErrorPage,
  ChatPage,
  ProductDetailPage,
  WorkspacePage,
  CartPage,
} from '@kit/patterns-web'
import { RequestDemo } from './demos/RequestDemo'

/**
 * play-web 演示壳入口。
 * 暗色通过给 <html> 根节点切换 .dark 类实现（与 tokens.dark.css 的 .dark 选择器一致）：
 * 必须挂在 documentElement 上，body 及其后代才能统一继承暗色 CSS 变量。
 */
export default function App() {
  const [dark, setDark] = useState(false)
  const [loading, setLoading] = useState(false)

  // 主题切换：未用 @property 注册类型的颜色 CSS 变量，在 .dark 整体切换时会让带 transition
  // 的颜色属性卡在旧值（Chromium）。这里在绘制前同步挂 data-theme-switching 全局抑制过渡，
  // 浏览器按无过渡绘制新主题后，于下一帧恢复（hover/press 等交互过渡不受影响）。
  useLayoutEffect(() => {
    const root = document.documentElement
    root.setAttribute('data-theme-switching', '')
    root.classList.toggle('dark', dark)
    // 强制同步 reflow：在过渡被抑制的状态下让新主题颜色终值立即提交落地，
    // 否则恢复过渡的瞬间浏览器会重建颜色过渡并回退/卡在旧值。
    void document.body.offsetHeight
    // 用 setTimeout 解除（rAF 在后台标签/无头环境可能被节流不触发）
    const timer = window.setTimeout(() => root.removeAttribute('data-theme-switching'), 60)
    return () => window.clearTimeout(timer)
  }, [dark])

  const mockSubmit = () => {
    setLoading(true)
    // 演示提交锁：loading 期间按钮禁用，1.2s 后恢复（真实业务接 core useSubmitLock）
    setTimeout(() => setLoading(false), 1200)
  }

  return (
    <main className="mx-auto flex min-h-full max-w-5xl flex-col gap-8 p-8">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-title-md font-semibold text-text-primary">cross-ui-kit · play-web</h1>
          <p className="text-body-sm text-text-secondary">
            大端组件预览壳（React 18.3 + Vite 6 + Tailwind v4 + @kit/tokens）
          </p>
        </div>
        <Button variant="secondary" onClick={() => setDark((v) => !v)}>
          {dark ? '切换亮色' : '切换暗色'}
        </Button>
      </header>

      <section className="flex flex-col gap-4 rounded-lg border border-border-default bg-bg-card p-6 shadow-card">
        <h2 className="text-title-sm font-medium text-text-primary">Button · 视觉层级</h2>
        <Variants />
      </section>

      <section className="flex flex-col gap-4 rounded-lg border border-border-default bg-bg-card p-6 shadow-card">
        <h2 className="text-title-sm font-medium text-text-primary">Button · 尺寸与状态</h2>
        <States />
      </section>

      <section className="flex flex-col gap-4 rounded-lg border border-border-default bg-bg-card p-6 shadow-card">
        <h2 className="text-title-sm font-medium text-text-primary">Input · 输入框</h2>
        <InputStates />
      </section>

      <section className="flex flex-col gap-4 rounded-lg border border-border-default bg-bg-card p-6 shadow-card">
        <h2 className="text-title-sm font-medium text-text-primary">Checkbox · 复选框</h2>
        <CheckboxStates />
      </section>

      <section className="flex flex-col gap-4 rounded-lg border border-border-default bg-bg-card p-6 shadow-card">
        <h2 className="text-title-sm font-medium text-text-primary">Select · 选择器</h2>
        <SelectStates />
      </section>

      <section className="flex flex-col gap-4 rounded-lg border border-border-default bg-bg-card p-6 shadow-card">
        <h2 className="text-title-sm font-medium text-text-primary">Dialog · 对话框</h2>
        <DialogStates />
      </section>

      <section className="flex flex-col gap-4 rounded-lg border border-border-default bg-bg-card p-6 shadow-card">
        <h2 className="text-title-sm font-medium text-text-primary">Toast · 轻提示</h2>
        <ToastStates />
      </section>

      <section className="flex flex-col gap-4 rounded-lg border border-border-default bg-bg-card p-6 shadow-card">
        <h2 className="text-title-sm font-medium text-text-primary">Switch · 开关</h2>
        <SwitchStates />
      </section>

      <section className="flex flex-col gap-4 rounded-lg border border-border-default bg-bg-card p-6 shadow-card">
        <h2 className="text-title-sm font-medium text-text-primary">RadioGroup · 单选组</h2>
        <RadioGroupStates />
      </section>

      <section className="flex flex-col gap-4 rounded-lg border border-border-default bg-bg-card p-6 shadow-card">
        <h2 className="text-title-sm font-medium text-text-primary">Badge · 徽标</h2>
        <BadgeStates />
      </section>

      <section className="flex flex-col gap-4 rounded-lg border border-border-default bg-bg-card p-6 shadow-card">
        <h2 className="text-title-sm font-medium text-text-primary">Tabs · 选项卡</h2>
        <TabsStates />
      </section>

      <section className="flex flex-col gap-4 rounded-lg border border-border-default bg-bg-card p-6 shadow-card">
        <h2 className="text-title-sm font-medium text-text-primary">Progress · 进度条</h2>
        <ProgressStates />
      </section>

      <section className="flex flex-col gap-4 rounded-lg border border-border-default bg-bg-card p-6 shadow-card">
        <h2 className="text-title-sm font-medium text-text-primary">Skeleton · 骨架屏</h2>
        <SkeletonStates />
      </section>

      <section className="flex flex-col gap-4 rounded-lg border border-border-default bg-bg-card p-6 shadow-card">
        <h2 className="text-title-sm font-medium text-text-primary">Spinner · 加载指示器</h2>
        <SpinnerStates />
      </section>

      <section className="flex flex-col gap-4 rounded-lg border border-border-default bg-bg-card p-6 shadow-card">
        <h2 className="text-title-sm font-medium text-text-primary">Empty · 空态</h2>
        <EmptyStates />
      </section>

      <section className="flex flex-col gap-4 rounded-lg border border-border-default bg-bg-card p-6 shadow-card">
        <h2 className="text-title-sm font-medium text-text-primary">
          Result · 结果态（error/success/warning/info/404）
        </h2>
        <ResultStates />
      </section>

      <section className="flex flex-col gap-4 rounded-lg border border-border-default bg-bg-card p-6 shadow-card">
        <h2 className="text-title-sm font-medium text-text-primary">
          StateContainer · 四态编排容器（loading/empty/error/success）
        </h2>
        <StateContainerStates />
      </section>

      <section className="flex flex-col gap-4 rounded-lg border border-border-default bg-bg-card p-6 shadow-card">
        <h2 className="text-title-sm font-medium text-text-primary">Card · 卡片（组合式容器）</h2>
        <CardStates />
      </section>

      <section className="flex flex-col gap-4 rounded-lg border border-border-default bg-bg-card p-6 shadow-card">
        <h2 className="text-title-sm font-medium text-text-primary">
          Avatar · 头像（图片/首字/自定义）
        </h2>
        <AvatarStates />
      </section>

      <section className="flex flex-col gap-4 rounded-lg border border-border-default bg-bg-card p-6 shadow-card">
        <h2 className="text-title-sm font-medium text-text-primary">
          Tag · 标签（可选中筛选 / 可关闭）
        </h2>
        <TagStates />
      </section>

      <section className="flex flex-col gap-4 rounded-lg border border-border-default bg-bg-card p-6 shadow-card">
        <h2 className="text-title-sm font-medium text-text-primary">
          Steps · 步骤条（横向/纵向 · 四态）
        </h2>
        <StepsStates />
      </section>

      <section className="flex flex-col gap-4 rounded-lg border border-border-default bg-bg-card p-6 shadow-card">
        <h2 className="text-title-sm font-medium text-text-primary">
          Pagination · 分页（受控 / 省略号 / 禁用）
        </h2>
        <PaginationStates />
      </section>

      <section className="flex flex-col gap-4 rounded-lg border border-border-default bg-bg-card p-6 shadow-card">
        <h2 className="text-title-sm font-medium text-text-primary">
          Breadcrumb · 面包屑（路径导航）
        </h2>
        <BreadcrumbStates />
      </section>

      <section className="flex flex-col gap-4 rounded-lg border border-border-default bg-bg-card p-6 shadow-card">
        <h2 className="text-title-sm font-medium text-text-primary">
          DataTable · 数据表格（排序 / 骨架 / 空态）
        </h2>
        <DataTableStates />
      </section>

      <section className="flex flex-col gap-4 rounded-lg border border-border-default bg-bg-card p-6 shadow-card">
        <h2 className="text-title-sm font-medium text-text-primary">
          useRequest · 请求状态机（加载 / 成功 / 失败重试）
        </h2>
        <RequestDemo />
      </section>

      <section className="flex flex-col gap-4 rounded-lg border border-border-default bg-bg-card p-6 shadow-card">
        <h2 className="text-title-sm font-medium text-text-primary">
          Tooltip · 文字提示气泡（四向 placement / 长文本 / 禁用）
        </h2>
        <TooltipStates />
      </section>

      <section className="flex flex-col gap-4 rounded-lg border border-border-default bg-bg-card p-6 shadow-card">
        <h2 className="text-title-sm font-medium text-text-primary">
          Alert · 警告提示条（四语义色 / 可关闭 / 操作区）
        </h2>
        <AlertStates />
      </section>

      <section className="flex flex-col gap-4 rounded-lg border border-border-default bg-bg-card p-6 shadow-card">
        <h2 className="text-title-sm font-medium text-text-primary">
          Divider · 分割线（三线型 / 带文字 / 垂直）
        </h2>
        <DividerStates />
      </section>

      <section className="flex flex-col gap-4 rounded-lg border border-border-default bg-bg-card p-6 shadow-card">
        <h2 className="text-title-sm font-medium text-text-primary">
          Timeline · 时间线（语义色圆点 / 倒序）
        </h2>
        <TimelineStates />
      </section>

      <section className="flex flex-col gap-4 rounded-lg border border-border-default bg-bg-card p-6 shadow-card">
        <h2 className="text-title-sm font-medium text-text-primary">
          InputNumber · 数字输入（min/max/step/precision / 受控）
        </h2>
        <InputNumberStates />
      </section>

      <section className="flex flex-col gap-4 rounded-lg border border-border-default bg-bg-card p-6 shadow-card">
        <h2 className="text-title-sm font-medium text-text-primary">
          Statistic · 统计数值（千分位 / 前缀后缀 / 加载骨架）
        </h2>
        <StatisticStates />
      </section>

      <section className="flex flex-col gap-4 rounded-lg border border-border-default bg-bg-card p-6 shadow-card">
        <h2 className="text-title-sm font-medium text-text-primary">
          Segmented · 分段控制器（受控 / 禁用项 / 三尺寸）
        </h2>
        <SegmentedStates />
      </section>

      <section className="flex flex-col gap-4 rounded-lg border border-border-default bg-bg-card p-6 shadow-card">
        <h2 className="text-title-sm font-medium text-text-primary">
          Rate · 评分（半星 / 自定义字符 / 禁用）
        </h2>
        <RateStates />
      </section>

      <section className="flex flex-col gap-4 rounded-lg border border-border-default bg-bg-card p-6 shadow-card">
        <h2 className="text-title-sm font-medium text-text-primary">
          Collapse · 折叠面板（多展开 / 手风琴 / 禁用项）
        </h2>
        <CollapseStates />
      </section>

      <section className="flex flex-col gap-4 rounded-lg border border-border-default bg-bg-card p-6 shadow-card">
        <h2 className="text-title-sm font-medium text-text-primary">
          DropdownMenu · 下拉菜单（禁用 / 危险 / 对齐）
        </h2>
        <DropdownMenuStates />
      </section>

      <section className="flex flex-col gap-4 rounded-lg border border-border-default bg-bg-card p-6 shadow-card">
        <h2 className="text-title-sm font-medium text-text-primary">
          Popover · 弹出层（四方向 / 三对齐）
        </h2>
        <PopoverStates />
      </section>

      <section className="flex flex-col gap-4 rounded-lg border border-border-default bg-bg-card p-6 shadow-card">
        <h2 className="text-title-sm font-medium text-text-primary">
          Slider · 滑块（范围 / 步长 / 垂直 / 禁用）
        </h2>
        <SliderStates />
      </section>

      <section className="flex flex-col gap-4 rounded-lg border border-border-default bg-bg-card p-6 shadow-card">
        <h2 className="text-title-sm font-medium text-text-primary">
          AutoComplete · 自动完成（过滤 / 禁用 / 键盘导航）
        </h2>
        <AutoCompleteStates />
      </section>

      <section className="flex flex-col gap-4 rounded-lg border border-border-default bg-bg-card p-6 shadow-card">
        <h2 className="text-title-sm font-medium text-text-primary">
          Descriptions · 描述列表（列数 / 边框 / span）
        </h2>
        <DescriptionsStates />
      </section>

      <section className="flex flex-col gap-4 rounded-lg border border-border-default bg-bg-card p-6 shadow-card">
        <h2 className="text-title-sm font-medium text-text-primary">
          Drawer · 抽屉（四方向 / 遮罩 / 受控）
        </h2>
        <DrawerStates />
      </section>

      <section className="flex flex-col gap-4 rounded-lg border border-border-default bg-bg-card p-6 shadow-card">
        <h2 className="text-title-sm font-medium text-text-primary">
          Popconfirm · 气泡确认（确认/取消/自定义文案）
        </h2>
        <PopconfirmStates />
      </section>

      <section className="flex flex-col gap-4 rounded-lg border border-border-default bg-bg-card p-6 shadow-card">
        <h2 className="text-title-sm font-medium text-text-primary">
          Image · 图片（填充 / 圆角 / 加载状态）
        </h2>
        <ImageStates />
      </section>

      <section className="flex flex-col gap-4 rounded-lg border border-border-default bg-bg-card p-6 shadow-card">
        <h2 className="text-title-sm font-medium text-text-primary">
          BackTop · 回到顶部（滚动监听 / 平滑滚动）
        </h2>
        <BackTopStates />
      </section>

      <section className="flex flex-col gap-4 rounded-lg border border-border-default bg-bg-card p-6 shadow-card">
        <h2 className="text-title-sm font-medium text-text-primary">
          Calendar · 日历（日期选择 / 月份切换 / 受控）
        </h2>
        <CalendarStates />
      </section>

      <section className="flex flex-col gap-4 rounded-lg border border-border-default bg-bg-card p-6 shadow-card">
        <h2 className="text-title-sm font-medium text-text-primary">
          Cascader · 级联选择（省市区 / 多列 / 受控）
        </h2>
        <CascaderStates />
      </section>

      <section className="flex flex-col gap-4 rounded-lg border border-border-default bg-bg-card p-6 shadow-card">
        <h2 className="text-title-sm font-medium text-text-primary">
          TimePicker · 时间选择器（时分秒 / 仅时分 / 受控）
        </h2>
        <TimePickerStates />
      </section>

      <section className="flex flex-col gap-4 rounded-lg border border-border-default bg-bg-card p-6 shadow-card">
        <h2 className="text-title-sm font-medium text-text-primary">
          DatePicker · 日期选择器（多格式 / 受控 / 禁用）
        </h2>
        <DatePickerStates />
      </section>

      <section className="flex flex-col gap-4 rounded-lg border border-border-default bg-bg-card p-6 shadow-card">
        <h2 className="text-title-sm font-medium text-text-primary">
          Upload · 上传（单选/多选/最大数量/禁用）
        </h2>
        <UploadStates />
      </section>

      <section className="flex flex-col gap-4 rounded-lg border border-border-default bg-bg-card p-6 shadow-card">
        <h2 className="text-title-sm font-medium text-text-primary">
          List · 列表（基础/小尺寸/加载/空状态）
        </h2>
        <ListStates />
      </section>

      <section className="flex flex-col gap-4 rounded-lg border border-border-default bg-bg-card p-6 shadow-card">
        <h2 className="text-title-sm font-medium text-text-primary">
          Space · 间距（水平/垂直/自定义数值/换行）
        </h2>
        <SpaceStates />
      </section>

      <section className="flex flex-col gap-4 rounded-lg border border-border-default bg-bg-card p-6 shadow-card">
        <h2 className="text-title-sm font-medium text-text-primary">
          Grid · 栅格（24 等分 / 不等分 / 偏移 / 对齐）
        </h2>
        <GridStates />
      </section>

      <section className="flex flex-col gap-4 rounded-lg border border-border-default bg-bg-card p-6 shadow-card">
        <h2 className="text-title-sm font-medium text-text-primary">
          Affix · 固钉（顶部/底部固定，滚动查看效果）
        </h2>
        <AffixStates />
      </section>

      <section className="flex flex-col gap-4 rounded-lg border border-border-default bg-bg-card p-6 shadow-card">
        <h2 className="text-title-sm font-medium text-text-primary">
          ColorPicker · 颜色选择器（预设色板 / 自定义颜色 / 禁用）
        </h2>
        <ColorPickerStates />
      </section>

      <section className="flex flex-col gap-4 rounded-lg border border-border-default bg-bg-card p-6 shadow-card">
        <h2 className="text-title-sm font-medium text-text-primary">
          Carousel · 轮播图（基础 / 自动播放 / 无指示器）
        </h2>
        <CarouselStates />
      </section>

      <section className="flex flex-col gap-4 rounded-lg border border-border-default bg-bg-card p-6 shadow-card">
        <h2 className="text-title-sm font-medium text-text-primary">
          Transfer · 穿梭框（左右列表 / 勾选移动 / 自定义标题）
        </h2>
        <TransferStates />
      </section>

      <section className="flex flex-col gap-4 rounded-lg border border-border-default bg-bg-card p-6 shadow-card">
        <h2 className="text-title-sm font-medium text-text-primary">
          Tree · 树形控件（展开/折叠 / 选中 / 禁用 / 多级嵌套）
        </h2>
        <TreeStates />
      </section>

      <section className="flex flex-col gap-4 rounded-lg border border-border-default bg-bg-card p-6 shadow-card">
        <h2 className="text-title-sm font-medium text-text-primary">
          Watermark · 水印（基础 / 自定义颜色角度）
        </h2>
        <WatermarkStates />
      </section>

      <section className="flex flex-col gap-4 rounded-lg border border-border-default bg-bg-card p-6 shadow-card">
        <h2 className="text-title-sm font-medium text-text-primary">
          Countdown · 倒计时（基础 / 带天 / 带毫秒）
        </h2>
        <CountdownStates />
      </section>

      <section className="flex flex-col gap-4 rounded-lg border border-border-default bg-bg-card p-6 shadow-card">
        <h2 className="text-title-sm font-medium text-text-primary">
          FloatButton · 悬浮按钮（圆形 / 默认 / 方形）
        </h2>
        <FloatButtonStates />
      </section>

      <section className="flex flex-col gap-4 rounded-lg border border-border-default bg-bg-card p-6 shadow-card">
        <h2 className="text-title-sm font-medium text-text-primary">
          Typography · 排版（h1-h4 / body / caption / 省略 / 加粗 / 自定义颜色）
        </h2>
        <TypographyStates />
      </section>

      <section className="flex flex-col gap-4 rounded-lg border border-border-default bg-bg-card p-6 shadow-card">
        <h2 className="text-title-sm font-medium text-text-primary">
          TreeSelect · 树形选择器（基础 / 禁用 / 多级嵌套）
        </h2>
        <TreeSelectStates />
      </section>

      <section className="flex flex-col gap-4 rounded-lg border border-border-default bg-bg-card p-6 shadow-card">
        <h2 className="text-title-sm font-medium text-text-primary">
          Notification · 通知（success / info / warning / error）
        </h2>
        <NotificationStates />
      </section>

      <section className="flex flex-col gap-4 rounded-lg border border-border-default bg-bg-card p-6 shadow-card">
        <h2 className="text-title-sm font-medium text-text-primary">
          Anchor · 锚点（基础 / 固定定位 sticky）
        </h2>
        <AnchorStates />
      </section>

      <section className="flex flex-col gap-4 rounded-lg border border-border-default bg-bg-card p-6 shadow-card">
        <h2 className="text-title-sm font-medium text-text-primary">
          Tour · 引导（遮罩 + 步骤卡片 + 上一步/下一步/跳过/完成）
        </h2>
        <TourStates />
      </section>

      <section className="flex flex-col gap-4 rounded-lg border border-border-default bg-bg-card p-6 shadow-card">
        <h2 className="text-title-sm font-medium text-text-primary">
          Mentions · 提及输入（输入 @ 触发用户列表 / 禁用）
        </h2>
        <MentionsStates />
      </section>

      <section className="flex flex-col gap-4 rounded-lg border border-border-default bg-bg-card p-6 shadow-card">
        <h2 className="text-title-sm font-medium text-text-primary">
          Form · 表单（垂直布局 / 水平布局 / 校验 / 提交）
        </h2>
        <FormStates />
      </section>

      <section className="flex flex-col gap-4 rounded-lg border border-border-default bg-bg-card p-6 shadow-card">
        <h2 className="text-title-sm font-medium text-text-primary">
          TextArea · 多行文本框（基础 / 字数统计 / 禁用）
        </h2>
        <TextAreaStates />
      </section>

      <section className="flex flex-col gap-4 rounded-lg border border-border-default bg-bg-card p-6 shadow-card">
        <h2 className="text-title-sm font-medium text-text-primary">
          InputPassword · 密码输入框（显示/隐藏切换 / 禁用 / 无切换按钮）
        </h2>
        <InputPasswordStates />
      </section>

      <section className="flex flex-col gap-4 rounded-lg border border-border-default bg-bg-card p-6 shadow-card">
        <h2 className="text-title-sm font-medium text-text-primary">
          Search · 搜索框（基础 / 无按钮 / 禁用）
        </h2>
        <SearchStates />
      </section>

      <section className="flex flex-col gap-4 rounded-lg border border-border-default bg-bg-card p-6 shadow-card">
        <h2 className="text-title-sm font-medium text-text-primary">
          OtpInput · 验证码输入框（6位 / 4位密码 / 禁用）
        </h2>
        <OtpInputStates />
      </section>

      <section className="flex flex-col gap-4 rounded-lg border border-border-default bg-bg-card p-6 shadow-card">
        <h2 className="text-title-sm font-medium text-text-primary">
          DateRangePicker · 日期范围选择器（基础 / 自定义连接符 / 禁用）
        </h2>
        <DateRangePickerStates />
      </section>

      <section className="flex flex-col gap-4 rounded-lg border border-border-default bg-bg-card p-6 shadow-card">
        <h2 className="text-title-sm font-medium text-text-primary">
          TimeRangePicker · 时间范围选择器（基础 / 自定义连接符 / 禁用）
        </h2>
        <TimeRangePickerStates />
      </section>

      <section className="flex flex-col gap-4 rounded-lg border border-border-default bg-bg-card p-6 shadow-card">
        <h2 className="text-title-sm font-medium text-text-primary">
          AvatarGroup · 头像组（基础 / 超出+N / 方形 / 大尺寸）
        </h2>
        <AvatarGroupStates />
      </section>

      <section className="flex flex-col gap-4 rounded-lg border border-border-default bg-bg-card p-6 shadow-card">
        <h2 className="text-title-sm font-medium text-text-primary">
          TagGroup · 标签组（基础 / 超出+N / 可关闭 / 尺寸）
        </h2>
        <TagGroupStates />
      </section>

      <section className="flex flex-col gap-4 rounded-lg border border-border-default bg-bg-card p-6 shadow-card">
        <h2 className="text-title-sm font-medium text-text-primary">
          CardGroup · 卡片组（基础 / 2列 / 带封面）
        </h2>
        <CardGroupStates />
      </section>

      <section className="flex flex-col gap-4 rounded-lg border border-border-default bg-bg-card p-6 shadow-card">
        <h2 className="text-title-sm font-medium text-text-primary">
          StatisticCard · 统计卡片（基础 / 带后缀 / 自定义颜色）
        </h2>
        <StatisticCardStates />
      </section>

      <section className="flex flex-col gap-4 rounded-lg border border-border-default bg-bg-card p-6 shadow-card">
        <h2 className="text-title-sm font-medium text-text-primary">
          PasswordStrength · 密码强度指示器（输入测试 / 各等级预览）
        </h2>
        <PasswordStrengthStates />
      </section>

      <section className="flex flex-col gap-4 rounded-lg border border-border-default bg-bg-card p-6 shadow-card">
        <h2 className="text-title-sm font-medium text-text-primary">
          Captcha · 验证码输入框（基础 / 自定义 / 禁用）
        </h2>
        <CaptchaStates />
      </section>

      <section className="flex flex-col gap-4 rounded-lg border border-border-default bg-bg-card p-6 shadow-card">
        <h2 className="text-title-sm font-medium text-text-primary">
          Menu · 导航菜单（水平 / 垂直，含二级菜单）
        </h2>
        <MenuStates />
      </section>

      <section className="flex flex-col gap-4 rounded-lg border border-border-default bg-bg-card p-6 shadow-card">
        <h2 className="text-title-sm font-medium text-text-primary">
          PageHeader · 页头（基础 / 带面包屑 / 带底部）
        </h2>
        <PageHeaderStates />
      </section>

      <section className="flex flex-col gap-4 rounded-lg border border-border-default bg-bg-card p-6 shadow-card">
        <h2 className="text-title-sm font-medium text-text-primary">
          Layout · 布局（完整布局 / 简单布局）
        </h2>
        <LayoutStates />
      </section>

      <section className="flex flex-col gap-4 rounded-lg border border-border-default bg-bg-card p-6 shadow-card">
        <h2 className="text-title-sm font-medium text-text-primary">
          CountUp · 数字滚动（基础 / 带前缀 / 不同时长）
        </h2>
        <CountUpStates />
      </section>

      <section className="flex flex-col gap-4 rounded-lg border border-border-default bg-bg-card p-6 shadow-card">
        <h2 className="text-title-sm font-medium text-text-primary">
          Address · 地址选择器（基础 / 预设值 / 禁用）
        </h2>
        <AddressStates />
      </section>

      <section className="flex flex-col gap-4 rounded-lg border border-border-default bg-bg-card p-6 shadow-card">
        <h2 className="text-title-sm font-medium text-text-primary">
          Button · 提交锁（防重复提交）
        </h2>
        <div className="flex gap-3">
          <Button loading={loading} onClick={mockSubmit}>
            {loading ? '提交中…' : '提交表单'}
          </Button>
          <Button variant="ghost" disabled={loading} onClick={() => location.reload()}>
            重置
          </Button>
        </div>
      </section>

      <section className="flex flex-col gap-4 rounded-lg border border-border-default bg-bg-card p-6 shadow-card">
        <h2 className="text-title-sm font-medium text-text-primary">页面模板 · LoginPage 登录页</h2>
        <div className="rounded-lg border border-border-default overflow-hidden">
          <LoginPage />
        </div>
      </section>

      <section className="flex flex-col gap-4 rounded-lg border border-border-default bg-bg-card p-6 shadow-card">
        <h2 className="text-title-sm font-medium text-text-primary">页面模板 · ListPage 列表页</h2>
        <ListPage
          rows={[
            {
              id: '1',
              name: '示例项目 A',
              status: 'active',
              owner: '张三',
              updatedAt: '2026-09-01',
            },
            {
              id: '2',
              name: '示例项目 B',
              status: 'pending',
              owner: '李四',
              updatedAt: '2026-09-05',
            },
            {
              id: '3',
              name: '示例项目 C',
              status: 'inactive',
              owner: '王五',
              updatedAt: '2026-09-10',
            },
          ]}
        />
      </section>

      <section className="flex flex-col gap-4 rounded-lg border border-border-default bg-bg-card p-6 shadow-card">
        <h2 className="text-title-sm font-medium text-text-primary">
          页面模板 · DetailPage 详情页
        </h2>
        <DetailPage
          items={[
            { label: '名称', value: '示例项目' },
            { label: '编号', value: 'P-001' },
            { label: '负责人', value: '张三' },
            { label: '创建时间', value: '2026-09-01' },
          ]}
        />
      </section>

      <section className="flex flex-col gap-4 rounded-lg border border-border-default bg-bg-card p-6 shadow-card">
        <h2 className="text-title-sm font-medium text-text-primary">页面模板 · FormPage 表单页</h2>
        <FormPage />
      </section>

      <section className="flex flex-col gap-4 rounded-lg border border-border-default bg-bg-card p-6 shadow-card">
        <h2 className="text-title-sm font-medium text-text-primary">页面模板 · Dashboard 仪表盘</h2>
        <DashboardPage />
      </section>

      <section className="flex flex-col gap-4 rounded-lg border border-border-default bg-bg-card p-6 shadow-card">
        <h2 className="text-title-sm font-medium text-text-primary">页面模板 · Settings 设置</h2>
        <SettingsPage />
      </section>

      <section className="flex flex-col gap-4 rounded-lg border border-border-default bg-bg-card p-6 shadow-card">
        <h2 className="text-title-sm font-medium text-text-primary">页面模板 · Profile 个人中心</h2>
        <ProfilePage />
      </section>

      <section className="flex flex-col gap-4 rounded-lg border border-border-default bg-bg-card p-6 shadow-card">
        <h2 className="text-title-sm font-medium text-text-primary">
          页面模板 · Onboarding 引导页
        </h2>
        <OnboardingPage />
      </section>

      <section className="flex flex-col gap-4 rounded-lg border border-border-default bg-bg-card p-6 shadow-card">
        <h2 className="text-title-sm font-medium text-text-primary">页面模板 · Hero 营销首屏</h2>
        <HeroPage />
      </section>

      <section className="flex flex-col gap-4 rounded-lg border border-border-default bg-bg-card p-6 shadow-card">
        <h2 className="text-title-sm font-medium text-text-primary">页面模板 · Error 错误页</h2>
        <ErrorPage />
      </section>

      <section className="flex flex-col gap-4 rounded-lg border border-border-default bg-bg-card p-6 shadow-card">
        <h2 className="text-title-sm font-medium text-text-primary">页面模板 · Chat 聊天页</h2>
        <ChatPage />
      </section>

      <section className="flex flex-col gap-4 rounded-lg border border-border-default bg-bg-card p-6 shadow-card">
        <h2 className="text-title-sm font-medium text-text-primary">
          页面模板 · ProductDetail 商品详情
        </h2>
        <ProductDetailPage />
      </section>

      <section className="flex flex-col gap-4 rounded-lg border border-border-default bg-bg-card p-6 shadow-card">
        <h2 className="text-title-sm font-medium text-text-primary">页面模板 · Workspace 工作台</h2>
        <WorkspacePage />
      </section>

      <section className="flex flex-col gap-4 rounded-lg border border-border-default bg-bg-card p-6 shadow-card">
        <h2 className="text-title-sm font-medium text-text-primary">页面模板 · Cart 购物车</h2>
        <CartPage />
      </section>
    </main>
  )
}
