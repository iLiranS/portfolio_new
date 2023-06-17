'use client'
// contains posts and projects. fetched at landing.
import { formData, Post,Project } from '../models/themeModel'
import { create } from "zustand";
type storeModel = {
    posts:formData[],
    projects:formData[],
    fetchData:()=>void;
}
type finalData = {
    posts:formData[],
    projects:formData[]
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
        const projects = data?.projects.reverse();
        const posts = data?.posts.reverse();
        set(()=> {
            return ({posts:posts,projects:projects});
        })
    }
    
}))
export default useData;