import type { ViewStyle } from 'react-native'

export type CalendarMode = 'date' | 'month' | 'year'

export interface CalendarProps {
  value?: Date
  defaultValue?: Date
  onChange?: (date: Date) => void
  mode?: CalendarMode
  fullscreen?: boolean
  style?: ViewStyle
}
