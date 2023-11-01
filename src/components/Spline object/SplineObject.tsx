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
          <div className={`w-full max-w-2xl ${showModel ? 'h-60' : 'h-8'}  relative  mb-2 transition-all ease-in-out duration-500`}>

            <p  key={showModel.toString()} className={`absolute cursor-pointer text-lightBG dark:text-darkBG opacity-60  z-10 ${showModel ? 'right-8 bottom-2' : 'right-2  top-0 '} bg-darkBG dark:bg-lightBG p-1 rounded-md animate-scaleUp`} onClick={toggleModel}>{showModel ? 'Hide' : 'Show'} Model</p>
                {showModel &&
            <Suspense fallback={<div className='h-full w-full animate-pulse50To20 bg-gray-500/50 rounded-md opacity-50'/>}>
                <Canvas  className='rounded-md' shadows flat linear>
                    <Scene2/>
                    <OrbitControls enableRotate={false} enablePan={false} maxZoom={0.67} minZoom={0.55} />
                </Canvas>
            </Suspense>
                }
          </div>
          
    )
    
}


export default SplineObject