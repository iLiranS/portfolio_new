import { Data } from '@prisma/client';
import React, { useState,useRef } from 'react'
// used to edit existing data blocks.

// this component is the section after adding data, has two options (edit mode) and (view mode).
const SingleData:React.FC<{data:Data,index:number,updateData:(index:number,data:Data)=>void,deleteData:(index:number)=>void}> = ({data,updateData,index,deleteData}) => {
    const [editMode,setEditMode] = useState(false);
    const headingRef = useRef<HTMLInputElement>(null);
    const textRef = useRef<HTMLTextAreaElement>(null);
    const [error,setError] = useState<string|null>(null);

    // saving data changes.
    const addDataHandler = () =>{
        const headingText = headingRef.current?.value;
        const text = textRef.current?.value;
        if (!headingText) { setError('invalid Heading'); return;}
        if (!text) {setError('invalid Text'); return;}
        // success
        setError(null);
        const dataObj:Data = {title:headingText,text};
        updateData(index,dataObj);
        setEditMode(false);
    }
    // delete the entire section handler.
    const deleteDataHandler = () =>{
        const confirmDelete = confirm('Delete ?');
        if (!confirmDelete) return;
        deleteData(index);
    }
    // responsible on cancel changes .
    const cancelDataHandler = () =>{
        const didValuesChanged = data?.text !== textRef.current?.value || data?.title !== headingRef.current?.value;
        if (!didValuesChanged) // if nothing changed.
        {
            setEditMode(false);
            return;
        }
        const confirmCancel = confirm('Cancel Changes?'); // confirm if data changed.
        if (confirmCancel) setEditMode(false);
        else setEditMode(true);
    }

    if(editMode){
        return(
            <li key={data?.title} className={'flex flex-col gap-2 w-full ml-1 bg-darkBG dark:bg-lightBG bg-opacity-5 dark:bg-opacity-5 p-1 rounded-md'}>
            <section className='addSection'>
                <p>Title</p>
                <input ref={headingRef} defaultValue={data?.title} className='addInput' type='text'/>
            </section>
    
            <section className='flex  gap-2 md:justify-between flex-col md:flex-row'>
                <p>Text</p>
                <textarea ref={textRef} defaultValue={data?.text}  className='border-2 h-max bg-transparent p-1 rounded-md dark:border-lightBG border-darkBG w-full'></textarea>
            </section>

            <section className='flex justify-between gap-2 items-center'>
            <p onClick={deleteDataHandler} className='bg-red-400 p-1 rounded-md cursor-pointer hover:bg-red-500'>Delete</p>
            <section className='flex items-center gap-2'>
            {error && <p className='text-sm text-red-400'>{error}</p>}
            <p onClick={cancelDataHandler} className='bg-orange-400 rounded-md p-1  cursor-pointer hover:bg-orange-500'>Cancel</p>
            <p onClick={addDataHandler} className='bg-green-500 p-1 rounded-md  cursor-pointer hover:bg-green-600'>Confirm</p>
            </section>
        </section>
    
        </li>
        )
    }



  return (
    <li className='flex items-center justify-between px-2 border-b-2 border-darkBG dark:border-lightBG'>
        <p className='font-semibold'>{data?.title}</p>
        <p onClick={()=>{setEditMode(true)}} className='font-bold cursor-pointer'>Edit</p>
    </li>
  )
}

export default SingleData