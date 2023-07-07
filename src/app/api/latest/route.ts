import { PrismaClient, Project,Post } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient()
export const revalidate = 3600;



export async function GET(){

    try{
        const projects = await prisma.project.findMany({
            orderBy:{
                date:'desc'
            },
            take:1
        });
        const posts = await prisma.post.findMany({
            orderBy:{
                date:'desc'
            },
            take:1
        })

        return NextResponse.json({projects,posts});
    }
    catch(err){
        return NextResponse.json(err,{status:500});
    }

}