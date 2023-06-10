'use client'
import React, { useCallback, useRef, useState } from 'react'
import DataList from './DataList';
import ImagesList from './ImagesList';
import { data } from 'models/themeModel';

const AddForm = () => {
    //states
    const [projectType,setType] = useState('project');
    const [images,setImages] = useState<string[]>([]);
    const [data,setData] = useState<data[]>([]);
    // refs
    const keyRef = useRef<HTMLInputElement>(null);
    const titleRef = useRef<HTMLInputElement>(null);
    const dateRef = useRef<HTMLInputElement>(null);
    // project refs
    const previewImageRef = useRef<HTMLInputElement>(null);
    const linkRef = useRef<HTMLInputElement>(null);


    // error
    const [error,setError] = useState<string|null>(null);


    const changeTypeHandler = (obj:React.ChangeEvent<HTMLSelectElement>) =>{
        setType(obj.target.value);
    } 

    const updateImagesHandler = useCallback((images:string[]) =>{
        setImages(images);
    },[]);

    const updateDataHandler = useCallback((data:data[]) =>{
        setData(data);
    },[]);

    const isFormValid = () =>{
        if (!keyRef.current || keyRef.current?.value.trim().length <5) return 'Invalid Admin key'
        if (!titleRef.current || titleRef.current.value.trim().length <2) return 'Invalid Title'
        if(!dateRef.current || !dateRef.current.value) return 'Invalid Date'
        // project check
        if (projectType==='project'){
            if(!previewImageRef.current || previewImageRef.current?.value.trim().length<5) return 'Invalid Image preview link';
            // no need for project link , optional
        }
        if (data.length<1) return 'Add at least 1 data section'
        return true;
    }


    const submitFormHandler = (event:React.FormEvent) =>{
        event.preventDefault();
        // validate form.
        const validation:boolean|string = isFormValid();
        if (validation !== true){
            setError(validation);
            return;
        }
        // true and can add.
        //TODO: CREATE API AND SEND DATA INTO IT 
        setError('Succesfully added');
        console.log(data,images);
    }

    return (
        <form onSubmit={submitFormHandler} className='flex flex-col gap-2 relative mx-auto  max-w-full w-[600px] px-2'>
    
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

            {projectType === 'project' &&
            <section className='flex flex-col gap-2 mt-4'>
                <h3 className=' font-bold text-xs border-2 border-dotted w-fit p-1'>Project options</h3>

                <section className='addSection'>
                <p>Preview Image (i.bb)</p>
                <input placeholder='Image Link...' ref={previewImageRef} className='addInput' type='url'/>
                </section>

                <section className='addSection'>
                <p>Link</p>
                <input placeholder='Project Link (optional)' ref={linkRef} className='addInput' type='url'/>
                </section>

                <section className='addSection'>
                <p>Images</p>
                <ImagesList updateImages={updateImagesHandler}/>
                </section>
            </section>
            }

            <section className='flex flex-col gap-2 mt-4'>
                <h3 className=' font-bold text-xs border-2 border-dotted w-fit p- border-darkBG dark:border-lightBG'>Data</h3>
                <DataList updateData={updateDataHandler}/>
            </section>

            {error && <p className='text-red-400 text-sm'>{error}</p>}
            <button className={`addInput mx-auto ${data.length>0 ? 'cursor-pointer' : 'cursor-not-allowed opacity-30'}`}>Submit</button>
        </form>
    )
}

export default AddForm