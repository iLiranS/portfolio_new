import Project_Page from '@/components/Projects/Project_Page'
import { MongoClient } from 'mongodb';
import React from 'react'


export const dynamicParams = false;
export const revalidate = 3600; // revalidation every 1 hour.
export const dynamic = 'force-static';




export async function generateStaticParams() {
  const client = await MongoClient.connect(`mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@cluster0.ym26cch.mongodb.net/?retryWrites=true&w=majority`);
  const db = client.db('Projects'); // db name
  const ProjectsCollection = db.collection('Projects'); // collection name
  const projectsList = await ProjectsCollection.find().toArray();
  const mappedListIds = projectsList.map(project => ({project_id:project._id.toString()}));
  return mappedListIds;
}



export default async function page({params}:{params:{project_id:string}}){
  const project_id = params.project_id;
  return (
    <div>
      <Project_Page project_id={project_id}/>
    </div>
  )
}

