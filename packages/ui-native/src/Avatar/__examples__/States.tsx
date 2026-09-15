/** Avatar 示例：文字头像 / 三尺寸 / 方形 / 图片失败兜底 / 自定义（native）。 */
import type { ReactNode } from 'react'
import { Text, XStack, YStack } from 'tamagui'
import { Avatar } from '../index'

function Row({ label, children }: { label: string; children: ReactNode }) {
  return (
    <YStack gap="$3">
      <Text fontSize="$caption" color="$textTertiary">
        {label}
      </Text>
      <XStack alignItems="center" gap="$3">
        {children}
      </XStack>
    </YStack>
  )
}

export function States() {
  return (
    <YStack gap="$6" padding="$4" backgroundColor="$bgPage">
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

      <Row label="图片加载失败兜底（无效 src 回退首字）">
        <Avatar src="https://invalid.example.com/broken.png" name="林琳" />
      </Row>

      <Row label="自定义内容（children，如图标/文字）">
        <Avatar>
          <Text fontSize="$bodyMd" fontWeight="medium" color="$primaryDefault">
            机
          </Text>
        </Avatar>
        <Avatar size="lg" shape="square">
          <Text fontSize="$titleSm" fontWeight="medium" color="$primaryDefault">
            +
          </Text>
        </Avatar>
      </Row>
    </YStack>
  )
}
