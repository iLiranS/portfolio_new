import React, { useEffect, useRef, useState } from 'react'
import {IoMdAddCircle} from 'react-icons/io'



const TypeList:React.FC<{updateData:(data:string[])=>void,title:string}> = ({updateData,title}) => {
const [data,setData] = useState<any[]>([]);
const [error,setError] = useState<null|string>(null);
const dataInput = useRef<HTMLInputElement>(null);



    useEffect(()=>{
        updateData(data);
    },[data,updateData])

    const addDataHandler = () =>{
        const inputValue = dataInput.current?.value;
        if (!inputValue) setError('invalid '+title);
        else {
            setError(null);
            setData(prev =>{
                const fornow = [...prev,inputValue];
                return fornow;
            })
            dataInput.current.value='';
        }
        
    }
    const deleteDataHandler = (index:number) =>{
        setData(prev =>{
            const fornow = [...prev];
            fornow.splice(index,1);
            return fornow;
        })
    }

    const mappedDataList = data.map((url,index) =>
    <SingleDataInput removeItem={deleteDataHandler} key={index} url={url} index={index}/>
)

  return (
    <ol className='flex flex-col list-disc  p-1 rounded-md border-[1px] border-darkBG dark:border-lightBG border-opacity-20 dark:border-opacity-20'>
        {mappedDataList}
        <li className='w-80 max-w-full  flex relative rounded-md'>
            <input placeholder={'Add '+title+'...'} onChange={()=>{setError(null)}} ref={dataInput} className='bg-transparent w-full outline-none' type='text'/>
            <section onClick={addDataHandler} className='grid place-items-center text-darkBG dark:text-lightBG cursor-pointer text-lg'> <IoMdAddCircle/> </section>
        </li>
        {error && <li className='text-red-400 text-sm'>{error}</li>}
    </ol>
  )
}


const SingleDataInput:React.FC<{url:string,index:number,removeItem:(index:number)=>void}> = ({url,index,removeItem}) =>{
    const removeItemHandler = () => removeItem(index);
    return(
    <li className='flex items-center justify-between bg-gray-500 even:bg-gray-700 bg-opacity-20 even:bg-opacity-20 px-1'>
        <p className='text-sm addInptu'>{url}</p>
        <section onClick={removeItemHandler} className='cursor-pointer hover:text-red-400'>✕</section>
    </li>
    )
}

export default TypeList