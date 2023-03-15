import Projects from '@/components/Projects/Projects'
import React from 'react'
import { MongoClient } from 'mongodb'
import { Project } from 'models/themeModel';


export const revalidate = 3600; // revalidation every hour
export const dynamic = 'force-static';


// fetch projects in here.
const getProjects = async()=>{
  // will be shown to user but password and username is hidden.
  const client = await MongoClient.connect(`mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@cluster0.ym26cch.mongodb.net/?retryWrites=true&w=majority`);
  const db = client.db('Projects'); // db name
  const projectsCollection = db.collection('Projects'); // collection name
  const projects = await projectsCollection.find().toArray();
  client.close();
  return (projects?? false);
}

const page = async() => {
  const projects = await getProjects();
  const projectsMapped = projects.map(project=>({...project , _id:project._id.toString()} as Project))

  return (
    <Projects projects={projectsMapped}/>
  )
}



export default page