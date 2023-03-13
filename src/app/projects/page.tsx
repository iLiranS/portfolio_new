import Project from '@/components/Projects/Project'
import React from 'react'
import { MongoClient } from 'mongodb'

//TODO: add revalidation if needed in the future.

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
  const projectsMapped = projects.map(project => <Project key={project._id.toString()} src={project.preview} title={project.title} id={project._id.toString()} description={project.description} link={project.link}  /> )
  return (
    <div className='flex flex-col px-4 md:px-0 gap-2 pb-2 animate-scaleUp'>
        <h2 className='text-2xl font-semibold text-orange-400'>Projects</h2>

        <ul className='grid w-full  gap-4 grid-cols-1 md:grid-cols-2'>

         {projectsMapped}
        
        </ul>
    </div>
  )
}



export default page