# @kit/core · 三栈共享逻辑内核

headless 逻辑层，web / mini / native 三栈直接引用，**不依赖任何渲染环境 API**（无 DOM、无 `wx.*`、无 `@tarojs/*`、无 `react-native`）。

## 规划目录（P1 落地）

```
src/
├─ request/      # API client：统一 baseURL/拦截器/错误模型/超时/重试；运行时请求 adapter 由各栈注入
├─ hooks/
│  ├─ useRequest.ts   # 基于 TanStack Query：data/loading/error/refresh，四态标准数据源
│  ├─ useTable.ts     # 基于 TanStack Table + Query：列表查询/分页/排序/筛选/loading/空/错
│  ├─ useForm.ts      # react-hook-form + zod 封装：校验时机、提交锁、草稿
│  ├─ useUpload.ts    # 上传进度/取消/分片（各栈注入文件选择与上传 adapter）
│  ├─ usePermission.ts / useAuth.ts
│  └─ useDebounce.ts / useControllable.ts / useMediaQuery.ts（大端）
├─ stores/       # zustand：themeStore（亮/暗/跟随系统）、userStore、permissionStore
├─ schemas/      # zod schema 工厂与通用 schema（分页、手机号、金额…）
├─ utils/        # cn()、日期/数字/货币格式化、空值占位、id 生成
└─ types/        # ApiResponse<T>、PageResult<T>、PaginationState、IdType
```

## 硬性规则

- 请求/缓存用 TanStack Query；表格列模型用 TanStack Table；长列表虚拟化用 TanStack Virtual；
- 表单状态用 react-hook-form，校验用 zod（schema 三栈共用）；
- 客户端状态用 zustand，禁止在组件里建散落的 useState 全局态；
- 任何函数需要平台能力（存储、跳转、文件、剪贴板）时，定义 adapter 接口由各栈注入，core 内不直接调用平台 API；
- 单元测试要求：核心分支 100% 覆盖（vitest）。
