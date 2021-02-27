import { ReactNode, memo, useState } from 'react'
import Link from 'next/link'
import styles from './assets/styles.module.css'

export const Layout = memo(function Layout(props: {
  children: ReactNode
}) {
  const [counter, setCounter] = useState(0)

  return <div className={styles.layout}>
    <span>Counter to test layout persistance:</span>
    <button onClick={() => setCounter(prev => prev + 1)}>clicks: {counter}</button>

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
