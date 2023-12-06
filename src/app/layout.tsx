import './globals.css' 
import Header from '@/components/Header/Header';
import {Analytics } from '@vercel/analytics/react'
import {Raleway, Roboto_Flex, Roboto_Mono} from 'next/font/google'
const raleway = Raleway({subsets:['latin'],weight:['400','500','600','700']})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


 

  return (
    <html className=' ' lang="en">
 
      <head />

      <body className={`${raleway.className} dark:selection:text-orange-400  selection:bg-orange-400`}>
      <Header/>

       <main className=' min-h-[100dvh] transition-colors pt-14 flex flex-col relative 
       bg-lightBG text-darkBG
       dark:bg-darkBG dark:text-lightBG'>
        {children}
       </main>

      

        <Analytics/>         
        </body>
    </html>
  )
}
