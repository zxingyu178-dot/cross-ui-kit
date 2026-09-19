/**
 * CodeBlock 代码块（native：iOS / Android）。
 */
import { Text, XStack, YStack } from 'tamagui'
import type { CodeBlockProps } from './CodeBlock.types'

export function CodeBlock({
  code,
  language = 'text',
  showLineNumbers = false,
  style,
}: CodeBlockProps) {
  const lines = code.split('\n')
  return (
    <YStack
      overflow="hidden"
      borderRadius="$md"
      borderWidth={1}
      borderColor="$borderDefault"
      backgroundColor="#0f172a"
      style={style}
    >
      <XStack
        paddingHorizontal={16}
        paddingVertical={8}
        borderBottomWidth={1}
        borderBottomColor="rgba(255,255,255,0.1)"
      >
        <Text fontSize={12} color="#94a3b8">
          {language}
        </Text>
      </XStack>
      <YStack padding={16}>
        {lines.map((line, i) => (
          <XStack key={i}>
            {showLineNumbers && (
              <Text width={24} marginRight={16} textAlign="right" fontSize={12} color="#475569">
                {i + 1}
              </Text>
            )}
            <Text flex={1} fontSize={13} color="#e2e8f0" lineHeight={20}>
              {line || ' '}
            </Text>
          </XStack>
        ))}
      </YStack>
    </YStack>
  )
}
