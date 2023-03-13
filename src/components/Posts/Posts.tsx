import React from 'react'
import { Post } from 'models/themeModel'

const Posts:React.FC<{posts:Post[]}> = ({posts}) => {

    const mappedPosts = posts.map((post,index) =>
     <li key={post._id} className='flex items-center gap-2 p-2 rounded-md
      bg-darkBG bg-opacity-10
      dark:bg-lightBG dark:bg-opacity-10'>
        <p>{index+1}.</p>
       <p>{post.message}</p>
     </li>)

    //TODO: Actually create a blog posts -,- kinda hard.


  return (
    <ul className='flex flex-col gap-2 px-4 md:px-0 animate-pageIn'>
        {mappedPosts}
    </ul>
  )
}

export default Posts