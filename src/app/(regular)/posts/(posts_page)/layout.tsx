import SplineObject from '@/components/Spline object/SplineObject';


export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {




return (          
    <>
        <SplineObject/>
        {children}
    </>
)
}
