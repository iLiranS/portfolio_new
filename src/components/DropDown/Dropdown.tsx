'use client'
import React, {ReactNode, useState } from 'react'
import {AiFillCaretDown} from 'react-icons/ai'
const Dropdown:React.FC<{title:string,children:ReactNode,defaultToggle?:boolean}> = ({title,children,defaultToggle=false}) => {
    const [isOpen,setIsOpen] = useState(defaultToggle);

    
    const toggleIsOpen = () => setIsOpen(prev=>!prev);

  return (
  <li className={`ml-4  h-max flex relative  items-start opacity-90`}> 
    <span className='text-orange-400 mr-1 mt-1'>•</span>
    <div className='flex flex-col gap-1 w-full h-max'>
      <section className='flex items-center gap-2 select-none cursor-pointer w-full justify-between bg-darkBG dark:bg-lightBG bg-opacity-10 dark:bg-opacity-10 rounded-md p-1' onClick={toggleIsOpen}>
        {title} <AiFillCaretDown className={`${isOpen ? 'rotate-180' : 'rotate-0'} text-orange-400 transition-transform select-none`}/>
      </section> 

      <p  className={` block overflow-hidden opacity-[0.85] text-sm leading-7 ml-2 h-max origin-top transition-all duration-500 ease-in-out 
      ${isOpen ? `max-h-[300px] overflow-y-auto` : `max-h-0`}  `}>
      {children}
      </p>
      
    </div>
  </li>
  )
}



export default Dropdown