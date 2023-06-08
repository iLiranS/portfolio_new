'use client'
// contains posts and projects. fetched at landing.
import { Post,Project } from '../models/themeModel'
import { create } from "zustand";
type storeModel = {
    posts:Post[],
    projects:Project[],
    fetchData:()=>void;
}
type finalData = {
    posts:Post[],
    projects:Project[]
}

// initial fetching
const getInitialData = async()=>{
    try{

        const response = await fetch('/api/getData');
        if (!response.ok || response.status!=200){
            // handle 
            return;
        }
        // do whatever
        const data:finalData = await response.json();
        console.log(data);
        return data;

    }
    catch(err){
        console.log(err);
    }
    
}

const useData = create<storeModel>((set)=>({
    posts:[],
    projects:[],
    fetchData:async()=> {
        const data = await getInitialData();
        const projects = data?.projects;
        const posts = data?.posts;
        set(()=> {
            return ({posts:posts,projects:projects});
        })
    }
    
}))
export default useData;