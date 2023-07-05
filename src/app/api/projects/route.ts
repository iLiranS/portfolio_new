import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient()
export const revalidate = 60;



// get all projects.
export async function GET(){
    try{
        const projects = await prisma.project.findMany();
        if (projects) return NextResponse.json(projects);
        else throw new Error('failed getting projects');
    }
    catch(err){
        return NextResponse.json(err,{status:500});
    }
}