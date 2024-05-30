import { Counter } from 'src/components/Counter'
import { delay } from 'src/lib/delay'

// @ts-expect-error no types
import styles from './HomePage.module.css'

import './HomePage.css'

const HomePage = async ({ name = 'Anonymous' }) => {
  await delay(1000)

  return (
    <>
      <meta name="title" content="RSC + SSR Demo" />
      <meta
        name="description"
        content="Demonstrates React Server Components and Server Side Rendering in RedwoodJS"
      />
      <meta property="og:title" content="RSC + SSR Demo" />
      <meta
        property="og:description"
        content="Demonstrates React Server Components and Server Side Rendering in RedwoodJS"
      />
      <meta
        property="og:image"
        content="https://maxm-imggenurl.web.val.run/a-forest-of-redwood-trees.png"
      />

      <div className="home-page">
        <div
          style={{ border: '3px red dashed', margin: '1em', padding: '1em' }}
        >
          <h1 className={styles.title}>Hello {name}!!</h1>
          <h3>This is a server component.</h3>
          <Counter />
        </div>
      </div>
    </>
  )
}

export default HomePage
