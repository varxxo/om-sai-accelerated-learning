
import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html, useCursor } from '@react-three/drei';
import * as THREE from 'three';

interface StudentModelProps {
  position?: [number, number, number];
  scale?: number | [number, number, number];
  [key: string]: any;
}

const StudentModel = ({ position = [0, 0, 0] as [number, number, number], ...props }: StudentModelProps) => {
  const meshRef = useRef<THREE.Group>();
  const [hovered, setHovered] = useState(false);
  const [waving, setWaving] = useState(false);
  
  useCursor(hovered);
  
  useFrame((state) => {
    if (!meshRef.current) return;
    
    const mouseX = (state.mouse.x * Math.PI) / 10;
    const mouseY = (state.mouse.y * Math.PI) / 10;
    
    meshRef.current.rotation.y = THREE.MathUtils.lerp(
      meshRef.current.rotation.y,
      mouseX + Math.PI,
      0.05
    );
    
    meshRef.current.rotation.x = THREE.MathUtils.lerp(
      meshRef.current.rotation.x,
      -mouseY / 2,
      0.05
    );
    
    meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    
    if (waving && meshRef.current.children.length > 1) {
      const hand = meshRef.current.children[1];
      if (hand) {
        hand.rotation.z = Math.sin(state.clock.elapsedTime * 5) * 0.2;
      }
    }
  });

  return (
    <group
      ref={meshRef}
      position={position}
      onPointerEnter={() => {
        setHovered(true);
        setWaving(true);
      }}
      onPointerLeave={() => {
        setHovered(false);
        setTimeout(() => setWaving(false), 1000);
      }}
      {...props}
    >
      <mesh castShadow receiveShadow>
        <capsuleGeometry args={[0.5, 1, 8, 16]} />
        <meshStandardMaterial color="#3498db" />
      </mesh>
      
      <group position={[0.6, 0.2, 0] as [number, number, number]}>
        <mesh castShadow>
          <boxGeometry args={[0.1, 0.4, 0.1]} />
          <meshStandardMaterial color="#f39c12" />
        </mesh>
      </group>
      
      <mesh position={[0, 0.9, 0] as [number, number, number]} castShadow>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial color="#f39c12" />
      </mesh>
      
      <mesh position={[0, 0.9, 0.2] as [number, number, number]} castShadow>
        <boxGeometry args={[0.5, 0.1, 0.05]} />
        <meshStandardMaterial color="#222" />
      </mesh>
      
      {hovered && (
        <group position={[0, 1.5, 0] as [number, number, number]} scale={[0.5, 0.5, 0.5] as [number, number, number]}>
          <mesh castShadow>
            <cylinderGeometry args={[0.3, 0.2, 0.5, 32]} />
            <meshStandardMaterial color="#FFD700" metalness={0.8} roughness={0.2} />
          </mesh>
          <mesh position={[0, 0.3, 0] as [number, number, number]} castShadow>
            <sphereGeometry args={[0.3, 32, 32]} />
            <meshStandardMaterial color="#FFD700" metalness={0.8} roughness={0.2} />
          </mesh>
          <mesh position={[0, -0.4, 0] as [number, number, number]} castShadow>
            <boxGeometry args={[0.4, 0.3, 0.4]} />
            <meshStandardMaterial color="#8B4513" />
          </mesh>
          <Html position={[0, 0, 0.5] as [number, number, number]} center>
            <div className="bg-white/80 backdrop-blur-sm px-3 py-1 rounded-lg shadow-md whitespace-nowrap">
              <p className="text-sm font-bold text-academy-orange">Top Student!</p>
            </div>
          </Html>
        </group>
      )}
    </group>
  );
};

export default StudentModel;
