import Project_Page from '@/components/Projects/Project_Page'
import { Project } from 'models/themeModel';
import { MongoClient, ObjectId } from 'mongodb';
import { notFound } from 'next/navigation';
import React from 'react'


export const dynamicParams = false;
export const revalidate = 3600; // revalidation every 1 hour.
export const dynamic = 'force-static';


const getProject = async(id:string)=>{
  const client = await MongoClient.connect(`mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@cluster0.ym26cch.mongodb.net/?retryWrites=true&w=majority`);
  const db = client.db('Projects'); // db name
  const ProjectsCollection = db.collection('Projects'); // collection name
  let projectData:any = false;
  try{
     const data = await ProjectsCollection.findOne({_id:new ObjectId(id)});
    if (!data) throw new Error();
    projectData = data;
  }
  catch(error){
    client.close();
    return false;
  }
  
  client.close();
  return (projectData);
  
}

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
  const projectData = await getProject(project_id);
  if(!projectData) notFound();
  const fixedProject = {...projectData,_id:project_id} as Project
  return (
    <div>
      <Project_Page project={fixedProject}/>
    </div>
  )
}

