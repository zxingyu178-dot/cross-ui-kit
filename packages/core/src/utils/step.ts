/**
 * Steps 步骤条状态推导（headless，三栈共享，无 React / DOM / 小程序 / RN 依赖）。
 * 视图层只负责把状态渲染成圆点/连线颜色，推导逻辑统一在此。
 */

/** 单步状态：wait 未开始 / process 进行中 / finish 已完成 / error 出错 */
export type StepStatus = 'wait' | 'process' | 'finish' | 'error'

/**
 * 推导某一步的状态：
 * 1. 步骤自身显式 status 优先（例如把当前步标记为 error）；
 * 2. 否则 index < current → finish，index === current → process，其余 wait。
 */
export function deriveStepStatus(
  index: number,
  current: number,
  override?: StepStatus,
): StepStatus {
  if (override) return override
  if (index < current) return 'finish'
  if (index === current) return 'process'
  return 'wait'
}

/**
 * 第 index 步到下一步之间的连接段是否高亮（已完成）：
 * 当第 index 步为 finish 时连线高亮为品牌色，否则为中性边框色。
 */
export function isConnectorActive(
  index: number,
  current: number,
  overrideOfStep?: StepStatus,
): boolean {
  return deriveStepStatus(index, current, overrideOfStep) === 'finish'
}
