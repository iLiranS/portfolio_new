import { Post, Project } from "@prisma/client";
import SinglePost from "../Posts/SinglePost";
import ProjectItem from "../Projects/ProjectItem"
import { FaRegLightbulb } from "react-icons/fa";


interface latestObj{
  posts:Post[];
  projects:Project[];
}
export const revalidate = 3600;

const getLatest = async() =>{
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/latest`,{next:{revalidate:3600}});
  if (!res.ok) return {posts:[],projects:[]};
  const latestObj = await res.json();
    return latestObj as latestObj;
  
}



const Latest = async() => {
  const latestObj = await getLatest();
  const {projects,posts} = latestObj;
  const project = projects.length >0 ? projects[0] : null;
  const post = posts.length>0 ? posts[0] : null;


  
  return (

    <div className='flex flex-col  gap-1 animate-scaleUp'>
      <section className="flex gap-1 items-center text-2xl font-semibold">
        <FaRegLightbulb />
        <h3>Recently</h3>
      </section>
      <div className="flex flex-col md:flex-row gap-2">
        {project &&
          <section title={project.description} className='self-start sm:w-[200px] max-w-[200px] relative'>
            <ProjectItem isLatest={true} project={project}/>
          </section>
        }
        {post &&
          <section title={post.description} className='relative overflow-hidden max-w-[200px]'>
            <SinglePost isLatest={true} post={post}/>
          </section>
          }
      </div>
    </div>

  )
}

export default Latest