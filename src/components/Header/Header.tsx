'use client'
import React from 'react'
import {BiSun , BiMoon} from 'react-icons/bi'
import Link  from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import useThemeStore from 'store/Theme'



const Header = () => {
  const pathname = usePathname();
  const currentTheme = useThemeStore((state)=>state.theme);
  const toggleTheme = useThemeStore((state)=>state.toggleTheme);
  useEffect(()=>{
    if (currentTheme === 'dark'){
      if (!document.body.classList.contains('dark')) document.body.classList.add('dark');
      document.body.style.backgroundColor='#202023';
    }
    else{
      if (document.body.classList.contains('dark')) document.body.classList.remove('dark');
      document.body.style.backgroundColor='#F0E7DB';

    }
  },[currentTheme])

  return (
    <header className='  flex justify-center px-4 fixed top-0 w-full backdrop-blur-lg z-40  transition-colors
     text-darkBG dark:text-lightBG'>

     <nav className='flex max-w-3xl  w-full  justify-between p-2 items-center'>
       <ul className='flex gap-4'>
         <li  className={`font-semibold navLink ${pathname==='/' ? 'text-orange-400' : ''}`}><Link href={'/'}>Liran</Link></li>
         <li className={`navLink ${pathname==='/projects' ? 'text-orange-400' : ''}`}><Link href={'projects'}>Projects</Link></li>
         <li className={`navLink ${pathname==='/posts' ? 'text-orange-400' : ''}`}><Link href={'posts'}>Posts</Link></li>
         <li className='navLink'></li>
       </ul>

       <ul>
       <li className={`select-none cursor-pointer p-2 text-xl rounded-md ${currentTheme==='dark' ? 'bg-lightBG text-darkBG' : 'bg-darkBG text-lightBG'}`} onClick={toggleTheme}>
         {currentTheme==='dark' ? <BiSun/> : <BiMoon/>}
       </li>
       </ul>
     </nav>
    </header>
  )
}

export default Header