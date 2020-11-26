import { Layout } from 'components/common/Layout'
import { memo } from 'react'
import { useUsersQuery } from './graphql/users.generated'

export const Users = memo(function Users() {
  const { data, loading } = useUsersQuery()

  if (loading) {
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
