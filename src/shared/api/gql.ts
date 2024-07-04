import { env } from 'shared/lib'

export const gql = async <Response>(
  query: string,
  variables?: Record<string, unknown>,
): Promise<Response> => {
  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      Authorization: `bearer ${env.TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query, variables }),
  })
  const { data } = await response.json()

  return data
}
