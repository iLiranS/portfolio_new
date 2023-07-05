import Image from 'next/image'
import {BiLinkExternal} from 'react-icons/bi'
import { AiOutlineGithub } from 'react-icons/ai'
import Link from 'next/link'
import Dropdown from '../DropDown/Dropdown'
import { Project } from '@prisma/client'
import Spinner from '../Spinner/Spinner'


const Project_Page:React.FC<{project:Project}> = ({project}) => {


  const techList = project.tech.map((tech,index) => <TechnologyItem key={index} name={tech}/>)
  const dataList = project.data.map((dataObj,index) =>
    <Dropdown title={dataObj.title} defaultToggle={index===0 ? true : false}  key={index}>
    {dataObj.text}
    </Dropdown>)

  const imagesList = project.images?
    <section className='flex flex-col gap-4   relative mx-auto'>
      {project.images.map((imageSrc,index)=> <Image key={index} className='rounded-md border-2 border-darkBG/50 dark:border-lightBG/50' height={300} width={300}  src={imageSrc} alt={project.title} />)}
    </section>
    : ''

  return (
    <ul className='flex flex-col overflow-hidden gap-3 relative w-full px-4 md:px-0 max-w-full pb-4'>

        <li className='  w-full   grid grid-flow-row md:grid-flow-col items-center font-semibold relative  border-b-[1px] border-darkBG dark:border-lightBG dark:border-opacity-20  border-opacity-20 pb-2  animate-pageIn'>
        <section className='flex items-center gap-2'>
            <Link className='text-orange-400 hover:underline underline-offset-2' href={'/projects'}>Projects</Link>
            <span>&gt;</span> 
            <h2 className='text-2xl'>{project.title}</h2>
        </section>

          <section className='flex  justify-end  items-center gap-2'>
          {project.link &&
            <div className='flex items-center gap-2 text-orange-400 text-lg md:text-base'>

              {project.github &&
              <a className=' text-darkBG dark:text-lightBG underline-offset-2 flex items-center gap-1 hover:text-orange-400 ' target={'_blank'} href={project.github}>
                <AiOutlineGithub/>
              </a>
              }

              <a className='hover:underline underline-offset-2 flex items-center gap-1' target={'_blank'} href={project.link}>
                <p className='hidden md:block'>Visit</p>
                <BiLinkExternal/>
              </a>

            </div>
          }
          </section>
        </li>

        <li className='flex justify-between items-center max-w-full'>
          <h2>Tech</h2>
          <ul className='grid gap-2 grid-cols-3 max-w-xs justify-center '>
          {techList}
          </ul>
        </li>

        {dataList}
        {imagesList && <h2>Images</h2>}
        {imagesList}
      
      
    </ul>
  )
}

const TechnologyItem:React.FC<{name:string}> = ({name}) =>  <li className='p-2 text-xs md:text-base md:w-[100px] text-center bg-opacity-10 dark:bg-opacity-10 rounded-md hover:bg-orange-400 dark:hover:bg-orange-400  bg-darkBG dark:bg-lightBG'>{name}</li>


export default Project_Page