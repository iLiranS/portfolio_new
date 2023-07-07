import './globals.css' 
import Header from '@/components/Header/Header';
import {Analytics } from '@vercel/analytics/react'
import {Roboto_Mono} from 'next/font/google'
const roboto_mono= Roboto_Mono({ subsets: ['latin'],weight:['400','500','600','700'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


 

  return (
    <html lang="en">
 
      <head />

      

      <body className={roboto_mono.className}>
      <Header/>

       <main className=' min-h-[100dvh] transition-colors flex flex-col relative pt-16 md:pt-24
       bg-lightBG text-darkBG
       dark:bg-darkBG dark:text-lightBG'>
        {children}
       </main>

      

        <Analytics/>         
        </body>
    </html>
  )
}
