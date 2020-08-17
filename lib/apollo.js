import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost'

const API_URL =
  process.env.NEXT_PUBLIC_STRAPI_API_URL || 'https://strapi.finkrer.wtf'

const link = new HttpLink({
  uri: `${API_URL}/graphql`,
})

const getApolloClient = () =>
  new ApolloClient({
    link: link,
    cache: new InMemoryCache(),
    ssrMode: true,
  })

export const runQuery = async (query) =>
  getApolloClient().query({ query: query })
