import { Post, PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient()
export const revalidate = 60;


// get all posts.
export async function GET(){
    try{
        const posts = await prisma.post.findMany();
        if (posts) return NextResponse.json(posts);
        else throw new Error('failed getting posts');
    }
    catch(err){
        return NextResponse.json(err,{status:500});
    }
}

