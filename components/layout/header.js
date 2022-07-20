import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div>
        <Link href={'/'} >Logo</Link>
      </div>
      <nav>
        <ul>
          <li><Link href={'/events'} >AllPageEvents</Link></li>
        </ul>
      </nav>
    </header>
  )
}