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

export const getStaticProps = async(context) => {
    const id = context.params.id
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json()

    return {
        props:{
            ninja: data
        }
    }

}

const NinjaId = ({ninja}) => {
    return (
        <div>
            <h1>{ninja.name}</h1>
            <h2>Alias: {ninja.username}</h2>
            <ul>
                <li>Email: {ninja.email}</li>
                <li>Address: {ninja.address.street} | {ninja.address.suite} | {ninja.address.city}</li>
            </ul>
        </div>
    )
}

export default NinjaId