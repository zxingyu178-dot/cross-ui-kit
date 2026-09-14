/**
 * @kit/interaction —— 交互规范可复用实现（P0 占位，P2 起填充）
 *
 * 规范源：docs/07-interaction-spec.md
 * 规划内容（三栈各一份视图实现，逻辑共享 core）：
 *  - StateContainer：loading(骨架)/empty/error(重试)/normal 四态容器
 *  - 反馈：useToast / useConfirm / 提交锁 useSubmitLock
 *  - 小端手势：usePullRefresh / useInfiniteLoad / 安全区容器
 *  - 大端：useMediaQuery / 焦点管理辅助
 * 注意：本包可依赖 core/tokens；视图部分按栈分发到 ui-* 包或在此做三栈条件导出
 */
export {}
