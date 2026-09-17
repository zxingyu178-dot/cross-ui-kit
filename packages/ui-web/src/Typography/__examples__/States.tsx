import { Typography } from '../index'

export function States() {
  return (
    <div className="flex flex-col gap-4">
      <Typography variant="h1">标题 1 H1</Typography>
      <Typography variant="h2">标题 2 H2</Typography>
      <Typography variant="h3">标题 3 H3</Typography>
      <Typography variant="h4">标题 4 H4</Typography>
      <Typography variant="body">
        正文内容 Body —— 这是一段正文文字，用于展示 body 变体的样式。
      </Typography>
      <Typography variant="caption">辅助文字 Caption —— 这是一段辅助说明文字。</Typography>
      <div className="w-48">
        <Typography variant="body" ellipsis>
          这是一段很长的文字，会被省略号截断显示。
        </Typography>
      </div>
      <Typography variant="body" bold>
        加粗正文 Bold Body
      </Typography>
      <Typography variant="body" color="#2563eb">
        自定义颜色 Custom Color
      </Typography>
    </div>
  )
}
