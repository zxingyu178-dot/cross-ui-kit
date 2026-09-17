import { DropdownMenu } from '../index'

export function States() {
  return (
    <div className="flex flex-wrap items-start gap-6">
      <DropdownMenu
        trigger={
          <button className="rounded-md border border-border-default bg-bg-card px-3 py-2 text-bodyMd text-text-primary hover:bg-bg-muted">
            操作 ▼
          </button>
        }
        items={[
          { key: 'edit', label: '编辑', onClick: () => {} },
          { key: 'copy', label: '复制', onClick: () => {} },
          { key: 'export', label: '导出', disabled: true },
          { key: 'delete', label: '删除', danger: true, onClick: () => {} },
        ]}
      />
      <DropdownMenu
        trigger={
          <button className="rounded-md border border-border-default bg-bg-card px-3 py-2 text-bodyMd text-text-primary hover:bg-bg-muted">
            右对齐 ▼
          </button>
        }
        align="end"
        items={[
          { key: 'a', label: '选项 A' },
          { key: 'b', label: '选项 B' },
          { key: 'c', label: '选项 C' },
        ]}
      />
    </div>
  )
}
