import Latest from '@/components/Latest/Latest';
import SplineObject from '@/components/Spline object/SplineObject';


export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {




return (          

    <div className='w-full relative'>
        <SplineObject/>
        {children}
        <footer>
            {/* @ts-expect-error Server Component */}
            <Latest/>
        </footer>
    </div>

)
}
