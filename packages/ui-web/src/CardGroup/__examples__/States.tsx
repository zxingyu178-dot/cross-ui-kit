import { CardGroup } from '../index'
import type { CardGroupItem } from '../CardGroup.types'

const items: CardGroupItem[] = [
  { key: '1', title: '卡片一', content: '这是卡片一的内容，展示基础信息。' },
  { key: '2', title: '卡片二', content: '这是卡片二的内容，展示基础信息。' },
  { key: '3', title: '卡片三', content: '这是卡片三的内容，展示基础信息。' },
  { key: '4', title: '卡片四', content: '这是卡片四的内容，展示基础信息。' },
  { key: '5', title: '卡片五', content: '这是卡片五的内容，展示基础信息。' },
  { key: '6', title: '卡片六', content: '这是卡片六的内容，展示基础信息。' },
]

export function States() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">基础卡片组（3列）</span>
        <CardGroup items={items.slice(0, 3)} columns={3} />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">2列卡片组</span>
        <CardGroup items={items.slice(0, 4)} columns={2} />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">带封面卡片组</span>
        <CardGroup
          items={[
            {
              key: '1',
              title: '封面卡片一',
              content: '带封面的卡片内容。',
              cover: 'https://picsum.photos/seed/1/400/200',
            },
            {
              key: '2',
              title: '封面卡片二',
              content: '带封面的卡片内容。',
              cover: 'https://picsum.photos/seed/2/400/200',
            },
            {
              key: '3',
              title: '封面卡片三',
              content: '带封面的卡片内容。',
              cover: 'https://picsum.photos/seed/3/400/200',
            },
          ]}
          columns={3}
        />
      </div>
    </div>
  )
}
