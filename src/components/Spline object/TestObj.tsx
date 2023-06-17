'use client'
/*
  Auto-generated by Spline
*/

import useSpline from '@splinetool/r3f-spline'
import { OrthographicCamera } from '@react-three/drei'
import { useEffect, useState } from 'react'
import useThemeStore from 'store/Theme'

export default function Scene({ ...props }) {
  const { nodes, materials } = useSpline('https://prod.spline.design/cESBr78ac2rKifS2/scene.splinecode')
  const [rotateX,setRotateX]= useState(0);
  const theme = useThemeStore((state)=>state.theme);

   useEffect(()=>{
        setRotateX((prev:any)=>{
            let fornow = prev;
            if (fornow > 360) fornow -=360;
            return fornow+0.0001;
        })
   },[rotateX,setRotateX])

  return (
    <>
      <color attach="background" args={[theme==='light' ? '#F0E7DB' : '#202023']} />
      <group {...props} dispose={null}>
        <OrthographicCamera
          name="Camera"
          makeDefault={true}
          zoom={0.15}
          far={100000}
          near={-100000}
          up={[0, 1, 0]}
          position={[-59.2, 157.02, -488.34]}
          rotation={[-2.41, -0.16, -3]}
          scale={1}
        />
        <group name="Main" rotation={[-Math.PI, rotateX, -Math.PI]}>
          <group
            name="Sphere Clones"
            position={[48.08, 26.39, 72.74]}
            rotation={[-Math.PI / 2, 0, -1.57]}
            scale={0.1}
          />
          <group name="Ring" rotation={[-Math.PI, 0, -Math.PI]} scale={3}>
            <group name="Stands" position={[16.22, -16, 480.83]} scale={0.33}>
              <mesh
                name="Cube 2"
                geometry={nodes['Cube 2'].geometry}
                material={materials.neck}
                castShadow
                receiveShadow
                position={[-1383.75, 0, 2.5]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[0.6, 0.6, 1]}
              />
              <mesh
                name="Cube"
                geometry={nodes.Cube.geometry}
                material={materials.neck}
                castShadow
                receiveShadow
                position={[1389.29, 0, -2.5]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[0.6, 0.6, 1]}
              />
            </group>
            <group name="Strings" position={[16.1, 3.32, 0]} scale={0.29}>
              <mesh
                name="Sphere 4"
                geometry={nodes['Sphere 4'].geometry}
                material={materials.mouth}
                castShadow
                receiveShadow
                position={[-1413.78, 2.33, 1456.68]}
                rotation={[Math.PI, -0.79, -Math.PI / 2]}
                scale={0.55}
              />
              <mesh
                name="Sphere 3"
                geometry={nodes['Sphere 3'].geometry}
                material={materials.mouth}
                castShadow
                receiveShadow
                position={[-1417.32, 2.33, -1461.89]}
                rotation={[Math.PI, 0.78, -Math.PI / 2]}
                scale={0.55}
              />
              <mesh
                name="Sphere 2"
                geometry={nodes['Sphere 2'].geometry}
                material={materials.mouth}
                castShadow
                receiveShadow
                position={[1423.64, 2.33, -1452.79]}
                rotation={[0, 0.79, Math.PI / 2]}
                scale={0.55}
              />
              <mesh
                name="Sphere"
                geometry={nodes.Sphere.geometry}
                material={materials.mouth}
                castShadow
                receiveShadow
                position={[1416.76, 2.33, 1472.12]}
                rotation={[0, -0.78, Math.PI / 2]}
                scale={0.55}
              />
              <mesh
                name="Cube 4"
                geometry={nodes['Cube 4'].geometry}
                material={materials.laptop}
                castShadow
                position={[3.47, 0, 1472.25]}
                rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                scale={[-0.06, 1, 0.06]}
              />
              <mesh
                name="Cube 3"
                geometry={nodes['Cube 3'].geometry}
                material={materials.laptop}
                castShadow
                position={[3.47, 0, -1472.25]}
                rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                scale={[-0.06, 1, 0.06]}
              />
              <mesh
                name="Cube 21"
                geometry={nodes['Cube 21'].geometry}
                material={materials.laptop}
                castShadow
                position={[1423.94, 0, 0]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[-0.06, 1, 0.06]}
              />
              <mesh
                name="Stand_Connector 3"
                geometry={nodes['Stand_Connector 3'].geometry}
                material={materials.eyes}
                castShadow
                receiveShadow
                position={[-1504, -1.08, -1546.28]}
                rotation={[-Math.PI, Math.PI / 4, 0]}
                scale={[0.57, 0.11, 0.06]}
              />
              <mesh
                name="Stand_Connector 5"
                geometry={nodes['Stand_Connector 5'].geometry}
                material={materials.eyes}
                castShadow
                receiveShadow
                position={[1507, -1.08, -1546.28]}
                rotation={[-Math.PI, -Math.PI / 4, 0]}
                scale={[0.57, 0.11, 0.06]}
              />
              <mesh
                name="Stand_Connector 4"
                geometry={nodes['Stand_Connector 4'].geometry}
                material={materials.eyes}
                castShadow
                receiveShadow
                position={[-1504, -1.08, 1551.72]}
                rotation={[-Math.PI, -Math.PI / 4, 0]}
                scale={[0.57, 0.11, 0.06]}
              />
              <mesh
                name="Stand_Connector"
                geometry={nodes.Stand_Connector.geometry}
                material={materials.eyes}
                castShadow
                receiveShadow
                position={[1507, -1.08, 1551.72]}
                rotation={[-Math.PI, Math.PI / 4, 0]}
                scale={[0.57, 0.11, 0.06]}
              />
              <mesh
                name="Cube1"
                geometry={nodes.Cube1.geometry}
                material={materials.laptop}
                castShadow
                position={[-1423.94, 0, 0]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[-0.06, 1, 0.06]}
              />
            </group>
          </group>
          <group name="Grogu" position={[0, 0, 0]}>
            <group name="object_cap_01" position={[-7.8, 375.02, 36.12]} scale={[0.5, 0.4, 0.5]}>
              <mesh
                name="body"
                geometry={nodes.body.geometry}
                material={nodes.body.material}
                castShadow
                receiveShadow
                position={[1.05, -20.21, -117.04]}
                scale={4.78}
              />
              <mesh
                name="bill"
                geometry={nodes.bill.geometry}
                material={nodes.bill.material}
                castShadow
                receiveShadow
                position={[0, -124.27, -121.86]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[4.36, 0.11, 4.41]}
              />
              <mesh
                name="centerupball"
                geometry={nodes.centerupball.geometry}
                material={materials.body}
                castShadow
                receiveShadow
                position={[2.73, 201.03, -117.14]}
                scale={[0.5, 0.74, 0.5]}
              />
              <group name="contorns" position={[0, -118.72, -116.98]}>
                <mesh
                  name="contornbase"
                  geometry={nodes.contornbase.geometry}
                  material={materials.body}
                  castShadow
                  receiveShadow
                  position={[0, 2.86, 0]}
                  rotation={[-Math.PI, 0, -Math.PI]}
                  scale={[4.36, 0.11, 4.41]}
                />
                <mesh
                  name="interiorcontorn"
                  geometry={nodes.interiorcontorn.geometry}
                  material={materials.Skin}
                  castShadow
                  receiveShadow
                  position={[0, -3.18, 3.58]}
                  rotation={[-Math.PI, 0, -Math.PI]}
                  scale={[4.13, 0.1, 4.17]}
                />
              </group>
              <group name="eyelets" position={[-0.3, 174.78, -116.76]}>
                <mesh
                  name="eyelet2_right"
                  geometry={nodes.eyelet2_right.geometry}
                  material={materials.body}
                  castShadow
                  receiveShadow
                  position={[-81.46, -0.58, 77.68]}
                  rotation={[-1.29, -0.33, -0.1]}
                  scale={[0.35, 0.35, 0.58]}
                />
                <mesh
                  name="eyelet2_left"
                  geometry={nodes.eyelet2_left.geometry}
                  material={materials.body}
                  castShadow
                  receiveShadow
                  position={[87.1, -2.51, 87.36]}
                  rotation={[-1.24, 0.32, -0.1]}
                  scale={[0.35, 0.35, 0.58]}
                />
                <group name="eyelet1_right" position={[-84.88, 1.18, -85.6]} scale={[-1.1, 1, 1]}>
                  <mesh
                    name="eyelet1_right1"
                    geometry={nodes.eyelet1_right1.geometry}
                    material={materials.body}
                    castShadow
                    receiveShadow
                    position={[0, 0, 0]}
                    rotation={[-1.93, 0.29, 0.17]}
                    scale={[0.35, 0.35, 0.58]}
                  />
                </group>
                <group name="eyelet1_left" position={[84.26, 1.18, -85.6]}>
                  <mesh
                    name="eyelet1_left1"
                    geometry={nodes.eyelet1_left1.geometry}
                    material={materials.body}
                    castShadow
                    receiveShadow
                    position={[0, 0, 0]}
                    rotation={[-1.93, 0.29, 0.17]}
                    scale={[0.35, 0.35, 0.58]}
                  />
                </group>
              </group>
            </group>
            <mesh
              name="Torus"
              geometry={nodes.Torus.geometry}
              material={materials.mouth}
              castShadow
              receiveShadow
              position={[-2.12, 280.12, 152.16]}
              rotation={[0, 0, 2.95]}
              scale={[1.17, 1, 1]}
            />
            <group name="eyes" position={[-1.89, 238.41, 134.79]}>
              <mesh
                name="Sphere 31"
                geometry={nodes['Sphere 31'].geometry}
                material={materials.eyes}
                castShadow
                receiveShadow
                position={[-63.67, 0, 0]}
                rotation={[0, 0, -0.07]}
              />
              <mesh
                name="Sphere 21"
                geometry={nodes['Sphere 21'].geometry}
                material={materials.eyes}
                castShadow
                receiveShadow
                position={[63.33, 0, 0]}
                rotation={[0, 0, 0.09]}
                scale={1}
              />
            </group>
            <group name="Right_Hand 2" position={[-220, -47.39, -7.52]} rotation={[-Math.PI, 0, -Math.PI]}>
              <mesh
                name="Cylinder 6"
                geometry={nodes['Cylinder 6'].geometry}
                material={materials.Skin}
                castShadow
                receiveShadow
                position={[18.07, -20.06, 0]}
                rotation={[0, 0, 0.73]}
                scale={1}
              />
              <mesh
                name="Cylinder 2"
                geometry={nodes['Cylinder 2'].geometry}
                material={materials.body}
                castShadow
                receiveShadow
                position={[0, 0, 0]}
                rotation={[0, 0, 0.73]}
                scale={1}
              />
            </group>
            <group name="Right_Hand" position={[220, -47.39, -7.52]}>
              <mesh
                name="Cylinder 61"
                geometry={nodes['Cylinder 61'].geometry}
                material={materials.Skin}
                castShadow
                receiveShadow
                position={[18.07, -20.06, 0]}
                rotation={[0, 0, 0.73]}
                scale={1}
              />
              <mesh
                name="Cylinder 21"
                geometry={nodes['Cylinder 21'].geometry}
                material={materials.body}
                castShadow
                receiveShadow
                position={[0, 0, 0]}
                rotation={[0, 0, 0.73]}
                scale={1}
              />
            </group>
            <mesh
              name="Cylinder 5"
              geometry={nodes['Cylinder 5'].geometry}
              material={materials.neck}
              castShadow
              receiveShadow
              position={[3.13, 24.18, -3.8]}
            />
            <mesh
              name="Cylinder 4"
              geometry={nodes['Cylinder 4'].geometry}
              material={materials.neck}
              castShadow
              receiveShadow
              position={[3.13, 82.56, -3.8]}
            />
            <mesh
              name="Cylinder"
              geometry={nodes.Cylinder.geometry}
              material={materials.body}
              castShadow
              receiveShadow
              position={[3.13, -125.41, -3.8]}
            />
            <group name="Empty Object" position={[-222, 194.13, -55.73]} scale={[-1, 1, 1]}>
              <mesh
                name="Sphere 32"
                geometry={nodes['Sphere 32'].geometry}
                material={materials.Skin}
                castShadow
                receiveShadow
                position={[-108.6, -41.74, -4.57]}
                rotation={[-0.02, -0.03, 0.42]}
                scale={1}
              />
              <mesh
                name="Sphere 5"
                geometry={nodes['Sphere 5'].geometry}
                material={materials.ears}
                castShadow
                receiveShadow
                position={[-68.21, 13.64, 21.63]}
                rotation={[0.16, 0.06, 0.02]}
                scale={1}
              />
              <mesh
                name="Sphere 41"
                geometry={nodes['Sphere 41'].geometry}
                material={materials.ears}
                castShadow
                receiveShadow
                position={[-27.07, -3.62, 16.28]}
                rotation={[0.16, 0.07, 0.09]}
                scale={1}
              />
              <mesh
                name="Sphere 22"
                geometry={nodes['Sphere 22'].geometry}
                material={materials.Skin}
                castShadow
                receiveShadow
                position={[69.14, -18.93, -4.98]}
                rotation={[-0.03, -0.02, 0.1]}
                scale={1}
              />
              <mesh
                name="Cone"
                geometry={nodes.Cone.geometry}
                material={materials.Skin}
                castShadow
                receiveShadow
                position={[28.64, 10.98, -2.73]}
                rotation={[0, 0, -1.66]}
                scale={1}
              />
            </group>
            <group name="Ears" position={[222, 192.16, -55.95]}>
              <mesh
                name="Sphere 33"
                geometry={nodes['Sphere 33'].geometry}
                material={materials.Skin}
                castShadow
                receiveShadow
                position={[-108.6, -41.74, -4.57]}
                rotation={[-0.02, -0.03, 0.42]}
                scale={1}
              />
              <mesh
                name="Sphere 51"
                geometry={nodes['Sphere 51'].geometry}
                material={materials.ears}
                castShadow
                receiveShadow
                position={[-68.21, 13.64, 21.63]}
                rotation={[0.16, 0.06, 0.02]}
                scale={1}
              />
              <mesh
                name="Sphere 42"
                geometry={nodes['Sphere 42'].geometry}
                material={materials.ears}
                castShadow
                receiveShadow
                position={[-27.07, -3.62, 16.28]}
                rotation={[0.16, 0.07, 0.09]}
                scale={1}
              />
              <mesh
                name="Sphere 23"
                geometry={nodes['Sphere 23'].geometry}
                material={materials.Skin}
                castShadow
                receiveShadow
                position={[69.14, -18.93, -4.98]}
                rotation={[-0.03, -0.02, 0.1]}
                scale={1}
              />
              <mesh
                name="Cone1"
                geometry={nodes.Cone1.geometry}
                material={materials.Skin}
                castShadow
                receiveShadow
                position={[28.64, 10.98, -2.73]}
                rotation={[0, 0, -1.66]}
                scale={1}
              />
            </group>
            <mesh
              name="Sphere1"
              geometry={nodes.Sphere1.geometry}
              material={materials.Skin}
              castShadow
              receiveShadow
              position={[-4.3, 201.91, -25.03]}
            />
          </group>
          <directionalLight
            name="Default Directional Light"
            intensity={1}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-near={-10000}
            shadow-camera-far={100000}
            shadow-camera-left={-1573.0765}
            shadow-camera-right={1573.0765}
            shadow-camera-top={1573.0765}
            shadow-camera-bottom={-1573.0765}
            position={[-6.85, 4654.87, -8.85]}
            rotation={[-2.99, 0.9, 3.03]}
            scale={[1.88, 1, 1]}
          />
          <directionalLight
            name="Directional Light"
            intensity={1}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-near={-10000}
            shadow-camera-far={100000}
            shadow-camera-left={-1509.615}
            shadow-camera-right={1509.615}
            shadow-camera-top={1509.615}
            shadow-camera-bottom={-1509.615}
            color="#ffffff"
            position={[3497.16, 7067.29, 5158.3]}
            rotation={[Math.PI, 0, Math.PI]}
          />
             <directionalLight
            name="Directional Light"
            intensity={1}
            color='ffffff'
            position={[0, 4654.87, 0]}
            rotation={[0,0,0]}
            scale={[1.88, 1, 1]}
          />
          <mesh
            name="Floor"
            geometry={nodes.Floor.geometry}
            material={materials.mouth}
            receiveShadow
            position={[-13.86, -356.67, 11.05]}
            rotation={[-Math.PI / 2, 0, Math.PI]}
            scale={3.3}
          />
        </group>
        <hemisphereLight name="Default Ambient Light" intensity={1} color="#feebd8" />
      </group>
    </>
  )
}
