import type { ReactNode } from 'react'
import type { ViewStyle } from 'react-native'

export type ImageFit = 'cover' | 'contain' | 'fill' | 'stretch' | 'center'

export interface ImageProps {
  src: string
  alt?: string
  width?: number | string
  height?: number | string
  fit?: ImageFit
  radius?: number
  placeholder?: ReactNode
  fallback?: ReactNode
  style?: ViewStyle
}
