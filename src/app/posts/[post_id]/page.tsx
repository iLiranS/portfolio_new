import Post_Page from '@/components/Posts/Post_Page';
import Spinner from '@/components/Spinner/Spinner';
import { Post } from 'models/themeModel';
import { MongoClient, ObjectId } from 'mongodb';
import { notFound } from 'next/navigation';
import React, { Suspense } from 'react'

export const revalidate = 3600; // every hour revalidation
export const dynamicParams = false;
export const dynamic = 'force-static';

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

export async function generateStaticParams() {
  const client = await MongoClient.connect(`mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@cluster0.ym26cch.mongodb.net/?retryWrites=true&w=majority`);
  const db = client.db('posts'); // db name
  const postsCollection = db.collection('posts'); // collection name
  const postsList = await postsCollection.find().toArray();
  const mappedListIds = postsList.map(post => ({post_id:post._id.toString()}));
  return mappedListIds;
}



const page = async({params}:{params:{post_id:string}}) => {

  const postId = params.post_id;
  const postData = await getProject(postId);
  if (!postData) notFound();

  const fixedPostData = {...postData,_id:postId} as Post
  return (
      <Post_Page post={fixedPostData}/>
  )
}

export default page