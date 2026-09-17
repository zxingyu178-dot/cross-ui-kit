/**
 * Address 地址选择器（web）—— 省市区三级级联选择器。
 */
import { useMemo } from 'react'
import { cn } from '@kit/core'
import { Select } from '../Select'
import type { AddressOption, AddressProps } from './Address.types'

const DEFAULT_OPTIONS: AddressOption[] = [
  {
    value: 'beijing',
    label: '北京市',
    children: [
      {
        value: 'beijing-city',
        label: '北京市',
        children: [
          { value: 'dongcheng', label: '东城区' },
          { value: 'xicheng', label: '西城区' },
          { value: 'chaoyang', label: '朝阳区' },
        ],
      },
    ],
  },
  {
    value: 'shanghai',
    label: '上海市',
    children: [
      {
        value: 'shanghai-city',
        label: '上海市',
        children: [
          { value: 'huangpu', label: '黄浦区' },
          { value: 'xuhui', label: '徐汇区' },
          { value: 'pudong', label: '浦东新区' },
        ],
      },
    ],
  },
  {
    value: 'guangdong',
    label: '广东省',
    children: [
      {
        value: 'guangzhou',
        label: '广州市',
        children: [
          { value: 'tianhe', label: '天河区' },
          { value: 'yuexiu', label: '越秀区' },
          { value: 'haizhu', label: '海珠区' },
        ],
      },
      {
        value: 'shenzhen',
        label: '深圳市',
        children: [
          { value: 'nanshan', label: '南山区' },
          { value: 'futian', label: '福田区' },
          { value: 'luohu', label: '罗湖区' },
        ],
      },
    ],
  },
]

export function Address({
  value = {},
  onChange,
  options = DEFAULT_OPTIONS,
  placeholder = '请选择',
  disabled = false,
  className,
}: AddressProps) {
  const provinceOptions = useMemo(
    () => options.map((o) => ({ value: o.value, label: o.label })),
    [options],
  )

  const cityOptions = useMemo(() => {
    const province = options.find((o) => o.value === value.province)
    return province?.children?.map((c) => ({ value: c.value, label: c.label })) ?? []
  }, [options, value.province])

  const districtOptions = useMemo(() => {
    const province = options.find((o) => o.value === value.province)
    const city = province?.children?.find((c) => c.value === value.city)
    return city?.children?.map((d) => ({ value: d.value, label: d.label })) ?? []
  }, [options, value.province, value.city])

  const handleProvinceChange = (province: string) => {
    onChange?.({ province })
  }

  const handleCityChange = (city: string) => {
    onChange?.({ ...value, city })
  }

  const handleDistrictChange = (district: string) => {
    onChange?.({ ...value, district })
  }

  return (
    <div className={cn('flex flex-row gap-2', className)}>
      <Select
        {...(value.province ? { value: value.province } : {})}
        onChange={handleProvinceChange}
        options={provinceOptions}
        placeholder={`${placeholder}省份`}
        disabled={disabled}
        className="flex-1"
      />
      <Select
        {...(value.city ? { value: value.city } : {})}
        onChange={handleCityChange}
        options={cityOptions}
        placeholder={`${placeholder}城市`}
        disabled={disabled || !value.province}
        className="flex-1"
      />
      <Select
        {...(value.district ? { value: value.district } : {})}
        onChange={handleDistrictChange}
        options={districtOptions}
        placeholder={`${placeholder}区县`}
        disabled={disabled || !value.city}
        className="flex-1"
      />
    </div>
  )
}
