import './globals.css'
import SplineObject from '@/components/Spline object/SplineObject';
import Header from '@/components/Header/Header';
import {Analytics } from '@vercel/analytics/react'
import Latest from '@/components/Latest/Latest';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


 

  return (
    <html lang="en">
 
      <head />

      

      <body>
      <Header/>

       <main className=' min-h-[100dvh]  transition-colors grid relative lg:grid-cols-[1fr,3fr,1fr] grid-cols-1
       bg-lightBG text-darkBG
       dark:bg-darkBG dark:text-lightBG'>
                <Analytics/>
                
        <div className='hidden lg:block'></div>

        <div className=' max-w-2xl w-full relative m-auto pt-16 md:pt-24  scroll-smooth '>
          <div className='scale-75 md:scale-90 h-[250px]'><SplineObject/></div>
        {children}
        </div>

        <aside className='hidden lg:block relative w-full'>
        <Latest/>
       </aside>

       </main>

      

        </body>
    </html>
  )
}
