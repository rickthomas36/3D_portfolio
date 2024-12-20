import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';


const Computers = ( isMobile ) => {
  const computer = useGLTF('./desktop_pc/scene.gltf')

  return (
    <mesh>
      <hemisphereLight intensity={1.0} groundColor='black' />
      <pointLight 
        intensity={2.0} // Increased intensity 
        position={[0, 20, 10]} // Position closer to the model
      />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.3} // Widened angle for more coverage
        penumbra={0.5} // Softer edges
        intensity={4} // Increased intensity
        castShadow
        shadow-mapSize={2048} // Improved shadow resolution
      />
      <directionalLight 
        position={[10, 10, 10]} 
        intensity={2} 
        castShadow 
      />
      <primitive 
      object={computer.scene} 
      scale={isMobile ? 0.14 : 0.75} 
      position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]} 
      rotation={[0.20, -0.2, -0.0]} 
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: 500px)`);

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);



  return (
    <Canvas 
      frameLoop="demand" 
      shadows 
      camera={{position: [20, 3, 5], fov: 25}}
      gl={{ preserveDrawingBuffer: true}}
  >
    <Suspense fallback={<CanvasLoader />}>
      <OrbitControls 
        enableZoom={false} 
        maxPolarAngle={Math.PI / 2} 
        minPolarAngle={Math.PI / 2} 
      />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas