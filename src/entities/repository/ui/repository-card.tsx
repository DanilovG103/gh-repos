import { Link } from 'react-router-dom'
import { format } from 'date-fns'
import StarIcon from 'shared/icons/star.svg?react'
import { formatStarsCount } from 'shared/lib'

import { type RepositoryDto } from '../model/types'
import styles from './repository-card.module.scss'

type RepositoryCardProps = {
  repository: RepositoryDto
}

export const RepositoryCard = ({ repository }: RepositoryCardProps) => {
  const formattedDate = repository.committedDate
    ? format(repository.committedDate, 'dd MMMM yyyy')
    : ''
  const starsCount = formatStarsCount(repository.stargazerCount)

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link
          data-cy-test="repository-name"
          to={`/repository/${repository.id}`}
          className={styles.name}>
          {repository.name}
        </Link>
        <div>
          <StarIcon />
          <span className={styles.starsCount}>{starsCount}</span>
        </div>
      </header>
      {repository.committedDate && <p>Последний коммит {formattedDate}</p>}
      <Link className={styles.githubLink} to={repository.url} target="_blank">
        Ссылка на Github -{'>'}
      </Link>
    </div>
  )
}
