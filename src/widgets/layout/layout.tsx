import { type PropsWithChildren } from 'react'

import styles from './layout.module.scss'

export const Layout = ({ children }: PropsWithChildren) => (
  <section className={styles.layout}>{children}</section>
)
