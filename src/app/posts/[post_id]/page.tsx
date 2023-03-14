import Post_Page from '@/components/Posts/Post_Page';
import { Post } from 'models/themeModel';
import { MongoClient, ObjectId } from 'mongodb';
import React from 'react'


const getProject = async(id:string)=>{
  const client = await MongoClient.connect(`mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@cluster0.ym26cch.mongodb.net/?retryWrites=true&w=majority`);
  const db = client.db('posts'); // db name
  const PostsCollection = db.collection('posts'); // collection name
  const post = await PostsCollection.findOne({_id:new ObjectId(id)});
  client.close();
  return (post?? false);
}

const page = async(props:any) => {

  const postId = props.params.post_id;
  const postData = await getProject(postId);
  const fixedPostData = {...postData,_id:postId} as Post
  return (
      <Post_Page post={fixedPostData}/>
  )
}

export default page