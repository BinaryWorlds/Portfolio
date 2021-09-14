import React from 'react';
import { Canvas } from '@react-three/fiber';
import Scene from './Scene';

function BgAnimation() {
  return (
    <Canvas
      style={{
        position: 'fixed',
        display: 'block',
        top: '0',
        left: '0',
        width: '100vw',
        height: '100vh',
        zIndex: '-9999',
      }}
      linear
      resize={{ scroll: false }}
      camera={{ position: [0, 0, -30], fov: 60, far: 60 }}
      gl={{ antialias: true, alpha: false }}>
      <Scene />
    </Canvas>
  );
}

export default BgAnimation;
