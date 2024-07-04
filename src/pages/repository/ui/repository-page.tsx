import { useNavigate } from 'react-router-dom'
import { format } from 'date-fns'
import { LanguageChip } from 'entities/language'
import { UserInfo } from 'entities/user'
import StarIcon from 'shared/icons/star.svg?react'
import { formatStarsCount } from 'shared/lib'
import { Layout } from 'widgets/layout'

import { useRepository } from '../model/use-repository'
import styles from './repository-page.module.scss'

const formatCommitDate = (date: string) => format(date, 'dd MMMM yyyy HH:mm')

export const RepositoryPage = () => {
  const { data, isLoading } = useRepository()
  const navigate = useNavigate()
  if (isLoading) return <p>Загрузка...</p>

  if (!data) return <p>Нет данных</p>

  return (
    <Layout>
      <button className={styles.back} onClick={() => navigate(-1)}>
        {'<-'} Вернуться назад
      </button>
      <div className={styles.pageContainer}>
        <header className={styles.header}>
          <div>
            <h1 data-cy-test="repository-name" className={styles.name}>
              {data.name}
            </h1>
            <div>
              <StarIcon />
              <span data-cy-test="repository-stars">
                {formatStarsCount(data.stargazerCount)}
              </span>
            </div>
            {data.committedDate && (
              <span data-cy-test="repository-commit-date">
                Последний коммит {formatCommitDate(data.committedDate)}
              </span>
            )}
          </div>
          <UserInfo data-cy-test="repository-owner" user={data.owner} />
        </header>
        {!!data.description && (
          <>
            <hr className={styles.separator} />
            <p
              data-cy-test="repository-description"
              className={styles.description}>
              {data.description}
            </p>
          </>
        )}
        <hr className={styles.separator} />
        {!!data.languages.length && (
          <div>
            <span className={styles.usedLanguagesTitle}>
              Используемые языки
            </span>
            <div
              data-cy-test="repository-languages"
              className={styles.usedLanguagesWrapper}>
              {data.languages.map((language) => (
                <LanguageChip key={language.name} language={language} />
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  )
}
