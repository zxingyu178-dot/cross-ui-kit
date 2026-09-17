import type { ViewStyle } from 'react-native'

export type UploadStatus = 'uploading' | 'done' | 'error'

export interface UploadFile {
  uid: string
  name: string
  size?: number
  status?: UploadStatus
  percent?: number
  error?: string
}

export interface UploadProps {
  value?: UploadFile[]
  defaultValue?: UploadFile[]
  onChange?: (files: UploadFile[]) => void
  multiple?: boolean
  maxCount?: number
  disabled?: boolean
  style?: ViewStyle
}
