import { formData } from "models/themeModel";
import { NextResponse } from "next/server";
import { MongoClient } from 'mongodb'

type formObj = {Admin_Key:string,data:formData};

//TODO: Make sure type is ok , post fetch and response according to the request result.
const validateAdmin = (key:string) =>{
    return key === process.env.ADMIN_KEY;
}



export async function POST(request:Request){
    try{
        const res:formObj = await request.json();
        if (!validateAdmin(res.Admin_Key)) return NextResponse.json({ response:'Unauthorized , Invalid Admin Key' }, { status: 401 });
        const type = res.data.project_Type==='project' ? 'Projects' : 'posts'; // decalre type.
        const client = await MongoClient.connect(`mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@cluster0.ym26cch.mongodb.net/?retryWrites=true&w=majority`);
        const db = client.db(type); // db name
        const dbCollection = db.collection(type); // collection name
        const result = await dbCollection.insertOne(res.data); // insert data.
        if (!result)  return NextResponse.json({response:'Failed Inserting'},{status:500});
        return NextResponse.json({response:'Success'},{status:200});
    }
    catch(err:any){
        console.error(err);
        return NextResponse.json({response:err.message ?? 'failed'}, {status:500});
    }

    
}
