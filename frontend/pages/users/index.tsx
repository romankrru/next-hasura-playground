import {Users} from 'components/Users'
import {UsersDocument} from 'components/Users/graphql/users.generated'
import {initializeApollo} from 'lib/apolloClient'
export default Users


// SSG
export async function getStaticProps() {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: UsersDocument
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract()
    },

    revalidate: 30,
  }
}

// SSR
// export async function getServerSideProps() {
//   const apolloClient = initializeApollo()

//   await apolloClient.query({
//     query: UsersDocument
//   })

//   return {
//     props: {
//       initialApolloState: apolloClient.cache.extract()
//     },
//   }
// }
