export interface InputValueProps {
  defaultValue?: string
  value?: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

export interface Props extends InputValueProps {
  type: 'text'
  label?: string
  placeholder?: string
  disabled?: boolean
  className?: string
  labelClassName?: string
  parentClassName?: string
}
