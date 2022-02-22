import Link from 'next/link'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Hello World!</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius consectetur rerum hic reiciendis nam pariatur laboriosam! Amet eius debitis deserunt esse natus error repellendus quaerat aperiam aspernatur eum. Incidunt, necessitatibus!</p>
      <Link href="ninjas/test"><a> Go to all Ninjas</a></Link>
      <Footer />
    </div>
    )
}
