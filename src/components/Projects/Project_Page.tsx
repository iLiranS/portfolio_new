import Image from 'next/image'
import {BiLinkExternal} from 'react-icons/bi'
import { AiOutlineGithub } from 'react-icons/ai'
import Link from 'next/link'
import { Project } from '@prisma/client'
import {BsArrowRightSquareFill} from 'react-icons/bs'
import { convertDateToString } from 'utils/functions'


const Project_Page:React.FC<{project:Project}> = ({project}) => {
  const stringDate = convertDateToString(project.date);

  const techList = project.tech.map((tech,index) => <TechnologyItem key={index} name={tech}/>)


    const imageBG = project.preview?
        <li className={`relative w-full aspect-video inset-0 rounded-md overflow-hidden`}>
              <Image loading="eager" layout='fill' priority objectFit='cover' src={project.preview} alt={project.title} /> 
          <div className='bg-gradient-to-b to-lightBG dark:to-darkBG rounded-md from-transparent from-10% absolute -bottom-1 w-full h-8'></div>
        </li>
        :
        null

  return (    
    <ul className='flex flex-col overflow-hidden relative w-full px-4 md:px-0 max-w-full pb-4'>
        <li className='w-full flex sm:flex-row flex-col sm:items-center justify-between font-semibold relative animate-pageIn'>
          <section className='flex  sm:flex-row gap-2 md:items-center'>
            <section className='items-center flex gap-1'>
              <Link className='text-orange-400 hover:underline underline-offset-2' href={'/projects'}>Projects</Link>
              <BsArrowRightSquareFill/>
            </section>
            <h2 className='text-xl md:text-2xl break-all'>{project.title}</h2>
          </section>

          <p className='opacity-60 text-sm'>{stringDate}</p>
        </li>

        {project.link || project.github ?
            <li className={`flex items-center gap-2 h-full relative text-lg  sm:w-auto w-full py-1 justify-end ${project.link && project.github && 'justify-between md:justify-end'}`}>
              
              {project.github &&
              <a className={`text-darkBG dark:text-lightBG underline-offset-2 flex items-center gap-1 hover:text-orange-400`} target={'_blank'} href={project.github}>
                <section className='items-center hover:text-orange-400 flex gap-1'>
                  <p className='text-sm'>Repo</p>
                  <AiOutlineGithub />
                </section>
              </a>
              }

              {project.link &&
              <a className='hover:underline underline-offset-2 flex items-center gap-1 hover:text-orange-400' target={'_blank'} href={project.link}>
                <p className='text-sm'>Visit website</p>
                <section className='text-orange-400'>
                <BiLinkExternal/>
                </section>
              </a>
              }

            </li>
            :''
          }

          <div className='border-b-2 border-darkBG/30 dark:border-lightBG/20 pb-2 mb-2'></div>

        {imageBG}

        <li className='w-full py-2 border-b-2 border-darkBG/20 dark:border-lightBG/20'>
          <ul className='grid gap-2 grid-cols-[repeat(auto-fill,80px)]  md:grid-cols-[repeat(auto-fill,95px)] w-full '>
          {techList}
          </ul>
        </li>

          
    </ul>
  )
}

const TechnologyItem:React.FC<{name:string}> = ({name}) =>  <li title={name} className='p-2 truncate text-xs md:text-base md:w-[100px] text-center bg-opacity-10 dark:bg-opacity-10 rounded-md hover:bg-orange-400 dark:hover:bg-orange-400  bg-darkBG dark:bg-lightBG'>{name}</li>


export default Project_Page