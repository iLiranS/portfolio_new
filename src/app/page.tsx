import Dropdown from '@/components/DropDown/Dropdown'
import {AiOutlineYoutube,AiOutlineGithub,AiOutlineMail} from 'react-icons/ai'

const foundationsExpand = `as in everything , I've started with laying the foundation which are HTML, CSS and JS`
const reactExapnd = `I quickly realized how much easier it made the process of creating UI components, and I've been using it for most of my projects ever since.`
const ReactRouterExpand = `After getting comfortable with React, I dove into React Router to create multi-page applications. However, I've mostly use Next.js over react router, which offers server-side rendering.`
const StateManagemntExapnd = `As I started working on more complex projects, I realized the importance of client-side state management. That's when I learned Redux and Zustand, two state management libraries that allow me to easily manage project-wide content. Currently, I prefer Zustand because of its simplicity and ease of use.`
const tailwindExapnd = `When it comes to styling, I can't get enough of Tailwind. it lets me quickly style components without writing custom CSS. I use it for all of my projects and I love how easy it is to create beautiful designs.`
const nextExplaind = ` With Next.js, I can fetch data on the server side and pre-render pages for improved performance and search engine optimization. It also offers features like dynamic routing, automatic code splitting and more ,which makes the development process much smoother.`
const backendExplanid = `Finally, I started exploring backend technologies to complement my front-end skills. Firebase and MongoDB Atlas are two technologies I've learned to replace the backend for my projects.`

export default function Home() {



  return (
    <div className=' animate-pageIn flex flex-col px-4 md:px-0 gap-2 pb-4 w-full'>
    <h2 className='p-2 bg-darkBG dark:bg-lightBG bg-opacity-10 dark:bg-opacity-10 rounded-lg text-center'>
      Hi ! My name is <span className='text-orange-400'>Liran</span> , I&apos;m a Front End Web Developer.
     </h2>

    <div>
     <h2 className='text-2xl hover:text-orange-400 w-fit font-semibold'>About me</h2>
     <ul className='sectionLine relative'>

     <li className='ml-4 flex opacity-90'> I was always intrigued by the idea of building interfaces that could reach a large audience who will be impressed by them.</li>
     <Dropdown title={'The Basics'}>{foundationsExpand}</Dropdown>
     <Dropdown title={'React'}>{reactExapnd}</Dropdown>
     <Dropdown title={'React Router'}>{ReactRouterExpand}</Dropdown>
     <Dropdown title={'Next JS'}>{nextExplaind}</Dropdown>
     <Dropdown title={'Zustand/Redux'}>{StateManagemntExapnd}</Dropdown>
     <Dropdown title={'Styling with Tailwind'}>{tailwindExapnd}</Dropdown>
     <Dropdown title={'Backend'}>{backendExplanid}</Dropdown>
     <li className='ml-4 flex opacity-90'>Overall, I&apos;m passionate about web development and I&apos;m always looking for ways to improve my skills and create better user experiences.</li>
     
     </ul>
    </div>

    <div>
     <h2 className='text-2xl hover:text-orange-400 w-fit font-semibold'>Socials</h2>
     <ul className='sectionLine'>
        <li className='socialLink'> <AiOutlineGithub className='text-orange-400'/> <a target='_blank' href='https://github.com/iLiranS'>Github</a> </li>
        <li className='socialLink hover:cursor-not-allowed hover:text-gray-500'> <AiOutlineYoutube className='text-orange-400'/> Youtube </li>
        <li  className='socialLink group'> <AiOutlineMail className='text-orange-400'/> <p>Mail</p>
          <p className='hidden group-hover:animate-scaleUp group-hover:block text-darkBG dark:text-lightBG'>lirangamerz@gmail.com</p>
         </li>
     </ul>
    </div>
    

     </div>
  )
}


/*
<li className='ml-4'> <span className=' text-orange-400 mr-1'>•</span>I got into web development after experiencing with simple game dev and app dev.  I&apos;m passionate about it 😁.</li>
<li className='ml-4'> <span className=' text-orange-400 mr-1'>•</span>I&apos;ve started my web dev journy  back in 2020 when I decided to learn  JavaScript in my free time, But my passion for programming began back in highschool.</li>
<li className='ml-4'><span className='text-orange-400 mr-1'>•</span>Some of the technologies I use : <br/> React, Tailwind, Redux/Zustand, Next, React Router, Firebase & more.</li>
*/