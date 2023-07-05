import { Project } from '@prisma/client';
import ProjectItem from './ProjectItem';


const Project:React.FC<{projects:Project[]}> = ({projects}) => {
    // title , src , description , link , id 


    // eslint-disable-next-line react/jsx-no-undef
    const mappedProjects = projects.map(project => <ProjectItem  key={project.id} project={project} />)

    return(

        <div className='flex flex-col gap-2 px-2 relative w-full h-full pb-4'>
            <h2 className='text-orange-400 font-semibold'>Projects</h2>
            <ul className='grid grid-flow-row md:grid-cols-2 grid-cols-1 w-full h-full relative gap-2 animate-pageIn'>
            {mappedProjects}
            </ul>
        </div>
    )


}



export default Project