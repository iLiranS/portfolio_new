import Image from 'next/image'
import {BiLinkExternal} from 'react-icons/bi'
import { AiOutlineGithub } from 'react-icons/ai'
import Link from 'next/link'
import Dropdown from '../DropDown/Dropdown'
import { Project } from '@prisma/client'
import {BsArrowRightSquareFill} from 'react-icons/bs'

const Project_Page:React.FC<{project:Project}> = ({project}) => {


  const techList = project.tech.map((tech,index) => <TechnologyItem key={index} name={tech}/>)
  const dataList = project.data.map((dataObj,index) =>
    <Dropdown title={dataObj.title} defaultToggle={index===0 ? true : false}  key={index}>
    {dataObj.text}
    </Dropdown>)

  const imagesList = project.images?
    <ul className='flex flex-col gap-2 relative mx-auto w-full'>
      {project.images.map((imageSrc,index)=> 
      <li className='w-full min-h-[100px] aspect-video rounded-md border-2 border-lightBG/20 relative' key={index}>
        <Image layout='fill' objectFit='cover' src={imageSrc} alt={project.title} /> 
      </li>)}
    </ul>
    : ''

  return (
    <ul className='flex flex-col overflow-hidden gap-3 relative w-full px-4 md:px-0 max-w-full pb-4'>

        <li className='  w-full   grid grid-flow-row md:grid-flow-col items-center font-semibold relative  border-b-2 border-darkBG/20 dark:border-lightBG/20 pb-2  animate-pageIn'>
        <section className='flex items-center gap-2'>
            <Link className='text-orange-400 hover:underline underline-offset-2 text-xs' href={'/projects'}>Projects</Link>
            <section className=' items-center flex'>
              <BsArrowRightSquareFill/>
            </section>
            <h2 className='text-xl'>{project.title}</h2>
        </section>

          <section className='flex  justify-end  items-center gap-2'>
          {project.link &&
            <div className='flex items-center gap-2 text-lg md:text-base'>

              {project.github &&
              <a className=' text-darkBG dark:text-lightBG underline-offset-2 flex items-center gap-1 hover:text-orange-400 ' target={'_blank'} href={project.github}>
                <section className='text-lg hover:text-orange-400'>
                <AiOutlineGithub />
                </section>
              </a>
              }

              <a className='hover:underline underline-offset-2 flex items-center gap-1 hover:text-orange-400' target={'_blank'} href={project.link}>
                <p className='text-sm '>link</p>
                <section className='text-orange-400'>
                <BiLinkExternal/>
                </section>
              </a>

            </div>
          }
          </section>
        </li>

        <li className='flex flex-col md:flex-row gap-2 items-center w-full  pb-2 border-b-2 border-darkBG/20 dark:border-lightBG/20'>
          <h2>Tech</h2>
          <ul className='grid gap-2 grid-cols-[repeat(auto-fill,80px)]  md:grid-cols-[repeat(auto-fill,95px)] w-full  justify-center'>
          {techList}
          </ul>
        </li>

        {dataList}
        {imagesList && <h2>Images</h2>}
        {imagesList}
      
      
    </ul>
  )
}

const TechnologyItem:React.FC<{name:string}> = ({name}) =>  <li title={name} className='p-2 truncate text-xs md:text-base md:w-[100px] text-center bg-opacity-10 dark:bg-opacity-10 rounded-md hover:bg-orange-400 dark:hover:bg-orange-400  bg-darkBG dark:bg-lightBG'>{name}</li>


export default Project_Page