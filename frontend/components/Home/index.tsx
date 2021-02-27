import { FC, memo } from 'react'
import { Layout } from 'components/common/Layout'
import Link from 'next/link'

export const Home: FC & {layout?: typeof Layout} = memo(function Home() {
  return <div>
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
  </div>
})

Home.layout = Layout
