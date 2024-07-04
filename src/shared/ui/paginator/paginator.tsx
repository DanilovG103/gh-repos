import cn from 'classnames'

import styles from './paginator.module.scss'

type PaginationProps = {
  value: number
  onChange: (value: number) => void
  pages: number
}

export const Paginator = ({ value, onChange, pages }: PaginationProps) => {
  const arr = Array(pages).fill(null)

  return (
    <div className={styles.container}>
      {arr.map((_, index) => {
        const val = index + 1

        return (
          <button
            key={index}
            className={cn([styles.option, { [styles.active]: value === val }])}
            onClick={() => onChange(val)}>
            {val}
          </button>
        )
      })}
    </div>
  )
}
