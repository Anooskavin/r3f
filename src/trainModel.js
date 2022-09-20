import {  React } from 'react';
import { Canvas   } from '@react-three/fiber';
import { OrbitControls ,useMatcapTexture} from "@react-three/drei";



// function CameraController() {

//     const {camera , gl} = useThree();

//     useEffect(
//         () => {
//             const controls = new OrbitControls(camera, gl.domElement)
//             controls.minDistance = 3;
//             controls.maxDistance = 20;
//             return () => {
//                 controls.dispose();
//             }
//         },
//         [camera,gl]
//     )
//     return null;
// }

function Plane() {

    // const [matcat] = useMatcapTexture('textures/040full.exr')
    const [matcap] = useMatcapTexture("3E2335_D36A1B_8E4A2E_2842A5")
    return (
        <mesh>
            <planeGeometry args={[5,5,5]} />
            {/* <meshStandardMaterial color={"Silver"} /> */}
            <meshMatcapMaterial  matcap={matcap} />
        </mesh>
    )
    
}

export default function  TrainModel() {
    return (
        <div style={{ width: window.innerWidth, height: window.innerHeight }}>
            <Canvas >
                <color args={["lightseagreen"]} attach="background" />
                <OrbitControls makeDefault />
                {/* <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                <pointLight position={[-10, -10, -10]} /> */}
                <Plane />
            </Canvas>
        </div>
      );
}
;