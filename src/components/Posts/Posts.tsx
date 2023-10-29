import Spinner from '../Spinner/Spinner'
import { Post } from '@prisma/client'
import SinglePost from './SinglePost'

const Posts:React.FC<{posts:Post[]}> = ({posts}) => {



    const mappedPosts = posts.map((post) => <SinglePost key={post.id} post={post}/>)

  return (
    <div className='flex flex-col gap-2 px-2 relative w-full h-full pb-4'>
      <h2 className='text-orange-400 font-semibold animate-scaleUp'>Posts</h2>
      <ul className='flex flex-col gap-2 animate-pageIn '>
        {mappedPosts}
      </ul>
    </div>
  )
}

export default Posts