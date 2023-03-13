import Project_Page from '@/components/Projects/Project_Page'
import { Project } from 'models/themeModel';
import { MongoClient, ObjectId } from 'mongodb';
import React from 'react'


const getProject = async(id:string)=>{
  const client = await MongoClient.connect(`mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@cluster0.ym26cch.mongodb.net/?retryWrites=true&w=majority`);
  const db = client.db('Projects'); // db name
  const ProjectsCollection = db.collection('Projects'); // collection name
  const project = await ProjectsCollection.findOne({_id:new ObjectId(id)});
  client.close();
  return (project?? false);
}

const page = async(props:any) => {
  const project_id = props.params.project_id;
  const projectData = await getProject(project_id);
  const fixedProject = {...projectData,_uid:project_id} as Project
  return (
    <div>
      <Project_Page project={fixedProject}/>
    </div>
  )
}

export default page