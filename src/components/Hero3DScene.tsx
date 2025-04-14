
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, Float, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

function Model({ position = [0, 0, 0], rotation = [0, 0, 0] }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  // Animate the model
  useFrame((state) => {
    if (!meshRef.current) return;
    
    // Gentle floating animation
    meshRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.2 + rotation[1];
    meshRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1 + position[1];
  });

  return (
    <group position={position} rotation={rotation}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh ref={meshRef} castShadow receiveShadow>
          <icosahedronGeometry args={[1.5, 2]} />
          <meshStandardMaterial
            color="#ea384c"
            roughness={0.3}
            metalness={0.7}
            emissive="#ea384c"
            emissiveIntensity={0.2}
          />
        </mesh>
      </Float>
    </group>
  );
}

function SmallSpheres() {
  const group = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y = state.clock.getElapsedTime() * 0.1;
  });
  
  return (
    <group ref={group}>
      {Array.from({ length: 15 }).map((_, i) => {
        const angle = (i / 15) * Math.PI * 2;
        const radius = 3 + Math.random() * 1;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        const y = (Math.random() - 0.5) * 2;
        const scale = 0.05 + Math.random() * 0.15;
        
        return (
          <Float key={i} speed={2 + Math.random()} rotationIntensity={0.5} floatIntensity={2}>
            <mesh position={[x, y, z]} scale={scale}>
              <sphereGeometry args={[1, 16, 16]} />
              <meshStandardMaterial 
                color={i % 2 === 0 ? "#F97316" : "#FDE1D3"} 
                emissive={i % 2 === 0 ? "#F97316" : "#FDE1D3"}
                emissiveIntensity={0.4}
                roughness={0.2}
              />
            </mesh>
          </Float>
        );
      })}
    </group>
  );
}

const Hero3DScene: React.FC = () => {
  return (
    <div className="h-full w-full">
      <Canvas dpr={[1, 2]} shadows>
        <PerspectiveCamera makeDefault position={[0, 0, 7]} fov={45} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        <Model position={[0, 0, 0]} rotation={[0, 0, 0]} />
        <SmallSpheres />
        
        <Environment preset="city" />
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 2.5}
          maxPolarAngle={Math.PI / 1.5}
          rotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};

export default Hero3DScene;
