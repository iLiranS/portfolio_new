import { Post } from '@prisma/client';
import Link from 'next/link';
import { convertDateToString } from 'utils/functions';
import Dropdown from '../DropDown/Dropdown';
import {BsArrowRightSquareFill} from 'react-icons/bs'


const Post_Page:React.FC<{post:Post}> = ({post}) => {


    const {title , data , date } =  post;
    const dataList = data.map((dataObj,index) =><Dropdown defaultToggle={index===0 ? true : false} title={dataObj.title} key={index}>{dataObj.text}</Dropdown>)
    const stringDate = convertDateToString(date);


  return (
    <ul className='flex flex-col gap-3 relative w-full px-4 md:px-0 max-w-full pb-4 '>

    <li className=' justify-between flex flex-col md:flex-row  font-semibold relative animate-pageIn '>
      <section className='flex gap-2 items-center'>
        <Link className='text-orange-400 hover:underline underline-offset-2 text-xs' href={'/posts'}>Posts</Link>

        <div className='items-center flex'>
          <BsArrowRightSquareFill/>
        </div>

        <h2 className='text-2xl'>{title}</h2>
      </section>

      <section className='flex items-center gap-2 self-end md:self-center opacity-60 text-xs'>
        <p>{stringDate}</p>
      </section>
    </li>

    {dataList}
  
</ul>
  )
}


export default Post_Page
