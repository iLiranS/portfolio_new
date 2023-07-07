'use client'
import React, {  Suspense } from 'react'
import Scene2 from './TestObjCar'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import useThemeStore from 'store/Theme';


const SplineObject = () => {
    const showModel = useThemeStore((state)=>state.isModelVisible)
    const toggleModel = useThemeStore((state)=>state.toggleModel)

    return(
          <div className={`w-full px-4 ${showModel ? 'h-60' : 'h-8'}   relative  mb-2 transition-all ease-in-out duration-500`}>

            <p  key={showModel.toString()} className={`absolute cursor-pointer text-lightBG dark:text-darkBG opacity-60  z-10 ${showModel ? 'right-8 bottom-2' : 'right-2  top-0 '} bg-darkBG dark:bg-lightBG p-1 rounded-md animate-scaleUp`} onClick={toggleModel}>{showModel ? 'Hide' : 'Show'} Model</p>
                {showModel &&
            <Suspense fallback={<div className='h-full w-full animate-pulse bg-gray-500 rounded-md opacity-50'/>}>
                <Canvas  className='rounded-md' shadows flat linear>
                    <Scene2/>
                    <OrbitControls enablePan={false}  maxZoom={1.4} minZoom={0.4} />
                </Canvas>
            </Suspense>
                }
          </div>
          
    )
    
}


export default SplineObject