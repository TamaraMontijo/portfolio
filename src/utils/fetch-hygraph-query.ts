export const fetchHygraphQuery = async <T>(
  query: string,
  revalidate?: number,
  variables?: Record<string, any>, // Adiciona o suporte para variáveis
): Promise<T> => {
  const response = await fetch(process.env.HYGRAPH_URL!, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
    },
    next: {
      revalidate,
    },
    body: JSON.stringify({
      query,
      variables, // Inclui as variáveis na requisição
    }),
  })

  const { data, errors } = await response.json()

  if (errors) {
    console.error('GraphQL Errors:', errors)
    throw new Error('Failed to fetch GraphQL data')
  }

  return data
}
