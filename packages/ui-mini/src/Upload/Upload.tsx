/**
 * Upload 上传（mini：小程序 / 移动 H5）—— View+Text 自建，
 * 文件列表展示 + 删除按钮，受控优先，支持多选/最大数量。
 * 实际上传逻辑由业务方通过 onChange 处理（小程序端可用 Taro.chooseImage）。
 */
import { Text, View } from '@tarojs/components'
import { useState } from 'react'
import type { UploadFile, UploadProps } from './Upload.types'
import './Upload.scss'

function formatSize(size?: number): string {
  if (!size) return ''
  if (size < 1024) return `${size} B`
  if (size < 1024 * 1024) return `${(size / 1024).toFixed(1)} KB`
  return `${(size / (1024 * 1024)).toFixed(1)} MB`
}

export function Upload({
  value,
  defaultValue,
  onChange,
  multiple: _multiple = false,
  maxCount,
  disabled = false,
  className = '',
}: UploadProps) {
  const isControlled = value !== undefined
  const [inner, setInner] = useState<UploadFile[]>(defaultValue ?? [])
  const current = isControlled ? value : inner

  const commit = (files: UploadFile[]) => {
    if (!isControlled) setInner(files)
    onChange?.(files)
  }

  const handleRemove = (uid: string) => {
    commit(current.filter((f) => f.uid !== uid))
  }

  const showAddButton = !maxCount || current.length < maxCount

  return (
    <View className={`kit-upload ${className}`.trim()}>
      {showAddButton ? (
        <View className={`kit-upload__add ${disabled ? 'kit-upload__add--disabled' : ''}`}>
          <Text className="kit-upload__add-icon">+</Text>
          <Text className="kit-upload__add-text">上传文件</Text>
        </View>
      ) : null}
      <View className="kit-upload__list">
        {current.map((file) => (
          <View key={file.uid} className="kit-upload__item">
            <View className="kit-upload__item-info">
              <Text className="kit-upload__item-icon">📄</Text>
              <View className="kit-upload__item-detail">
                <Text className="kit-upload__item-name">{file.name}</Text>
                {file.size ? (
                  <Text className="kit-upload__item-size">{formatSize(file.size)}</Text>
                ) : null}
              </View>
            </View>
            <View
              className={`kit-upload__remove ${disabled ? 'kit-upload__remove--disabled' : ''}`}
              onClick={() => !disabled && handleRemove(file.uid)}
            >
              <Text>×</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  )
}
