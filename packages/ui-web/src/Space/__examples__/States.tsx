import { Space } from '../index'
import { Button } from '../../Button'
import { Tag } from '../../Tag'

export function States() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">水平间距（xs/sm/md/lg/xl）</span>
        <Space size="xs">
          <Button size="sm">xs</Button>
          <Button size="sm">xs</Button>
        </Space>
        <Space size="sm">
          <Button size="sm">sm</Button>
          <Button size="sm">sm</Button>
        </Space>
        <Space size="md">
          <Button size="sm">md</Button>
          <Button size="sm">md</Button>
        </Space>
        <Space size="lg">
          <Button size="sm">lg</Button>
          <Button size="sm">lg</Button>
        </Space>
        <Space size="xl">
          <Button size="sm">xl</Button>
          <Button size="sm">xl</Button>
        </Space>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">垂直间距</span>
        <Space direction="vertical" size="sm">
          <Button size="sm">按钮 1</Button>
          <Button size="sm">按钮 2</Button>
          <Button size="sm">按钮 3</Button>
        </Space>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">自定义数值间距（20px）+ 换行</span>
        <Space size={20} wrap>
          <Tag variant="primary">标签 1</Tag>
          <Tag variant="success">标签 2</Tag>
          <Tag variant="warning">标签 3</Tag>
          <Tag variant="danger">标签 4</Tag>
          <Tag variant="info">标签 5</Tag>
          <Tag variant="neutral">标签 6</Tag>
        </Space>
      </div>
    </div>
  )
}
