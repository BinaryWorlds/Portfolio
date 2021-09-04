/* eslint-disable */
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { GradientTexture } from '@react-three/drei';

function Ball({ gradient, size }) {
  const ref = useRef();
  let t = Math.random() * 100;
  const speed = 0.01 + Math.random() / 1000;
  const factor = 10 + Math.random() * 60;
  const xFactor = -50 + Math.random() * 100;
  const yFactor = -50 + Math.random() * 100;
  const zFactor = -30 + Math.random() * 60;

  useFrame(() => {
    t += speed;
    const s = Math.cos(t);
    ref.current.scale.set(s, s, s);
    ref.current.rotation.set(s * 5, s * 5, s * 5);
    ref.current.position.set(
      xFactor + Math.cos((t / 30) * factor) + (Math.sin(t * 1) * factor) / 10,
      yFactor + Math.sin((t / 20) * factor) + (Math.cos(t * 2) * factor) / 10,
      zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 20,
    );
  });

  return (
    <mesh ref={ref} position={[0, 0, 0]}>
      <sphereBufferGeometry args={[size, 32, 32]} />
      <meshStandardMaterial metalness={0.2}>
        <GradientTexture stops={gradient.stops} colors={gradient.colors} size={512} />
      </meshStandardMaterial>
    </mesh>
  );
}

export default Ball;
