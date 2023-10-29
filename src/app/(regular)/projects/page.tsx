import Projects from '@/components/Projects/Projects'
import { Project } from '@prisma/client'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import React from 'react'

export const metadata:Metadata={
  title:'Projects - LiranS',
  description:'explore my latest projects'
}
export const revalidate = 3600;



const getProjects = async() =>{
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/projects`);
  if (!res.ok) return [];
  const projects = await res.json();
  return projects || [] as Project[];
}


const page = async() => {
  const projects = await getProjects() as Project[];
  if (projects?.length <1 || !projects) return notFound();
  const reversedProjects = projects.reverse();

  return (
    <Projects projects={reversedProjects}/>
  )
}



export default page