import { Fragment } from "react";
import { useRouter } from "next/router"
import { getEventById } from "../../data";

export default function CurrentEvent() {

  const router = useRouter();

  const eventId = router.query.eventId;

  const event = getEventById(eventId);

  console.log(event);

  
  if (!event)
    // return router.push('/'); // redirect
  return (
    <Fragment>
        <div>No Data!</div>
      </Fragment>
  );
  
    const { title, description, location, date, image } = event;
    

  return (
    <div>
      <h1>
        {title}
      </h1>
      <img src={'/' + image} style={{width: '100px', height: 'auto'}} />
      <p>
        {description}
      </p>
      <p>
        {location}
      </p>
      <p>
        {date}
      </p>
    </div>
  )
  
}