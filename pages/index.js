import Link from "next/link";

export default function HomePage() {

  return (
    <div>
      <h1>HomePage</h1>
      <ul>
        <li>
          <Link href={'/portfolio'} >Portfolio</Link>
        </li>
        <li>
          <Link href={'/about'} >About</Link>
        </li>
        <li>
          <Link href={'/clients'} >Clients</Link>
        </li>
        <li>
          <Link href={'/blog'} >Blog</Link>
        </li>
      </ul>
    </div>
  )
}