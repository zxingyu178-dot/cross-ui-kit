export type UploadStatus = 'uploading' | 'done' | 'error'

export interface UploadFile {
  /** 唯一标识 */
  uid: string
  /** 文件名 */
  name: string
  /** 文件大小（字节） */
  size?: number
  /** 上传状态 */
  status?: UploadStatus
  /** 上传进度（0-100） */
  percent?: number
  /** 原始 File 对象（web 端） */
  originFile?: File
  /** 错误信息 */
  error?: string
}

export interface UploadProps {
  /** 当前文件列表（受控） */
  value?: UploadFile[]
  /** 默认文件列表（非受控） */
  defaultValue?: UploadFile[]
  /** 文件列表变化回调 */
  onChange?: (files: UploadFile[]) => void
  /** 接受的文件类型（如 "image/*"） */
  accept?: string
  /** 是否支持多选 */
  multiple?: boolean
  /** 最大文件数量 */
  maxCount?: number
  /** 是否禁用 */
  disabled?: boolean
  /** 外层容器类名 */
  className?: string
}
