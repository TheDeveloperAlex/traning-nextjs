import EventList from "../../components/events/eventList";
import { getAllEvents } from "../../data"

export default function AllPageEvents() {

  const events = getAllEvents();

  // const iventsItems = events.map((data) => {
  //   return (

  //   )
  // })

  return (
    <div>
      <h1>AllPageEvents</h1>
      <EventList items={events} />
    </div>
  )
}