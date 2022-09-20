import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from "three";
import {   OrbitControls } from '@react-three/drei';


const Sphere = () => {

    const sphereRef = useRef();

    useFrame(() => {
        sphereRef.current.rotation.x += 0.01;
        sphereRef.current.rotation.y += 0.01;
    })

    return (
        <mesh ref={sphereRef} castShadow receiveShadow>
            <sphereBufferGeometry args={[1, 32, 16]} />
            <meshStandardMaterial color={"#C5AB6E"} />
        </mesh>
    )

}

const Torus = () => {

    const torusRef = useRef();

    useFrame(() => {
        torusRef.current.rotation.y += 0.01
        torusRef.current.rotation.x += 0.01
    })

    return (
        <group ref={torusRef}>
            <mesh castShadow receiveShadow position={[0, 0, 0]} >
                <torusBufferGeometry args={[1.5,0.1,2,200]} />
                <meshStandardMaterial color={"#C5AB6E"} />
            </mesh>
        </group>
    )

}

const Ground = () => {
    const groundRef = useRef();

    return (
        <mesh ref={groundRef} rotation={[Math.PI * -0.5,0,0]} 
        position={[0,-3,0]}
        receiveShadow 
        >
            <planeBufferGeometry args={[15,15]} />
            <meshStandardMaterial color={"#eeeeee"} />
        </mesh>
    )
}


export default function ShadowMaterial() {
    return (
        <div style={{ width: window.innerWidth, height: window.innerHeight }}>
            <Canvas shadows={{ type: THREE.VSMShadowMap }}>
                <directionalLight
                    position={[0, 5, 5]}
                    castShadow
                    shadow-mapSize-height={1024}
                    shadow-mapSize-width={1024}
                    shadow-radius={10}
                    shadow-bias={-0.0001}
                />
                <Sphere />
                <Torus />
                <Ground />
                <OrbitControls />
            </Canvas>
        </div>
    );
};