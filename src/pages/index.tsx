import Head from 'next/head'
import { Inter } from 'next/font/google'

import Banner from '@/components/Banner'
import Card, { CardProps } from '@/components/Card'
import styles from '@/styles/Home.module.css'

import coffeeStores from './coffee-stores.json';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const cardProps: CardProps = {
    title: 'Card Title Super Long elipsis wrapp me',
    imageUrl: '/static/mesh-gradient.png',
    href: '/store/2'
  }

  const coffeeListElem = (() => {
    return coffeeStores.map((item) => {
      const cardProps: CardProps = {
        title: item.name,
        imageUrl: item.imgUrl,
        href: `/store/${item.id}`
      }

      return <Card {...cardProps} key={item.id} />
    })
  })();

  return (
    <>
      <Head>
        <title>Coffee Store</title>
        <meta name="description" content="Find Cofee Nearby" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Banner />

        <div className={styles.gridLayout}>
          {coffeeListElem}
        </div>
      </main>
    </>
  )
}
