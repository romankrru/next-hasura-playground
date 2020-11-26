import { ReactNode, memo } from 'react'
import Link from 'next/link'
import styles from './assets/styles.module.css'

export const Layout = memo(function Layout(props: {
  children: ReactNode
}) {
  return <div className={styles.layout}>
    <nav>
      <ul>
        <Link href="/"><a>Home</a></Link>
        {' | '}
        <Link href="/users"><a>Users</a></Link>
      </ul>
    </nav>

    <hr />

    {props.children}
  </div>
})
