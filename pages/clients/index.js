import Link from "next/link";

export default function Clients() {

  const clients = [
    { id: 'max', name: 'Max' },
    { id: 'alex', name: 'Alex' },
    { id: 'daniel', name: 'Daniel' },
    { id: 'jack', name: 'Jack' },
  ];
// !
// const linkItems = clients.map(({ id, name }) => (
  //   <li key={id} >
  //     <Link href={`/clients/${id}`} >{name}</Link>
  //   </li>
  // ));
  // !
  
  const linkItems = clients.map(({ id, name }) => (
    <li key={id} >
      <Link href={{
        pathname: '/clients/[id]',
        query: { id, },
      }} >{name}</Link>
    </li>
  ));

  return (
    <div>
      <h1>Clients</h1>
      <ul>
        {linkItems}
      </ul>
    </div>
  )
}