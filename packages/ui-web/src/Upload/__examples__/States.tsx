import { useState } from 'react'
import { Upload } from '../index'
import type { UploadFile } from '../Upload.types'

export function States() {
  const [files1, setFiles1] = useState<UploadFile[]>([])
  const [files2, setFiles2] = useState<UploadFile[]>([
    { uid: '1', name: '项目说明书.pdf', size: 2048000, status: 'done' },
    { uid: '2', name: '设计稿.png', size: 512000, status: 'done' },
  ])
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">
          基础单选（当前：{files1.length} 个文件）
        </span>
        <Upload value={files1} onChange={setFiles1} />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">
          多选 + 最大 5 个 + 仅图片（当前：{files2.length} 个）
        </span>
        <Upload value={files2} onChange={setFiles2} multiple maxCount={5} accept="image/*" />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">禁用</span>
        <Upload
          defaultValue={[{ uid: '3', name: '已上传文件.docx', size: 102400, status: 'done' }]}
          disabled
        />
      </div>
    </div>
  )
}
