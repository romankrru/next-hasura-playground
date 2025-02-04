import { useMemo } from 'react'
import { ApolloClient, HttpLink, InMemoryCache, NormalizedCache } from '@apollo/client'
import { concatPagination } from '@apollo/client/utilities'
import merge from 'deepmerge'

let apolloClient: ApolloClient<NormalizedCache>

function createApolloClient() {
  return new ApolloClient({
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            allPosts: concatPagination(),
          },
        },
      },
    }),

    link: new HttpLink({
      credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
      uri: process.env.NEXT_PUBLIC_GRAPHQL_API_URL, // Server URL (must be absolute)
    }),

    ssrMode: typeof window === 'undefined',
  })
}

export function initializeApollo(initialState?: NormalizedCache) {
  const _apolloClient = apolloClient ?? createApolloClient()

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract()

    // Merge the existing cache into data passed from getStaticProps/getServerSideProps
    const data = merge(initialState, existingCache, {
      arrayMerge: (_source, destination) => destination,
    })

    // Restore the cache with the merged data
    _apolloClient.cache.restore(data)
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient

  return _apolloClient
}

export function useApollo(initialState?: NormalizedCache) {
  const store = useMemo(() => initializeApollo(initialState), [initialState])
  return store
}
