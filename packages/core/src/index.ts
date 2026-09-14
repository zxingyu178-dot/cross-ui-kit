/**
 * @kit/core —— 三栈共享逻辑内核（headless，与渲染端无关）
 *
 * 约束（见 AGENTS.md §2、docs/10-stacks.md §2）：
 *  - 只允许依赖 React 与 headless 库；禁止 DOM / wx.* / Taro / RN 专有 API；
 *  - 禁止 import 任何 @kit/ui-* 包；
 *  - 视图组件不发请求、不写业务分支，统一调用这里的 hooks。
 *
 * 当前导出：
 *   utils/   cn() 类名合并（web 栈），后续 formatDate/formatNumber/空值占位
 * P1+ 规划：
 *   request/  API client（三栈注入运行时 adapter）
 *   hooks/    useRequest / useTable / useForm / useUpload / usePermission / useAuth
 *   stores/   zustand 全局状态（主题、用户、权限）
 *   schemas/  zod 校验 schema 工厂
 *   types/    分页、接口响应、通用实体类型
 */
export * from './utils'

export const KIT_CORE_VERSION = '0.0.1'
