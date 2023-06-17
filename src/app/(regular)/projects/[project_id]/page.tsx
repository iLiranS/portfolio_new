import Project_Page from '@/components/Projects/Project_Page'
import React from 'react'




export default async function page({params}:{params:{project_id:string}}){
  const project_id = params.project_id;
  return (
    <div>
      <Project_Page project_id={project_id}/>
    </div>
  )
}

