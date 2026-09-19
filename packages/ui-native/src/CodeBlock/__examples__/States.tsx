/** CodeBlock 示例：代码块（native）。 */
import { YStack } from 'tamagui'
import { CodeBlock } from '../index'

export function States() {
  return (
    <YStack padding={12} gap={16}>
      <CodeBlock
        code={`import { Button } from '@kit/ui-native'\n\n<Button>提交</Button>`}
        language="tsx"
      />
      <CodeBlock code={`const a = 1\nconst b = 2`} language="ts" showLineNumbers />
    </YStack>
  )
}
