import { PrismaClient, Project } from "@prisma/client";
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
        const project = await prisma.project.findUnique({
            where:{
                id:id
            }
        })
        if (project) return NextResponse.json(project);
        else throw new Error('failed getting project');
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
        const requestData = res.data as Project;
        if (Admin_Key!==process.env.ADMIN_KEY) return NextResponse.json('Unauthorized',{status:401});
        const {title,date,data,images,description,link,preview,tech,github} = requestData
        const project = await prisma.project.create({
        data:{
            title,
            date,
            data,
            images,
            description,
            link,
            preview,
            tech,
            github
        }
    })
    if (project) return NextResponse.json('Successfully added');
    else throw new Error('couldnt add project');
    }
    catch(err){
        return NextResponse.json(err,{status:500});
    }

}