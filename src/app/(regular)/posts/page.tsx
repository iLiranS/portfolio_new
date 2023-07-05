import Posts from '@/components/Posts/Posts'
import { Metadata } from 'next'
import React from 'react'
import { Post } from '@prisma/client'
import { notFound } from 'next/navigation'


export const metadata:Metadata={
  title:'LiranS - Posts',
  description:'view my latest posts'
}
export const revalidate = 60;


const getPosts = async() =>{
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts`);
  if (!res.ok) return [];
  const posts = await res.json();
  return posts || [] as Post[];
}

const page = async() => {
  const posts = await getPosts() as Post[];
  if (posts?.length <1 || !posts) return notFound();
  const reversedPosts = posts.reverse();
  return (
    <Posts posts={reversedPosts}/>
  )
}

export default page