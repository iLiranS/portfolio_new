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
          <div className=' w-full px-4 h-[200px] md:h-[250px] mb-2'><SplineObject/></div>
        {children}
        </div>

        <aside className='hidden lg:block  w-full h-fit sticky top-2'>
        <Latest/>
       </aside>

       </section>

      

  )
}