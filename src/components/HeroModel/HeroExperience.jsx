import { Environment, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Room } from './Room';
import { useMediaQuery } from 'react-responsive';
import HeroLights from './HeroLights';
import Particles from './Particles';
import { Model } from './Human_eye_v2';
import { Suspense } from 'react';

const HeroExperience = () => {
    const isTablet = useMediaQuery({ query: 'max-width:1024px' });
    const isMobile = useMediaQuery({ query: 'max-width:768px' });
    return (
//         <Canvas camera={{ position: [-2, 0, 10], fov: 30 }}>
//             <OrbitControls enablePan={false} enableZoom={!isTablet} maxDistance={[20]} minDistance={[20]} minPolarAngle={Math.PI / 5} maxPolarAngle={Math.PI / 2} />
//             <HeroLights />
//             <Particles count={100} />
//             <group scale={isMobile ? 0.7 : 1} position={[0, -3.5, 0]} rotation={[0, -Math.PI / 4, 0]}>


//                 {/* to render glb file you need to convert into jsx file
//   firstly get into the models directory using cd ./public/model
//   then run command public\models> npx gltfjsx optimized-room.glb   */}
//                 <Room />

//             </group>
//         </Canvas>


        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
      {/* Background */}
      <color attach="background" args={["#111"]} />

      {/* Lighting */}
      <ambientLight intensity={0.6} />

      <directionalLight
        position={[5, 5, 5]}
        intensity={2}
        castShadow
      />

      <pointLight position={[-5, -5, 5]} intensity={1.5} />

      {/* Environment lighting for PBR textures */}
      <Environment preset="studio" />
      <Suspense fallback={null}>
        <Model scale={20} />
      </Suspense>

      <OrbitControls />
      <Environment preset="studio" />
    </Canvas>



    )
}

export default HeroExperience