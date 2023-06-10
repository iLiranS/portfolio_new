import './globals.css' 
import Header from '@/components/Header/Header';
import {Analytics } from '@vercel/analytics/react'


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

       <main className=' min-h-[100dvh] transition-colors flex flex-col relative pt-16 md:pt-24
       bg-lightBG text-darkBG
       dark:bg-darkBG dark:text-lightBG'>
        <Analytics/>         
        {children}
       </main>

      

        </body>
    </html>
  )
}
