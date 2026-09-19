/**
 * ChatPage 聊天页模板（web）—— 消息气泡列表 + 输入栏。
 */
import { useState } from 'react'
import { Avatar, Button, Input } from '@kit/ui-web'

export interface ChatMessage {
  id: string
  role: 'me' | 'other'
  text: string
  time?: string
}

export interface ChatPageProps {
  title?: string
  messages?: ChatMessage[]
  onSend?: (text: string) => void
}

export function ChatPage({
  title = '客服小助手',
  messages = [
    { id: '1', role: 'other', text: '您好，请问有什么可以帮您？', time: '10:00' },
    { id: '2', role: 'me', text: '我想咨询一下退货流程', time: '10:01' },
    { id: '3', role: 'other', text: '好的，请提供订单号，我帮您查询。', time: '10:01' },
  ],
  onSend,
}: ChatPageProps) {
  const [input, setInput] = useState('')

  const handleSend = () => {
    const v = input.trim()
    if (!v) return
    onSend?.(v)
    setInput('')
  }

  return (
    <div className="mx-auto flex h-[600px] max-w-2xl flex-col overflow-hidden rounded-lg border border-border-default bg-bg-card">
      {/* 头部 */}
      <div className="flex items-center gap-3 border-b border-border-default px-4 py-3">
        <Avatar name="客" size="sm" />
        <div>
          <p className="text-bodyMd font-medium text-text-primary">{title}</p>
          <p className="text-bodySm text-success">在线</p>
        </div>
      </div>

      {/* 消息区 */}
      <div className="flex-1 flex flex-col gap-3 overflow-y-auto p-4">
        {messages.map((m) => (
          <div
            key={m.id}
            className={`flex items-end gap-2 ${m.role === 'me' ? 'flex-row-reverse' : ''}`}
          >
            <Avatar name={m.role === 'me' ? '我' : '客'} size="sm" />
            <div className={`max-w-[70%] ${m.role === 'me' ? 'text-right' : ''}`}>
              <div
                className={`inline-block rounded-lg px-3 py-2 text-bodyMd ${
                  m.role === 'me'
                    ? 'bg-primary-default text-white'
                    : 'bg-bg-secondary text-text-primary'
                }`}
              >
                {m.text}
              </div>
              {m.time ? <p className="mt-1 text-bodySm text-text-tertiary">{m.time}</p> : null}
            </div>
          </div>
        ))}
      </div>

      {/* 输入栏 */}
      <div className="flex items-center gap-2 border-t border-border-default p-3">
        <Input
          value={input}
          onChange={setInput}
          placeholder="输入消息…"
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <Button variant="primary" onClick={handleSend}>
          发送
        </Button>
      </div>
    </div>
  )
}
