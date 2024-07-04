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

      return myRepos.viewer.repositories.nodes
    }
    const { search } = await repositoryService.getList(variables)

    return search.nodes
  },
)

const repositoriesStore = createStore<RepositorySrc[]>([])

repositoriesStore.on(getRepositoriesFx.doneData, (_, result) => result)

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

export const useIsRepositoryLoading = () => useUnit(getRepositoriesFx.pending)
