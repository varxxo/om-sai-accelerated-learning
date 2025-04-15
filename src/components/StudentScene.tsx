
import React, { useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF, Environment, Float, PerspectiveCamera, useCursor, Html } from '@react-three/drei';
import * as THREE from 'three';

function StudentModel({ position = [0, 0, 0], ...props }) {
  const meshRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  const [waving, setWaving] = useState(false);
  
  useCursor(hovered);
  
  // Animate the model
  useFrame((state) => {
    if (!meshRef.current) return;
    
    // Base rotation following mouse
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
    
    // Floating movement
    meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    
    // Waving animation
    if (waving) {
      // Simulate waving hand by rotating a child group
      const hand = meshRef.current.children[1];
      if (hand) {
        hand.rotation.z = Math.sin(state.clock.elapsedTime * 5) * 0.2;
      }
    }
  });

  return (
    <group
      ref={meshRef}
      position={position as any}
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
      {/* Student Body */}
      <mesh castShadow receiveShadow>
        <capsuleGeometry args={[0.5, 1, 8, 16]} />
        <meshStandardMaterial color="#3498db" />
      </mesh>
      
      {/* Student Hand (for waving) */}
      <group position={[0.6, 0.2, 0]}>
        <mesh castShadow>
          <boxGeometry args={[0.1, 0.4, 0.1]} />
          <meshStandardMaterial color="#f39c12" />
        </mesh>
      </group>
      
      {/* Student Head */}
      <mesh position={[0, 0.9, 0]} castShadow>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial color="#f39c12" />
      </mesh>
      
      {/* Glasses */}
      <mesh position={[0, 0.9, 0.2]} castShadow>
        <boxGeometry args={[0.5, 0.1, 0.05]} />
        <meshStandardMaterial color="#222" />
      </mesh>
      
      {/* Trophy - only visible when hovered */}
      {hovered && (
        <group position={[0, 1.5, 0]} scale={[0.5, 0.5, 0.5]}>
          <mesh castShadow>
            <cylinderGeometry args={[0.3, 0.2, 0.5, 32]} />
            <meshStandardMaterial color="#FFD700" metalness={0.8} roughness={0.2} />
          </mesh>
          <mesh position={[0, 0.3, 0]} castShadow>
            <sphereGeometry args={[0.3, 32, 32]} />
            <meshStandardMaterial color="#FFD700" metalness={0.8} roughness={0.2} />
          </mesh>
          <mesh position={[0, -0.4, 0]} castShadow>
            <boxGeometry args={[0.4, 0.3, 0.4]} />
            <meshStandardMaterial color="#8B4513" />
          </mesh>
          <Html position={[0, 0, 0.5]} center>
            <div className="bg-white/80 backdrop-blur-sm px-3 py-1 rounded-lg shadow-md whitespace-nowrap">
              <p className="text-sm font-bold text-academy-orange">Top Student!</p>
            </div>
          </Html>
        </group>
      )}
    </group>
  );
}

function StudentGroup() {
  const groupRef = useRef<THREE.Group>(null);
  const { viewport } = useThree();
  const isMobile = viewport.width < 5; // Adjust based on viewport width
  
  useFrame((state) => {
    if (!groupRef.current) return;
    
    // Rotate the entire group based on mouse position
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
        <StudentModel position={[0, 0, 0]} scale={isMobile ? 0.8 : 1} />
        <StudentModel position={[-1.5, 0, -0.5]} scale={isMobile ? 0.7 : 0.9} />
        <StudentModel position={[1.5, 0, -0.5]} scale={isMobile ? 0.7 : 0.9} />
        
        {/* Classroom elements */}
        <mesh position={[0, -1, -1]} receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[5, 5]} />
          <meshStandardMaterial color="#f5f5f5" />
        </mesh>
        
        {/* Blackboard */}
        <mesh position={[0, 0.5, -2]} receiveShadow>
          <boxGeometry args={[3, 1.5, 0.1]} />
          <meshStandardMaterial color="#2c3e50" />
        </mesh>
        
        {/* Text on blackboard */}
        <mesh position={[0, 0.5, -1.95]}>
          <planeGeometry args={[2.8, 1.3]} />
          <meshBasicMaterial color="#2c3e50" />
          <Html position={[0, 0, 0.1]} center transform>
            <div className="text-white text-center" style={{ width: '300px' }}>
              <h3 className="text-xl font-bold">OM SAI</h3>
              <p className="text-sm">EDUCATIONAL ACADEMY</p>
            </div>
          </Html>
        </mesh>
        
        {/* Books */}
        <mesh position={[-1, -0.8, 0]} rotation={[0, Math.PI / 6, 0]}>
          <boxGeometry args={[0.4, 0.1, 0.3]} />
          <meshStandardMaterial color="#e74c3c" />
        </mesh>
        <mesh position={[1, -0.8, 0]} rotation={[0, -Math.PI / 6, 0]}>
          <boxGeometry args={[0.4, 0.15, 0.3]} />
          <meshStandardMaterial color="#3498db" />
        </mesh>
      </Float>
    </group>
  );
}

const StudentScene: React.FC = () => {
  return (
    <Canvas dpr={[1, 2]} shadows>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
      <ambientLight intensity={0.5} />
      <spotLight position={[5, 5, 5]} angle={0.15} penumbra={1} intensity={1} castShadow />
      <pointLight position={[-5, -5, -5]} intensity={0.5} />
      
      <StudentGroup />
      
      <Environment preset="city" />
    </Canvas>
  );
};

export default StudentScene;
