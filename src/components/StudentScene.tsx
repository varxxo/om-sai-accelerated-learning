
import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, PerspectiveCamera } from '@react-three/drei';
import ThreeJSErrorBoundary from './three/ThreeJSErrorBoundary';
import ModelFallback from './three/ModelFallback';
import StudentGroup from './three/StudentGroup';

const SimpleScene = () => {
  return (
    <div className="w-full h-full bg-gray-50">
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-center">
          <h3 className="text-xl font-bold text-academy-orange">OM SAI</h3>
          <p className="text-sm text-academy-dark">EDUCATIONAL ACADEMY</p>
        </div>
      </div>
    </div>
  );
};

const StudentScene: React.FC = () => {
  const [canRender3D, setCanRender3D] = useState(true);

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      setCanRender3D(!!gl);
    } catch (e) {
      console.error("WebGL not supported", e);
      setCanRender3D(false);
    }
  }, []);

  if (!canRender3D) {
    return <SimpleScene />;
  }

  return (
    <ThreeJSErrorBoundary>
      <Suspense fallback={<ModelFallback />}>
        <Canvas dpr={[1, 2]} shadows>
          <PerspectiveCamera makeDefault position={[0, 0, 5] as [number, number, number]} fov={50} />
          <ambientLight intensity={0.5} />
          <spotLight position={[5, 5, 5] as [number, number, number]} angle={0.15} penumbra={1} intensity={1} castShadow />
          <pointLight position={[-5, -5, -5] as [number, number, number]} intensity={0.5} />
          
          <StudentGroup />
          
          <Environment preset="city" />
        </Canvas>
      </Suspense>
    </ThreeJSErrorBoundary>
  );
};

export default StudentScene;
