// fetches data of posts and projects and store it in zustand context.
import { MongoClient } from 'mongodb'
import { NextResponse } from 'next/server';
import {Project,Post} from '../../../../models/themeModel'



export const revalidate = 3600; // revalidation every hour
export async function GET(){
    let client;
    try{

    client = await MongoClient.connect(`mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@cluster0.ym26cch.mongodb.net/?retryWrites=true&w=majority`);
        
    const projectsDB = client.db('Projects'); // db name
    const projectsCollection = projectsDB.collection('Projects'); // collection name
    
    const postsDB = client.db('posts');
    const postsCollection = postsDB.collection('posts');
    
    const [projectsData,postsData] = await Promise.all([
        projectsCollection.find().toArray(),
        postsCollection.find().toArray()
    ])
    const projectsMapped = projectsData.map(project=>({...project , _id:project._id.toString()} as Project))
    const postsMapped = postsData.map(post => ({...post , _id:post._id.toString(),} as Post));
    return NextResponse.json({projects:projectsMapped,posts:postsMapped},{status:200});

}
catch(err){
    console.error('Error fetching data:', err);
    return NextResponse.json({ response: 'Failed fetching data.' }, { status: 500 });
}
finally{
    client?.close();
}
    
}