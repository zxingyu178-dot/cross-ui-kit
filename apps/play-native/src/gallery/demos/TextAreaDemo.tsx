import { useState } from 'react'
import { TextArea } from '@kit/ui-native'
import { DemoScreen, Section } from '../DemoShell'

export default function TextAreaDemo() {
  const [v, setV] = useState('')
  return (
    <DemoScreen title="TextArea 多行输入">
      <Section label="受控 + 字数统计">
        <TextArea
          value={v}
          onChange={setV}
          placeholder="请输入多行内容"
          showCount
          maxLength={200}
          rows={4}
        />
      </Section>

      <Section label="自适应高度">
        <TextArea placeholder="内容越多高度越高" autoSize />
      </Section>

      <Section label="禁用">
        <TextArea disabled value="不可编辑的多行内容" />
      </Section>
    </DemoScreen>
  )
}
