import { CodeBlock } from '../index'

export function States() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">基础代码块</span>
        <CodeBlock
          code={`import { Button } from '@kit/ui-web'\n\n<Button variant="primary">提交</Button>`}
          language="tsx"
        />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">带行号 + 不可复制</span>
        <CodeBlock
          code={`const sum = (a: number, b: number): number => {\n  return a + b\n}\n\nsum(1, 2)`}
          language="ts"
          showLineNumbers
          copyable={false}
        />
      </div>
    </div>
  )
}
