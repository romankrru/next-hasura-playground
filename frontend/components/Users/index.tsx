import {memo} from 'react'
import {Layout} from 'components/common/Layout'
import {useUsersQuery, UsersDocument} from './graphql/users.generated'
import {useQuery} from '@apollo/client'

export const Users = memo(function Users() {
  const {data, loading} = useUsersQuery()

  if(loading) {
    return <div>Loading...</div>
  }

  return <Layout>
    Users list:

    {data?.user && <ul>
      {data.user.map(user => <li key={user.id}>
        {user.firstName} {user.lastName}
      </li>)}
    </ul>}
  </Layout>
})
