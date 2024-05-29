'use client'

import React from 'react'

import { Metadata } from '@redwoodjs/web'

// @ts-expect-error no types
import styles from './Counter.module.css'
import './Counter.css'

export const Counter = () => {
  const [count, setCount] = React.useState(0)

  return (
    <>
      <Metadata
        title="RSC + SSR Home"
        description="Demonstrates React Server Components and Server Side Rendering in RedwoodJS"
        og={{
          image:
            'https://maxm-imggenurl.web.val.run/a-forest-of-redwood-trees.png',
        }}
      />

      <div style={{ border: '3px blue dashed', margin: '1em', padding: '1em' }}>
        <p>Count: {count}</p>
        <button onClick={() => setCount((c) => c + 1)}>Increment</button>
        <h3 className={styles.header}>This is a client component.</h3>
      </div>
    </>
  )
}
