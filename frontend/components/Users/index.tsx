import { NamedExoticComponent, memo } from 'react'
import { Layout } from 'components/common/Layout'
import { useUsersQuery } from './graphql/users.generated'

type Props = {className?: string}

const Users: NamedExoticComponent<Props> & {layout?: typeof Layout} = memo(function Users(props: Props) {
  const { data, loading } = useUsersQuery()

  if (loading) {
    return <div>Loading...</div>
  }

  return <div>
    Users list:

    {data?.user && <ul className={props.className}>
      {data.user.map(user => <li key={user.id}>
        {user.firstName} {user.lastName}
      </li>)}
    </ul>}
  </div>
})

Users.layout = Layout

export { Users }
