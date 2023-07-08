import SplineObject from '@/components/Spline object/SplineObject';
import Latest from '@/components/Latest/Latest';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


 

  return (
       <section className=' h-full w-full transition-colors grid relative lg:grid-cols-[1fr,3fr,1fr] grid-cols-1'>
                
        <div className='hidden lg:block'></div>

        <div className=' max-w-2xl w-full relative m-auto  scroll-smooth '>
          <SplineObject/>
        {children}
        </div>

        <aside className='hidden lg:flex  w-full h-fit sticky top-4  justify-start pl-1'>
        {/* @ts-expect-error Server Component */}
        <Latest/>
       </aside>

       </section>

      

  )
}
