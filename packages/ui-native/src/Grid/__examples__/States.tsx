/** Grid 示例：基础/不等分/偏移/对齐（native）。 */
import { YStack } from 'tamagui'
import { Row, Col } from '../index'

const boxStyle = {
  height: 40,
  borderRadius: 4,
  backgroundColor: 'rgba(37,99,235,0.1)',
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
}

export function States() {
  return (
    <YStack padding={12} gap={24}>
      <Row gutter={8}>
        <Col span={8}>
          <YStack style={boxStyle}>
            <YStack>col-8</YStack>
          </YStack>
        </Col>
        <Col span={8}>
          <YStack style={boxStyle}>
            <YStack>col-8</YStack>
          </YStack>
        </Col>
        <Col span={8}>
          <YStack style={boxStyle}>
            <YStack>col-8</YStack>
          </YStack>
        </Col>
      </Row>
      <Row gutter={8}>
        <Col span={6}>
          <YStack style={boxStyle}>
            <YStack>col-6</YStack>
          </YStack>
        </Col>
        <Col span={12}>
          <YStack style={boxStyle}>
            <YStack>col-12</YStack>
          </YStack>
        </Col>
        <Col span={6}>
          <YStack style={boxStyle}>
            <YStack>col-6</YStack>
          </YStack>
        </Col>
      </Row>
    </YStack>
  )
}
