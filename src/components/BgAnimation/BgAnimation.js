import React from 'react';
import { Canvas } from '@react-three/fiber';
import * as S from './BgAnimation.style';
import Scene from './Scene';

function BgAnimation() {
  const cameraZ = 40 / (document.documentElement.clientWidth / 1360); // add resize event

  return (
    <S.Wrapper>
      <Canvas
        camera={{ position: [0, 0, cameraZ], fov: 60, far: cameraZ + 64 }}
        gl={{ antialias: true }}>
        <Scene />
      </Canvas>
    </S.Wrapper>
  );
}

export default BgAnimation;
