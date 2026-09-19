/**
 * ProfilePage 个人中心模板（web）—— 头部横幅 + 头像 + 数据 + 功能菜单。
 */
import { Avatar, Card, Cell, Divider, Button, Badge } from '@kit/ui-web'

export interface ProfileStat {
  label: string
  value: string | number
}

export interface ProfilePageProps {
  name?: string
  role?: string
  avatar?: string
  stats?: ProfileStat[]
  onEditProfile?: () => void
  onMenuItem?: (key: string) => void
}

export function ProfilePage({
  name = '赵星宇',
  role = '电器开发工程师',
  avatar,
  stats = [
    { label: '项目', value: 12 },
    { label: '关注', value: 86 },
    { label: '粉丝', value: 243 },
  ],
  onEditProfile,
  onMenuItem,
}: ProfilePageProps) {
  return (
    <div className="flex flex-col gap-4">
      {/* 头部横幅 */}
      <div
        className="relative overflow-hidden rounded-b-3xl px-6 pb-16 pt-10"
        style={{ background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)' }}
      >
        <div className="flex items-center justify-between">
          <span className="text-bodySm text-white/80">个人中心</span>
          <Button
            variant="ghost"
            size="sm"
            className="text-white hover:bg-white/10"
            onClick={onEditProfile}
          >
            编辑
          </Button>
        </div>
      </div>

      {/* 头像卡（叠在横幅上） */}
      <Card className="-mt-12 mx-6">
        <div className="flex items-center gap-4">
          <div className="-mt-12 rounded-full border-4 border-bg-card bg-bg-card">
            <Avatar name={name} size="lg" {...(avatar ? { src: avatar } : {})} />
          </div>
          <div className="flex-1">
            <h1 className="text-titleMd font-medium text-text-primary">{name}</h1>
            <p className="text-bodySm text-text-secondary">{role}</p>
          </div>
          <Badge variant="success" tone="soft">
            已认证
          </Badge>
        </div>
        <Divider className="my-4" />
        <div className="flex justify-around">
          {stats.map((s) => (
            <button
              key={s.label}
              type="button"
              className="flex flex-col items-center gap-1"
              onClick={() => onMenuItem?.(s.label)}
            >
              <span className="text-xl font-semibold text-text-primary">{s.value}</span>
              <span className="text-bodySm text-text-secondary">{s.label}</span>
            </button>
          ))}
        </div>
      </Card>

      {/* 功能菜单 */}
      <Card className="mx-6">
        <Cell
          title="我的订单"
          description="查看全部订单"
          right="12 ›"
          onClick={() => onMenuItem?.('orders')}
        />
        <Divider />
        <Cell
          title="我的收藏"
          description="收藏的项目与文档"
          right="8 ›"
          onClick={() => onMenuItem?.('favorites')}
        />
        <Divider />
        <Cell
          title="地址管理"
          description="收货与发票地址"
          right="3 ›"
          onClick={() => onMenuItem?.('address')}
        />
        <Divider />
        <Cell
          title="消息通知"
          description="推送与邮件偏好"
          right={
            <Badge variant="danger" tone="solid">
              5
            </Badge>
          }
          onClick={() => onMenuItem?.('notifications')}
        />
        <Divider />
        <Cell
          title="账号安全"
          description="密码、绑定与登录设备"
          right="›"
          onClick={() => onMenuItem?.('security')}
        />
      </Card>
    </div>
  )
}
