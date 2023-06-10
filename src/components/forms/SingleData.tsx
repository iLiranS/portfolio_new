import React, { useState,useRef } from 'react'
// used to edit existing data blocks.
// gets Text,Heading,UpdateFunction.
type data= {heading:string,text:string} | null;


const SingleData:React.FC<{data:data,index:number,updateData:(index:number,data:data)=>void,deleteData:(index:number)=>void}> = ({data,updateData,index,deleteData}) => {
    const [editMode,setEditMode] = useState(false);
    const headingRef = useRef<HTMLInputElement>(null);
    const textRef = useRef<HTMLTextAreaElement>(null);
    const [error,setError] = useState<string|null>(null);

    const addDataHandler = () =>{
        const headingText = headingRef.current?.value;
        const text = textRef.current?.value;
        if (!headingText) { setError('invalid Heading'); return;}
        if (!text) {setError('invalid Text'); return;}
        // success
        setError(null);
        const dataObj = {heading:headingText,text};
        updateData(index,dataObj);
        setEditMode(false);
    }

    const deleteDataHandler = () =>{
        const confirmDelete = confirm('Delete ?');
        if (!confirmDelete) return;
        deleteData(index);
    }
    const cancelDataHandler = () =>{
        console.log(data?.text,textRef.current?.value,data?.heading,headingRef.current?.value)
        if (data?.text == textRef.current?.value && data?.heading == headingRef.current?.value) setEditMode(false); // if nothing changed.
        const confirmCancel = confirm('Cancel Changes?');
        if (confirmCancel) setEditMode(false);
        else setEditMode(true);
    }

    if(editMode){
        return(
            <li key={data?.heading} className={'flex flex-col gap-2 w-full'}>
            <section className='addSection'>
                <p>Heading</p>
                <input ref={headingRef} defaultValue={data?.heading} className='addInput' type='text'/>
            </section>
    
            <section className='flex  gap-2 md:justify-between flex-col md:flex-row'>
                <p>Text</p>
                <textarea ref={textRef} defaultValue={data?.text}  className='border-2 h-max bg-transparent p-1 rounded-md dark:border-lightBG border-darkBG w-full'></textarea>
            </section>

            <section className='flex justify-between gap-2 items-center'>
            <p onClick={deleteDataHandler} className='border-red-400 border-2 cursor-pointer hover:bg-red-400'>Delete</p>
            <section className='flex items-center gap-2'>
            {error && <p className='text-sm text-red-400'>{error}</p>}
            <p onClick={cancelDataHandler} className='border-orange-400 border-2 cursor-pointer hover:bg-orange-400'>Cancel</p>
            <p onClick={addDataHandler} className='border-green-400 border-2 cursor-pointer hover:bg-green-500'>Confirm</p>
            </section>
        </section>
    
        </li>
        )
    }



  return (
    <li className='flex items-center justify-between px-2 border-b-2'>
        <p className='font-semibold'>{data?.heading}</p>
        <p onClick={()=>{setEditMode(true)}} className='font-bold cursor-pointer'>Edit</p>
    </li>
  )
}

export default SingleData