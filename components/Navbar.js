import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
    return(
        <nav>
            <div className="logo">
            <Image src={'/CoffeeDoddle.svg'} width={150} height={120}/>                
            </div>
            <div>
                <Link href="/">
                    <a>Home</a>
                </Link>
                <Link href="/about">
                    <a>About</a>
                </Link>
                <Link href="/ninjas/">
                    <a>All Ninjas</a>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar