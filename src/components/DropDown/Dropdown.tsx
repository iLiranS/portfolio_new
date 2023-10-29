'use client'
import React, {ReactNode, useEffect, useState } from 'react'
import {AiFillCaretDown} from 'react-icons/ai'
const Dropdown:React.FC<{title:string,children:ReactNode,defaultToggle?:boolean,icon?:ReactNode}> = ({title,children,defaultToggle=false,icon=null}) => {
    const [isOpen,setIsOpen] = useState(defaultToggle);
    const [showOverflow,setShowOverflow] = useState(false);
    
    const toggleIsOpen = () => setIsOpen(prev=>!prev);


    useEffect(()=>{
      let timeout:ReturnType<typeof setTimeout>;
      if (isOpen){
        timeout = setTimeout(() => {
          setShowOverflow(prev =>!prev);
        }, 300);
      }
      return()=> 
      {
        setShowOverflow(false);
        clearTimeout(timeout);
      }
    },[isOpen])

  return (
  <li className={`ml-4  h-max flex relative  items-start opacity-90`}> 
    <span className='text-orange-400 mr-1 mt-1'>•</span>
    <div className='flex flex-col gap-1 w-full h-max'>
      <section className='flex items-center gap-2 select-none cursor-pointer w-full justify-between bg-darkBG dark:bg-lightBG bg-opacity-10 dark:bg-opacity-10 rounded-md p-1' onClick={toggleIsOpen}>
        <div className='flex items-center gap-2'>
          {icon ?? ''}
          <p>{title}</p>
        </div>
        <div  className={`${isOpen ? 'rotate-180' : 'rotate-0'} text-orange-400 transition-transform select-none`}>
          <AiFillCaretDown/>
        </div>
      </section> 

      <p  className={` block  opacity-[0.85] text-sm leading-7 ml-2 h-max origin-top transition-all duration-500 ease-in-out 
      ${isOpen ? `max-h-[1000px] ` : `max-h-0`} ${showOverflow ? 'overflow-y-auto' : 'overflow-hidden'}  `}>
      {children}
      </p>
      
    </div>
  </li>
  )
}



export default Dropdown