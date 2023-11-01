

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


 

  return (
      <div className='max-w-2xl w-full relative mx-auto scroll-smooth px-4 md:px-0 pb-1'>
        {children}
      </div>

  )
}
