/**
 * 主题模式上下文：light / dark / system，system 跟随系统外观。
 * TamaguiProvider 据 resolved 主题渲染；play-native 不自维护配色。
 */
import { createContext, useContext, useMemo, useState, type ReactNode } from 'react'
import { useColorScheme } from 'react-native'

export type ThemeMode = 'light' | 'dark' | 'system'
export type ResolvedTheme = 'light' | 'dark'

interface ThemeCtxValue {
  mode: ThemeMode
  resolved: ResolvedTheme
  setMode: (m: ThemeMode) => void
  cycle: () => void
}

const ThemeCtx = createContext<ThemeCtxValue | null>(null)

const ORDER: ThemeMode[] = ['light', 'dark', 'system']

export function ThemeContextProvider({ children }: { children: ReactNode }) {
  const system = useColorScheme()
  const [mode, setMode] = useState<ThemeMode>('system')

  const value = useMemo<ThemeCtxValue>(() => {
    const resolved: ResolvedTheme =
      mode === 'system' ? (system === 'dark' ? 'dark' : 'light') : mode
    return {
      mode,
      resolved,
      setMode,
      cycle: () => setMode((m) => ORDER[(ORDER.indexOf(m) + 1) % ORDER.length]!),
    }
  }, [mode, system])

  return <ThemeCtx.Provider value={value}>{children}</ThemeCtx.Provider>
}

export function useThemeMode(): ThemeCtxValue {
  const ctx = useContext(ThemeCtx)
  if (ctx === null) throw new Error('useThemeMode 必须在 ThemeContextProvider 内使用')
  return ctx
}
