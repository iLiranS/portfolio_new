import { Project } from "@prisma/client";
import { GiClick } from "react-icons/gi";
import Image from "next/image";
import Link from "next/link";


const ProjectItem:React.FC<{project:Project,isLatest?:boolean}> =({project,isLatest=false})=>{
    const {title,preview,description,link,id} = project;



    

    return (
        <li  className={`relative grid grid-rows-[max-content,auto] aspect-[16/10]  w-[400px] group  cursor-pointer max-w-full mx-auto`}>
                <section  className='flex items-center  justify-between p-2  z-10 group-hover:text-orange-400 rounded-t-md
                    bg-darkBG bg-opacity-10
                    dark:bg-lightBG dark:bg-opacity-5'>
                    <Link className="flex justify-between w-full items-center" href={`/project/${project.id}`}>
                    <h3  className='text-lg'>{title}</h3>
                    {link &&<GiClick className='text-lg'/>}
                    </Link>
                </section>


                <section className='relative h-full aspect-video   w-full project_Item'>
                <Image fill priority sizes='100%' src={preview??''} alt={title}/>
                    {!isLatest && <section className='project_Item_section px-2'>{description}</section>}
                </section>
                
                <Link href={`/projects/${project.id}`} className='h-full z-10 w-full absolute top-0 left-0'/>
            </li>
    )
}
export default ProjectItem