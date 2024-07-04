import { RepositoryCard, type RepositoryDto } from 'entities/repository'

import styles from './repositories-list.module.scss'

type RepositoriesListProps = {
  data: RepositoryDto[]
  isLoading: boolean
}

export const RepositoriesList = ({
  isLoading,
  data,
}: RepositoriesListProps) => (
  <div className={styles.listContainer}>
    {isLoading ? (
      <p>Загрузка...</p>
    ) : (
      data.map((repo) => <RepositoryCard key={repo.id} repository={repo} />)
    )}
  </div>
)
