import { useRef, useState, React } from 'react';
import { Canvas, useFrame , useThree ,useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import * as THREE from 'three'



function Environment() {
    const { scene } = useThree()
    const texture = useLoader(THREE.TextureLoader, 'movie.jpg')
    // texture.mapping = THREE.EquirectangularReflectionMapping
    scene.background = texture
    return null
  }


function Box(props) {

    
    const ref = useRef()
    
    // const [Hover, setHover] = useState(false);
    const [Click, setClick] = useState(false);

    useFrame((state, delta) => (ref.current.rotation.x += 0.011))
    const a = props.props;
    
    // if(props.props===1)
    let texture_1=0;
    // if(props.props===1
    texture_1 = useLoader(TextureLoader, ('textures/imageonline/'+a+'.jpg'))
    
    

    // else
    // texture_1 = useLoader(TextureLoader, ('textures/'+2+'.jpeg'))
    
    


    return (
        <mesh
            {...props}
            ref={ref}
            scale={Click ? 1.5 : 1}
            onClick={(event) => setClick(!Click)}
            // onPointerOver={(event) => setHover(true)}
            // onPointerOut={(event) => setHover(false)}
        >
            <boxBufferGeometry attach="geometry" args={[1, 1, 1]}  />
            <meshStandardMaterial map={texture_1} attach="material" /> 
        </mesh>
    )


}


export default function RotateModel() {
    return (

        <div style={{ width: window.innerWidth, height: window.innerHeight }}>
            <Canvas  >
                <Environment />
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                <pointLight position={[-10, -10, -10]} />
                <Box position={[1, 1, 0]}  props={7} />
                <Box position={[0, 1, 0]}  props={4} />
                <Box position={[-1, 1, 0]} props={1} />
                <Box position={[1, 0, 0]}  props={8} />
                <Box position={[0, 0, 0]}  props={5} />
                <Box position={[-1, 0, 0]} props={2} />
                <Box position={[1, -1, 0]} props={9} />
                <Box position={[0, -1, 0]} props={6} />
                <Box position={[-1, -1, 0]}props={3} />
            </Canvas>
        </div>
    );

};