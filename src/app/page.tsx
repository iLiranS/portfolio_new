import {AiOutlineYoutube,AiOutlineGithub,AiOutlineMail} from 'react-icons/ai'

export default function Home() {



  return (
    <div className=' animate-pageIn flex flex-col px-4 md:px-0 gap-2 pb-4'>
    <h2 className='p-2 bg-darkBG dark:bg-lightBG bg-opacity-10 dark:bg-opacity-10 rounded-lg text-center'>
      Hi ! My name is <span className='text-orange-400'>Liran</span> , I&apos;m a Front End Web Developer.
     </h2>

    <div>
     <h2 className='text-2xl hover:text-orange-400 w-fit'>About me</h2>
     <ul className='sectionLine'>
            <li className='ml-4'> <span className=' text-orange-400 mr-1'>•</span>I got into web development after experiencing with simple game dev and app dev.  I&apos;m passionate about it 😁.</li>
            <li className='ml-4'> <span className=' text-orange-400 mr-1'>•</span>I&apos;ve started my web dev journy  back in 2020 when I decided to learn  JavaScript in my free time, But my passion for programming began back in highschool.</li>
            <li className='ml-4'><span className='text-orange-400 mr-1'>•</span>Some of the technologies I use : <br/> React, Tailwind, Redux/Zustand, Next, React Router, Firebase & more.</li>
     </ul>
    </div>

    <div>
     <h2 className='text-2xl hover:text-orange-400 w-fit'>Socials</h2>
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
