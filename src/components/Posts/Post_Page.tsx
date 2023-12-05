import { Post } from '@prisma/client';
import Link from 'next/link';
import { convertDateToString } from 'utils/functions';
import {BsArrowRightSquareFill} from 'react-icons/bs'
import Image from 'next/image'


const Post_Page:React.FC<{post:Post,dataHTML:any}> = ({post,dataHTML}) => {


    const {title , date } =  post;
    const stringDate = convertDateToString(date);

    const imageBG = post.preview?
    <li className={`relative w-full aspect-video inset-0 rounded-md overflow-hidden`}>
      <Image loading="eager" fill objectFit='cover' priority src={post.preview} alt={post.title} /> 
      <div className='bg-gradient-to-b to-lightBG dark:to-darkBG rounded-md from-transparent from-10% absolute -bottom-1 w-full h-8'></div>
    </li>
    :
    null


  return (
    <ul className='flex flex-col gap-3 relative w-full px-4 md:px-0 max-w-full pb-4 '>
    <li className=' justify-between flex flex-col md:flex-row  font-semibold relative animate-pageIn '>
      <section className='flex flex-col sm:flex-row gap-2 md:items-center'>


        <div className='items-center flex gap-1'>
          <Link className='text-orange-400 hover:underline underline-offset-2 ' href={'/posts'}>Posts</Link>
          <BsArrowRightSquareFill/>
        </div>

        <h2 className='text-2xl'>{title}</h2>
      </section>

      <section className='flex items-center gap-2 self-end md:self-center opacity-60 text-xs'>
        <p>{stringDate}</p>
      </section>
    </li>
      {imageBG}


    {/* <ReadEditor data={post.data}/> */}
    <div className='data' dangerouslySetInnerHTML={{__html:dataHTML}}/>

  
</ul>
  )
}


export default Post_Page
