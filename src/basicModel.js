import React from 'react';
// import ReactDOM from 'react-dom'
import { Canvas } from '@react-three/fiber';


export default function BasicModel() {
    return (
      <Canvas>
        <ambientLight intensity={0.1}/>
        <directionalLight color="silver" position={[0,0,5]} />
        <mesh>
            <boxGeometry args={[2,2,2]} />
            <meshStandardMaterial />
        </mesh>
      </Canvas>  
    );
};