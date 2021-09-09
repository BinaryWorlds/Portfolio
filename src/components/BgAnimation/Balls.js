/* eslint-disable */
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { GradientTexture } from '@react-three/drei';

function Ball({ gradient, size }) {
  const ref = useRef();
  const offset = 0.2 + Math.random() * 1.6;
  const factor = 2 + Math.random() * 8;
  const xFactor = Math.floor(-25 + Math.random() * 50);
  const yFactor = Math.floor(-25 + Math.random() * 50);
  const zFactor = Math.floor(-8 + Math.random() * 16);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const s = Math.cos(t + offset);
    const posA = offset * -factor * Math.sin(t + factor);
    const posB = offset * factor * Math.cos(t - factor);

    ref.current.scale.set(s, s, s);
    ref.current.rotation.set(s, s, s);
    ref.current.position.set(xFactor + posA, yFactor + posB, zFactor + posB);
  });

  return (
    <mesh ref={ref}>
      <sphereBufferGeometry args={[size, 64, 64]} />
      <meshStandardMaterial>
        <GradientTexture stops={gradient.stops} colors={gradient.colors} size={32} />
      </meshStandardMaterial>
    </mesh>
  );
}

export default Ball;
