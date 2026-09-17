/**
 * Upload 上传（native：iOS / Android）—— Tamagui XStack+YStack+Text 自建，
 * 文件列表展示 + 删除按钮，受控优先，支持多选/最大数量。
 * 实际上传逻辑由业务方通过 onChange 处理。
 */
import { useState } from 'react'
import { Text, XStack, YStack } from 'tamagui'
import type { UploadFile, UploadProps } from './Upload.types'

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
  style,
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
    <YStack gap={8} style={style}>
      {showAddButton ? (
        <XStack
          width={128}
          height={40}
          alignItems="center"
          justifyContent="center"
          gap={4}
          borderWidth={1}
          borderStyle="dashed"
          borderColor="$borderDefault"
          borderRadius="$md"
          backgroundColor="$bgCard"
          opacity={disabled ? 0.5 : 1}
        >
          <Text fontSize={18} color="$textSecondary">
            +
          </Text>
          <Text fontSize="$bodySm" color="$textSecondary">
            上传文件
          </Text>
        </XStack>
      ) : null}
      <YStack gap={4}>
        {current.map((file) => (
          <XStack
            key={file.uid}
            alignItems="center"
            justifyContent="space-between"
            paddingHorizontal={12}
            paddingVertical={8}
            borderWidth={1}
            borderColor="$borderDefault"
            borderRadius="$md"
            backgroundColor="$bgCard"
          >
            <XStack alignItems="center" gap={8} flex={1} minWidth={0}>
              <Text fontSize={18}>📄</Text>
              <YStack flex={1} minWidth={0}>
                <Text fontSize="$bodySm" color="$textPrimary" numberOfLines={1}>
                  {file.name}
                </Text>
                {file.size ? (
                  <Text fontSize="$caption" color="$textTertiary">
                    {formatSize(file.size)}
                  </Text>
                ) : null}
              </YStack>
            </XStack>
            <XStack
              width={24}
              height={24}
              marginLeft={8}
              alignItems="center"
              justifyContent="center"
              borderRadius={4}
              opacity={disabled ? 0.5 : 1}
              onPress={() => !disabled && handleRemove(file.uid)}
            >
              <Text fontSize={16} color="$textTertiary">
                ×
              </Text>
            </XStack>
          </XStack>
        ))}
      </YStack>
    </YStack>
  )
}
