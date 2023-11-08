import React from 'react'
import { Post } from '@prisma/client';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import AddForm from '@/components/forms/AddForm';


export async function generateMetadata({params}:{params:{post_id:string}}):Promise<Metadata>{
    const id = params.post_id;
    const post = await(getPost(id));
    if (!post) return {title:'Post - Not found'}
    return{
      title:`Edit Post - ${post.title}`,
    }
  
  }


  const getPost = async(id:string) =>{
    console.log(`${process.env.NEXT_PUBLIC_BASE_URL}/api/post?id=${id}`)
    try{
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/post?id=${id}`);
    if (!res.ok) return null;
  
      const post = await res.json();
      return post as Post;
    }
    catch(err){
      console.log(err || 'failed getting post data');
      return null;
    }
  }


  export default async function page({params}:{params:{post_id:string}}){
    const post = await getPost(params.post_id);
    if (!post) return notFound();
    return (
      <div>
        <AddForm initialPost={post}/>
      </div>
    )
  }

