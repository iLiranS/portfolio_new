import { Post } from '@prisma/client';
import Image from 'next/image'
import Link from 'next/link';
import { convertDateToString } from 'utils/functions';
import Dropdown from '../DropDown/Dropdown';

const Post_Page:React.FC<{post:Post}> = ({post}) => {


    const {title , data , date } =  post;
    const dataList = data.map((dataObj,index) =><Dropdown defaultToggle={index===0 ? true : false} title={dataObj.title} key={index}>{dataObj.text}</Dropdown>)
    const stringDate = convertDateToString(date);


  return (
    <ul className='flex flex-col gap-3 relative w-full px-4 md:px-0 max-w-full pb-4 '>

    <li className=' justify-between grid grid-flow-row md:grid-flow-col items-center font-semibold relative animate-pageIn '>
        <section className='flex gap-2 items-center'>
        <Link className='text-orange-400 hover:underline underline-offset-2' href={'/posts'}>Posts</Link>
        <span>&gt;</span>
      <h2 className='text-2xl'>{title}</h2>
        </section>
      <section className='flex items-center gap-2'>
      <p>{stringDate}</p>
      </section>
    </li>

    {dataList}
  
</ul>
  )
}


export default Post_Page
