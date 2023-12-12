import Link from "next/link";

export default function PostNotFound(){
    return(
        <div className="text-center">
            <h1 className="text-4xl">Post not found, 404 😪</h1>
            <Link className="text-orange-400" href={'/posts'}>Click to go back</Link>
        </div>
    )
}