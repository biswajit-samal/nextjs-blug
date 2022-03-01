import {readFile,readdir} from 'fs/promises';
import matter from 'gray-matter';

import {marked} from 'marked';
export async function getPost(slug){
    let fileName = `content/posts/${slug}.md`;
    console.log('File path :',fileName);
    const source = await readFile(fileName,'utf-8');
    const {data,content} = matter(source);
    console.log('DATA==',data);
    console.log('CONTENT ==',content);
    const html = marked(content)
    return {
        title: data.title,
        body : html
    }
}

//to get the titles along with posts
export async function getPosts(){
    const slugs = await getSlugs();
    const posts = [];
    for(const slug of slugs){
        const post = await getPost(slug);
        console.log('===',post);
        console.log('---',slug)
        posts.push({...post,slug});
    }
    console.log('POSTS',posts);
    return posts;
}

export async function getSlugs(){
    const suffix = '.md'
    const files = await readdir('content/posts');
    console.log('files',files);
    return files.filter((file)=> file.endsWith('.md')).map((file)=>
    file.slice(0,-suffix.length) );
}
