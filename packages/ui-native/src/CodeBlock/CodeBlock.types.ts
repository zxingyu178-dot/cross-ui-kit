import type { ViewStyle } from 'react-native'

export interface CodeBlockProps {
  code: string
  language?: string
  showLineNumbers?: boolean
  style?: ViewStyle
}
