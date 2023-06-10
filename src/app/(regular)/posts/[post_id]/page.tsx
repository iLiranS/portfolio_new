import Post_Page from '@/components/Posts/Post_Page';
import { MongoClient } from 'mongodb';
import React from 'react'

export const revalidate = 3600; // every hour revalidation
export const dynamicParams = false;
export const dynamic = 'force-static';


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

  return (
      <Post_Page post_id={postId}/>
  )
}

export default page