import Dropdown from '@/components/DropDown/Dropdown'
import {AiOutlineGithub,AiOutlineMail,AiOutlineLinkedin,AiFillQuestionCircle} from 'react-icons/ai'
import {RxDiscordLogo} from 'react-icons/rx'
import { Metadata } from 'next'
import {SiNextdotjs} from 'react-icons/si'
import {ImHtmlFive} from 'react-icons/im'
import {LiaReact} from 'react-icons/lia'
import {GiBearFace} from 'react-icons/gi'
import {TbBrandTailwind} from 'react-icons/tb'
import {BiSolidServer} from 'react-icons/bi'
import {AiFillFolderOpen} from 'react-icons/ai'
import {TiContacts} from 'react-icons/ti'

const foundationsExpand = `as in everything in life, I've started with laying the foundation which are HTML, CSS and JS`
const reactExapnd = `I quickly realized how much easier it made the process of creating more than a simple website, and I've been using it for most of my projects ever since.`
const StateManagemntExapnd = `As I started working on more complex projects, I realized the importance of client-side state management. That's when I learned Redux and Zustand, which allow me to easily manage project-wide content. Currently, I prefer Zustand because of its simplicity and ease of use.`
const tailwindExapnd = `When it comes to styling, I can't get enough of Tailwind. it lets me quickly style components without writing custom CSS. I use it for all of my projects and I love how easy it is to create beautiful designs.`
const nextExplaind = ` With Next.js, I can fetch data on the server side and pre-render pages for improved performance and search engine optimization. It also offers features like dynamic routing, automatic code splitting and more ,which makes the development process much smoother.`
const backendExplanid = `Finally, I started exploring backend technologies to complement my front-end skills. Firebase and MongoDB Atlas are two technologies I've learned to replace the backend for my projects, alongside Prisma for the ORM.`
const moreExplaind = `In addition to all above, I work with different libraries such as HeadlessUI, Radix, shadcn, NextAuth, Clerk, Supabase, firebase, mongoDB, and many other libraries.`

export const metadata:Metadata={
  title:'LiranS - Home',
  description:'Personal portfolio of LiranS - Front end web developer specialized in React & Next.JS'
}


export default function Home() {



  return (
    <div className=' flex flex-col px-4 md:px-0 gap-2 pb-4 w-full pt-2'>
      <h2 style={{'animationDelay':'200ms'}}  className='p-2 bg-darkBG  dark:bg-lightBG bg-opacity-10 dark:bg-opacity-10 rounded-lg text-center animate-scaleUp'> Hi ! My name is <span className='text-orange-400'>Liran</span> , I&apos;m a Front End Web Developer.</h2>

      <div className='animate-scaleUp mt-2'>
        <section className='text-2xl  font-semibold flex items-center gap-2'>
          <AiFillQuestionCircle/>
          <h2>About</h2>
        </section>
        <ul className='sectionLine relative'>
          <li className='ml-4 flex opacity-90'> I was always intrigued by the idea of building interfaces that could reach a large audience who will be impressed by them.</li>
          <li className='ml-4 flex opacity-90'>My web development jounery</li>
          <Dropdown icon={<ImHtmlFive/>}          title={'The Basics'}>{foundationsExpand}</Dropdown>
          <Dropdown icon={<LiaReact/>}            title={'React'}>{reactExapnd}</Dropdown>
          <Dropdown icon={<SiNextdotjs/>}         title={'Next'}>{nextExplaind}</Dropdown>
          <Dropdown icon={<GiBearFace/>}          title={'Zustand/Redux'}>{StateManagemntExapnd}</Dropdown>
          <Dropdown icon={<TbBrandTailwind/>}     title={'Tailwind'}>{tailwindExapnd}</Dropdown>
          <Dropdown icon={<BiSolidServer/>}       title={'Backend'}>{backendExplanid}</Dropdown>
          <Dropdown icon={<AiFillFolderOpen/>}    title='Libraries'>{moreExplaind}</Dropdown>
          <li className='ml-4 flex opacity-90'><p><span className='text-orange-400'>In conclustion</span>, I&apos;m passionate about web development and I&apos;m always looking for ways to improve my skills in order to create better user experiences and beautiful web apps.</p></li>
      </ul>
    </div>

    <div>
      <section className='flex items-center gap-2 text-2xl  font-semibold'>
        <TiContacts/>
        <h2>Contact</h2>
      </section>
      <ul className='relative grid grid-cols-1 md:grid-cols-2 justify-between gap-3 md:gap-2 mt-2 before:h-full before:w-[2px] before:bg-darkBG/10 before:absolute before:top-0 dark:before:bg-white/10'>
        <li className='socialLink'>
          <div className='text-orange-400'>
            <AiOutlineGithub/>
          </div>
          <a className='w-full' target='_blank' href='https://github.com/iLiranS'>Github</a> 
          </li>

        <li  className='socialLink group overflow-hidden'> 
          <div className='text-orange-400'>
            <RxDiscordLogo /> 
          </div>
          <p>Discord</p>
          <p className='hidden group-hover:animate-pageIn group-hover:block text-darkBG dark:text-lightBG'>SpyNinja#9696</p>
        </li>

        <li  className='socialLink group overflow-hidden'>
          <div className='text-orange-400'>
            <AiOutlineMail /> 
          </div>
          <p>Mail</p>
          <p className='hidden group-hover:animate-pageInParagraph group-hover:block text-darkBG dark:text-lightBG'>liransdev@gmail.com</p>
        </li>

        <li className='socialLink'> 
          <div className='text-orange-400'>
            <AiOutlineLinkedin /> 
          </div>
          <a className='w-full' target='_blank' href='https://www.linkedin.com/in/lirans-dev-694490280/'>Linkedin</a> 
        </li>

      </ul>
    </div>
    

    
    

     </div>
  )
}
