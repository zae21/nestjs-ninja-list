import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home Page | Ninja List</title>
      </Head>
      <div>
        <h1 className={styles.title}>Home Page</h1>
        <p className={styles.text}>Id do reprehenderit pariatur eiusmod cupidatat aute cupidatat. Ad fugiat veniam occaecat exercitation. Voluptate duis cupidatat eiusmod ut esse ad commodo commodo veniam irure mollit sint ullamco. Eiusmod nisi do laboris voluptate irure sunt do et quis. Ad commodo id officia id mollit sint ad est velit ea sint cillum. Anim sit cillum minim eiusmod id. Incididunt velit commodo laboris deserunt qui adipisicing veniam officia duis aliqua.</p>
        <p className={styles.text}>Commodo minim veniam aliqua quis ad id elit proident Lorem elit ipsum tempor. Do sint tempor consequat pariatur fugiat culpa ex qui sunt. Do proident Lorem laboris commodo reprehenderit reprehenderit enim voluptate. Velit et duis sit sint nisi nostrud fugiat tempor sint duis. Nostrud pariatur est incididunt cupidatat ut cupidatat aliqua qui. Quis velit sint minim occaecat esse adipisicing ea sunt aliqua aliquip. Et reprehenderit magna elit nisi ex adipisicing quis consequat fugiat eiusmod.</p>
        <Link href="/ninjas" className={styles.btn}>See Ninja Listing</Link>
      </div>
    </>
  )
}
