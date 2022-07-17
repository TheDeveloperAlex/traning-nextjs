import { useRouter } from "next/router"



export default function CurrentClient() {
  const router = useRouter();

  const user = router.query.id;

  const onClick = () => {
    // !
    // router.push('/clients/alex/projeatA')
    // !
    router.push({
      pathname: '/clients/[id]/[projectid]',
      query: { id: 'alex', projectid: 'projectA' }
    });
  }


  return (
    <div>
      <h1>Hi {user}</h1>
      <button onClick={onClick} >
        Load
      </button>
    </div>
  )
}