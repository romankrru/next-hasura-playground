import 'cross-fetch'
import type {AppProps} from 'next/app'
import {ApolloProvider} from '@apollo/react-hooks'
import {useApollo} from 'lib/apolloClient'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
