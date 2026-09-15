import type { ReactNode } from 'react'
import { Avatar } from '../index'

function Row({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-3">
      <span className="text-caption text-text-tertiary">{label}</span>
      <div className="flex flex-row items-center gap-3">{children}</div>
    </div>
  )
}

// 内联 SVG data URI，保证离线也能展示图片头像
const svgAvatar = (bg: string, fg: string, letter: string) =>
  `data:image/svg+xml;utf8,${encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='96' height='96'><rect width='96' height='96' fill='${bg}'/><text x='50%' y='50%' dy='.35em' text-anchor='middle' font-size='40' font-family='sans-serif' fill='${fg}'>${letter}</text></svg>`,
  )}`

export function States() {
  return (
    <div className="flex flex-col gap-6">
      <Row label="文字头像（无 src，取首字符）">
        <Avatar name="张伟" />
        <Avatar name="李娜" />
        <Avatar name="Wang Wu" />
        <Avatar name="设备 A-01" />
      </Row>

      <Row label="尺寸 sm / md / lg（32 / 40 / 48）">
        <Avatar name="赵" size="sm" />
        <Avatar name="钱" size="md" />
        <Avatar name="孙" size="lg" />
      </Row>

      <Row label="形状 square（圆角方形）">
        <Avatar name="周" shape="square" />
        <Avatar name="吴" shape="square" size="lg" />
      </Row>

      <Row label="图片头像（src）与加载失败兜底">
        <Avatar src={svgAvatar('#2563eb', '#ffffff', 'A')} name="陈晨" />
        <Avatar src="https://invalid.example.com/broken.png" name="林琳" />
      </Row>

      <Row label="自定义内容（children，如图标/文字）">
        <Avatar>
          <span className="text-body-md font-medium text-primary-default">机</span>
        </Avatar>
        <Avatar size="lg" shape="square">
          <span className="text-title-sm font-medium text-primary-default">+</span>
        </Avatar>
      </Row>
    </div>
  )
}
