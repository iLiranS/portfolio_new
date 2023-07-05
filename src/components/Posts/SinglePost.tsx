import { Post } from "@prisma/client";
import Link from "next/link";
import { convertDateToString } from "utils/functions";

const SinglePost:React.FC<{post:Post,isLatest?:boolean}> = ({post,isLatest=false}) =>{
    
    const dateString = convertDateToString(post.date);

    return(
        <li  className='grid items-center grid-rows-2  gap-2 p-2 rounded-md cursor-pointer
        box-border  border-2 border-transparent hover:border-orange-400 relative
        bg-darkBG bg-opacity-10
        dark:bg-lightBG dark:bg-opacity-10'>
            <section className={`flex justify-between items-center gap-2 w-full relative`}>
                <h2 className={`${isLatest ? 'text-base' : 'text-xl'}  w-max `}>{post.title}</h2>
                {!isLatest && <p className='text-sm w-fit'>{dateString}</p>}
            </section>
            <p className='opacity-60  text-sm whitespace-nowrap truncate'>{post.description}</p>
            <Link href={`/posts/${post.id}`} className="h-full w-full absolute top-0"/>
        </li>
    )
}

export default SinglePost;