'use client'

import React from 'react'

// import { delay } from 'src/lib/delay'

// @ts-expect-error no types
import styles from './Counter.module.css'

import './Counter.css'

export const Counter = () => {
  const [count, setCount] = React.useState(0)

  // await delay(1000)

  return (
    <>
      <div style={{ border: '3px blue dashed', margin: '1em', padding: '1em' }}>
        <p>Count: {count}</p>
        <button onClick={() => setCount((c) => c + 1)}>Increment</button>
        <h3 className={styles.header}>This is a client component.</h3>
      </div>
    </>
  )
}
