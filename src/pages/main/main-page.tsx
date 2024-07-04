import { useEffect, useMemo } from 'react'
import {
  getRepositoriesFx,
  TAKE_COUNT,
  useIsRepositoryLoading,
  useRepositories,
  useRepositoryCount,
  useRepositoryFilter,
} from 'entities/repository'
import { Input, Paginator } from 'shared/ui'
import { Layout } from 'widgets/layout'
import { RepositoriesList } from 'widgets/repositories-list'

export const MainPage = () => {
  const repositories = useRepositories()
  const isLoading = useIsRepositoryLoading()
  const totalCount = useRepositoryCount()
  const pagesCount = Math.min(10, Math.ceil(totalCount / TAKE_COUNT))

  const { search, page, handleChangePage, handleChangeSearch } =
    useRepositoryFilter()

  const filteredRepositories = useMemo(
    () => repositories.slice((page - 1) * TAKE_COUNT, page * TAKE_COUNT),
    [repositories, page],
  )

  useEffect(() => {
    getRepositoriesFx({ search })
  }, [search])

  return (
    <Layout>
      <Input
        label="Поиск"
        defaultValue={search}
        data-cy-test="search"
        onChange={(event) => handleChangeSearch(event.target.value)}
      />
      <RepositoriesList isLoading={isLoading} data={filteredRepositories} />
      <Paginator
        disabled={isLoading}
        value={page}
        onChange={handleChangePage}
        pages={pagesCount}
      />
    </Layout>
  )
}
