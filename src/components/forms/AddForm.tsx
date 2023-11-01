'use client'
import React, { useCallback, useRef, useState } from 'react'
import DataList from './DataList';
import TypeList from './TypeList';
// import { data , formData } from 'models/themeModel';
import Spinner from '../Spinner/Spinner';
import { Data, Post, Project } from '@prisma/client';
import { redirect } from 'next/navigation';

const AddForm = () => {
    //states
    const [projectType,setType] = useState<'project'|'post'>('project');
    const [images,setImages] = useState<string[]>([]);
    const [tech,setTech] = useState<string[]>([]);
    const [data,setData] = useState<Data[]>([]);
    const [didSubmit,setDidSubmit] = useState(false);
    // refs
    const keyRef = useRef<HTMLInputElement>(null);
    const titleRef = useRef<HTMLInputElement>(null);
    const dateRef = useRef<HTMLInputElement>(null);
    const descRef = useRef<HTMLInputElement>(null);
    const github_linkRef = useRef<HTMLInputElement>(null);
    // project refs
    const previewImageRef = useRef<HTMLInputElement>(null);
    const linkRef = useRef<HTMLInputElement>(null);


    // error
    const [error,setError] = useState<string|null>(null);


    const changeTypeHandler = (obj:React.ChangeEvent<HTMLSelectElement>) =>{
        const val = obj.target.value as 'post' | 'project';
        setType(val);
    } 

    const updateImagesHandler = useCallback((images:string[]) =>{
        setImages(images);
    },[]);
    const updateTechHandler = useCallback((tech:string[]) =>{
        setTech(tech);
    },[]);

    const updateDataHandler = useCallback((data:Data[]) =>{
        setData(data);
    },[]);

    const isFormValid = () =>{
        if (!keyRef.current || keyRef.current?.value.trim().length <5) return 'Invalid Admin key'
        if (!titleRef.current || titleRef.current.value.trim().length <2) return 'Invalid Title'
        if(!dateRef.current || !dateRef.current.value) return 'Invalid Date'
        if(!descRef.current || descRef.current.value.trim().length <5) return 'Invalid description'
        if(!previewImageRef.current || previewImageRef.current?.value.trim().length<5) return 'Invalid Image preview link';
        // project check
        if (projectType==='project'){
            if(tech.length<1) return 'Add at least 1 tech';
            // no need for project link , optional
        }
        if (data.length<1) return 'Add at least 1 data section'
        return true;
    }



    async function postData(formData:Project|Post){
        // if (didSubmit) return;
        console.log(`${process.env.NEXT_PUBLIC_BASE_URL}/api/${projectType}`)
        try
        {
            setDidSubmit(true);
            setError(null);
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/${projectType}`,{
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify({Admin_Key:keyRef.current?.value,data:formData})
            });
            if (!response.ok || response.status !==200){
                if(response.status ===401) throw new Error('Wrong Admin Key!');
                throw new Error('Request failed !');
            }
            const result = await response.json();
            setError('Succesfully added')
            location.reload();
            // successfully . redirect to new _id page maybe .
        }
        catch(err:any){
            // error handling.
            console.error('Error:',err);
            setError(err.message);
        }
            setDidSubmit(false);
        
    }


    // using server actions instead of route handler.
    const submitFormHandler = (event:React.FormEvent) =>{
        event.preventDefault();
        // validate form.
        const validation:boolean|string = isFormValid();
        if (validation !== true){
            setError(validation);
            return;
        }
        const projectFormData:Project ={
            id:'',
            title:titleRef.current?.value ?? '',
            date: dateRef.current ? new Date(dateRef.current.value) : new Date(),
            data:data,
            images:images,
            description:descRef.current?.value ?? '',
            link: linkRef.current?.value ?? '',
            preview:previewImageRef.current?.value ?? '',
            tech:tech,
            github:github_linkRef.current?.value ?? ''
        }
        const postFormData:Post={
            id:'',
            date: dateRef.current ? new Date(dateRef.current.value) : new Date(),
            data:data,
            description:descRef.current?.value ?? '',
            title:titleRef.current?.value ?? '',
            preview:previewImageRef.current?.value?? ''
        }
        // post attempt.
        {projectType === 'project' ? postData(projectFormData) : postData(postFormData)}
    }

    return (
        <form onSubmit={submitFormHandler} className='flex flex-col gap-2 relative mx-auto  max-w-full w-[600px] px-2 pb-2'>
    
            <section className='addSection'>
                <p>Admin Key</p>
                <input placeholder='Enter Key...' ref={keyRef}  className='addInput' type='password'/>
            </section>
    
            <section className='addSection'>
                <label htmlFor="addType">Type</label>
                <select onChange={changeTypeHandler} value={projectType} className='addInput' id="addType">
                    <option className='  bg-lightBG dark:bg-darkBG outline-none text-darkBG dark:text-lightBG' value="project">Project</option>
                    <option className='  bg-lightBG dark:bg-darkBG outline-none text-darkBG dark:text-lightBG' value="post">Post</option>
                </select>
            </section>

            <section className='addSection'>
                <p>Title</p>
                <input placeholder='Enter Title...' ref={titleRef} className='addInput' type='text'/>
            </section>

            <section className='addSection'>
                <p>Date</p>
                <input ref={dateRef} className='addInput' type='date'/>
            </section>

            <section className='addSection'>
                <p>description</p>
                <input ref={descRef} className='addInput' type='text'/>
            </section>

            <section className='addSection'>
                <p>Preview Image (i.bb)</p>
                <input placeholder='Image Link...' ref={previewImageRef} className='addInput' type='url'/>
            </section>


            {projectType === 'project' &&
            <section className='flex flex-col gap-2 mt-4'>
                <h3 className=' font-bold text-xs border-2 border-dotted w-fit p-1'>Project options</h3>
                <section className='addSection'>
                <p>Link</p>
                <input placeholder='Project Link (optional)' ref={linkRef} className='addInput' type='url'/>
                </section>

                <section className='addSection'>
                <p>Github link</p>
                <input placeholder='Github repo Link (optional)' ref={github_linkRef} className='addInput' type='url'/>
                </section>

                <section className='addSection'>
                <p>Images</p>
                <TypeList data={images} title='Image' updateData={updateImagesHandler}/>
                </section>

                <section className='addSection'>
                <p>Technologies</p>
                <TypeList data={tech} title='Tech' updateData={updateTechHandler}/>
                </section>
            </section>
            }

            <section className='flex flex-col gap-2 mt-4'>
                <h3 className=' font-bold text-xs border-2 p-1 border-dotted w-fit p- border-darkBG dark:border-lightBG'>Data</h3>
                <DataList data={data} updateData={updateDataHandler}/>
            </section>

            {error && <p className='text-red-400 text-sm'>{error}</p>}
            {!didSubmit ? <button className={`addInput mx-auto ${data.length>0 ? 'cursor-pointer hover:bg-darkBG hover:bg-opacity-10 hover:dark:bg-lightBG hover:dark:bg-opacity-10 transition-colors' : 'cursor-not-allowed opacity-30'}`}>Submit</button> : <Spinner desc='Submitting...' />}
        </form>
    )
}

export default AddForm