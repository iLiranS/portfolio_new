import Dropdown from '@/components/DropDown/Dropdown'
import {AiOutlineGithub,AiOutlineMail,AiOutlineLinkedin} from 'react-icons/ai'
import {RxDiscordLogo} from 'react-icons/rx'
import Latest from '@/components/Latest/Latest'
import { Metadata } from 'next'

const foundationsExpand = `as in everything in life, I've started with laying the foundation which are HTML, CSS and JS`
const reactExapnd = `I quickly realized how much easier it made the process of creating more than a simple website, and I've been using it for most of my projects ever since.`
const StateManagemntExapnd = `As I started working on more complex projects, I realized the importance of client-side state management. That's when I learned Redux and Zustand, which allow me to easily manage project-wide content. Currently, I prefer Zustand because of its simplicity and ease of use.`
const tailwindExapnd = `When it comes to styling, I can't get enough of Tailwind. it lets me quickly style components without writing custom CSS. I use it for all of my projects and I love how easy it is to create beautiful designs.`
const nextExplaind = ` With Next.js, I can fetch data on the server side and pre-render pages for improved performance and search engine optimization. It also offers features like dynamic routing, automatic code splitting and more ,which makes the development process much smoother.`
const backendExplanid = `Finally, I started exploring backend technologies to complement my front-end skills. Firebase and MongoDB Atlas are two technologies I've learned to replace the backend for my projects, alongside Prisma for the ORM.`
const moreExplaind = `In addition to all above, I work with different libraries such as HeadlessUI, Radix, shadcn, NextAuth, Clerk, Supabase, firebase, mongoDB, and many other libraries.`

export const metadata:Metadata={
  title:'LiranS Portfolio',
  description:'Personal portfolio of LiranS'
}


export default function Home() {



  return (
    <div className=' flex flex-col px-4 md:px-0 gap-2 pb-4 w-full'>
    <h2 style={{'animationDelay':'200ms'}}  className='p-2 bg-darkBG  dark:bg-lightBG bg-opacity-10 dark:bg-opacity-10 rounded-lg text-center animate-scaleUp'>
      Hi ! My name is <span className='text-orange-400'>Liran</span> , I&apos;m a Front End Web Developer.
     </h2>

    <div className='animate-scaleUp'>
     <h2 className='text-2xl hover:text-orange-400 w-fit font-semibold'>About me</h2>
     <ul className='sectionLine relative'>

     <li className='ml-4 flex opacity-90'> I was always intrigued by the idea of building interfaces that could reach a large audience who will be impressed by them.</li>
     <li className='ml-4 flex opacity-90'>My list of tools and skills:</li>
     <Dropdown title={'The Basics'}>{foundationsExpand}</Dropdown>
     <Dropdown title={'React'}>{reactExapnd}</Dropdown>
     <Dropdown title={'Next'}>{nextExplaind}</Dropdown>
     <Dropdown title={'Zustand/Redux'}>{StateManagemntExapnd}</Dropdown>
     <Dropdown title={'Tailwind'}>{tailwindExapnd}</Dropdown>
     <Dropdown title={'Backend'}>{backendExplanid}</Dropdown>
     <Dropdown title='Libraries'>{moreExplaind}</Dropdown>
     <li className='ml-4 flex opacity-90'>Overall, I&apos;m passionate about web development and I&apos;m always looking for ways to improve my skills and create better user experiences.</li>
     
     </ul>
    </div>

    <div>
     <h2 className='text-2xl hover:text-orange-400 w-fit font-semibold'>Contact</h2>
     <ul className='relative grid grid-cols-1 md:grid-cols-2 justify-between gap-3 md:gap-2 mt-2  
     before:h-full before:w-[2px] before:bg-darkBG/10 before:absolute before:top-0 dark:before:bg-white/10'>
        <li className='socialLink'> <AiOutlineGithub className='text-orange-400'/> <a className='w-full' target='_blank' href='https://github.com/iLiranS'>Github</a> </li>
        <li  className='socialLink group overflow-hidden'> <RxDiscordLogo className='text-orange-400'/> <p>Discord</p>
          <p className='hidden group-hover:animate-pageIn group-hover:block text-darkBG dark:text-lightBG'>SpyNinja#9696</p>
         </li>
        <li  className='socialLink group overflow-hidden'> <AiOutlineMail className='text-orange-400'/> <p>Mail</p>
          <p className='hidden group-hover:animate-pageInParagraph group-hover:block text-darkBG dark:text-lightBG'>liransdev@gmail.com</p>
        </li>
        <li className='socialLink'> <AiOutlineLinkedin className='text-orange-400'/> <a className='w-full' target='_blank' href='https://www.linkedin.com/in/lirans-dev-694490280/'>Linkedin</a> </li>

     </ul>
    </div>
    

    
    

     </div>
  )
}
