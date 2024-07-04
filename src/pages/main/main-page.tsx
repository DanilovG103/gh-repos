import { useEffect } from 'react'
import {
  getRepositoriesFx,
  useIsRepositoryLoading,
  useRepositories,
  useRepositoryFilter,
} from 'entities/repository'
import { Input, Paginator } from 'shared/ui'
import { Layout } from 'widgets/layout'
import { RepositoriesList } from 'widgets/repositories-list'

export const MainPage = () => {
  const repositories = useRepositories()
  const isLoading = useIsRepositoryLoading()
  const { search, page, handleChangePage, handleChangeSearch } =
    useRepositoryFilter()

  useEffect(() => {
    getRepositoriesFx({ search })
  }, [search])

  return (
    <Layout>
      <Input
        label="Поиск"
        defaultValue={search}
        onChange={(event) => handleChangeSearch(event.target.value)}
      />
      <RepositoriesList isLoading={isLoading} data={repositories} />
      <Paginator value={page} onChange={handleChangePage} pages={10} />
    </Layout>
  )
}
