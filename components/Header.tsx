import Link from "next/link"

export const Header = () => {
    return (
        <header className="header">
            <Link href='/'>Home</Link>
            <Link href='/blog'>blog</Link>
            <Link href='/about'>about</Link>
        </header>
    )
}