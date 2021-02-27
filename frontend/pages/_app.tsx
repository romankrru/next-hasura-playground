import 'cross-fetch'
import '../styles/globals.css'
import { FC, Fragment, ReactElement } from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import { NextPage } from 'next'
import { useApollo } from 'lib/apolloClient'

type AppWithLayoutProps = {
  Component: NextPage & {layout?: FC}
  pageProps: any
}

export default function App({ Component, pageProps }: AppWithLayoutProps) {
  const apolloClient = useApollo(pageProps.initialApolloState)
  const Layout = Component.layout || ((props: {children: ReactElement}) => <Fragment>{props.children}</Fragment>)

  return (
    <ApolloProvider client={apolloClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  )
}

// 1
