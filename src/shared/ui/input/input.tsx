import { type ComponentProps, useId } from 'react'
import cn from 'classnames'

import styles from './input.module.scss'

type InputProps = ComponentProps<'input'> & {
  label: string
  labelProps?: ComponentProps<'label'>
  containerClassName?: string
}

export const Input = ({
  labelProps,
  label,
  className,
  containerClassName,
  ...inputProps
}: InputProps) => {
  const id = useId()

  return (
    <div className={cn([styles.container], containerClassName)}>
      <label {...labelProps} htmlFor={id}>
        {label}
      </label>
      <input
        className={cn([styles.input, className])}
        {...inputProps}
        id={id}
        type="input"
      />
    </div>
  )
}
