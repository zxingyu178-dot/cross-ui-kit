/** CodeBlock 示例：代码块（mini）。 */
import { View } from '@tarojs/components'
import { CodeBlock } from '../index'

export function States() {
  return (
    <View style={{ padding: 12 }}>
      <CodeBlock
        code={`import { Button } from '@kit/ui-mini'\n\n<Button>提交</Button>`}
        language="tsx"
      />
    </View>
  )
}
