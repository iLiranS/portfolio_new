import Link from "next/link";

export default function ProjectNotFound(){
    return(
        <div className="w-full text-center">
            <h1 className="text-4xl">Project not found, 404 😪</h1>
            <Link className="text-orange-400" href={'/projects'}>Click to go back</Link>
        </div>
    )
}