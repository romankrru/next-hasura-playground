import {memo, ReactNode} from 'react'
import styles from './assets/styles.module.css'

export const Layout = memo(function Layout(props: {
  children: ReactNode
}) {
  return <div className={styles.layout}>
    {props.children}
  </div>
})
