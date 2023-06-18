'use client'
import React, {  useState , Suspense } from 'react'
import Spinner from '../Spinner/Spinner';
import Scene2 from './TestObjCar'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import useThemeStore from 'store/Theme';


const SplineObject = () => {
    const showModel = useThemeStore((state)=>state.isModelVisible)
    const toggleModel = useThemeStore((state)=>state.toggleModel)

    return(
          <div className={`w-full px-4 h-[${showModel ? '250px' : 'auto'}] md:h-[${showModel? '250px' : 'auto'}] min-h-[20px] mb-2 `}>

            <p className={`absolute cursor-pointer opacity-40  z-10 ${showModel ? 'right-8 top-2' : 'right-2  top-0'}`} onClick={toggleModel}>{showModel ? 'Hide' : 'Show'} Model</p>
                {showModel &&
            <Suspense fallback={<Spinner desc='loading model'/>}>
                <Canvas className='rounded-md' shadows flat linear>
                  <Scene2/>
                  <OrbitControls enablePan={false}  maxZoom={1.4} minZoom={0.4} />
                </Canvas>
            </Suspense>
                }
          </div>
          
    )

}


export default SplineObject