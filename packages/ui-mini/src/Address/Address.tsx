/**
 * Address 地址选择器（mini：小程序 / 移动 H5）—— 省市区三级级联选择器。
 */
import { Picker, View } from '@tarojs/components'
import { useMemo } from 'react'
import type { AddressOption, AddressProps } from './Address.types'
import './Address.scss'

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
  className = '',
}: AddressProps) {
  const provinceOptions = useMemo(() => options.map((o) => o.label), [options])
  const cityOptions = useMemo(() => {
    const province = options.find((o) => o.value === value.province)
    return province?.children?.map((c) => c.label) ?? []
  }, [options, value.province])
  const districtOptions = useMemo(() => {
    const province = options.find((o) => o.value === value.province)
    const city = province?.children?.find((c) => c.value === value.city)
    return city?.children?.map((d) => d.label) ?? []
  }, [options, value.province, value.city])

  const provinceIndex = options.findIndex((o) => o.value === value.province)
  const cityIndex =
    options
      .find((o) => o.value === value.province)
      ?.children?.findIndex((c) => c.value === value.city) ?? -1
  const districtIndex =
    options
      .find((o) => o.value === value.province)
      ?.children?.find((c) => c.value === value.city)
      ?.children?.findIndex((d) => d.value === value.district) ?? -1

  return (
    <View className={`kit-address ${className}`.trim()}>
      <Picker
        mode="selector"
        range={provinceOptions}
        value={provinceIndex >= 0 ? provinceIndex : 0}
        onChange={(e) => {
          const idx = e.detail.value as number
          const province = options[idx]
          if (province) onChange?.({ province: province.value })
        }}
        disabled={disabled}
      >
        <View
          className={`kit-address__picker ${value.province ? '' : 'kit-address__picker--placeholder'}`}
        >
          {value.province
            ? options.find((o) => o.value === value.province)?.label
            : `${placeholder}省份`}
        </View>
      </Picker>
      <Picker
        mode="selector"
        range={cityOptions}
        value={cityIndex >= 0 ? cityIndex : 0}
        onChange={(e) => {
          const idx = e.detail.value as number
          const province = options.find((o) => o.value === value.province)
          const city = province?.children?.[idx]
          if (city) onChange?.({ ...value, city: city.value })
        }}
        disabled={disabled || !value.province}
      >
        <View
          className={`kit-address__picker ${value.city ? '' : 'kit-address__picker--placeholder'}`}
        >
          {value.city
            ? options
                .find((o) => o.value === value.province)
                ?.children?.find((c) => c.value === value.city)?.label
            : `${placeholder}城市`}
        </View>
      </Picker>
      <Picker
        mode="selector"
        range={districtOptions}
        value={districtIndex >= 0 ? districtIndex : 0}
        onChange={(e) => {
          const idx = e.detail.value as number
          const province = options.find((o) => o.value === value.province)
          const city = province?.children?.find((c) => c.value === value.city)
          const district = city?.children?.[idx]
          if (district) onChange?.({ ...value, district: district.value })
        }}
        disabled={disabled || !value.city}
      >
        <View
          className={`kit-address__picker ${value.district ? '' : 'kit-address__picker--placeholder'}`}
        >
          {value.district
            ? options
                .find((o) => o.value === value.province)
                ?.children?.find((c) => c.value === value.city)
                ?.children?.find((d) => d.value === value.district)?.label
            : `${placeholder}区县`}
        </View>
      </Picker>
    </View>
  )
}
