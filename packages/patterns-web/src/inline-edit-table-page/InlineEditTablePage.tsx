/**
 * InlineEditTablePage 行内编辑表格页（web）—— 点击单元格切换编辑态 + 增删行。
 */
import { useState } from 'react'
import { Card, Button, Input, Select, Tag } from '@kit/ui-web'

interface Row {
  id: string
  name: string
  role: string
  dept: string
  status: '在职' | '休假' | '离职'
}

const initial: Row[] = [
  { id: '1', name: '赵星宇', role: '电器开发', dept: '技术部', status: '在职' },
  { id: '2', name: '李明', role: 'UI 设计', dept: '设计部', status: '在职' },
  { id: '3', name: '王芳', role: '后端开发', dept: '技术部', status: '休假' },
]

export function InlineEditTablePage() {
  const [rows, setRows] = useState(initial)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [draft, setDraft] = useState<Row | null>(null)

  const startEdit = (row: Row) => {
    setEditingId(row.id)
    setDraft({ ...row })
  }

  const save = () => {
    if (!draft) return
    setRows((rs) => rs.map((r) => (r.id === draft.id ? draft : r)))
    setEditingId(null)
    setDraft(null)
  }

  const remove = (id: string) => setRows((rs) => rs.filter((r) => r.id !== id))

  const add = () => {
    const id = String(Date.now())
    setRows((rs) => [...rs, { id, name: '新成员', role: '', dept: '', status: '在职' }])
    startEdit({ id, name: '新成员', role: '', dept: '', status: '在职' })
  }

  return (
    <Card className="mx-auto max-w-3xl">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-titleSm font-medium text-text-primary">成员管理（行内编辑）</h3>
        <Button variant="primary" size="sm" onClick={add}>
          + 添加成员
        </Button>
      </div>

      <table className="w-full text-bodySm">
        <thead>
          <tr className="border-b border-border-default text-left text-text-secondary">
            <th className="py-2">姓名</th>
            <th>岗位</th>
            <th>部门</th>
            <th>状态</th>
            <th className="text-right">操作</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => {
            const isEditing = editingId === row.id && draft
            return (
              <tr key={row.id} className="border-b border-border-default">
                <td className="py-2">
                  {isEditing ? (
                    <Input
                      value={draft.name}
                      onChange={(v) => setDraft({ ...draft, name: v })}
                      size="sm"
                    />
                  ) : (
                    row.name
                  )}
                </td>
                <td>
                  {isEditing ? (
                    <Input
                      value={draft.role}
                      onChange={(v) => setDraft({ ...draft, role: v })}
                      size="sm"
                    />
                  ) : (
                    row.role
                  )}
                </td>
                <td>
                  {isEditing ? (
                    <Select
                      value={draft.dept}
                      onChange={(v) => setDraft({ ...draft, dept: v })}
                      options={[
                        { label: '技术部', value: '技术部' },
                        { label: '设计部', value: '设计部' },
                        { label: '产品部', value: '产品部' },
                      ]}
                    />
                  ) : (
                    row.dept
                  )}
                </td>
                <td>
                  {isEditing ? (
                    <Select
                      value={draft.status}
                      onChange={(v) => setDraft({ ...draft, status: v as Row['status'] })}
                      options={[
                        { label: '在职', value: '在职' },
                        { label: '休假', value: '休假' },
                        { label: '离职', value: '离职' },
                      ]}
                    />
                  ) : (
                    <Tag
                      variant={
                        row.status === '在职'
                          ? 'success'
                          : row.status === '休假'
                            ? 'warning'
                            : 'neutral'
                      }
                    >
                      {row.status}
                    </Tag>
                  )}
                </td>
                <td className="text-right">
                  {isEditing ? (
                    <div className="flex justify-end gap-1">
                      <Button variant="primary" size="sm" onClick={save}>
                        保存
                      </Button>
                      <Button variant="ghost" size="sm" onClick={() => setEditingId(null)}>
                        取消
                      </Button>
                    </div>
                  ) : (
                    <div className="flex justify-end gap-1">
                      <Button variant="secondary" size="sm" onClick={() => startEdit(row)}>
                        编辑
                      </Button>
                      <Button variant="ghost" size="sm" onClick={() => remove(row.id)}>
                        删除
                      </Button>
                    </div>
                  )}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </Card>
  )
}
