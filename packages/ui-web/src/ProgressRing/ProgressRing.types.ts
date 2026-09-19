export interface ProgressRingProps {
  value: number
  size?: number
  strokeWidth?: number
  children?: React.ReactNode
  tone?: 'primary' | 'success' | 'warning' | 'danger'
  className?: string
}
