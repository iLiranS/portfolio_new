'use client'
import React, {useState } from 'react'
import {AiFillCaretDown} from 'react-icons/ai'
const Dropdown = (props:any) => {
    const [isOpen,setIsOpen] = useState(false);
    const toggleIsOpen = () => setIsOpen(prev=>!prev);


  return (
<li className='ml-4 flex relative overflow-hidden  opacity-90'> 
        <span className='text-orange-400 mr-1'>•</span>
        <div className='flex flex-col gap-1 w-full'>

       <section className='flex items-center gap-2 cursor-pointer w-full justify-between bg-darkBG dark:bg-lightBG bg-opacity-10 dark:bg-opacity-10 rounded-md p-1' onClick={toggleIsOpen}>
        {props.title} <AiFillCaretDown className={`${isOpen ? 'rotate-180' : 'rotate-0'} text-orange-400 transition-transform select-none`}/>
       </section> 

      {isOpen &&
      <p className={`  overflow-hidden block opacity-[0.85] text-sm ml-2 animate-pageInParagraph`}>
      {props.children}
      </p>
} 
      
        
        </div>
    </li>
  )
}



export default Dropdown