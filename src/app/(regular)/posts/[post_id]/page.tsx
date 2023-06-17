import Post_Page from '@/components/Posts/Post_Page';
import React from 'react'







const page = async({params}:{params:{post_id:string}}) => {

  const postId = params.post_id;

  return (
      <Post_Page post_id={postId}/>
  )
}

export default page