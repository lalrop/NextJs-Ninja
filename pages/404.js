import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect } from "react"


const NotFound = () => {
    const router = useRouter()
    
    useEffect(()=>{
        setTimeout(()=>{
            router.push('/')
        },3000)
    },[])

    return(
        <div className="not-found">
            <h1>Not FOUND!!!</h1>
            <h2>No encontramos la pagina!</h2>
            <Link href='/'><a>Volver a la aagina de Inicio</a></Link>
        </div>
    )
}

export default NotFound