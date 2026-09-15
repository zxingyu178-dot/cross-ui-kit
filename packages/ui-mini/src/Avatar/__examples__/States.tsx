/** Avatar 示例：文字头像 / 三尺寸 / 方形 / 图片与失败兜底 / 自定义（mini）。 */
import type { ReactNode } from 'react'
import { Text, View } from '@tarojs/components'
import { Avatar } from '../index'

function Row({ label, children }: { label: string; children: ReactNode }) {
  return (
    <View style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Text
        style={{
          display: 'block',
          fontSize: 'var(--kit-font-size-caption)',
          color: 'var(--kit-color-text-tertiary)',
        }}
      >
        {label}
      </Text>
      <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 12 }}>
        {children}
      </View>
    </View>
  )
}

const svgAvatar = (bg: string, fg: string, letter: string) =>
  `data:image/svg+xml;utf8,${encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='96' height='96'><rect width='96' height='96' fill='${bg}'/><text x='50%' y='50%' dy='.35em' text-anchor='middle' font-size='40' font-family='sans-serif' fill='${fg}'>${letter}</text></svg>`,
  )}`

export function States() {
  return (
    <View style={{ display: 'flex', flexDirection: 'column', gap: 24, padding: 16 }}>
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
          <Text
            style={{
              fontSize: 'var(--kit-font-size-body-md)',
              fontWeight: 'var(--kit-font-weight-medium)',
              color: 'var(--kit-color-primary-default)',
            }}
          >
            机
          </Text>
        </Avatar>
        <Avatar size="lg" shape="square">
          <Text
            style={{
              fontSize: 'var(--kit-font-size-title-sm)',
              fontWeight: 'var(--kit-font-weight-medium)',
              color: 'var(--kit-color-primary-default)',
            }}
          >
            +
          </Text>
        </Avatar>
      </Row>
    </View>
  )
}
