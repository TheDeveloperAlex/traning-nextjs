import { useRouter } from "next/router";

export default function CurrentProject(props) {
  console.log(props);

  const router = useRouter();

  const projectId = router.query.projectid;

  return (
    <div>
      <h1>Project {projectIdl}</h1>
    </div>
  );
}

export async function getStaticProps(context) {
  console.log(context);    
  return {
    props: {}
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      {params: { projectid: 'a' } },
      {params: { projectid: 'b' } },
    ],
    fallback: false,
  }
}