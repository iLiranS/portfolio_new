import Posts from '@/components/Posts/Posts'
import React from 'react'
import { MongoClient } from 'mongodb'
import { Post } from 'models/themeModel';

// check for new posts every 1 hour
export const revalidate = 3600;
export const dynamic = 'force-static';


async function getData(){
  const client = await MongoClient.connect(`mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@cluster0.ym26cch.mongodb.net/?retryWrites=true&w=majority`);
  const db = client.db('posts'); // db name
  const postsCollection = db.collection('posts'); // collection name
  const posts = await postsCollection.find().toArray();
  client.close();
  return (posts?? false);
}


const page = async() => {
  const posts = await getData();
  const mappedPosts = posts.map(post => ({...post , _id:post._id.toString(),} as Post));
  return (
    <Posts posts={mappedPosts}/>
  )
}

export default page