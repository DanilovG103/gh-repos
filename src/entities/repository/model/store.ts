import { createEffect, createStore } from 'effector'
import { useStoreMap, useUnit } from 'effector-react'
import {
  repositoryService,
  type RepositorySrc,
  type RepositoryVariables,
} from 'shared/api'

import { type RepositoryDto } from './types'

export const getRepositoriesFx = createEffect(
  async (variables: RepositoryVariables) => {
    if (!variables.search) {
      const myRepos = await repositoryService.getMy()

      return {
        data: myRepos.viewer.repositories.nodes,
        total: myRepos.viewer.repositories.totalCount,
      }
    }
    const { search } = await repositoryService.getList(variables)

    return { data: search.nodes, total: search.repositoryCount }
  },
)

const repositoriesStore = createStore<RepositorySrc[]>([])
const repositoryCountStore = createStore(0)

repositoriesStore.on(getRepositoriesFx.doneData, (_, result) => result.data)

repositoryCountStore.on(getRepositoriesFx.doneData, (_, result) => result.total)

const mapRepository = (value: RepositorySrc): RepositoryDto => ({
  id: value.id,
  name: value.name,
  stargazerCount: value.stargazerCount,
  url: value.url,
  committedDate: value.defaultBranchRef?.target?.committedDate ?? '',
  description: value.description,
})

export const useRepositories = () =>
  useStoreMap(repositoriesStore, (state) => state.map(mapRepository))

export const useRepositoryCount = () => useUnit(repositoryCountStore)

export const useIsRepositoryLoading = () => useUnit(getRepositoriesFx.pending)
