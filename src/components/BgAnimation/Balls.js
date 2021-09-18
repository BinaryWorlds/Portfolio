import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Object3D, Color, VertexColors } from 'three';

const colors = ['#049DF0', '#FD4A5F', '#D672C5'];
const colorsLength = colors.length;

const ballsAmount = 20;

const tempObject = new Object3D();
const tempColor = new Color();

function Balls() {
  const meshRef = useRef();

  const colorArray = useMemo(
    () =>
      Float32Array.from(
        new Array(ballsAmount)
          .fill()
          .flatMap((_, i) => tempColor.set(colors[i % colorsLength]).toArray()),
      ),
    [],
  );

  const genParams = () => ({
    offset: 0.2 + Math.random() * 1.6,
    factor: 2 + Math.random() * 8,
    xFactor: Math.floor(-25 + Math.random() * 50),
    yFactor: Math.floor(-25 + Math.random() * 50),
    zFactor: Math.floor(-12 + Math.random() * 24),
  });

  const ballsParams = useMemo(() => new Array(ballsAmount).fill().map(() => genParams()), []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    for (let id = 0; id < ballsAmount; id++) {
      const { offset, factor, xFactor, yFactor, zFactor } = ballsParams[id];

      const s = Math.abs(Math.cos(t + offset));
      const posA = offset * -factor * Math.sin(t + factor);
      const posB = offset * factor * Math.cos(t - factor);

      tempObject.position.set(xFactor + posA, yFactor + posB, zFactor * s);
      tempObject.scale.setScalar(s);

      tempObject.updateMatrix();
      meshRef.current.setMatrixAt(id, tempObject.matrix);
    }

    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[null, null, ballsAmount]}>
      <sphereBufferGeometry args={[1, 32, 32]}>
        <instancedBufferAttribute attachObject={['attributes', 'color']} args={[colorArray, 3]} />
      </sphereBufferGeometry>
      <meshLambertMaterial vertexColors={VertexColors} />
    </instancedMesh>
  );
}

export default Balls;
