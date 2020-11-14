import {memo} from 'react'
import Link from 'next/link'
import { Layout } from 'components/common/Layout'

export const Home = memo(function Home() {
  return <Layout>
    <h1>Welcome!</h1>

    <nav>
      <h3>Links:</h3>

      <ul>
        <li>
          <Link href="/users">
            <a>Users</a>
          </Link>
        </li>
      </ul>
    </nav>
  </Layout>
})
