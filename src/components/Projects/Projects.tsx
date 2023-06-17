import { formData } from 'models/themeModel';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React , {useState} from 'react'
import {GiClick} from 'react-icons/gi'
import useData from 'store/useData';
import Spinner from '../Spinner/Spinner';


const Project = () => {
    // title , src , description , link , id 
    const dataObj = useData();
    const projects = dataObj.projects;
    const router = useRouter();
    const [didEnter,setDidEnter] = useState(false);
    if (!projects || projects.length<1)
    { 
        dataObj.fetchData();
        return <Spinner desc='loading projects'/>
    }

    const navigateToProjectHandler = (id:string) => {
        if (id.length<1)return;
        setDidEnter(true);
        router.push('/projects/'+id)
    };

    const mappedProjects = projects.map(project => <ProjectItem clickNavigate={navigateToProjectHandler} key={project._id} project={project} />)

    return(

        <div className='flex flex-col gap-2 px-2 relative w-full h-full pb-4'>
            {didEnter && <Spinner/>}
            <h2 className='text-orange-400 font-semibold'>Projects</h2>
            <ul className='grid grid-flow-row md:grid-cols-2 grid-cols-1 w-full h-full relative gap-2'>
            {mappedProjects}
            </ul>
        </div>
    )


}

export const ProjectItem:React.FC<{project:formData;clickNavigate:(id:string)=>void}> =({project,clickNavigate})=>{
    const {title,preview,description,link,_id} = project;

    return (
        <li onClick={()=>{clickNavigate(_id??'')}}  className={`relative grid grid-rows-[max-content,auto] aspect-[16/10]  w-[400px] group  cursor-pointer max-w-full mx-auto`}>
                <section  className='flex items-center  justify-between p-2  z-10 group-hover:text-orange-400 rounded-t-md
                 bg-darkBG bg-opacity-10
                 dark:bg-lightBG dark:bg-opacity-5'>
                    <h3  className='text-lg'>{title}</h3>
                    {link &&<GiClick className='text-lg'/>}
                </section>


                <section className='relative h-full aspect-video   w-full project_Item'>
                <Image fill priority sizes='100%' src={preview??''} alt={title}/>
                    <section className='project_Item_section px-2'>{description}</section>
                </section>
           
                
            </li>
  )
}

export default Project