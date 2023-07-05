import { Post, PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient()
export const revalidate = 60;




export async function GET(request:Request){
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id){
        return NextResponse.json('invalid Id',{status:400});
    }

    try{
        const post = await prisma.post.findUnique({
            where:{
                id:id
            }
        })
        if (post) return NextResponse.json(post,{status:200});
        else throw new Error('failed getting post');
    }
    catch(err){
        return NextResponse.json(err,{status:500});
    }

}
export async function POST(request:Request) {
    // post new project , get in body everything
    try{

        const res = await request.json();
        const {Admin_Key} = res;
        const requestData = res.data as Post;
        if (Admin_Key!==process.env.ADMIN_KEY) return NextResponse.json('Unauthorized',{status:401});
        const {title,date,data,description} = requestData
        const project = await prisma.post.create({
        data:{
            title,
            date,
            data,
            description,
        }
    })
    if (project) return NextResponse.json('Successfully added');
    else throw new Error('couldnt add post');
    }
    catch(err){
        return NextResponse.json(err,{status:500});
    }

}