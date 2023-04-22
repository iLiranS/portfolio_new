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
            <h2>Projects</h2>
            <ul className='grid grid-flow-row md:grid-cols-2 grid-cols-1 w-full h-full relative gap-2'>
            {mappedProjects}
            </ul>
        </div>
    )


}

const ProjectItem:React.FC<{project:Project;onClick:(id:string)=>void}> =({project,onClick})=>{
    const {title,preview,description,link,_id} = project;

    return (
        <li onClick={()=>{onClick(_id)}}  className={`relative grid grid-rows-[max-content,auto] aspect-[16/10] w-[400px] group  cursor-pointer max-w-full mx-auto`}>
                <section  className='flex items-center  justify-between p-2  z-10 group-hover:text-orange-400 rounded-t-md
                 bg-darkBG bg-opacity-10
                 dark:bg-lightBG dark:bg-opacity-5'>
                    <h3  className='text-lg'>{title}</h3>
                    {link &&<GiClick className='text-lg'/>}
                </section>


                <section className='relative h-full aspect-video   w-full project_Item'>
                <Image fill priority sizes='100%' src={preview} alt={title}/>
                    <section className='project_Item_section px-2'>{description}</section>
                </section>
           
                
            </li>
  )
}

export default Project