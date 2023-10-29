'use client'

import useSpline from '@splinetool/r3f-spline'
import { OrthographicCamera } from '@react-three/drei'
import { useEffect, useState } from 'react'
import React from 'react'
import useThemeStore from 'store/Theme'
// import useThemeStore from 'store/Theme'

export default function Scene2({ ...props }) {
  const { nodes, materials } = useSpline('https://prod.spline.design/PbiC4rzw1K5WPCS1/scene.splinecode')
  const [linePos,setLinePos] = useState(0); // 173 rotation
  const theme = useThemeStore((state)=>state.theme)

    useEffect(()=>{

        let timeout:ReturnType<typeof setTimeout>;

        const infiniteLineUpdate = () =>{
            timeout = setTimeout(() => {
                setLinePos((prev) => {
                    if (prev > 143) return prev-143;
                    return (prev + 1);
                })
                infiniteLineUpdate();
            }, 30);
        }
        
        infiniteLineUpdate();
        return(()=> clearTimeout(timeout))
    },[])

  return (
    <>
      <color attach="background" args={[`${theme==='light' ? '#F0E7DB' : '#74757a'}`]} />
      <group {...props} dispose={null}>
        <mesh
          name="Rectangle"
          geometry={nodes.Rectangle.geometry}
          material={materials.red}
          castShadow
          receiveShadow
          position={[0, 1, -10.03]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={[4, 12.47, 1]}
        >
          <mesh
            name="Rectangle 2"
            geometry={nodes['Rectangle 2'].geometry}
            material={materials['Rectangle 2 Material']}
            castShadow
            receiveShadow
            position={[3, 43.27+linePos, 1]}
            scale={[0.05, 0.08, 1]}
          />
        </mesh>
        <group name="Car">
          <group name="body" position={[4.69, 96.76, 0]} scale={0.5}>
            <mesh
              name="Cube 24"
              geometry={nodes['Cube 24'].geometry}
              material={materials.red}
              castShadow
              receiveShadow
              position={[-0.04, -137.56, 1.98]}
            />
            <mesh
              name="Rectangle 13"
              geometry={nodes['Rectangle 13'].geometry}
              material={materials.yellow}
              castShadow
              receiveShadow
              position={[361.65, -64.36, -106.21]}
              rotation={[0, Math.PI / 2, 0]}
            />
            <mesh
              name="Rectangle 12"
              geometry={nodes['Rectangle 12'].geometry}
              material={materials.yellow}
              castShadow
              receiveShadow
              position={[361.65, -64.36, 110.16]}
              rotation={[0, Math.PI / 2, 0]}
            />
            <mesh
              name="Cube 21"
              geometry={nodes['Cube 21'].geometry}
              material={materials.white}
              castShadow
              receiveShadow
              position={[367.2, -91.52, 1.98]}
              rotation={[Math.PI / 2, -1.48, -Math.PI]}
              scale={1}
            >
              <mesh
                name="Text"
                geometry={nodes.Text.geometry}
                material={materials.black}
                castShadow
                receiveShadow
                position={[-1.48, -0.78, -4.95]}
                rotation={[Math.PI, 0, -1.58]}
                scale={2}
              />
            </mesh>
            <mesh
              name="Shape 2"
              geometry={nodes['Shape 2'].geometry}
              material={materials.black}
              castShadow
              receiveShadow
              position={[352.05, -147.14, 163.71]}
              rotation={[-Math.PI / 2, 0, -Math.PI]}
            />
            <mesh
              name="windows"
              geometry={nodes.windows.geometry}
              material={nodes.windows.material}
              castShadow
              receiveShadow
              position={[5.36, 66.39, 1.22]}
              scale={2}
            />
            <mesh
              name="chasis"
              geometry={nodes.chasis.geometry}
              material={nodes.chasis.material}
              castShadow
              receiveShadow
              position={[6.26, 22.03, 1.5]}
            />
            <group
              name="rearview mirror Instance"
              position={[-179.33, -15.31, -193.43]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[-1.17, 1.17, 1.17]}
            >
              <mesh
                name="Cube 16"
                geometry={nodes['Cube 16'].geometry}
                material={materials.red}
                castShadow
                receiveShadow
                position={[-9.38, -14.1, -24.44]}
                rotation={[0, -0.87, -1.13]}
                scale={0.85}
              />
              <mesh
                name="Rectangle 8"
                geometry={nodes['Rectangle 8'].geometry}
                material={materials.black}
                castShadow
                receiveShadow
                position={[8.51, 0.05, -0.56]}
                rotation={[Math.PI, 1.31, -Math.PI / 2]}
                scale={0.71}
              />
              <mesh
                name="Rectangle 7"
                geometry={nodes['Rectangle 7'].geometry}
                material={materials.red}
                castShadow
                receiveShadow
                position={[-3.03, 0, 2.55]}
                rotation={[Math.PI, 1.31, -Math.PI / 2]}
                scale={0.71}
              />
            </group>
            <group name="rearview mirror" position={[-179.33, -15.31, 193.43]} scale={1.17}>
              <mesh
                name="Cube 161"
                geometry={nodes['Cube 161'].geometry}
                material={materials.red}
                castShadow
                receiveShadow
                position={[-9.38, -14.1, -24.44]}
                rotation={[0, -0.87, -1.13]}
                scale={0.85}
              />
              <mesh
                name="Rectangle 81"
                geometry={nodes['Rectangle 81'].geometry}
                material={materials.black}
                castShadow
                receiveShadow
                position={[8.51, 0.05, -0.56]}
                rotation={[Math.PI, 1.31, -Math.PI / 2]}
                scale={0.71}
              />
              <mesh
                name="Rectangle 71"
                geometry={nodes['Rectangle 71'].geometry}
                material={materials.red}
                castShadow
                receiveShadow
                position={[-3.03, 0, 2.55]}
                rotation={[Math.PI, 1.31, -Math.PI / 2]}
                scale={0.71}
              />
            </group>
            <mesh
              name="Cube 20"
              geometry={nodes['Cube 20'].geometry}
              material={materials.yellow}
              castShadow
              receiveShadow
              position={[57.39, -30.92, -161.74]}
              rotation={[0, 0, -Math.PI / 2]}
              scale={0.71}
            />
            <mesh
              name="Cube 15"
              geometry={nodes['Cube 15'].geometry}
              material={materials.yellow}
              castShadow
              receiveShadow
              position={[-26.51, -30.92, -161.74]}
              rotation={[0, 0, -Math.PI / 2]}
              scale={0.71}
            />
            <mesh
              name="Cube 201"
              geometry={nodes['Cube 201'].geometry}
              material={materials.yellow}
              castShadow
              receiveShadow
              position={[57.39, -30.92, 163.2]}
              rotation={[0, 0, -Math.PI / 2]}
              scale={0.71}
            />
            <mesh
              name="Cube 13"
              geometry={nodes['Cube 13'].geometry}
              material={materials.yellow}
              castShadow
              receiveShadow
              position={[-26.51, -30.92, 163.2]}
              rotation={[0, 0, -Math.PI / 2]}
              scale={0.71}
            />
          </group>
          <group name="front" position={[-178.86, 48.66, 0.96]} scale={0.5}>
            <mesh
              name="Rectangle 15"
              geometry={nodes['Rectangle 15'].geometry}
              material={materials.white}
              castShadow
              receiveShadow
              position={[-10.61, 17, -129.59]}
              rotation={[Math.PI, -1.4, Math.PI]}
            />
            <mesh
              name="Rectangle 14"
              geometry={nodes['Rectangle 14'].geometry}
              material={materials.white}
              castShadow
              receiveShadow
              position={[-9.56, 17, 126.68]}
              rotation={[0, -1.4, 0]}
              scale={1}
            />
            <mesh
              name="Cube 22"
              geometry={nodes['Cube 22'].geometry}
              material={nodes['Cube 22'].material}
              castShadow
              receiveShadow
              position={[7.36, 18.89, -0.85]}
              rotation={[0, -Math.PI / 2, 0]}
            />
            <mesh
              name="Cube 19"
              geometry={nodes['Cube 19'].geometry}
              material={materials.yellow}
              castShadow
              receiveShadow
              position={[-32.05, -30.95, 0.05]}
              rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
            />
            <mesh
              name="Shape"
              geometry={nodes.Shape.geometry}
              material={materials.black}
              castShadow
              receiveShadow
              position={[4.14, -50.92, -159.88]}
              rotation={[-Math.PI / 2, 0, 0]}
            />
            <mesh
              name="Cube 23"
              geometry={nodes['Cube 23'].geometry}
              material={materials.black}
              castShadow
              receiveShadow
              position={[-11.28, 17.06, -54.33]}
              rotation={[Math.PI / 2, -Math.PI / 2, 0]}
            />
            <mesh
              name="Cube 18"
              geometry={nodes['Cube 18'].geometry}
              material={materials.black}
              castShadow
              receiveShadow
              position={[-12.37, -2.94, 0.05]}
              rotation={[0, -Math.PI / 2, 0]}
            />
          </group>
          <group name="wheels" position={[5.3, 24.26, 0.99]} scale={0.5}>
            <group name="wheel Instance 2" position={[193.29, 6.9, -157.49]} scale={0.71}>
              <mesh
                name="Cylinder"
                geometry={nodes.Cylinder.geometry}
                material={materials.yellow}
                castShadow
                receiveShadow
                position={[-0.53, -9.84, -5.09]}
                rotation={[Math.PI / 2, 0, 0]}
              />
              <mesh
                name="Cylinder1"
                geometry={nodes.Cylinder1.geometry}
                material={materials.red}
                castShadow
                receiveShadow
                position={[0.78, -9.72, -5.61]}
                rotation={[Math.PI / 2, Math.PI / 2, 0]}
              />
              <mesh
                name="Torus"
                geometry={nodes.Torus.geometry}
                material={materials.black}
                castShadow
                receiveShadow
                position={[0, -10.03, -5.61]}
              />
            </group>
            <group name="wheel Instance" position={[-194.39, 6.9, -157.49]} scale={0.71}>
              <mesh
                name="Cylinder2"
                geometry={nodes.Cylinder2.geometry}
                material={materials.yellow}
                castShadow
                receiveShadow
                position={[-0.53, -9.84, -5.09]}
                rotation={[Math.PI / 2, 0, 0]}
              />
              <mesh
                name="Cylinder3"
                geometry={nodes.Cylinder3.geometry}
                material={materials.red}
                castShadow
                receiveShadow
                position={[0.78, -9.72, -5.61]}
                rotation={[Math.PI / 2, Math.PI / 2, 0]}
              />
              <mesh
                name="Torus1"
                geometry={nodes.Torus1.geometry}
                material={materials.black}
                castShadow
                receiveShadow
                position={[0, -10.03, -5.61]}
              />
            </group>
            <group name="wheel Instance 21" position={[193.29, 6.9, 165.46]} scale={0.71}>
              <mesh
                name="Cylinder4"
                geometry={nodes.Cylinder4.geometry}
                material={materials.yellow}
                castShadow
                receiveShadow
                position={[-0.53, -9.84, -5.09]}
                rotation={[Math.PI / 2, 0, 0]}
              />
              <mesh
                name="Cylinder5"
                geometry={nodes.Cylinder5.geometry}
                material={materials.red}
                castShadow
                receiveShadow
                position={[0.78, -9.72, -5.61]}
                rotation={[Math.PI / 2, Math.PI / 2, 0]}
              />
              <mesh
                name="Torus2"
                geometry={nodes.Torus2.geometry}
                material={materials.black}
                castShadow
                receiveShadow
                position={[0, -10.03, -5.61]}
              />
            </group>
            <group name="wheel" position={[-194.39, 6.9, 165.46]} scale={0.71}>
              <mesh
                name="Cylinder6"
                geometry={nodes.Cylinder6.geometry}
                material={materials.yellow}
                castShadow
                receiveShadow
                position={[-0.53, -9.84, -5.09]}
                rotation={[Math.PI / 2, 0, 0]}
              />
              <mesh
                name="Cylinder7"
                geometry={nodes.Cylinder7.geometry}
                material={materials.red}
                castShadow
                receiveShadow
                position={[0.78, -9.72, -5.61]}
                rotation={[Math.PI / 2, Math.PI / 2, 0]}
              />
              <mesh
                name="Torus3"
                geometry={nodes.Torus3.geometry}
                material={materials.black}
                castShadow
                receiveShadow
                position={[0, -10.03, -5.61]}
              />
            </group>
          </group>
        </group>
        <directionalLight
          name="Directional Light"
          castShadow
          intensity={0.7}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-near={-10000}
          shadow-camera-far={100000}
          shadow-camera-left={-500}
          shadow-camera-right={500}
          shadow-camera-top={500}
          shadow-camera-bottom={-500}
          position={[-559.7, 300, -8.87]}
        />
        <OrthographicCamera
          name="1"
          makeDefault={true}
          zoom={0.6}
          far={100000}
          near={-100000}
          position={[0, 200,700]}
          rotation={[0,0,0]}
        />
        <hemisphereLight name="Default Ambient Light" intensity={0.75} color="#eaeaea" />
      </group>
    </>
  )
}
