import Link from "next/link"
import Head from "next/head"
import { getPosts, getSlugs } from "../lib/post";

export async function getStaticProps(){
  let posts = await getPosts();
  console.log("POSTS ",posts);
  let slugs = await getSlugs();
  return {
    props: {posts:posts}
  }
}
function Home(props) {
  console.log("[Home Page] render!!",props.posts);
  return (
    <>
    <Head>
        <title>Home Page</title>
    </Head>
      <main>
        <h1>My Blog </h1>
        <ul>
           {
             props.posts.map((post,index)=>{
               return (<li key={index}>
               <Link href={`/posts/${post.slug}`}>
                 <a>{post.title}</a>
               </Link>
               </li>)
             })
           }
            
            
        </ul>
      </main>
    </>
  );
}

export default Home;
