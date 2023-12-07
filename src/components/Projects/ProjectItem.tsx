import { Project } from "@prisma/client";
import { GiClick } from "react-icons/gi";
import Image from "next/image";
import Link from "next/link";


const ProjectItem:React.FC<{project:Project,isLatest?:boolean}> =({project,isLatest=false})=>{
    const {title,preview,description,link,id} = project;



    

    return (
        <li  className={`relative grid grid-rows-[max-content,auto] aspect-[16/10] w-[400px] max-w-full group  cursor-pointer  mx-auto overflow-hidden`}>
                <section  className='flex items-center  justify-between p-2  z-10 group-hover:text-orange-400 rounded-t-md
                    bg-darkBG/10
                    dark:bg-lightBG/10'>
                    <Link className="flex justify-between w-full items-center" href={`/project/${project.id}`}>
                    <h3  className='text-lg'>{title}</h3>
                    {link &&<GiClick className='text-lg'/>}
                    </Link>
                </section>


                <section className='relative h-full aspect-video w-full project_Item overflow-hidden'>
                    <div className="relative w-full h-full overflow-hidden group-hover:scale-105 transition-transform ease-in">
                        <Image fill priority sizes='100%' src={preview??''} alt={title}/>
                    </div>
                </section>
                
                    {!isLatest && <section className='project_Item_section px-2'>{description}</section>}
                <Link href={`/projects/${project.id}`} className='h-full z-10 w-full absolute top-0 left-0'/>
            </li>
    )
}
export default ProjectItem