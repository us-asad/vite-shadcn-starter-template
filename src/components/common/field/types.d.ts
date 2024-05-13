import {ObjectI} from '@/types/default'
import {useFormReturn} from 'react-hook-form'

export interface Props {
  type: 'input' | 'textarea'
  control: useFormReturn<any>
  name: string
  rules?: any
  componentProps?: ObjectI | any
  fieldClassName?: string
}
