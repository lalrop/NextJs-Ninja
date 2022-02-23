import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Head>
      <title>Ninja List | Home </title>
      <meta name='keywords' content='ninjas' />
    </Head>    
    <div>
      <h1 className={styles.title}>Hello World!</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius consectetur rerum hic reiciendis nam pariatur laboriosam! Amet eius debitis deserunt esse natus error repellendus quaerat aperiam aspernatur eum. Incidunt, necessitatibus!</p>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius consectetur rerum hic reiciendis nam pariatur laboriosam! Amet eius debitis deserunt esse natus error repellendus quaerat aperiam aspernatur eum. Incidunt, necessitatibus!</p>
      <Link href="ninjas/test"><a className={styles.btn}> Go to all Ninjas</a></Link>
    </div>
    </>
    )
  }
