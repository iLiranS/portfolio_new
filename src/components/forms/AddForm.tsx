'use client'
import React, { useCallback, useRef, useState } from 'react'
import DataList from './DataList';
import TypeList from './TypeList';
import { data , formData } from 'models/themeModel';
import Spinner from '../Spinner/Spinner';

const AddForm = () => {
    //states
    const [projectType,setType] = useState('project');
    const [images,setImages] = useState<string[]>([]);
    const [tech,setTech] = useState<string[]>([]);
    const [data,setData] = useState<data[]>([]);
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
        setType(obj.target.value);
    } 

    const updateImagesHandler = useCallback((images:string[]) =>{
        setImages(images);
    },[]);
    const updateTechHandler = useCallback((tech:string[]) =>{
        setTech(tech);
    },[]);

    const updateDataHandler = useCallback((data:data[]) =>{
        setData(data);
    },[]);

    const isFormValid = () =>{
        if (!keyRef.current || keyRef.current?.value.trim().length <5) return 'Invalid Admin key'
        if (!titleRef.current || titleRef.current.value.trim().length <2) return 'Invalid Title'
        if(!dateRef.current || !dateRef.current.value) return 'Invalid Date'
        if(!descRef.current || descRef.current.value.trim().length <5) return 'Invalid description'
        // project check
        if (projectType==='project'){
            if(!previewImageRef.current || previewImageRef.current?.value.trim().length<5) return 'Invalid Image preview link';
            if(tech.length<1) return 'Add at least 1 tech';
            // no need for project link , optional
        }
        if (data.length<1) return 'Add at least 1 data section'
        return true;
    }

    const convertDate = (date:Date) =>{
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
        const year = date.getFullYear();
        const formattedDate = `${day}-${month}-${year}`;
        return formattedDate;
    }

    async function postData(formData:formData){
        if (didSubmit) return;
        try
        {
            setDidSubmit(true);
            setError(null);
            const response = await fetch('/api/form',{
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
        const stringDate = dateRef.current?.value ? convertDate(new Date (dateRef.current.value)) : convertDate(new Date());
        const formData:formData ={
            title:titleRef.current?.value ?? '',
            date:stringDate,
            project_Type:projectType ?? 'project',
            data:data,
            images:images,
            description:descRef.current?.value ?? '',
            link: linkRef.current?.value,
            preview:previewImageRef.current?.value,
            technologies:tech,
            github_link:github_linkRef.current?.value
        }
        // post attempt.
        postData(formData);
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