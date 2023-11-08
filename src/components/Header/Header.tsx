'use client'
import React from 'react'
import {BiSun , BiMoon , BiNews} from 'react-icons/bi'
import {FiUser} from 'react-icons/fi'
import {BsBriefcase} from 'react-icons/bs'
import {AiOutlineGithub} from 'react-icons/ai'
import Link  from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect , useState } from 'react';
import useThemeStore from 'store/Theme'
import Spinner from '../Spinner/Spinner'



const Header = () => {
  const pathname = usePathname();
  const currentTheme = useThemeStore((state)=>state.theme) || 'dark';
  const toggleTheme = useThemeStore((state)=>state.toggleTheme);
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    setIsHydrated(true)
  }, [])

  useEffect(()=>{
    if (currentTheme === 'dark'){
      if (!document.documentElement.classList.contains('dark')) document.body.classList.add('dark');
      document.documentElement.style.backgroundColor='#202023';
    }
    else{
      if (document.body.classList.contains('dark')) document.body.classList.remove('dark');
      document.body.style.backgroundColor='#F0E7DB';

    }
  },[currentTheme])


  

  return (
    <header className='flex justify-center  fixed top-0 w-full   z-40  transition-colors
     text-darkBG dark:text-lightBG'>

      {isHydrated ?

     <nav className='flex max-w-3xl backdrop-blur-md bg-lightBG/40 dark:bg-darkBG/40 w-full  justify-between p-2 items-center'>
       <ul className='flex gap-4'>
         <li  className={` navLink ${pathname==='/' ? 'text-orange-400' : ''}`}><Link className='flex items-center gap-1' href={'/'}><FiUser/>  <p>Liran</p></Link></li>
         <li className={`navLink ${pathname==='/projects' ? 'text-orange-400' : ''}`}><Link className='flex items-center gap-1' href={'/projects'}> <BsBriefcase/><p>Projects</p></Link></li>
         <li className={`navLink ${pathname==='/posts' ? 'text-orange-400' : ''}`}><Link className='flex items-center gap-1' href={'/posts'}> <BiNews/> <p>Posts</p></Link></li>
         <li className='navLink'></li>
       </ul>

       <ul className='flex gap-1 items-center'>
        <li className={`items-center group flex select-none cursor-pointer p-1 md:text-xl rounded-md  ${currentTheme==='dark' ? 'bg-lightBG text-darkBG' : 'bg-darkBG text-lightBG'} `}> 
          <a href='https://github.com/iLiranS/portfolio_new' target={'_blank'}>
            <AiOutlineGithub className='group-hover:-rotate-45 transition-transform group-hover:scale-110'/>
          </a>
        </li>
       <li className={`select-none cursor-pointer p-2 md:text-xl rounded-md ${currentTheme==='dark' ? 'bg-lightBG text-darkBG rotate-180' : 'bg-darkBG text-lightBG rotate-0'} transition-all`} onClick={toggleTheme}>
         {currentTheme==='dark' ? <BiSun/> : <BiMoon/>}
       </li>
       </ul>
     </nav>
     :
     <div className='flex max-w-3xl backdrop-blur-md bg-lightBG/40 dark:bg-darkBG/40 w-full  p-2 justify-center'><Spinner/></div>
    }
    </header>
  )
}

export default Header