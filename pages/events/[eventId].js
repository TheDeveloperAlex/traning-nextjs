import { Fragment } from "react";
import { useRouter } from "next/router"
import { getEventById } from "../../data";

export default function CurrentEvent() {

  const router = useRouter();

  const eventId = router.query.eventId;

  const event = getEventById(eventId);

  if (!event)
    return (
      <Fragment>
        <div>No Data!</div>
      </Fragment>
    );
  

  return (
    <div>
      <h1>
        Event Details
      </h1>
    </div>
  )
  
}