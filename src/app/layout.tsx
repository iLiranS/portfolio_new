import './globals.css'
import SplineObject from '@/components/Spline object/SplineObject';
import Header from '@/components/Header/Header';

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

       <main className=' min-h-[100dvh]  transition-colors
       bg-lightBG text-darkBG
       dark:bg-darkBG dark:text-lightBG'>

        <div className=' max-w-2xl w-full relative m-auto pt-16 md:pt-24  scroll-smooth'>
          <div className='scale-75 md:scale-90 h-[250px]'><SplineObject/></div>
        {children}
        </div>

       </main>

        </body>
    </html>
  )
}
