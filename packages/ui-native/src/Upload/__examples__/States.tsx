/** Upload 示例：基础/多选/禁用（native）。 */
import { useState } from 'react'
import { Text, YStack } from 'tamagui'
import { Upload } from '../index'
import type { UploadFile } from '../Upload.types'

export function States() {
  const [files1, setFiles1] = useState<UploadFile[]>([])
  return (
    <YStack padding={12} gap={24}>
      <YStack gap={8} width={280}>
        <Text fontSize={12} color="$textTertiary">
          基础单选（当前：{files1.length} 个文件）
        </Text>
        <Upload value={files1} onChange={setFiles1} />
      </YStack>
      <YStack gap={8} width={280}>
        <Text fontSize={12} color="$textTertiary">
          禁用
        </Text>
        <Upload
          defaultValue={[{ uid: '3', name: '已上传文件.docx', size: 102400, status: 'done' }]}
          disabled
        />
      </YStack>
    </YStack>
  )
}
