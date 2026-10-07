// Metro 配置：让 Expo 工程在 pnpm monorepo 中经 symlink 直接消费 @kit/* 源码包。
// 最小必要配置：watch 仓库根 + 显式 node_modules 路径；不建立第二套依赖体系。
const { getDefaultConfig } = require('@expo/metro-config')
const path = require('path')

const projectRoot = __dirname
const workspaceRoot = path.resolve(projectRoot, '../..')

const config = getDefaultConfig(projectRoot)

// 监听整个 monorepo，workspace 包源码变更可被 Metro 感知
config.watchFolders = [workspaceRoot]

config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, 'node_modules'),
  path.resolve(workspaceRoot, 'node_modules'),
]

// pnpm：必须保留层级查找（默认），才能从 .pnpm/<pkg>/node_modules 解析到
// 该包的传递依赖（如 @babel/runtime）；同时开启 symlink 与 package exports。
config.resolver.unstable_enableSymlinks = true
config.resolver.unstable_enablePackageExports = true

module.exports = config
