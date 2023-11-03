import React from 'react'

const ProjectSkeleton = () => {
  return (
    <ul className='flex flex-col overflow-hidden gap-3 relative w-full px-4 md:px-0 max-w-full pb-4'>
      <li className='w-full bg-gray-500/50 animate-pulse rounded-md h-8'/>
      <li className='w-full aspect-video rounded-md bg-gray-500/50 animate-pulse'/>
    </ul>
  )
}

export default ProjectSkeleton