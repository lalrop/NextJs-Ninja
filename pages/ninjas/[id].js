export const getStaticPaths = async() =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    
    const paths = data.map(ninja => {
        return{
            params: {id: ninja.id.toString()}
        }
    })
    
    return{
        paths,
        fallback: false
    }
}

const NinjaId = () => {
    return (
        <div>
            <h1>Ninja info!</h1> 
        </div>
    )
}

export default NinjaId