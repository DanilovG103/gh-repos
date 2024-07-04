import { type LanguageSrc } from 'shared/api'

import styles from './language-chip.module.scss'

type LanguageChipProps = {
  language: LanguageSrc
}

export const LanguageChip = ({ language }: LanguageChipProps) => (
  <div className={styles.container}>
    <div
      className={styles.indicator}
      style={{ backgroundColor: language.color }}
    />
    <span className={styles.name}>{language.name}</span>
  </div>
)
