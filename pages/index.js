import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Teams from '../Components/teams'
import Table from '../Components/table'
import {Clear} from '../pages/api/database'



export default function Home() {
  
  Clear() 
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Cuadrangular</title>
        <meta name="description" content="Cuadrangular de Futbol" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
 
        <div className={styles.grid}>
          <Teams/>
          <Table/>
        </div>

      </main>

    </div>
  )
}
