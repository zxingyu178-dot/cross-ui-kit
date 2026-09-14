import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// token 产物（@kit/tokens exports 映射；构建前由 turbo 触发 tokens build 生成）
import '@kit/tokens/web-light.css'
import '@kit/tokens/web-dark.css'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
