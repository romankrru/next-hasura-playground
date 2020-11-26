import { /* GetStaticProps, */ GetServerSideProps } from 'next'
import { Users } from 'components/Users'
import { UsersDocument } from 'components/Users/graphql/users.generated'
import { initializeApollo } from 'lib/apolloClient'
export default Users

// SSR
export const getServerSideProps: GetServerSideProps = async () => {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: UsersDocument,
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  }
}

// SSG
// export const getStaticProps: GetStaticProps = async () => {
//   const apolloClient = initializeApollo()

//   await apolloClient.query({
//     query: UsersDocument
//   })

//   return {
//     props: {
//       initialApolloState: apolloClient.cache.extract()
//     },

//     revalidate: 30,
//   }
// }
