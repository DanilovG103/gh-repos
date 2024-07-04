import { gql } from '../gql'
import {
  type MyRepositoriesResponse,
  type RepositoryByIdResponse,
  type RepositoryResponse,
  type RepositoryVariables,
} from '../types'

const repositoryFragment = `
  id
  name
  url
  stargazerCount
  description
  defaultBranchRef {
    target {
      ... on Commit {
        committedDate
      }
    } 
  }
`

const getRepositories = async (variables: RepositoryVariables) =>
  await gql<RepositoryResponse>(
    `
  query Repos($search: String!) {
    search(query: $search, type: REPOSITORY, first: 100) {
      nodes {
        ... on Repository {
          ${repositoryFragment}
        }
      }
      repositoryCount
  }}`,
    variables,
  )

const getRepositoryById = async (id: string) =>
  await gql<RepositoryByIdResponse>(
    `
    query RepoById($id: ID!) {
      node(id: $id) {
        ... on Repository {
          ${repositoryFragment}
          owner {
            avatarUrl
            login
            url
          }
          languages(first: 100, orderBy: {field: SIZE, direction: DESC }) {
            ... on LanguageConnection {
              nodes {
                color
                name
              }
            }
          }
        }
      }
    }
`,
    { id },
  )

export const getMyRepositories = async () =>
  await gql<MyRepositoriesResponse>(`
  query {
    viewer {
      repositories(first: 10, orderBy:{field:UPDATED_AT, direction: DESC}) {
        nodes {
          ${repositoryFragment}
        }
        totalCount
      }
    }
  }`)

export const repositoryService = {
  getList: getRepositories,
  getById: getRepositoryById,
  getMy: getMyRepositories,
}
