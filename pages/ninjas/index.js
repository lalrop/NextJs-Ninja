import Link from 'next/link';
import styles from '../../styles/Ninjas.module.css'

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json()

    return{
        props:{
            ninjas:data
        }
    }
}   

const indexNinjas = ({ninjas}) =>{
    return(
        <div>
            <h1>Ninjas</h1>
                {ninjas.map((ninja)=>(
                    <div key={ninja.id}>
                        <Link href={`/ninjas/${ninja.id}`} key={ninja.id}>
                            <a className={styles.single}><h3>{ninja.name}</h3></a>
                        </Link>            
                    </div>
                ))}
        </div>

    )
}

export default indexNinjas