import React, { useEffect, useRef, useState } from 'react'
import { data } from 'models/themeModel';
import SingleData from './SingleData';

type addDataType= (heading:string,text:string)=>void;

const DataList:React.FC<{updateData:(data:data[])=>void,data:data[]}>= ({updateData,data})=> {
    const [isAdding,setIsAdding] = useState(false);


  
    const addDataHandler:addDataType = (heading,text) =>{
            const fornow = [...data,{heading,text}];
            updateData(fornow);
        setIsAdding(false);
    }
    const cancelDataHandler = () =>{
        setIsAdding(false);
    }

    // abit confusing , newData is new data (one index in the main array)
    const updateDataHandler = (index:number,newData:data) =>{
            const fornow = [...data];
            fornow[index] = newData;
            updateData(fornow);
    }
    const deleteDataHandler = (index:number) =>{
            const fornow = [...data];
            fornow.splice(index,1);
            updateData(fornow);
    }

    const mappedData = data.map((data,index) => <SingleData key={data?.heading ?? index} data={data} index={index} updateData={updateDataHandler} deleteData={deleteDataHandler}/>)

return (
    <ul className='flex flex-col gap-2 relative w-full'>
        {mappedData}
        {isAdding && <AddDataForm cancelData={cancelDataHandler} addData={addDataHandler}/>}
       {!isAdding && <p onClick={()=>{setIsAdding(true)}} className='float-right cursor-pointer font-bold text-lightBG dark:text-darkBG bg-darkBG dark:bg-lightBG w-fit p-1 rounded-md'>Add Section</p>}
    </ul>
  )
}

const AddDataForm:React.FC<{addData:addDataType,cancelData:()=>void}> = ({addData,cancelData}) =>{
    const headingRef = useRef<HTMLInputElement>(null);
    const textRef = useRef<HTMLTextAreaElement>(null);
    const [error,setError] = useState<string|null>(null);

    const addDataHandler = () =>{
        const headingText = headingRef.current?.value;
        const text = textRef.current?.value;
        if (!headingText) { setError('invalid Heading'); return;}
        if (!text) {setError('invalid Text'); return;}
        // success
        addData(headingText,text);
    }

    return(
        <ul className='flex flex-col gap-2 ml-1 max-w-full  p-1 relative bg-darkBG dark:bg-lightBG bg-opacity-5 dark:bg-opacity-5 rounded-md'>

        <section className='addSection'>
        <p>Heading</p>
        <input ref={headingRef} className='addInput' type='text'/>
        </section>

        <section className='flex  gap-2 md:justify-between flex-col md:flex-row'>
        <p>Text</p>
        <textarea ref={textRef} className='border-[1px] bg-transparent p-1 rounded-md dark:border-lightBG border-darkBG w-full'></textarea>
        </section>

        <section className='flex justify-end gap-2 items-center'>
            {error && <p className='text-sm text-red-400'>{error}</p>}
            <p onClick={cancelData} className='bg-red-400 cursor-pointer hover:bg-red-500 p-1 rounded-md'>Cancel</p>
            <p onClick={addDataHandler} className='bg-green-500  cursor-pointer hover:bg-green-600 p-1 rounded-md'>Confirm</p>
        </section>


        </ul>
    )
}

export default DataList