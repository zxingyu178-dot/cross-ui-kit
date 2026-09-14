# 11. 可移植性与分发指南

> 目标：仓库可以**整体打包发送到任意一台电脑**，对方无需了解内部结构，跑一条命令即可就绪开发。
> 设计原则：**只分发“源”，依赖与产物在目标机器上重建；全程路径无关、跨平台（Windows / macOS / Linux）。**

---

## 1. 三条封装命令

| 命令 | 作用 | 何时用 |
|---|---|---|
| `pnpm setup` | 一键冷启动：检查 Node/pnpm（缺 pnpm 自动走 corepack）→ `install` → `tokens:build` → `registry:validate`（加 `--check` 再跑全量质量门） | 新机器拿到源码后**只跑这一条** |
| `pnpm doctor` | 只读环境体检：必需项（Node/pnpm/git/依赖/token 产物/registry）+ 可选项（Rust、微信开发者工具、Android、iOS）逐项报告并给修复建议 | 环境异常、接手别人的环境时 |
| `pnpm pack:portable` | 生成可发送的源码 zip（排除 node_modules/dist/.git 等），输出到 `releases/` | 把项目发给别人 / 归档 |

三个脚本都在 `scripts/`（`setup.mjs` / `doctor.mjs` / `pack-portable.mjs`，共享 `_lib.mjs`），**仅依赖 Node 内置模块**，无需安装额外工具。

---

## 2. 发送方：如何打包

```bash
pnpm pack:portable                 # 默认：不含 .git 的干净源码，输出 releases/cross-ui-kit-portable-<时间戳>.zip
pnpm pack:portable --with-git      # 团队内传递，连同提交历史一起打包
pnpm pack:portable --out D:/x.zip  # 自定义输出位置
```

- 产物约 0.3–1 MB（只有源码与配置，不含依赖/构建产物），脚本会先复制到系统**英文临时目录**再压缩，规避中文/空格路径导致压缩工具异常；
- 打包内置健全性校验：关键文件（`package.json`、`pnpm-workspace.yaml`、`pnpm-lock.yaml`、`AGENTS.md`、`packages/`、`apps/`、`docs/`、`registry/`、`scripts/` 等）必须存在，且**绝不能混入 `node_modules`/`dist`**，否则中止；
- `releases/` 已在 `.gitignore`，分发包不入库。

### 为什么不打包 node_modules / dist

- `node_modules` 含**平台相关原生二进制**（esbuild、swc、@nutui、style-dictionary 等），跨操作系统/架构不可复用，直接拷贝极易损坏；由目标机 `pnpm install` 按 `pnpm-lock.yaml` 原样重建（版本锁定，结果一致）。
- `packages/tokens/dist`（11 个 token 产物）由 `packages/tokens/src` 的 JSON 源生成，不入库、不打包，由 `pnpm setup` 中的 `tokens:build` 自动生成。

---

## 3. 接收方：新电脑从零开始

### 3.1 硬前置（只需一次）

| 工具 | 版本 | 说明 |
|---|---|---|
| **Node.js** | **22 LTS**（见 `.nvmrc` / `engines`） | 唯一硬前置，自带 corepack；https://nodejs.org/ |
| git | ≥ 2.40 | 建议安装（仅网页预览不强制；分发包不含 `.git` 也能跑） |
| pnpm | 锁定 12.4.1（见 `packageManager`） | **不用手动装**，`pnpm setup` 会经 corepack 自动激活；被精简的 Node 发行版才需 `corepack enable` 或 `npm i -g pnpm@12.4.1` |

### 3.2 三步就绪

```bash
# 1) 解压 zip —— 强烈建议放到“纯英文、无空格”路径，例如 D:\cross-ui-kit
# 2) 进入目录后执行一键引导（自动完成 装依赖 → 构建 token → 校验 registry）
pnpm setup
# 3) 启动网页预览
pnpm --filter play-web dev        # http://localhost:5173/
```

中途任何一步存疑，跑 `pnpm doctor` 体检，它会逐项告诉缺什么、怎么修。

