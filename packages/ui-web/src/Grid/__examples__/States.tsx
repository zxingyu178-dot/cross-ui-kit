import { Row, Col } from '../index'

const boxStyle =
  'flex h-10 items-center justify-center rounded bg-primary-default/10 text-bodySm text-primary-default'

export function States() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">基础栅格（24 等分）</span>
        <Row gutter={8}>
          <Col span={8}>
            <div className={boxStyle}>col-8</div>
          </Col>
          <Col span={8}>
            <div className={boxStyle}>col-8</div>
          </Col>
          <Col span={8}>
            <div className={boxStyle}>col-8</div>
          </Col>
        </Row>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">不等分（6/12/6）</span>
        <Row gutter={8}>
          <Col span={6}>
            <div className={boxStyle}>col-6</div>
          </Col>
          <Col span={12}>
            <div className={boxStyle}>col-12</div>
          </Col>
          <Col span={6}>
            <div className={boxStyle}>col-6</div>
          </Col>
        </Row>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">偏移（offset）</span>
        <Row gutter={8}>
          <Col span={6}>
            <div className={boxStyle}>col-6</div>
          </Col>
          <Col span={6} offset={6}>
            <div className={boxStyle}>col-6 offset-6</div>
          </Col>
        </Row>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">水平对齐（center）</span>
        <Row gutter={8} justify="center">
          <Col span={4}>
            <div className={boxStyle}>1</div>
          </Col>
          <Col span={4}>
            <div className={boxStyle}>2</div>
          </Col>
          <Col span={4}>
            <div className={boxStyle}>3</div>
          </Col>
        </Row>
      </div>
    </div>
  )
}
