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
let didFetch = false;
const getInitialData = async()=>{
    try{
        const response = await fetch('/api/getData');
        if (!response.ok || response.status!=200){
            throw new Error('failed fetching data');
        }
        // do whatever
        const data:finalData = await response.json();
        console.log(data);
        didFetch =true;
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
        if (didFetch){
            set((state)=> {
                return ({posts:state.posts,projects:state.projects});
            })
        }
        const data = await getInitialData();
        const projects = data?.projects;
        const posts = data?.posts;
        set(()=> {
            return ({posts:posts,projects:projects});
        })
    }
    
}))
export default useData;