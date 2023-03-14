'use client'
import { Project } from 'models/themeModel';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React , {useState} from 'react'
import {GiClick} from 'react-icons/gi'
import Spinner from '../Spinner/Spinner';


const Project:React.FC<{projects:Project[]}> = ({projects}) => {
    // title , src , description , link , id 
    const router = useRouter();
    const [didEnter,setDidEnter] = useState(false);

    const navigateToProjectHandler = (id:string) => {
        setDidEnter(true);
        router.push('/projects/'+id)
    };

    const mappedProjects = projects.map(project => <ProjectItem onClick={navigateToProjectHandler} key={project._id} project={project} />)

    return(

        <div className='flex flex-col gap-2 px-2 relative w-full h-full pb-4'>
            {didEnter && <Spinner/>}
            <h2 className='text-2xl text-orange-400'>Projects</h2>
            <ul className='grid grid-flow-row md:grid-cols-2 grid-cols-1 w-full h-full relative gap-2'>
            {mappedProjects}
            </ul>
        </div>
    )


}

const ProjectItem:React.FC<{project:Project;onClick:(id:string)=>void}> =({project,onClick})=>{
    const {title,preview,description,link,_id} = project;

    return (
        <li   className={`relative group aspect-video max-w-[400px]  w-full mx-auto`}>
                <section onClick={()=>{onClick(_id)}} className='flex items-center  justify-between p-2  z-10 hover:text-orange-400 cursor-pointer rounded-t-md
                 bg-darkBG bg-opacity-10
                 dark:bg-lightBG dark:bg-opacity-5'>
                    <h3  className='text-lg hover:text-orange-400'>{title}</h3>
                    {link &&<GiClick className='text-lg'/>}
                </section>

                <ul className='project_Item_section px-2'>
                    <li>{description}</li>
                </ul>

                <section className='relative h-full aspect-video  w-full project_Item'>
                <Image fill priority sizes='100%' src={preview} alt={title}/>
                </section>
           
                
            </li>
  )
}

export default Project