/** Upload 示例：基础/多选/禁用（mini）。 */
import { useState } from 'react'
import { Text, View } from '@tarojs/components'
import { Upload } from '../index'
import type { UploadFile } from '../Upload.types'

export function States() {
  const [files1, setFiles1] = useState<UploadFile[]>([])
  return (
    <View style={{ display: 'flex', flexDirection: 'column', gap: 24, padding: 12 }}>
      <View style={{ display: 'flex', flexDirection: 'column', gap: 8, width: 280 }}>
        <Text style={{ fontSize: 12, color: 'var(--kit-color-text-tertiary)' }}>
          基础单选（当前：{files1.length} 个文件）
        </Text>
        <Upload value={files1} onChange={setFiles1} />
      </View>
      <View style={{ display: 'flex', flexDirection: 'column', gap: 8, width: 280 }}>
        <Text style={{ fontSize: 12, color: 'var(--kit-color-text-tertiary)' }}>禁用</Text>
        <Upload
          defaultValue={[{ uid: '3', name: '已上传文件.docx', size: 102400, status: 'done' }]}
          disabled
        />
      </View>
    </View>
  )
}
