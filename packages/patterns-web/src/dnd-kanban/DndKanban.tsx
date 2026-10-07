/**
 * DndKanban 拖拽看板（web）—— @dnd-kit（MIT）集成模板。
 * 覆盖：同列排序、跨列移动、DragOverlay 浮层、键盘拖拽（可访问性）、Pointer 按压阈值。
 * 视觉值全部用 token；拖拽是交互能力，可直接取用。
 */
import { useState } from 'react'
import {
  DndContext,
  DragOverlay,
  KeyboardSensor,
  PointerSensor,
  closestCorners,
  useDroppable,
  useSensor,
  useSensors,
  type DragEndEvent,
  type DragOverEvent,
  type DragStartEvent,
  type UniqueIdentifier,
} from '@dnd-kit/core'
import {
  SortableContext,
  arrayMove,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { Icon } from '@kit/icons'
import { Card } from '@kit/ui-web'

type ColumnId = 'todo' | 'doing' | 'done'

interface KanbanItem {
  id: string
  title: string
  tag: '设计' | '前端' | '后端' | '测试'
}

const COLUMNS: { id: ColumnId; title: string }[] = [
  { id: 'todo', title: '待办' },
  { id: 'doing', title: '进行中' },
  { id: 'done', title: '已完成' },
]

const TAG_CLASS: Record<KanbanItem['tag'], string> = {
  设计: 'bg-info-bg text-info-default',
  前端: 'bg-primary-bg text-primary-default',
  后端: 'bg-success-bg text-success-default',
  测试: 'bg-warning-bg text-warning-default',
}

const INITIAL: Record<ColumnId, KanbanItem[]> = {
  todo: [
    { id: 't1', title: '需求评审会议', tag: '设计' },
    { id: 't2', title: '设计稿输出与标注', tag: '设计' },
    { id: 't3', title: '后端接口联调', tag: '后端' },
    { id: 't4', title: '补充单元测试', tag: '测试' },
  ],
  doing: [
    { id: 't5', title: '首页模块开发', tag: '前端' },
    { id: 't6', title: '看板拖拽能力', tag: '前端' },
  ],
  done: [
    { id: 't7', title: '项目初始化', tag: '前端' },
    { id: 't8', title: '设计 token 体系', tag: '设计' },
    { id: 't9', title: '组件开发规范', tag: '测试' },
  ],
}

function CardContent({ item }: { item: KanbanItem }) {
  return (
    <div className="flex items-start justify-between gap-2">
      <div className="flex flex-col gap-1.5">
        <span className={`w-fit rounded px-1.5 py-0.5 text-caption ${TAG_CLASS[item.tag]}`}>
          {item.tag}
        </span>
        <span className="text-body-md text-text-primary">{item.title}</span>
      </div>
      <span className="mt-0.5 cursor-grab text-text-tertiary">
        <Icon name="more-vertical" size={16} />
      </span>
    </div>
  )
}

function SortableCard({ item }: { item: KanbanItem }) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: item.id,
  })
  return (
    <div
      ref={setNodeRef}
      style={{ transform: CSS.Translate.toString(transform), transition }}
      className={isDragging ? 'opacity-40' : ''}
      {...attributes}
      {...listeners}
    >
      <div className="rounded-lg border border-border-default bg-bg-card p-3 shadow-card">
        <CardContent item={item} />
      </div>
    </div>
  )
}

function Column({
  column,
  items,
  onAdd,
}: {
  column: { id: ColumnId; title: string }
  items: KanbanItem[]
  onAdd: (column: ColumnId) => void
}) {
  const { setNodeRef, isOver } = useDroppable({ id: column.id })
  return (
    <div
      ref={setNodeRef}
      className={`flex min-h-[200px] flex-1 flex-col gap-2 rounded-lg p-2.5 transition ${
        isOver ? 'bg-primary-bg' : 'bg-bg-hover'
      }`}
    >
      <div className="flex items-center justify-between px-1">
        <div className="flex items-center gap-1.5">
          <span className="text-body-sm font-medium text-text-primary">{column.title}</span>
          <span className="rounded-full bg-bg-card px-1.5 text-caption text-text-secondary">
            {items.length}
          </span>
        </div>
        <button
          type="button"
          onClick={() => onAdd(column.id)}
          className="rounded p-1 text-text-tertiary hover:text-primary-default"
          aria-label="添加卡片"
        >
          <Icon name="plus" size={16} />
        </button>
      </div>
      <SortableContext items={items.map((i) => i.id)} strategy={verticalListSortingStrategy}>
        <div className="flex flex-col gap-2">
          {items.map((item) => (
            <SortableCard key={item.id} item={item} />
          ))}
        </div>
      </SortableContext>
    </div>
  )
}

