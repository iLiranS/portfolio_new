import { Post, Project } from "@prisma/client";
import SinglePost from "../Posts/SinglePost";
import ProjectItem from "../Projects/ProjectItem"


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

    <div className='flex flex-col sm:flex-row gap-4 animate-scaleUp'>
      {project &&
        <section className='flex flex-col  relative'>
          <h2 className='text-orange-400'>Latest Project</h2>
          <section className='self-start sm:w-[200px] relative'>
            <ProjectItem isLatest={true} project={project}/>
          </section>
        </section>
      }
      {post &&
        <section className='relative flex flex-col'>
          <h2 className='text-orange-400 '>Latest Post</h2>
          <section className='relative overflow-hidden sm:max-w-[200px] md:max-w-full'>
            <SinglePost isLatest={true} post={post}/>
          </section>
        </section>
        }
    </div>

  )
}

export default Latest