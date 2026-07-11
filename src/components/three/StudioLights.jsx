import { Environment, Lightformer } from '@react-three/drei'
import React from 'react'

function StudioLights() {
  return (
    <group name='lights'>
        <Environment resolution={256}>
            <group>
                <Lightformer
                     form={"rect"}
                scale={10}
                position={[-10, 0,0]}
                intensity={10}
                rotation={Math.PI/2}
               / >
                <Lightformer
                     form={"rect"}
                scale={10}
                position={[10, 0, 1]}
                intensity={10}
                rotation={Math.PI/2}
               / >

             

            </group>
        </Environment>
        <spotLight 
        position={[2, 10, 5]}
        angle={0.15}
        decay={0.1}
        intensity={Math.PI/2}
        />
        <spotLight 
        position={[0, -25, 10]}
        angle={0.15}
        decay={0.1}
        intensity={Math.PI/2}
        />
        <spotLight 
        position={[0, 15, 10]}
        angle={0.15}
        decay={0.1}
        intensity={Math.PI/2}
        />
    </group>
  )
}

export default StudioLights