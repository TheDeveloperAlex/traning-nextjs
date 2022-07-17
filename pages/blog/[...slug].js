import { useRouter } from "next/router"


export default function CurrentBlog() {

  const router = useRouter();

  console.log(router);

  return (
    <div>
      <h1>CurrentBlog</h1>
    </div>
  )
}