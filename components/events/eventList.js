import EventListItem from "./eventListItem";

import styles from './eventList.module.css';

export default function EventList({ items }) {

  const listItems = items.map(({ id, title, description, location, date, image }) => {
    return (
      <EventListItem key={id} img={image}
        title={title}
        time={date}
        adress={location}
        id={id} />
    );
  })

  return (
    <ul className={styles.list} >
      {listItems}
    </ul>
  )
}