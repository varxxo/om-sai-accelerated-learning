
import React, { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Float, Html } from '@react-three/drei';
import * as THREE from 'three';
import StudentModel from './StudentModel';

const StudentGroup = () => {
  const groupRef = useRef<THREE.Group>();
  const { viewport } = useThree();
  const isMobile = viewport.width < 5;
  
  useFrame((state) => {
    if (!groupRef.current) return;
    
    const mouseX = (state.mouse.x * Math.PI) / 20;
    const mouseY = (state.mouse.y * Math.PI) / 20;
    
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      mouseX,
      0.1
    );
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      mouseY,
      0.1
    );
  });
  
  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
        <StudentModel position={[0, 0, 0] as [number, number, number]} scale={isMobile ? 0.8 : 1} />
        <StudentModel position={[-1.5, 0, -0.5] as [number, number, number]} scale={isMobile ? 0.7 : 0.9} />
        <StudentModel position={[1.5, 0, -0.5] as [number, number, number]} scale={isMobile ? 0.7 : 0.9} />
        
        <mesh position={[0, -1, -1] as [number, number, number]} receiveShadow rotation={[-Math.PI / 2, 0, 0] as [number, number, number]}>
          <planeGeometry args={[5, 5]} />
          <meshStandardMaterial color="#f5f5f5" />
        </mesh>
        
        <mesh position={[0, 0.5, -2] as [number, number, number]} receiveShadow>
          <boxGeometry args={[3, 1.5, 0.1]} />
          <meshStandardMaterial color="#2c3e50" />
        </mesh>
        
        <mesh position={[0, 0.5, -1.95] as [number, number, number]}>
          <planeGeometry args={[2.8, 1.3]} />
          <meshBasicMaterial color="#2c3e50" />
          <Html position={[0, 0, 0.1] as [number, number, number]} center transform>
            <div className="text-white text-center" style={{ width: '300px' }}>
              <h3 className="text-xl font-bold">OM SAI</h3>
              <p className="text-sm">EDUCATIONAL ACADEMY</p>
            </div>
          </Html>
        </mesh>
        
        <mesh position={[-1, -0.8, 0] as [number, number, number]} rotation={[0, Math.PI / 6, 0] as [number, number, number]}>
          <boxGeometry args={[0.4, 0.1, 0.3]} />
          <meshStandardMaterial color="#e74c3c" />
        </mesh>
        <mesh position={[1, -0.8, 0] as [number, number, number]} rotation={[0, -Math.PI / 6, 0] as [number, number, number]}>
          <boxGeometry args={[0.4, 0.15, 0.3]} />
          <meshStandardMaterial color="#3498db" />
        </mesh>
      </Float>
    </group>
  );
};

export default StudentGroup;
