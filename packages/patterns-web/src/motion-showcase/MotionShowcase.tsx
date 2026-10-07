/**
 * MotionShowcase 动画展示页（web）—— framer-motion（MIT）集成模板。
 * 覆盖：微交互（hover/tap）、入场编排（stagger）、列表增删（layout + AnimatePresence）、
 *      手势拖拽；并通过 MotionConfig 跟随系统"减少动态效果"。
 * 视觉值全部用 token；动画本身是交互能力，可直接取用。
 */
import { useRef, useState } from 'react'
import { AnimatePresence, MotionConfig, motion, type Variants } from 'framer-motion'
import { Icon } from '@kit/icons'
import { Card } from '@kit/ui-web'

const listContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
}
const listItem: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
}

interface Todo {
  id: number
  label: string
}

const INITIAL_TODOS: Todo[] = [
  { id: 1, label: '梳理动画清单' },
  { id: 2, label: '接入 framer-motion' },
  { id: 3, label: '编写交互演示' },
]

function SectionHeading({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="flex flex-col gap-0.5">
      <h3 className="text-title-sm font-medium text-text-primary">{title}</h3>
      <p className="text-body-sm text-text-tertiary">{desc}</p>
    </div>
  )
}

export function MotionShowcase() {
  const [playKey, setPlayKey] = useState(0)
  const [liked, setLiked] = useState(false)
  const [todos, setTodos] = useState<Todo[]>(INITIAL_TODOS)
  const [seq, setSeq] = useState(4)
  const constraintsRef = useRef<HTMLDivElement>(null)

  const addTodo = () => {
    setTodos((cur) => [...cur, { id: seq, label: `新任务 ${seq}` }])
    setSeq((n) => n + 1)
  }
  const removeTodo = (id: number) => setTodos((cur) => cur.filter((t) => t.id !== id))

  return (
    <MotionConfig reducedMotion="user">
      <div className="flex flex-col gap-4">
        <Card>
          <SectionHeading
            title="微交互 · hover / tap"
            desc="whileHover 与 whileTap 提供符合物理感的即时反馈"
          />
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <motion.button
              type="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-lg bg-primary-default px-4 py-2 text-body-md font-medium text-white"
            >
              主要按钮
            </motion.button>
            <motion.button
              type="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-lg border border-border-default bg-bg-card px-4 py-2 text-body-md text-text-primary"
            >
              次要按钮
            </motion.button>
            <motion.button
              type="button"
              onClick={() => setLiked((v) => !v)}
              whileTap={{ scale: 0.85 }}
              animate={{ scale: liked ? [1, 1.3, 1] : 1 }}
              transition={{ duration: 0.35 }}
              className="flex items-center gap-1.5 rounded-lg border border-border-default bg-bg-card px-4 py-2 text-body-md text-text-primary"
            >
              <span className={liked ? 'text-danger-default' : 'text-text-secondary'}>
                <Icon
                  name={liked ? 'heart' : 'heart'}
                  size={18}
                  className={liked ? 'fill-current' : ''}
                />
              </span>
              {liked ? '已喜欢' : '喜欢'}
            </motion.button>
          </div>
        </Card>

        <Card>
          <div className="flex items-center justify-between">
            <SectionHeading title="入场编排 · stagger" desc="父容器控制子项依次淡入上移" />
            <motion.button
              type="button"
              whileTap={{ scale: 0.95 }}
              onClick={() => setPlayKey((k) => k + 1)}
              className="flex items-center gap-1 rounded-lg border border-border-default bg-bg-card px-3 py-1.5 text-body-sm text-text-primary"
            >
              <Icon name="refresh" size={15} /> 重新播放
            </motion.button>
          </div>
          <motion.div
            key={playKey}
            variants={listContainer}
            initial="hidden"
            animate="show"
            className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3"
          >
            {['首页', '发现', '消息', '我的', '设置', '更多'].map((label) => (
              <motion.div
                key={label}
                variants={listItem}
                className="rounded-lg bg-bg-hover px-4 py-6 text-center text-body-md text-text-primary"
              >
                {label}
              </motion.div>
            ))}
          </motion.div>
        </Card>

        <Card>
          <div className="flex items-center justify-between">
            <SectionHeading
              title="列表增删 · layout"
              desc="新增/删除时其余项平滑补位（AnimatePresence）"
            />
            <motion.button
              type="button"
              whileTap={{ scale: 0.95 }}
              onClick={addTodo}
              className="flex items-center gap-1 rounded-lg bg-primary-default px-3 py-1.5 text-body-sm font-medium text-white"
            >
              <Icon name="plus" size={15} /> 添加任务
            </motion.button>
          </div>
          <ul className="mt-4 flex flex-col gap-2">
            <AnimatePresence initial={false}>
              {todos.map((t) => (
                <motion.li
                  key={t.id}
                  layout
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 24, height: 0, marginBottom: 0 }}
                  transition={{ duration: 0.25 }}
                  className="flex items-center justify-between overflow-hidden rounded-lg border border-border-default bg-bg-card px-3 py-2.5"
                >
                  <span className="text-body-md text-text-primary">{t.label}</span>
                  <button
                    type="button"
                    onClick={() => removeTodo(t.id)}
                    className="rounded p-1 text-text-tertiary hover:text-danger-default"
                    aria-label="删除"
                  >
                    <Icon name="trash" size={16} />
                  </button>
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>
        </Card>

        <Card>
          <SectionHeading
            title="手势拖拽 · drag"
            desc="在限定区域内自由拖动，松手回弹（dragConstraints）"
          />
          <div
            ref={constraintsRef}
            className="relative mt-4 h-48 overflow-hidden rounded-lg border border-dashed border-border-strong bg-bg-hover"
          >
            <motion.div
              drag
              dragConstraints={constraintsRef}
              dragElastic={0.15}
              whileDrag={{ scale: 1.08, cursor: 'grabbing' }}
              className="absolute left-4 top-4 flex h-16 w-16 cursor-grab items-center justify-center rounded-xl bg-primary-default text-white shadow-popover"
            >
              <Icon name="move" size={22} />
            </motion.div>
          </div>
        </Card>
      </div>
    </MotionConfig>
  )
}
