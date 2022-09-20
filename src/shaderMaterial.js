import * as THREE from "three";
import React, { useRef, Suspense } from 'react';
import { Canvas, extend, useFrame , useLoader} from '@react-three/fiber';
import { shaderMaterial , OrbitControls } from '@react-three/drei';
import glsl from 'babel-plugin-glsl/macro';

const WaveShaderMaterial = shaderMaterial(
    { uTime: 0, uColor: new THREE.Color(1.0, 0.0, 0.0) ,uTexture: new THREE.Texture()},

    glsl`
    precision mediump float;
 
    varying vec2 vUv;
    varying float vWave;

    uniform float uTime;

    #pragma glslify: snoise3 = require(glsl-noise/simplex/3d.glsl);

    void main() {
      vUv = uv;

      vec3 pos = position;
      float noiseFreq = 2.0;
      float noiseAmp = 0.4;
      vec3 noisePos = vec3(pos.x * noiseFreq + uTime, pos.y, pos.z);
      pos.z += snoise3(noisePos) * noiseAmp;
      vWave = pos.z;

      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);  
    }
    `,

    glsl`
    precision mediump float;

    uniform vec3 uColor;
    uniform float uTime;
    uniform sampler2D uTexture;

    varying vec2 vUv;
    varying float vWave;

    void main() {
      float wave = vWave * 0.2;
      vec3 texture = texture2D(uTexture, vUv + wave).rgb;
      gl_FragColor = vec4(texture, 1.0); 
    }
    `,
)

extend({ WaveShaderMaterial })



const Wave = () => {
    const ref = useRef();
  useFrame(({ clock }) => (ref.current.uTime = clock.getElapsedTime()));
  const [image] = useLoader(THREE.TextureLoader, [
    "https://upload.wikimedia.org/wikipedia/commons/3/37/Flag_India.svg"
  ]);
    return (
        <mesh>
            <planeBufferGeometry  castShadow receiveShadow args={[0.6, 0.4, 16, 16]} />
            <waveShaderMaterial uColor={"hotpink"} ref={ref} uTexture={image} />
        </mesh>
    )
}

export default function ShaderMaterial() {
    return (
        <div style={{ width: window.innerWidth, height: window.innerHeight }}>
            <Canvas shadowMap camera={{ fov: 12, position: [0, 0, 5] }}>
            <OrbitControls makeDefault />
                {/* <pointLight position={[10, 10, 10]} /> */}
                <Suspense fallback={null}>
                    <Wave />
                </Suspense>
            </Canvas>
        </div>
    );
};