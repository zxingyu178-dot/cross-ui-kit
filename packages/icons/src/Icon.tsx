/**
 * @kit/icons · web 图标组件（基于 lucide-react，MIT，shadcn 同源）。
 *
 * 设计约定：
 * - 全端图标只允许从 @kit/icons 引用；业务代码禁止直接 import lucide-react
 *   （本包是唯一出口，保证三栈命名/语义统一，见 registry/component-mapping.json）。
 * - 单色描边图标，颜色继承 currentColor，尺寸默认 24（对齐 24x24 图标网格）。
 * - 这里只登记"精选集"（按场景分组，见 manifest.ts）；lucide 全量 1500+ 图标
 *   如需扩充，在 LUCIDE_MAP 与 manifest 同步加条目即可，禁止在业务处临时引入。
 */
import {
  // 导航
  Home,
  Compass,
  Map,
  MapPin,
  // 箭头与 Chevron
  ArrowRight,
  ArrowLeft,
  ArrowUpRight,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  ChevronUp,
  ChevronsUpDown,
  CornerUpRight,
  // 通用操作
  Plus,
  Minus,
  X,
  Check,
  Search,
  Filter,
  SlidersHorizontal,
  Menu,
  MoreHorizontal,
  MoreVertical,
  Settings,
  Download,
  Upload,
  Share2,
  Trash2,
  Pencil,
  Copy,
  Save,
  RefreshCw,
  RotateCcw,
  Maximize,
  Minimize,
  Move,
  Printer,
  Scissors,
  ExternalLink,
  Link2,
  Eye,
  EyeOff,
  Lock,
  Unlock,
  Key,
  Bell,
  Bookmark,
  Heart,
  Star,
  Flag,
  Tag,
  // 文件与媒体
  Folder,
  File,
  FileText,
  Clipboard,
  Image,
  Camera,
  Video,
  Music,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Mic,
  Send,
  // 通讯与人
  Mail,
  Phone,
  MessageSquare,
  MessageCircle,
  User,
  Users,
  UserPlus,
  // 数据与图表
  LayoutDashboard,
  BarChart3,
  PieChart,
  LineChart,
  TrendingUp,
  Activity,
  Database,
  // 设备
  Wifi,
  Bluetooth,
  Battery,
  BatteryCharging,
  Power,
  Monitor,
  Smartphone,
  Laptop,
  // 状态与反馈
  Info,
  AlertTriangle,
  AlertCircle,
  CheckCircle,
  XCircle,
  HelpCircle,
  LogIn,
  LogOut,
  // 其他
  Globe,
  Zap,
  Sparkles,
  Award,
  Gift,
  Calendar,
  Clock,
  CreditCard,
  ShoppingCart,
  Command,
  Layers,
  Grid,
  Sun,
  Moon,
  Cloud,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

/** 精选图标映射：统一语义名（kebab-case）→ lucide 组件 */
const LUCIDE_MAP = {
  // 导航
  home: Home,
  compass: Compass,
  map: Map,
  'map-pin': MapPin,
  // 箭头
  'arrow-right': ArrowRight,
  'arrow-left': ArrowLeft,
  'arrow-up-right': ArrowUpRight,
  'chevron-right': ChevronRight,
  'chevron-left': ChevronLeft,
  'chevron-down': ChevronDown,
  'chevron-up': ChevronUp,
  'chevrons-up-down': ChevronsUpDown,
  'corner-up-right': CornerUpRight,
  // 操作
  plus: Plus,
  minus: Minus,
  x: X,
  check: Check,
  search: Search,
  filter: Filter,
  'sliders-horizontal': SlidersHorizontal,
  menu: Menu,
  'more-horizontal': MoreHorizontal,
  'more-vertical': MoreVertical,
  settings: Settings,
  download: Download,
  upload: Upload,
  share: Share2,
  trash: Trash2,
  edit: Pencil,
  copy: Copy,
  save: Save,
  refresh: RefreshCw,
  'rotate-ccw': RotateCcw,
  maximize: Maximize,
  minimize: Minimize,
  move: Move,
  printer: Printer,
  scissors: Scissors,
  'external-link': ExternalLink,
  link: Link2,
  eye: Eye,
  'eye-off': EyeOff,
  lock: Lock,
  unlock: Unlock,
  key: Key,
  bell: Bell,
  bookmark: Bookmark,
  heart: Heart,
  star: Star,
  flag: Flag,
  tag: Tag,
  // 文件媒体
  folder: Folder,
  file: File,
  'file-text': FileText,
  clipboard: Clipboard,
  image: Image,
  camera: Camera,
  video: Video,
  music: Music,
  play: Play,
  pause: Pause,
  volume: Volume2,
  'volume-x': VolumeX,
  mic: Mic,
  send: Send,
  // 通讯人
  mail: Mail,
  phone: Phone,
  message: MessageSquare,
  'message-circle': MessageCircle,
  user: User,
  users: Users,
  'user-plus': UserPlus,
  // 数据图表
  dashboard: LayoutDashboard,
  'bar-chart': BarChart3,
  'pie-chart': PieChart,
  'line-chart': LineChart,
  'trending-up': TrendingUp,
  activity: Activity,
  database: Database,
  // 设备
  wifi: Wifi,
  bluetooth: Bluetooth,
  battery: Battery,
  'battery-charging': BatteryCharging,
  power: Power,
  monitor: Monitor,
  smartphone: Smartphone,
  laptop: Laptop,
  // 状态
  info: Info,
  'alert-triangle': AlertTriangle,
  'alert-circle': AlertCircle,
  'check-circle': CheckCircle,
  'x-circle': XCircle,
  'help-circle': HelpCircle,
  login: LogIn,
  logout: LogOut,
  // 其他
  globe: Globe,
  zap: Zap,
  sparkles: Sparkles,
  award: Award,
  gift: Gift,
  calendar: Calendar,
  clock: Clock,
  'credit-card': CreditCard,
  cart: ShoppingCart,
  command: Command,
  layers: Layers,
  grid: Grid,
  sun: Sun,
  moon: Moon,
  cloud: Cloud,
} as const satisfies Record<string, LucideIcon>

/** 统一图标语义名（三栈映射以此为准） */
export type KitIconName = keyof typeof LUCIDE_MAP

export interface IconProps {
  /** 图标语义名，见 manifest 的 KIT_ICONS */
  name: KitIconName
  /** 尺寸（px），默认 24 */
  size?: number | string
  /** 描边粗细，默认 lucide 的 2 */
  strokeWidth?: number | string
  /** 额外类名（颜色用 text-* 控制 currentColor） */
  className?: string
}

/**
 * web 图标组件。颜色跟随 currentColor：用 `className="text-primary"` 等上色，
 * 不要传 fill/具体颜色，保证亮暗主题与 token 一致。
 */
export function Icon({ name, size = 24, strokeWidth = 2, className }: IconProps) {
  const Glyph = LUCIDE_MAP[name]
  return (
    <Glyph
      size={size}
      strokeWidth={strokeWidth}
      className={className}
      aria-hidden="true"
      focusable="false"
    />
  )
}
