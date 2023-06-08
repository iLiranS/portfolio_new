import React from 'react'

const Spinner:React.FC<{desc?:string}> = ({desc}) => {
  return (
    <div className="flex items-center justify-center relative">
  <div
    className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
    role="status">
    <span
      className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
      >Loading...</span>
  </div>
  <p className='absolute top-full opacity-50 animate-pulse'>{desc}</p>
</div>
  )
}

export default Spinner