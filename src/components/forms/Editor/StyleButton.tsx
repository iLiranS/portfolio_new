import React, { ReactNode } from 'react'
    
type Props = {
  active: boolean
  style: string
  label: string | ReactNode
  title:string
  onToggle: (bockType: string) => void
}

const StyleButton = ({ active, style, label, onToggle,title }: Props) => {

  
  const _onToggle = (e:React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();
    onToggle(style)
  }


  return (
    <button title={title}
      className={`${active ? 'opacity-100' : 'opacity-50'} ${!active && `hover:opacity-70`} rounded-md text-sm w-full aspect-square grid place-items-center p-1  bg-darkBG/10 dark:bg-lightBG/10`}
      onClick={_onToggle}
    >
      {label}
    </button>
  )
}

export default React.memo(StyleButton)