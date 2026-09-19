/**
 * CodeBlock 代码块（mini：小程序 / 移动 H5）。
 */
import { Text, View } from '@tarojs/components'
import type { CodeBlockProps } from './CodeBlock.types'
import './CodeBlock.scss'

export function CodeBlock({
  code,
  language = 'text',
  showLineNumbers = false,
  className = '',
}: CodeBlockProps) {
  const lines = code.split('\n')
  return (
    <View className={`kit-codeblock ${className}`.trim()}>
      <View className="kit-codeblock__header">
        <Text className="kit-codeblock__lang">{language}</Text>
      </View>
      <View className="kit-codeblock__body">
        {showLineNumbers
          ? lines.map((line, i) => (
              <View key={i} className="kit-codeblock__line">
                <Text className="kit-codeblock__lineno">{i + 1}</Text>
                <Text className="kit-codeblock__code">{line || ' '}</Text>
              </View>
            ))
          : lines.map((line, i) => (
              <View key={i} className="kit-codeblock__line">
                <Text className="kit-codeblock__code">{line || ' '}</Text>
              </View>
            ))}
      </View>
    </View>
  )
}
