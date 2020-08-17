import { gql } from 'apollo-boost'
import { runQuery } from 'lib/apollo'

export const getPosts = async () =>
  runQuery(gql`
    query GetPosts {
      posts(where: { public: true }) {
        id
        title
        datetime
        body
      }
    }
  `)
