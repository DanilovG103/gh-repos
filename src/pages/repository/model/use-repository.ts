import { useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { type RepositoryDto as BaseRepositoryDto } from 'entities/repository'
import {
  type LanguageSrc,
  type RepositoryByIdResponse,
  repositoryService,
} from 'shared/api'

type Params = {
  id: string
}

type RepositoryDto = BaseRepositoryDto & {
  owner: RepositoryByIdResponse['node']['owner']
  languages: LanguageSrc[]
}

const mapRepository = (value: RepositoryByIdResponse): RepositoryDto => ({
  id: value.node.id,
  name: value.node.name,
  description: value.node.description,
  committedDate: value.node.defaultBranchRef.target.committedDate,
  owner: value.node.owner,
  languages: value.node.languages.nodes,
  stargazerCount: value.node.stargazerCount,
  url: value.node.url,
})

export const useRepository = () => {
  const { id } = useParams<Params>()

  const [data, setData] = useState<RepositoryDto | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (!id) return

    const getRepository = async () => {
      try {
        setIsLoading(true)
        const res = await repositoryService.getById(id)
        setData(mapRepository(res))
      } finally {
        setIsLoading(false)
      }
    }

    getRepository()

    return () => {
      setIsLoading(false)
      setData(null)
    }
  }, [id])

  const value = useMemo(() => ({ data, isLoading }), [data, isLoading])

  return value
}
