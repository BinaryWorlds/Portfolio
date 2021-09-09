import React from 'react';
import { Canvas } from '@react-three/fiber';
import * as S from './BgAnimation.style';
import Scene from './Scene';

function BgAnimation() {
  return (
    <S.Wrapper>
      <Canvas
        camera={{ position: [0, 0, 30], fov: 60, far: 60 }}
        gl={{ antialias: true, alpha: false }}>
        <Scene />
      </Canvas>
    </S.Wrapper>
  );
}

export default React.memo(BgAnimation);
