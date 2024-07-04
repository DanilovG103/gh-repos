import cn from 'classnames'

import styles from './paginator.module.scss'

type PaginationProps = {
  value: number
  onChange: (value: number) => void
  pages: number
  disabled?: boolean
}

export const Paginator = ({
  value,
  onChange,
  pages,
  disabled,
}: PaginationProps) => {
  const arr = Array(pages).fill(null)

  return (
    <div data-cy-test="paginator" className={styles.container}>
      {arr.map((_, index) => {
        const val = index + 1

        return (
          <button
            data-cy-test="paginator-button"
            key={index}
            disabled={disabled}
            className={cn([
              styles.option,
              { [styles.active]: value === val, [styles.disabled]: disabled },
            ])}
            onClick={() => onChange(val)}>
            {val}
          </button>
        )
      })}
    </div>
  )
}
