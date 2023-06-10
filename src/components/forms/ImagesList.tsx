import React, { useEffect, useRef, useState } from 'react'

const ImagesList:React.FC<{updateImages:(images:string[])=>void}> = ({updateImages}) => {
const [images,setImages] = useState<string[]>([]);
const [error,setError] = useState<null|string>(null);
const imageInput = useRef<HTMLInputElement>(null);



    useEffect(()=>{
        updateImages(images);
    },[images,updateImages])

    const addImageHandler = () =>{
        const inputValue = imageInput.current?.value;
        if (!inputValue) setError('invalid url');
        else if (inputValue?.trim().length < 6) setError('invalid url');
        else {
            setError(null);
            setImages(prev =>{
                const fornow = [...prev,inputValue];
                return fornow;
            })
            imageInput.current.value='';
        }
        
    }
    const deleteImageHandler = (index:number) =>{
        setImages(prev =>{
            const fornow = [...prev];
            fornow.splice(index,1);
            return fornow;
        })
    }

    const mappedImagesList = images.map((url,index) =>
    <SingleImageInput removeItem={deleteImageHandler} key={index} url={url} index={index}/>
)

  return (
    <ol className='flex flex-col list-disc'>
        {mappedImagesList}
        <li className='addInput flex relative'>
            <input placeholder='Image Link...' onChange={()=>{setError(null)}} ref={imageInput} className='bg-transparent w-full ' type='url'/>
            <section onClick={addImageHandler} className='bg-darkBG dark:bg-lightBG text-lightBG dark:text-darkBG p-1 rounded-md cursor-pointer h-full aspect-square  my-auto text-xs'><p>+</p></section>
        </li>
        {error && <li className='text-red-400 text-sm'>{error}</li>}
    </ol>
  )
}


const SingleImageInput:React.FC<{url:string,index:number,removeItem:(index:number)=>void}> = ({url,index,removeItem}) =>{
    const removeItemHandler = () => removeItem(index);
    return(
    <li className='flex items-center justify-between '>
        <p className='text-sm addInptu'>{url}</p>
        <section onClick={removeItemHandler} className='cursor-pointer hover:text-red-400'>✕</section>
    </li>
    )
}

export default ImagesList