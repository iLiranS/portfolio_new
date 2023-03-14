import Post_Page from '@/components/Posts/Post_Page';
import { Post } from 'models/themeModel';
import { MongoClient, ObjectId } from 'mongodb';
import { notFound } from 'next/navigation';
import React from 'react'

export const revalidate = 3600; // every hour revalidation


const getProject = async(id:string)=>{
  if (id.length <12) return false;
  const client = await MongoClient.connect(`mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@cluster0.ym26cch.mongodb.net/?retryWrites=true&w=majority`);
  const db = client.db('posts'); // db name
  const PostsCollection = db.collection('posts'); // collection name
  let post= null;
  try{
    const data =  await PostsCollection.findOne({_id:new ObjectId(id)});
    if (!data) throw new Error('cant find post');
    post = data;
  }
  catch(error){
    return false;
  }
    
  

  client.close();
  return (post?? false);
}

const page = async(props:any) => {

  const postId = props.params.post_id;
  const postData = await getProject(postId);
  if (!postData) notFound();

  const fixedPostData = {...postData,_id:postId} as Post
  return (
      <Post_Page post={fixedPostData}/>
  )
}

export default page