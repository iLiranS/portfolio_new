'use client'
import { url } from 'inspector';
import Image, { StaticImageData } from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import {GiClick} from 'react-icons/gi'


const Project:React.FC<{title:string,src:string,description:string,link?:string;id:string}> = (props) => {
    // title , src , description , link , id 
    const {title,src,description,link,id} = props;
    const router = useRouter();

    const navigateToProjectHandler = () => {
        router.push('/projects/'+id)
    };


  return (
    <li   className={`relative group aspect-video max-w-[400px] w-full md:h-auto m-auto`}>
                <section onClick={navigateToProjectHandler} className='flex items-center justify-between p-2 rounded-b-md z-10 hover:text-orange-400 cursor-pointer'>
                    <h3  className='text-lg hover:text-orange-400'>{title}</h3>
                    {link &&<GiClick className='text-lg'/>}
                </section>

                <ul className='project_Item_section px-2'>
                    <li>{description}</li>
                </ul>

                <section className='relative h-full  w-full project_Item'>
                <Image fill priority sizes='100%' src={src} alt={title}/>
                </section>
           
                
            </li>
  )
}

export default Project