import Post_Page from '@/components/Posts/Post_Page';
import { Post } from '@prisma/client';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import React from 'react'





export async function generateMetadata({params}:{params:{post_id:string}}):Promise<Metadata>{
  const id = params.post_id;
  const post = await(getPost(id));
  if (!post) return {title:'LiranS Post - Not found'}
  return{
    title:`Post - ${post.title}`,
    description:`explore post ${post.title} , ${post.description}`
  }

}




// static params
export async function generateStaticParams() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts`);
  const posts = await res.json() as Post[];
  return posts.map(project => ({post_id:project.id}));
}

const dynamicParams = false;
export { dynamicParams };



const getPost = async(id:string) =>{

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/post?id=${id}`);
  if (!res.ok) return null;
  const post = await res.json();
  return post as Post;
}



const page = async({params}:{params:{post_id:string}}) => {

  const post = await getPost(params.post_id);
  if (!post) return notFound();


  return (
      <Post_Page post={post}/>
  )
}

export default page