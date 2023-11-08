import React from 'react'
import { Project } from '@prisma/client';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import AddForm from '@/components/forms/AddForm';


export async function generateMetadata({params}:{params:{project_id:string}}):Promise<Metadata>{
    const id = params.project_id;
    const project = await(getProject(id));
    if (!project) return {title:'Project - Not found'}
    return{
      title:`Edit Project - ${project.title}`,
    }
  
  }


  const getProject = async(id:string) =>{
    console.log(`${process.env.NEXT_PUBLIC_BASE_URL}/api/project?id=${id}`)
    try{
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/project?id=${id}`);
    if (!res.ok) return null;
  
      const project = await res.json();
      return project as Project;
    }
    catch(err){
      console.log(err || 'failed getting project data');
      return null;
    }
  }


  export default async function page({params}:{params:{project_id:string}}){
    const project = await getProject(params.project_id);
    if (!project) return notFound();
    return (
      <div>
        <AddForm initialProject={project}/>
      </div>
    )
  }

