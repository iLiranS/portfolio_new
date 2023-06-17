'use client'
import React, { useState } from 'react'
import { Post } from 'models/themeModel'
import { useRouter } from 'next/navigation'
import Spinner from '../Spinner/Spinner'
import useData from 'store/useData'

const Posts = () => {
  const dataObj = useData();
  const posts = dataObj.posts;
  const router = useRouter();
  const [didClick,setDidClick] = useState(false);
  if (!posts || posts.length<1)
  {
    dataObj.fetchData();
    return( <Spinner desc='loading posts'/> );
  }
  const redirectToPostPage = (id:string) => { setDidClick(true); router.push(`/posts/${id}`);}

    const mappedPosts = posts.reverse().map((post) =>
     <li onClick={()=>{redirectToPostPage(post._id)}} key={post._id} className='grid items-center grid-rows-2  gap-2 p-2 rounded-md cursor-pointer
      box-border  border-2 border-transparent hover:border-orange-400
     bg-darkBG bg-opacity-10
     dark:bg-lightBG dark:bg-opacity-10'>
        <section className='flex justify-between items-center gap-2 w-full relative'>
          <h2 className='text-xl  w-max '>{post.title}</h2>
         <p className='text-sm w-fit'>{post.date}</p>
        </section>
          <p className='opacity-60 overflow-hidden text-ellipsis  text-sm whitespace-nowrap'>{post.description}</p>

    
     </li>
     )



  return (
    <ul className='flex flex-col gap-2 px-4 md:px-0 animate-pageIn'>
      <h2>Posts</h2>
      {didClick && <Spinner/>}
        {mappedPosts}
    </ul>
  )
}

export default Posts