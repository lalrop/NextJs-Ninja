import Link from "next/link"

const Navbar = () => {
    return(
        <nav>
            <div className="logo">
                <h1>Navbar</h1>
            </div>
            <div>
                <Link href="/">
                    <a>Home</a>
                </Link>
                <Link href="/about">
                    <a>About</a>
                </Link>
                <Link href="/ninjas/test">
                    <a>All Ninjas</a>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar