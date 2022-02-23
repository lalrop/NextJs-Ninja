import Link from "next/link"

const NotFound = () => {
    return(
        <div className="not-found">
            <h1>Not FOUND!!!</h1>
            <h2>No encontramos la pagina!</h2>
            <Link href='/'><a>Volver a la aagina de Inicio</a></Link>
        </div>
    )
}

export default NotFound