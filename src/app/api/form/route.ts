import { formData } from "models/themeModel";
import { NextResponse , NextRequest } from "next/server";
import { MongoClient , ObjectId } from 'mongodb'
import { NextApiRequest, NextApiResponse } from "next";
import { parse } from 'url';

type formObj = {Admin_Key:string,data:formData};
type putObj = {Admin_Key:string,data:formData,_id:string}
type deleteObj = {Admin_Key:string,_id:string,type:string}

const validateAdmin = (key:string) =>{
    return key === process.env.ADMIN_KEY;
}
const formatDataHandler = (data:formData) =>{
    const formattedData = data.project_Type==='project' 
    ? {title:data.title,date:data.date,description:data.description,data:data.data,images:data.images,link:data.link,preview:data.preview,technologies:data.technologies,github_link:data.github_link} 
    : {title:data.title,date:data.date,description:data.description,data:data.data} 
    return formattedData;
}



export async function POST(request:Request){
    try{
        const res:formObj = await request.json();
        const formattedData =  formatDataHandler(res.data);
        if (!validateAdmin(res.Admin_Key)) return NextResponse.json({ response:'Unauthorized , Invalid Admin Key' }, { status: 401 });
        const type = res.data.project_Type==='project' ? 'Projects' : 'posts'; // decalre type.
        const client = await MongoClient.connect(`mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@cluster0.ym26cch.mongodb.net/?retryWrites=true&w=majority`);
        const db = client.db(type); // db name
        const dbCollection = db.collection(type); // collection name
        const result = await dbCollection.insertOne(formattedData); // insert data.
        if (!result)  return NextResponse.json({response:'Failed Inserting'},{status:500});
        return NextResponse.json({response:'Success'},{status:200});
    }
    catch(err:any){
        console.error(err);
        return NextResponse.json({response:err.message ?? 'failed'}, {status:500});
    }

    
}
// update (override) 
export async function PUT(request:Request) {
    const res:putObj = await request.json();
    try{
        const id = res._id;
        if (!validateAdmin(res.Admin_Key)) return NextResponse.json({ response:'Unauthorized , Invalid Admin Key' }, { status: 401 });
        const formattedData = formatDataHandler(res.data);
        const type = res.data.project_Type==='project' ? 'Projects' : 'posts'; // decalre type.
        const client = await MongoClient.connect(`mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@cluster0.ym26cch.mongodb.net/?retryWrites=true&w=majority`);
        const db = client.db(type); // db name
        const dbCollection = db.collection(type); // collection name
        const filter = { _id: new ObjectId(id) };
        const update = { $set: formattedData };
        const result = await dbCollection.updateOne(filter, update);
        return NextResponse.json({response:'Success'},{status:200});

    }
    catch(err:any){
        console.error(err);
        return NextResponse.json({response:err.message ?? 'failed'}, {status:500});
    }
}



export async function DELETE(req:any,res:any) {
    
    
    try{
        const { query } = parse(req.url, true);
        const id = query.id as string;
        const key = query.key as string;
        const initialType = query.type as string;
        const type = initialType==='project' ? 'Projects' : 'posts';


        if (!validateAdmin(key)) return NextResponse.json({ response:'Unauthorized , Invalid Admin Key' }, { status: 401 });

        const client = await MongoClient.connect(`mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@cluster0.ym26cch.mongodb.net/?retryWrites=true&w=majority`);
        const db = client.db(type); // db name
        const dbCollection = db.collection(type); // collection name
        const filter = { _id: new ObjectId(id)};
        const result = await dbCollection.deleteOne(filter);
        
        return NextResponse.json({response:'Success'},{status:200});
    }
    catch(err:any){
        console.error(err);
        return NextResponse.json({response:err.message ?? 'failed'}, {status:500});
    }
}

