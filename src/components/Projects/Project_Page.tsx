import React from 'react'
import { Project } from 'models/themeModel'
import Image from 'next/image'
import {BiLinkExternal} from 'react-icons/bi'
import Link from 'next/link'


// getting project props :  _uid , date , technologies , title , data , description , link , preview 
// _uid : string , object but will be mapped to a list in parent
// date : strring
// technologies : string[]
// title : string
// data : { heading:string , text:string , image?string }
// description : string,
// link : string
// preview : string



const Project_Page:React.FC<{project:Project}> = ({project}) => {

  const techList = project.technologies.map((tech,index) => <TechnologyItem key={index} name={tech}/>)
  const dataList = project.data.map((dataObj,index) => <DataSection data={dataObj} key={index}/>)

  return (
    <ul className='flex flex-col gap-3 relative w-full px-4 md:px-0 max-w-full pb-4'>

        <li className=' justify-between grid grid-flow-row md:grid-flow-col items-center font-semibold relative  border-b-[1px] border-darkBG dark:border-lightBG dark:border-opacity-20  border-opacity-20 pb-2  animate-pageIn'>
        <section className='flex items-center gap-2'>
           <Link className='text-orange-400 hover:underline underline-offset-2' href={'/projects'}>Projects</Link>
           <span>&gt;</span> 
           <h2 className='text-2xl'>{project.title}</h2>
        </section>

          <section className='flex  items-center gap-2'>
            <p>{project.date}</p>
          {project.link &&
            <div className='flex items-center gap-2 text-orange-400 text-lg md:text-base'>
              <a className='hover:underline underline-offset-2 flex items-center gap-1' target={'_blank'} href={project.link}>
               <p className='hidden md:block'>Visit</p>
               <BiLinkExternal/>
              </a>
            </div>
          }
          </section>
        </li>

        <li className='flex justify-between items-center max-w-full'>
          <p>Tech</p>
          <ul className='grid gap-2 grid-cols-3 max-w-xs justify-center '>
          {techList}
          </ul>
        </li>

        {dataList}
      
      
    </ul>
  )
}

const TechnologyItem:React.FC<{name:string}> = ({name}) =>  <li className='p-2 text-xs md:text-base md:w-[100px] text-center bg-opacity-10 dark:bg-opacity-10 rounded-md hover:bg-orange-400 dark:hover:bg-orange-400  bg-darkBG dark:bg-lightBG'>{name}</li>

const DataSection:React.FC<{data:{heading:string;text:string;image?:string}}> = ({data}) =>
 <li className='flex flex-col gap-2  border-t-[1px] border-darkBG dark:border-lightBG dark:border-opacity-20  border-opacity-20 pt-2'>
  <h3 className='text-xl'>{data.heading}</h3> 
  <p>{data.text}</p>
  {data.image?
   <section className='relative w-full  aspect-video m-auto rounded-md overflow-hidden'>
    <Image fill priority sizes='100%' src={data.image} alt={data.heading}/>
  </section> 
 : '' }
 </li>

export default Project_Page