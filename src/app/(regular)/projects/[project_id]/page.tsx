import { allPreCodeToHighlighted } from '@/components/Editor/Renderer/rendererFunctions';
import Project_Page from '@/components/Projects/Project_Page'
import { Project } from '@prisma/client';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import React from 'react'

// dont allow unvalid params.
// const dynamicParams = false;
// export { dynamicParams };
export const revalidate = 3600;

//metadata
export async function generateMetadata({params}:{params:{project_id:string}}):Promise<Metadata>{
  const id = params.project_id;
  const project = await(getProject(id));
  if (!project) return {title:'Project - Not found'}
  return{
    title:`Project - ${project.title}`,
    description:`explore project ${project.title} , ${project.description}`
  }

}

const getProject = async(id:string) =>{
  try{
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/project?id=${id}`);
  if (!res.ok) return null;

    const project = await res.json();
    return project as Project;
  }
  catch(err){
    console.error('ERROR GETTING PROJECT DATA for id of' + id);
    console.error(err);
    return null;
  }
}
export default async function page({params}:{params:{project_id:string}}){
  const project = await getProject(params.project_id);
  if (!project) return notFound();
  const dataHTML = project.data.html;
  const htmlHighlighted = allPreCodeToHighlighted(dataHTML);
  return (
      <>
      <Project_Page project={project}/>
      <div className='data' dangerouslySetInnerHTML={{__html:htmlHighlighted}}/>      
      </>
  )
}