> 路径建议：Node/Vite/pnpm 对中文与空格路径兼容性良好，但 **Tauri(Rust)、部分小程序工具链、Android 构建对非 ASCII/空格路径敏感**。为保证后续全端可用，统一解压到纯英文、无空格目录最稳妥。

### 3.3 各端额外前置（按需，不影响网页预览）

| 端 | 命令/壳 | 额外工具 |
|---|---|---|
| 网页 / H5 | `play-web` | 仅 Node，无额外依赖 |
| 小程序（微信/支付宝/字节） | `play-miniapp`（Taro 4 + NutUI） | 微信开发者工具（稳定版）；H5 形态仅需 Node |
| PC 桌面 | `play-desktop`（Tauri 2） | Rust stable（`rustup`）、Windows 还需 VS C++ Build Tools 与 WebView2 |
| iOS / Android 原生 | `play-native`（Expo + Tamagui） | Android Studio（含 SDK/adb）；iOS 需 macOS + Xcode |

`pnpm doctor` 会探测这些工具是否就位并给出安装指引；未安装只提示、不阻断网页开发。

---

## 4. 跨平台一致性保障

- **`.gitattributes`**：文本在仓库内统一存 LF（`.cmd/.bat/.ps1` 保留 CRLF），二进制资源标记为 binary，避免 Windows/mac/Linux 互相检出时整文件换行 diff。
- **版本锁定**：`pnpm-lock.yaml` 锁定全量依赖；React/Taro/Tamagui 等版本矩阵只在 `pnpm-workspace.yaml` 的 `catalog` 声明，各包用 `catalog:` 引用，跨机器安装结果一致。
- **路径无关**：构建脚本（`sd.config.mjs`、`vite.config.ts`、`scripts/*`）一律用 `import.meta.url` 相对定位，不写任何绝对路径/盘符。
- **原生依赖构建白名单**：pnpm 12 的 `allowBuilds` 已在 `pnpm-workspace.yaml` 配好（esbuild / swc / style-dictionary / @nutui 等），目标机 `pnpm install` 会自动完成原生构建，无需手动批准。
- **husky 容错**：`prepare` 钩子改为 `scripts/prepare.mjs`，仅在含 `.git` 的真实仓库内安装 git 钩子；**不含 `.git` 的分发包安装时自动跳过**，不会让 `pnpm install` 失败。

---

## 5. 常见故障排查

| 现象 | 原因 / 处理 |
|---|---|
| `pnpm` 命令找不到 | 运行 `corepack enable`（Windows 若提示权限，用管理员终端）；仍不行则 `npm i -g pnpm@12.4.1` |
| Node 版本报错 | 版本需 ≥ 22；用 nvm-windows / nvm / fnm 切到 22 LTS（`.nvmrc` 已指定） |
| install 阶段原生依赖（esbuild/swc 等）失败 | 多为网络问题：配置 npm 镜像后删 `node_modules` 重跑 `pnpm install`；白名单已配，无需手动 approve |
| 启动报找不到 `@kit/tokens` 的 css / dist 为空 | 漏了 token 构建，跑 `pnpm tokens:build`（`pnpm setup` 会自动执行） |
| `prepare` / husky 报错中断 install | 分发包无 `.git` 时本应自动跳过；若仍报错，确认 `package.json` 的 `prepare` 为 `node scripts/prepare.mjs` |
| 5173 端口被占用 | 关掉占用进程，或给 `play-web` 指定其他端口 |
| Tauri / 小程序 / Android 构建在中文或带空格路径下异常 | 把整个项目移动到纯英文、无空格路径后重新 `pnpm setup` |
| 不同系统换行导致整文件改动 | 已由 `.gitattributes` 统一；首次切换可执行一次 `git add --renormalize .` |
| 内网/离线环境 | 提前在有网机器 `pnpm install` 填充全局 store；或配置内网 registry 镜像后再 `pnpm setup` |

---

## 6. 一键流程小结

```
发送方：pnpm pack:portable  →  releases/*.zip（发给对方 / 拷贝走）
接收方：解压到英文路径 → pnpm setup → pnpm doctor（可选自检）→ pnpm --filter play-web dev
```
