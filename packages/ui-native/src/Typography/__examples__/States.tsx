/** Typography 示例：各变体（native）。 */
import { YStack } from 'tamagui'
import { Typography } from '../index'

export function States() {
  return (
    <YStack padding={12} gap={16}>
      <Typography variant="h1">标题 1 H1</Typography>
      <Typography variant="h2">标题 2 H2</Typography>
      <Typography variant="h3">标题 3 H3</Typography>
      <Typography variant="h4">标题 4 H4</Typography>
      <Typography variant="body">正文内容 Body</Typography>
      <Typography variant="caption">辅助文字 Caption</Typography>
      <Typography variant="body" bold>
        加粗正文 Bold
      </Typography>
    </YStack>
  )
}
