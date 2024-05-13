import React, {useMemo} from 'react'
import {Input as UIInput} from '@/components/ui/input'
import {InputValueProps, Props} from './types'
import {cn} from '@/lib/utils'

export const Input: React.FC<Props> = ({
  type = 'text',
  defaultValue,
  value,
  onChange,
  label,
  placeholder,
  className,
  labelClassName,
  parentClassName,
  disabled,
}) => {
  const valueProps = useMemo(() => {
    const props: InputValueProps = {}

    if (onChange) {
      props.value = value
      props.onChange = onChange
    }

    if (defaultValue) {
      props.defaultValue = defaultValue
    }

    return props
  }, [defaultValue, value, onChange])

  return (
    <label className={parentClassName}>
      <span className={cn('text-sm', labelClassName)}>{label}</span>
      <UIInput disabled={disabled} type={type} placeholder={placeholder} className={className} {...valueProps} />
    </label>
  )
}
