import Link from "next/link";
import EventList from "../components/events/eventList";
import { getFeaturedEvents } from "../data";

export default function HomePage() {

  const events = getFeaturedEvents();


  return (
    <div>
      <EventList items={events} />
      {/* <ul>
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
      </ul> */}
    </div>
  )
}