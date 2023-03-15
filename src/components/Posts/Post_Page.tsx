import { Post } from 'models/themeModel'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
// React.FC<{post:Post}>
const Post_Page:React.FC<{post:Post}> = ({post}) => {
    const {title , data , date } =  post;
    const dataList = data.map((dataObj,index) => <DataSection data={dataObj} key={index}/>)

  return (
    <ul className='flex flex-col gap-3 relative w-full px-4 md:px-0 max-w-full pb-4 '>

    <li className=' justify-between grid grid-flow-row md:grid-flow-col items-center font-semibold relative animate-pageIn '>
        <section className='flex gap-2 items-center'>
        <Link className='text-orange-400 hover:underline underline-offset-2' href={'/posts'}>Posts</Link>
        <span>&gt;</span>
      <h2 className='text-2xl'>{title}</h2>
        </section>
      <section className='flex items-center gap-2'>
      <p>{date}</p>
      </section>
    </li>

    {dataList}
  
</ul>
  )
}

//        <section className='flex items-center gap-2'> <Link className='text-orange-400' href={'/projects'}>Projects</Link> <span>&gt;</span> <h2 className='text-2xl'>{project.title}</h2></section>



const DataSection:React.FC<{data:{title:string;text:string;image?:string}}> = ({data}) =>
 <li className='flex flex-col gap-4  border-t-[1px] border-darkBG dark:border-lightBG dark:border-opacity-20  border-opacity-20 pt-2'>
  <h3 className='text-lg font-semibold '>{data.title}</h3> 
  <p className='opacity-80'>{data.text}</p>
  {data.image?
   <section className='relative w-full  aspect-video m-auto rounded-md overflow-hidden'>
    <Image fill priority sizes='100%' src={data.image} alt={data.title}/>
  </section> 
 : '' }
 </li>

export default Post_Page