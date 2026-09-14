// tokens 包局部 ESLint 配置：继承根规则，构建脚本允许 console 构建日志
import rootConfig from '../../eslint.config.js'

export default [
  ...rootConfig,
  {
    files: ['sd.config.mjs'],
    rules: {
      'no-console': 'off',
    },
  },
]
