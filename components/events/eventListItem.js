/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import AddressIcon from "../icons/address";
import ArrowRightIcon from "../icons/arrowRight";
import DateIcon from "../icons/date";
import Button from "../ui/button";

import styles from './eventListItem.module.css';

export default function EventListItem({ 
  img,
  title,
  time,
  adress,
  id,
}) {
  
  const normalTime = new Date(time).toLocaleDateString('en-US', { 
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  
  const formattedAdress = adress.replace(', ', '\n');

  const linkPath = `/events/${id}`;

  return (
    <li className={styles.item} >
      <img src={'/' + img} alt={title} />
      <div className={styles.content} >
        <div className={styles.summary} >
          <h2>
            {title}
          </h2>
          <div className={styles.date} >
            <DateIcon />
            <time>{normalTime}</time>
          </div>
          <div className={styles.address} >
            <AddressIcon />
            <div>{formattedAdress}</div>
          </div>
        </div>
        <div className={styles.actions} > 
          <Button link={linkPath} >
            <span>
              link
            </span>
            <span className={styles.icon} ><ArrowRightIcon /></span>
          </Button>
        </div>
      </div>
    </li>
  )
}