export function DndKanban() {
  const [items, setItems] = useState<Record<ColumnId, KanbanItem[]>>(INITIAL)
  const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null)
  const [seq, setSeq] = useState(10)

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 6 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates }),
  )

  const findContainer = (id: UniqueIdentifier): ColumnId | undefined => {
    if (id in items) return id as ColumnId
    return (Object.keys(items) as ColumnId[]).find((c) => items[c].some((i) => i.id === id))
  }
  const findItem = (id: UniqueIdentifier): KanbanItem | undefined =>
    (Object.values(items).flat() as KanbanItem[]).find((i) => i.id === id)

  const handleDragStart = (event: DragStartEvent) => setActiveId(event.active.id)

  const handleDragOver = (event: DragOverEvent) => {
    const { active, over } = event
    if (!over) return
    const activeContainer = findContainer(active.id)
    const overContainer = findContainer(over.id)
    if (!activeContainer || !overContainer || activeContainer === overContainer) return

    setItems((prev) => {
      const activeItems = prev[activeContainer]
      const overItems = prev[overContainer]
      const activeIndex = activeItems.findIndex((i) => i.id === active.id)
      const overIndex = overItems.findIndex((i) => i.id === over.id)
      const moving = activeItems[activeIndex]
      if (!moving) return prev
      let newIndex: number
      if (over.id in prev) {
        newIndex = overItems.length
      } else {
        const translated = active.rect.current.translated
        const isBelow = translated && over.rect && translated.top > over.rect.top + over.rect.height
        newIndex = overIndex >= 0 ? overIndex + (isBelow ? 1 : 0) : overItems.length
      }
      const nextOver = [...overItems]
      nextOver.splice(Math.min(newIndex, nextOver.length), 0, moving)
      return {
        ...prev,
        [activeContainer]: activeItems.filter((i) => i.id !== active.id),
        [overContainer]: nextOver,
      }
    })
  }

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event
    setActiveId(null)
    if (!over) return
    const activeContainer = findContainer(active.id)
    const overContainer = findContainer(over.id)
    if (!activeContainer || !overContainer) return
    const activeIndex = items[overContainer].findIndex((i) => i.id === active.id)
    const overIndex = items[overContainer].findIndex((i) => i.id === over.id)
    if (activeIndex >= 0 && overIndex >= 0 && activeIndex !== overIndex) {
      setItems((prev) => ({
        ...prev,
        [overContainer]: arrayMove(prev[overContainer], activeIndex, overIndex),
      }))
    }
  }

  const addCard = (column: ColumnId) => {
    setItems((prev) => ({
      ...prev,
      [column]: [...prev[column], { id: `n${seq}`, title: `新卡片 ${seq}`, tag: '前端' }],
    }))
    setSeq((n) => n + 1)
  }

  const activeItem = activeId ? findItem(activeId) : undefined

  return (
    <Card>
      <div className="flex flex-col gap-0.5">
        <h3 className="text-title-sm font-medium text-text-primary">迭代看板 · 拖拽管理</h3>
        <p className="text-body-sm text-text-tertiary">
          拖动卡片排序或跨列移动；卡片支持 Tab 聚焦后用方向键操作
        </p>
      </div>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
        onDragCancel={() => setActiveId(null)}
      >
        <div className="mt-4 flex flex-col gap-3 lg:flex-row">
          {COLUMNS.map((c) => (
            <Column key={c.id} column={c} items={items[c.id]} onAdd={addCard} />
          ))}
        </div>
        <DragOverlay>
          {activeItem ? (
            <div className="rounded-lg border border-primary-default bg-bg-card p-3 shadow-popover">
              <CardContent item={activeItem} />
            </div>
          ) : null}
        </DragOverlay>
      </DndContext>
    </Card>
  )
}
