import Head from "next/head"
import {getPost, getSlugs} from "../../lib/post"


export async function getStaticProps({params:{slug}}){
    console.log("Getting called [getStaticProps : context] ",slug)
    const post = await getPost(slug);
    return {
        props:{
            post:post
        }
    }
} 

export async function getStaticPaths(){
    const slugs = await getSlugs()
    return {
        paths:slugs.map((slug)=>({
            params:{slug}
        })),
        // paths:[
        //     {params:{slug:'first-post'}},
        //     {params:{slug:'second-post'}}
        // ],
        fallback:false
    }
}

function Post({post}){
    console.log('Post : ',post)
    return <>
    <Head>
        <title>Post - My Blog</title>
    </Head>
    <main>
    <h1>{post.title}</h1>
    <article dangerouslySetInnerHTML={{ __html:post.body }} />
    </main>
        
    </>
}

export default Post;
