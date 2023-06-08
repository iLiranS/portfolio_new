'use client'
import React, {  useState , Suspense } from 'react'
import Spinner from '../Spinner/Spinner';

const Spline = React.lazy(() => import('@splinetool/react-spline'));

const SplineObject = () => {
    const [didLoad,setDidLoad] = useState(false);
    

    const onLoad = () =>{
        setDidLoad(true);
    }

  return (
    <>
    <Suspense fallback={<Spinner desc='loading model'/>}>
        {!didLoad && <Spinner desc='loading model'/>}
<Spline  className={`${ didLoad ? 'animate-scaleUp' : 'scale-0'} cursor-default`}  onLoad={onLoad} scene="https://prod.spline.design/cESBr78ac2rKifS2/scene.splinecode" />
    </Suspense>

    </>

)
}

{/* <Spline  className={`${ didLoad ? 'animate-scaleUp' : 'scale-0'}`}  onLoad={onLoad} scene="https://prod.spline.design/fogD9bjhn9zDObqA/scene.splinecode" /> */}

export default SplineObject