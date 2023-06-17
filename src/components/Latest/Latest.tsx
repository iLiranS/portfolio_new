'use client'
import { useRouter } from 'next/navigation';
import React from 'react'
import useData from 'store/useData'
import { ProjectItem } from '../Projects/Projects';
import Spinner from '../Spinner/Spinner';
// I want to fetch here latest projects/Posts ... How to prevent double fetching.
// Maybe I can latest collection in mongoDB with title and link.
const Latest = () => {
  const router = useRouter();
  const data = useData((state)=>state.fetchData);
  const projects =  useData((state)=>state.projects) ??[];
  const posts =  useData((state)=>state.posts ??[]);
  if (projects.length <1|| posts.length<1){
    data(); // initial data set.
  }
  const latestProject = projects.length>0 ? projects.at(-1) : null;
  const latestPost = posts.length>0 ? posts.at(-1) : null;

  if (!latestProject || !latestPost){
    return(
      <div className='relative  pt-12'>
      <Spinner desc='loading data'/>
      </div>
    )
  }
  
  return (
    <div className='flex flex-col md:flex-row lg:flex-col gap-4  lg:items-center'>
        <section className='flex flex-col gap-1 relative'>
          <h2 className='text-orange-400'>Latest Project</h2>
          <section className='w-[200px] relative'>
            <ProjectItem project={latestProject} onClick={()=>router.push('/projects/'+latestProject._id)}/>
          </section>
        </section>
        <section className='w-[200px] relative flex flex-col'>
          <h2 className='text-orange-400'>Latest Post</h2>
          <section onClick={()=>{router.push('/posts/'+latestPost._id)}} className='relative w-full bg-darkBG dark:bg-lightBG bg-opacity-10 dark:bg-opacity-10 rounded-md p-1 cursor-pointer hover:bg-opacity-20 dark:hover:bg-opacity-20'>
           <h3>{latestPost.title}</h3>
           <p className='opacity-50 text-sm w-full'>{latestPost.description}</p>
          </section>
        </section>
    </div>
  )
}

export default Latest