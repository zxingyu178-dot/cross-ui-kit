/**
 * @kit/icons · 精选图标清单（机器可读，供 IconGallery 搜索/分类与 AI 检索）。
 * name 必须与 Icon.tsx 的 LUCIDE_MAP 键一致；label 为中文展示名；
 * keywords 供模糊搜索（英文原名 / 别名 / 中文同义词）。
 */
import type { KitIconName } from './Icon'

export type IconCategory =
  '导航' | '箭头' | '操作' | '文件媒体' | '通讯' | '数据图表' | '设备' | '状态' | '其他'

export interface IconMeta {
  name: KitIconName
  label: string
  category: IconCategory
  keywords: string[]
}

export const KIT_ICONS: IconMeta[] = [
  // 导航
  { name: 'home', label: '首页', category: '导航', keywords: ['home', 'house', '主页', '房子'] },
  {
    name: 'compass',
    label: '发现',
    category: '导航',
    keywords: ['compass', 'explore', '罗盘', '浏览'],
  },
  { name: 'map', label: '地图', category: '导航', keywords: ['map', '地图'] },
  {
    name: 'map-pin',
    label: '定位',
    category: '导航',
    keywords: ['map-pin', 'location', 'pin', '位置', '标记'],
  },
  // 箭头
  {
    name: 'arrow-right',
    label: '右箭头',
    category: '箭头',
    keywords: ['arrow-right', 'right', '向右'],
  },
  {
    name: 'arrow-left',
    label: '左箭头',
    category: '箭头',
    keywords: ['arrow-left', 'left', '向左', '返回'],
  },
  {
    name: 'arrow-up-right',
    label: '右上箭头',
    category: '箭头',
    keywords: ['arrow-up-right', 'external', '右上'],
  },
  {
    name: 'chevron-right',
    label: '右尖括号',
    category: '箭头',
    keywords: ['chevron-right', 'next', '下一级'],
  },
  {
    name: 'chevron-left',
    label: '左尖括号',
    category: '箭头',
    keywords: ['chevron-left', 'prev', '上一级'],
  },
  {
    name: 'chevron-down',
    label: '下尖括号',
    category: '箭头',
    keywords: ['chevron-down', 'expand', '展开', '向下'],
  },
  {
    name: 'chevron-up',
    label: '上尖括号',
    category: '箭头',
    keywords: ['chevron-up', 'collapse', '收起', '向上'],
  },
  {
    name: 'chevrons-up-down',
    label: '上下展开',
    category: '箭头',
    keywords: ['chevrons-up-down', 'select', '排序柄'],
  },
  {
    name: 'corner-up-right',
    label: '转角右上',
    category: '箭头',
    keywords: ['corner-up-right', 'return', '转发'],
  },
  // 操作
  { name: 'plus', label: '新增', category: '操作', keywords: ['plus', 'add', '加', '添加'] },
  { name: 'minus', label: '减少', category: '操作', keywords: ['minus', 'remove', '减'] },
  { name: 'x', label: '关闭', category: '操作', keywords: ['x', 'close', 'clear', '取消', '叉'] },
  { name: 'check', label: '确认', category: '操作', keywords: ['check', 'done', '对勾', '完成'] },
  {
    name: 'search',
    label: '搜索',
    category: '操作',
    keywords: ['search', 'find', '放大镜', '查找'],
  },
  { name: 'filter', label: '筛选', category: '操作', keywords: ['filter', 'funnel', '过滤'] },
  {
    name: 'sliders-horizontal',
    label: '调节',
    category: '操作',
    keywords: ['sliders', 'controls', '滑块', '参数'],
  },
  {
    name: 'menu',
    label: '菜单',
    category: '操作',
    keywords: ['menu', 'hamburger', '汉堡', '目录'],
  },
  {
    name: 'more-horizontal',
    label: '更多(横)',
    category: '操作',
    keywords: ['more', 'horizontal', 'ellipsis', '省略号'],
  },
  {
    name: 'more-vertical',
    label: '更多(竖)',
    category: '操作',
    keywords: ['more', 'vertical', 'ellipsis', '省略号'],
  },
  {
    name: 'settings',
    label: '设置',
    category: '操作',
    keywords: ['settings', 'gear', 'cog', '齿轮', '设定'],
  },
  { name: 'download', label: '下载', category: '操作', keywords: ['download', '下载'] },
  { name: 'upload', label: '上传', category: '操作', keywords: ['upload', '上传'] },
  { name: 'share', label: '分享', category: '操作', keywords: ['share', '分享'] },
  {
    name: 'trash',
    label: '删除',
    category: '操作',
    keywords: ['trash', 'delete', 'remove', '垃圾桶', '删除'],
  },
  {
    name: 'edit',
    label: '编辑',
    category: '操作',
    keywords: ['edit', 'pencil', 'write', '铅笔', '修改'],
  },
  { name: 'copy', label: '复制', category: '操作', keywords: ['copy', 'duplicate', '副本'] },
  { name: 'save', label: '保存', category: '操作', keywords: ['save', 'floppy', '存盘'] },
  {
    name: 'refresh',
    label: '刷新',
    category: '操作',
    keywords: ['refresh', 'reload', 'sync', '刷新', '重载'],
  },
  {
    name: 'rotate-ccw',
    label: '撤销旋转',
    category: '操作',
    keywords: ['rotate-ccw', 'undo', 'reset', '重置', '撤销'],
  },
  {
    name: 'maximize',
    label: '最大化',
    category: '操作',
    keywords: ['maximize', 'expand', '全屏', '放大'],
  },
  {
    name: 'minimize',
    label: '最小化',
    category: '操作',
    keywords: ['minimize', 'collapse', '缩小'],
  },
  {
    name: 'move',
    label: '拖动',
    category: '操作',
    keywords: ['move', 'drag', 'pan', '移动', '拖拽', '抓手'],
  },
  { name: 'printer', label: '打印', category: '操作', keywords: ['printer', 'print', '打印'] },
  { name: 'scissors', label: '剪切', category: '操作', keywords: ['scissors', 'cut', '剪刀'] },
  {
    name: 'external-link',
    label: '外链',
    category: '操作',
    keywords: ['external-link', 'open', '新窗口', '外部链接'],
  },
  { name: 'link', label: '链接', category: '操作', keywords: ['link', 'url', 'chain', '连接'] },
  {
    name: 'eye',
    label: '查看',
    category: '操作',
    keywords: ['eye', 'show', 'view', '可见', '眼睛'],
  },
  {
    name: 'eye-off',
    label: '隐藏',
    category: '操作',
    keywords: ['eye-off', 'hide', 'invisible', '不可见'],
  },
  { name: 'lock', label: '锁定', category: '操作', keywords: ['lock', 'secure', '锁', '加密'] },
  { name: 'unlock', label: '解锁', category: '操作', keywords: ['unlock', 'open', '解锁'] },
  { name: 'key', label: '密钥', category: '操作', keywords: ['key', 'password', '钥匙', '密码'] },
  {
    name: 'bell',
    label: '通知',
    category: '操作',
    keywords: ['bell', 'notification', 'alert', '铃铛', '提醒'],
  },
  { name: 'bookmark', label: '收藏', category: '操作', keywords: ['bookmark', 'save', '书签'] },
  {
    name: 'heart',
    label: '喜欢',
    category: '操作',
    keywords: ['heart', 'like', 'love', '心', '点赞'],
  },
  {
    name: 'star',
    label: '星标',
    category: '操作',
    keywords: ['star', 'favorite', 'rate', '星星', '评分'],
  },
  { name: 'flag', label: '标记', category: '操作', keywords: ['flag', 'report', '旗帜', '举报'] },
  { name: 'tag', label: '标签', category: '操作', keywords: ['tag', 'label', '标签'] },
  // 文件媒体
  {
    name: 'folder',
    label: '文件夹',
    category: '文件媒体',
    keywords: ['folder', 'directory', '目录'],
  },
  { name: 'file', label: '文件', category: '文件媒体', keywords: ['file', 'document', '文档'] },
  {
    name: 'file-text',
    label: '文本文件',
    category: '文件媒体',
    keywords: ['file-text', 'document', 'txt', '文本'],
  },
  {
    name: 'clipboard',
    label: '剪贴板',
    category: '文件媒体',
    keywords: ['clipboard', 'paste', '粘贴'],
  },
  {
    name: 'image',
    label: '图片',
    category: '文件媒体',
    keywords: ['image', 'picture', 'photo', '图片', '照片'],
  },
  {
    name: 'camera',
    label: '相机',
    category: '文件媒体',
    keywords: ['camera', 'photo', '拍照', '照相机'],
  },
  {
    name: 'video',
    label: '视频',
    category: '文件媒体',
    keywords: ['video', 'film', '视频', '影片'],
  },
  {
    name: 'music',
    label: '音乐',
    category: '文件媒体',
    keywords: ['music', 'note', 'audio', '音乐', '音频'],
  },
  {
    name: 'play',
    label: '播放',
    category: '文件媒体',
    keywords: ['play', 'start', '播放', '开始'],
  },
  { name: 'pause', label: '暂停', category: '文件媒体', keywords: ['pause', '暂停'] },
  {
    name: 'volume',
    label: '音量',
    category: '文件媒体',
    keywords: ['volume', 'sound', 'audio', '声音', '音量'],
  },
  { name: 'volume-x', label: '静音', category: '文件媒体', keywords: ['volume-x', 'mute', '静音'] },
  {
    name: 'mic',
    label: '麦克风',
    category: '文件媒体',
    keywords: ['mic', 'microphone', 'record', '话筒', '录音'],
  },
  {
    name: 'send',
    label: '发送',
    category: '文件媒体',
    keywords: ['send', 'paper-plane', '发送', '纸飞机'],
  },
  // 通讯
  {
    name: 'mail',
    label: '邮件',
    category: '通讯',
    keywords: ['mail', 'email', 'envelope', '邮件', '信封'],
  },
  {
    name: 'phone',
    label: '电话',
    category: '通讯',
    keywords: ['phone', 'call', 'telephone', '电话', '通话'],
  },
  {
    name: 'message',
    label: '消息',
    category: '通讯',
    keywords: ['message', 'chat', 'comment', '消息', '评论'],
  },
  {
    name: 'message-circle',
    label: '圆形消息',
    category: '通讯',
    keywords: ['message-circle', 'chat', '聊天'],
  },
  {
    name: 'user',
    label: '用户',
    category: '通讯',
    keywords: ['user', 'account', 'profile', 'person', '用户', '个人'],
  },
  {
    name: 'users',
    label: '用户组',
    category: '通讯',
    keywords: ['users', 'group', 'team', 'people', '成员', '团队'],
  },
  {
    name: 'user-plus',
    label: '添加用户',
    category: '通讯',
    keywords: ['user-plus', 'add-friend', 'register', '加好友', '注册'],
  },
  // 数据图表
  {
    name: 'dashboard',
    label: '仪表盘',
    category: '数据图表',
    keywords: ['dashboard', 'layout', 'overview', '控制台', '概览'],
  },
  {
    name: 'bar-chart',
    label: '柱状图',
    category: '数据图表',
    keywords: ['bar-chart', 'chart', 'graph', '柱状图', '条形图'],
  },
  {
    name: 'pie-chart',
    label: '饼图',
    category: '数据图表',
    keywords: ['pie-chart', 'chart', '饼图'],
  },
  {
    name: 'line-chart',
    label: '折线图',
    category: '数据图表',
    keywords: ['line-chart', 'chart', '折线图'],
  },
  {
    name: 'trending-up',
    label: '上升趋势',
    category: '数据图表',
    keywords: ['trending-up', 'growth', 'increase', '趋势', '增长'],
  },
  {
    name: 'activity',
    label: '活动量',
    category: '数据图表',
    keywords: ['activity', 'pulse', 'signal', '活跃', '动态'],
  },
  {
    name: 'database',
    label: '数据库',
    category: '数据图表',
    keywords: ['database', 'storage', 'db', '数据库', '存储'],
  },
  // 设备
  {
    name: 'wifi',
    label: '无线网络',
    category: '设备',
    keywords: ['wifi', 'wireless', 'network', '无线', '网络'],
  },
  { name: 'bluetooth', label: '蓝牙', category: '设备', keywords: ['bluetooth', '蓝牙'] },
  {
    name: 'battery',
    label: '电池',
    category: '设备',
    keywords: ['battery', 'power', '电池', '电量'],
  },
  {
    name: 'battery-charging',
    label: '充电中',
    category: '设备',
    keywords: ['battery-charging', 'charge', '充电'],
  },
  {
    name: 'power',
    label: '电源',
    category: '设备',
    keywords: ['power', 'on', 'off', '开关', '电源'],
  },
  {
    name: 'monitor',
    label: '显示器',
    category: '设备',
    keywords: ['monitor', 'screen', 'display', '显示器', '屏幕'],
  },
  {
    name: 'smartphone',
    label: '手机',
    category: '设备',
    keywords: ['smartphone', 'phone', 'mobile', '手机', '移动'],
  },
  {
    name: 'laptop',
    label: '笔记本',
    category: '设备',
    keywords: ['laptop', 'computer', 'pc', '笔记本', '电脑'],
  },
  // 状态
  {
    name: 'info',
    label: '信息',
    category: '状态',
    keywords: ['info', 'information', '信息', '提示'],
  },
  {
    name: 'alert-triangle',
    label: '警告',
    category: '状态',
    keywords: ['alert-triangle', 'warning', 'warn', '警告', '注意'],
  },
  {
    name: 'alert-circle',
    label: '错误提示',
    category: '状态',
    keywords: ['alert-circle', 'error', '错误', '异常'],
  },
  {
    name: 'check-circle',
    label: '成功',
    category: '状态',
    keywords: ['check-circle', 'success', 'ok', '成功', '通过'],
  },
  {
    name: 'x-circle',
    label: '失败',
    category: '状态',
    keywords: ['x-circle', 'error', 'fail', '失败', '错误'],
  },
  {
    name: 'help-circle',
    label: '帮助',
    category: '状态',
    keywords: ['help-circle', 'help', 'question', '帮助', '疑问'],
  },
  {
    name: 'login',
    label: '登录',
    category: '状态',
    keywords: ['login', 'sign-in', 'log-in', '登录', '登入'],
  },
  {
    name: 'logout',
    label: '退出登录',
    category: '状态',
    keywords: ['logout', 'sign-out', 'log-out', '退出', '登出'],
  },
  // 其他
  {
    name: 'globe',
    label: '全球',
    category: '其他',
    keywords: ['globe', 'world', 'web', '地球', '世界', '语言'],
  },
  {
    name: 'zap',
    label: '闪电',
    category: '其他',
    keywords: ['zap', 'flash', 'lightning', 'quick', '闪电', '快速'],
  },
  {
    name: 'sparkles',
    label: '特效',
    category: '其他',
    keywords: ['sparkles', 'magic', 'ai', 'new', '闪光', '魔法'],
  },
  {
    name: 'award',
    label: '奖项',
    category: '其他',
    keywords: ['award', 'badge', 'trophy', 'medal', '奖励', '奖杯'],
  },
  {
    name: 'gift',
    label: '礼物',
    category: '其他',
    keywords: ['gift', 'present', 'bonus', '礼物', '礼品'],
  },
  {
    name: 'calendar',
    label: '日历',
    category: '其他',
    keywords: ['calendar', 'date', 'schedule', '日历', '日期', '日程'],
  },
  {
    name: 'clock',
    label: '时间',
    category: '其他',
    keywords: ['clock', 'time', 'watch', '时钟', '时间'],
  },
  {
    name: 'credit-card',
    label: '银行卡',
    category: '其他',
    keywords: ['credit-card', 'payment', 'pay', 'card', '支付', '银行卡'],
  },
  {
    name: 'cart',
    label: '购物车',
    category: '其他',
    keywords: ['cart', 'shopping', 'basket', '购物车'],
  },
  {
    name: 'command',
    label: '命令',
    category: '其他',
    keywords: ['command', 'cmd', 'palette', '命令', '终端'],
  },
  {
    name: 'layers',
    label: '图层',
    category: '其他',
    keywords: ['layers', 'stack', 'layers', '图层', '层级'],
  },
  {
    name: 'grid',
    label: '网格',
    category: '其他',
    keywords: ['grid', 'layout', 'grid', '网格', '宫格'],
  },
  {
    name: 'sun',
    label: '晴天/亮色',
    category: '其他',
    keywords: ['sun', 'light', 'day', '太阳', '白天', '亮色'],
  },
  {
    name: 'moon',
    label: '夜晚/暗色',
    category: '其他',
    keywords: ['moon', 'dark', 'night', '月亮', '夜晚', '暗色'],
  },
  {
    name: 'cloud',
    label: '云',
    category: '其他',
    keywords: ['cloud', 'weather', 'upload', '云', '天气'],
  },
]

/** 分类展示顺序 */
export const ICON_CATEGORY_ORDER: IconCategory[] = [
  '导航',
  '箭头',
  '操作',
  '文件媒体',
  '通讯',
  '数据图表',
  '设备',
  '状态',
  '其他',
]
