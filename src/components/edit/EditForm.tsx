'use client'
import React, { useEffect, useRef, useState , useCallback , ChangeEvent } from 'react'
import useData from 'store/useData';
import SingleData from '../forms/SingleData';
import Spinner from '../Spinner/Spinner';
import {formData,data} from '../../../models/themeModel'
import TypeList from '../forms/TypeList';
import DataList from '../forms/DataList';


//TODO: REMEMBER TO ADD DATE BEFORE FETCHING AN UPDATE
const EditForm = () => {
    //states
    const [isLoading,setIsLoading] = useState(false);
    const [type,setType] = useState('project');
    const [selectedProject,setSelectedProject] = useState<formData | null>(null);
    const [images,setImages] = useState<string[]>([]);
    const [tech,setTech] = useState<string[]>([]);
    const [error,setError] = useState<null | string>(null);
    const [projectData,setProjectData] = useState<data[]>([]);
    const data = useData(); // from store
    //input states
    const [title,setTitle] = useState<string>('');
    const [desc,setDesc] = useState<string>('');
    const [previewImage,setPreviewImage] = useState<string>('');
    const [link,setLink] = useState<string>('');
    const [githubLink,setGitHubLink] = useState<string>('');
    // refs
    const keyRef = useRef<HTMLInputElement>(null);
    const projectNameRef = useRef<HTMLSelectElement>(null);
    // validation of form
    const isFormValid = () =>{
        if (!keyRef.current || keyRef.current?.value.trim().length <5) return 'Invalid Admin key'
        if (!title || title.trim().length <2) return 'Invalid Title'
        if(!desc || desc.trim().length <5) return 'Invalid description'
        // project check
        if (type==='project'){
            if(!previewImage || previewImage.trim().length<5) return 'Invalid Image preview link';
            if(tech.length<1) return 'Add at least 1 tech';
            // no need for project link , optional
        }
        if (projectData.length<1) return 'Add at least 1 data section'
        return true;
    }

    // initial data fetch. required because no fetching in admin page.
    useEffect(()=>{
        data.fetchData();
    },[])

    // handling selected project images and technologies setup 
    useEffect(()=>{
        if(selectedProject?.images) setImages(selectedProject?.images);
        if(selectedProject?.technologies) setTech(selectedProject?.technologies);
        if(selectedProject?.data) setProjectData(selectedProject.data);
        setTitle(selectedProject?.title ?? '');
        setDesc(selectedProject?.description ?? '');
        setPreviewImage(selectedProject?.preview ?? '');
        setLink(selectedProject?.link ?? '');
        setGitHubLink(selectedProject?.github_link ?? '');
        setProjectData(selectedProject?.data?? []);
        setError(null);
    },[selectedProject])


    const updateImagesHandler = useCallback((images:string[]) =>{
        setImages(images);
    },[]);
    const updateTechHandler = useCallback((tech:string[]) =>{
        setTech(tech);
    },[]);
    const updateDataHandler = useCallback((data:data[]) =>{
        setProjectData(data);
    },[]);


    const changeTypeHandler = (obj:React.ChangeEvent<HTMLSelectElement>) =>{
        setType(obj.target.value);
        setSelectedProject(null);
    }
    const changeProjectHandler = () =>{
        const title = projectNameRef.current?.value;
        const proj = type==='project' ? data.projects.find(projcet => projcet.title===title) : data.posts.find(post => post.title === title);
        const parsedProject = JSON.parse(JSON.stringify(proj)) as formData; // copy instead of mutating.
        if (proj) setSelectedProject(proj);
    }
    // state update handlers of inputs
    const updateTitleHandler = (e:ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)
    const updateDescHandler = (e:ChangeEvent<HTMLInputElement>) => setDesc(e.target.value)
    const updatePreviewImageHandler = (e:ChangeEvent<HTMLInputElement>) => setPreviewImage(e.target.value)
    const updateLinkHandler = (e:ChangeEvent<HTMLInputElement>) => setLink(e.target.value)
    const updateGithubLinkHandler = (e:ChangeEvent<HTMLInputElement>) => setGitHubLink(e.target.value)

 
 

    const mappedProjectsOptions = data.projects ? data.projects.map(project => <option key={project.title} className='bg-lightBG dark:bg-darkBG outline-none text-darkBG dark:text-lightBG'>{project.title}</option>) : []
    const mappedPostsOptions = data.posts ? data.posts.map(post => <option key={post.title} className='bg-lightBG dark:bg-darkBG outline-none text-darkBG dark:text-lightBG'>{post.title}</option>) : []


    async function updateData(formData:formData){
        if(isLoading) return;

        setIsLoading(true);
            // this is the post function , modify it .
        try
        {
            setError(null);
            const response = await fetch('/api/form',{
                method:'PUT',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify({Admin_Key:keyRef.current?.value,data:formData,_id:selectedProject?._id})
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
        setIsLoading(false);
    }


    const submitFormHandler = (event:React.FormEvent) =>{
        event.preventDefault();
        // validate form.
        const validation:boolean|string = isFormValid();
        if (validation !== true){
            setError(validation);
            return;
        }
        const formData:formData ={
            title:title ?? '',
            date:selectedProject?.date as string,
            project_Type:type,
            data:projectData,
            images:images,
            description:desc?? '',
            link: link ?? undefined,
            preview:previewImage ?? undefined,
            technologies:tech,
            github_link:githubLink ?? undefined
        }
        // post attempt.
        updateData(formData);
    }

   
    async function deleteProjectHandler(){
        if (!keyRef.current ||  keyRef.current?.value.trim().length<3) {
            setError('Invalid Admin Key');
            return;
        }
        if(isLoading) return;
        setIsLoading(true);
        const bodyObj = {Admin_Key:keyRef.current.value ?? '',_id:selectedProject?._id ?? '',type}   
        try
        {
            setError(null);
            const response = await fetch(`/api/form?id=${bodyObj._id}&key=${bodyObj.Admin_Key}&type=${bodyObj.type}`,{
                method:'DELETE',
                headers:{'Content-Type': 'application/json'},
            });
            if (!response.ok || response.status !==200){
                if(response.status ===401) throw new Error('Wrong Admin Key!');
                throw new Error('Request failed !');
            }
            const result = await response.json();
            setError(`Succesfully removed ${type}`)
            // successfully . redirect to new _id page maybe .
        }
        catch(err:any){
            // error handling.
            console.error('Error:',err);
            setError(err.message);
        }
        setIsLoading(false);
    }

    const deleteClickHandler = () =>{
        const isDelete = confirm(`Delete ${type} ${selectedProject?.title} ?`);
        if (isDelete){
            deleteProjectHandler();
        }
    }


  return (
    <form onSubmit={submitFormHandler} className='flex flex-col gap-2 relative mx-auto  max-w-full w-[600px] px-2 pb-2 bg-darkBG dark:bg-lightBG dark:bg-opacity-5 bg-opacity-5 rounded-md'>
        <h3 className='text-center text-orange-400'>Edit Page</h3>

        <section className='addSection'>
                <p>Admin Key</p>
                <input placeholder='Enter Key...' ref={keyRef}  className='addInput' type='password'/>
            </section>

        <section className='addSection'>
                <label htmlFor="addType">Type</label>
                <select onChange={changeTypeHandler} value={type} className='addInput' id="addType">
                    <option className='  bg-lightBG dark:bg-darkBG outline-none text-darkBG dark:text-lightBG' value="project">Project</option>
                    <option className='  bg-lightBG dark:bg-darkBG outline-none text-darkBG dark:text-lightBG' value="post">Post</option>
                </select>
            </section>
            
            {data.projects && data.projects.length >0 ?
            <div className='flex flex-col gap-2 border-b-2'>
                <section className='addSection'>
                    <label htmlFor="projectName">Select {type}</label>
                    <select ref={projectNameRef} className='addInput' id="projectName">
                        {type === 'project' ? mappedProjectsOptions : mappedPostsOptions}
                    </select>
                </section>

                <div onClick={changeProjectHandler} className=' addInput text-center mx-auto cursor-pointer my-2'>Load</div>

                </div>
            : <Spinner desc='loading data'/>}

                {selectedProject &&
                    <div className='flex flex-col gap-2'>
                        <section className='addSection'>
                            <p>Title</p>
                            <input placeholder='Enter Title...' onChange={updateTitleHandler} value={title} className='addInput' type='text'/>
                        </section>

                        <section className='addSection'>
                            <p>Description</p>
                            <input placeholder='Enter Description...' onChange={updateDescHandler} value={desc} className='addInput' type='text'/>
                        </section>

                        {type === 'project' &&
                        <section className='flex flex-col gap-2 mt-4'>
                            <h3 className=' font-bold text-xs border-2 border-dotted w-fit p-1'>Project options</h3>

                            <section className='addSection'>
                                <p>Preview Image (i.bb)</p>
                                <input onChange={updatePreviewImageHandler} placeholder='Image Link...' value={previewImage} className='addInput' type='url'/>
                            </section>

                            <section className='addSection'>
                                <p>Link</p>
                                <input onChange={updateLinkHandler} placeholder='Project Link (optional)' value={link} className='addInput' type='url'/>
                            </section>

                            <section className='addSection'>
                                <p>Github link</p>
                                <input onChange={updateGithubLinkHandler} placeholder='Github repo Link (optional)' value={githubLink} className='addInput' type='url'/>
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

                        <section className='flex gap-2 flex-col my-2'>
                            <h3 className=' font-bold text-xs border-2 p-1 border-dotted w-fit p- border-darkBG dark:border-lightBG'>Data</h3>
                            <DataList data={projectData} updateData={updateDataHandler}/>
                        </section>
                    </div>
                }
        {error && <p className='text-red-400 text-sm'>{error}</p>}

        {selectedProject && !isLoading &&
        <section className='w-full flex p-1 rounded-md justify-between bg-orange-400 bg-opacity-20  mt-2'>
                <div className='flex items-center'>
                    <button onClick={deleteClickHandler} type='button' className='p-1 bg-red-500 hover:bg-red-600 rounded-md'>Delete {type}</button>
                </div>
                <section className='flex items-center gap-2'>
                    <button type='submit' className='p-1 bg-green-500 hover:bg-green-600 rounded-md'>Save</button>
                </section>
        </section>
        }
        {isLoading && <Spinner desc='loading...'/>}
    </form>
  )
}

export default EditForm