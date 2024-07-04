import { type BranchRef } from './branch'
import { type LanguageSrc } from './language'
import { type User } from './user'

export type RepositorySrc = {
  id: string
  name: string
  url: string
  stargazerCount: number
  defaultBranchRef: BranchRef | null
  description: string
}

export type RepositoryResponse = {
  search: {
    nodes: RepositorySrc[]
    repositoryCount: number
  }
}

export type RepositoryVariables = {
  search: string
}

export type RepositoryLanguagesSrc = {
  nodes: LanguageSrc[]
}

export type RepositoryByIdResponse = {
  node: RepositorySrc & {
    owner: User
    languages: RepositoryLanguagesSrc
  }
}

export type MyRepositoriesResponse = {
  viewer: {
    repositories: {
      nodes: RepositorySrc[]
      totalCount: number
    }
  }
}
