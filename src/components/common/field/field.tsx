import {FormControl, FormField, FormItem, FormMessage} from '@/components/ui/form'
import {Input} from '..'
import {Props} from './types'

export const Field = ({type, control, name, rules, componentProps, fieldClassName}: Props) => (
  <FormField
    control={control}
    name={name}
    rules={rules}
    render={({field: {value, onChange}}) => (
      <FormItem className={fieldClassName}>
        <FormControl>
          {
            {
              input: <Input value={value || ''} onChange={onChange} {...componentProps} />,
              textarea: <div></div>,
            }[type]
          }
        </FormControl>
        <FormMessage className="text-xs !mt-1" />
      </FormItem>
    )}
  />
)
