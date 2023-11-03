import Link from "next/link";

export default function PostNotFound(){
    return(
        <div>
            <h1 className="text-4xl">Post not found, 404</h1>
            <Link className="text-orange-400" href={'/projects'}>Click to go back</Link>
        </div>
    )
}