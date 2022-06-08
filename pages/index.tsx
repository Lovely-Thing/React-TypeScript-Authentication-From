import type { NextPage } from 'next' 

import MetaComponents from '../components/MetaComponents'
import FooterComponent from '../components/FooterComponent'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <MetaComponents/> 
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Visit!
        </h1> 
      </main>
      <FooterComponent />
    </div>
  )
}

export default Home
