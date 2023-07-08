import Spinner from '../Spinner/Spinner'
import { Post } from '@prisma/client'
import SinglePost from './SinglePost'

const Posts:React.FC<{posts:Post[]}> = ({posts}) => {



    const mappedPosts = posts.map((post) => <SinglePost key={post.id} post={post}/>)

  return (
    <ul className='flex flex-col gap-2 px-4 md:px-0 animate-pageIn '>
      <h2 className='text-orange-400 font-semibold animate-scaleUp'>Posts</h2>
        {mappedPosts}
    </ul>
  )
}

export default Posts