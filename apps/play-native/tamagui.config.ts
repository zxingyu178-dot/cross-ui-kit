/**
 * Tamagui 配置（play-native 验收壳）——全部 token 由 @kit/tokens 的 native 产物派生，
 * 不自行维护另一套颜色 / 圆角 / 间距。
 * 说明：dark 产物只覆盖颜色（darkTokens.color），非颜色 token 与 light 相同。
 */
import { createFont, createTamagui, createTokens, createTheme } from 'tamagui'
import { lightTokens } from '@kit/tokens/native-light'
import { darkTokens } from '@kit/tokens/native-dark'

type TokenTree = typeof lightTokens

const px = (v: string | number): number => (typeof v === 'number' ? v : Number(v.replace('px', '')))

/** 尺寸守卫：token 可能被推断为 unknown，运行时必须是 px 字符串或数字 */
const dim = (v: unknown): number => {
  if (typeof v === 'string' || typeof v === 'number') return px(v)
  throw new Error(`期望尺寸 token（px 字符串或数字），实际得到：${String(v)}`)
}

const cap = (s: string): string => s.charAt(0).toUpperCase() + s.slice(1)

/** 把一组 { key: 'Npx' } 转成数字 map */
function toNumberMap(record: Record<string, unknown>): Record<string, number> {
  return Object.fromEntries(Object.entries(record).map(([k, v]) => [k, dim(v)]))
}

/** 亮色颜色 map：语义色平铺 + white / black */
function lightColorMap(t: TokenTree): Record<string, string> {
  const map: Record<string, string> = { ...t.color }
  map.white = t.white.default
  map.black = t.black.default
  map.true = t.color.primaryDefault
  return map
}

/** size map：数字刻度（取 spacing）+ 控件 / 触控 / 图标 / 字号命名 token */
function sizeMap(t: TokenTree): Record<string, number> {
  const map: Record<string, number> = toNumberMap(t.spacing)
  for (const [k, v] of Object.entries(t.controlHeight)) map[`control${cap(k)}`] = dim(v)
  map.touchMin = dim(t.touch.min)
  for (const [k, v] of Object.entries(t.iconSize)) map[`iconSize${cap(k)}`] = dim(v)
  for (const [k, v] of Object.entries(t.fontSize)) map[k] = dim(v)
  map.true = dim(t.controlHeight.md)
  return map
}

function buildTokens(t: TokenTree) {
  const space = toNumberMap(t.spacing)
  const radius = toNumberMap(t.radius)
  const zIndex = { ...t.z, true: t.z.base }
  space.true = dim(t.spacing[4])
  radius.true = dim(t.radius.md)
  return createTokens({
    color: lightColorMap(t),
    space,
    size: sizeMap(t),
    radius,
    zIndex,
  })
}

const lightT = buildTokens(lightTokens)

// dark 仅覆盖颜色；white / black 为不变原语
const darkColors: Record<string, string> = {
  ...darkTokens.color,
  white: lightTokens.white.default,
  black: lightTokens.black.default,
  true: darkTokens.color.primaryDefault,
}

const systemFont = createFont({
  family: 'System, -apple-system, "Segoe UI", Roboto, "PingFang SC", "Microsoft YaHei", sans-serif',
  size: { true: 14 },
  lineHeight: { true: 20 },
  weight: { true: '400' },
  letterSpacing: { true: 0 },
})

const conf = createTamagui({
  tokens: lightT,
  themes: {
    light: createTheme(lightT.color),
    dark: createTheme(darkColors),
  },
  fonts: {
    heading: systemFont,
    body: systemFont,
  },
  settings: {
    onlyAllowShorthands: false,
    defaultTheme: 'light',
  },
})

export type Conf = typeof conf
declare module 'tamagui' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface TamaguiCustomConfig extends Conf {}
}

export default conf
