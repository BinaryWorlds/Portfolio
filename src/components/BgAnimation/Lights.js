import React from 'react';

function Lights() {
  return (
    <>
      <ambientLight intensity={0.2} />;
      <pointLight position={[-5, 5, -15]} distance={60} intensity={1} />
    </>
  );
}

export default Lights;
