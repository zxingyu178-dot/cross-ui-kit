/** Grid 示例：基础/不等分/偏移/对齐（mini）。 */
import { View } from '@tarojs/components'
import { Row, Col } from '../index'

const boxStyle = {
  height: 40,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 4,
  background: 'rgba(37,99,235,0.1)',
  color: '#2563eb',
  fontSize: 13,
}

export function States() {
  return (
    <View style={{ display: 'flex', flexDirection: 'column', gap: 24, padding: 12 }}>
      <View style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Row gutter={8}>
          <Col span={8}>
            <View style={boxStyle}>col-8</View>
          </Col>
          <Col span={8}>
            <View style={boxStyle}>col-8</View>
          </Col>
          <Col span={8}>
            <View style={boxStyle}>col-8</View>
          </Col>
        </Row>
      </View>
      <View style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Row gutter={8}>
          <Col span={6}>
            <View style={boxStyle}>col-6</View>
          </Col>
          <Col span={12}>
            <View style={boxStyle}>col-12</View>
          </Col>
          <Col span={6}>
            <View style={boxStyle}>col-6</View>
          </Col>
        </Row>
      </View>
    </View>
  )
}
