// src/ThreeDIcon.js

import { useRef } from "react";
import { Canvas } from "@react-three/fiber";

function SpinningCube() {
  const mesh = useRef();

  return (
    <mesh
      ref={mesh}
      rotation={[45, 45, 45]}
      animate={{ rotate: [0, 360, 0], transition: { duration: 2 } }}
    >
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" color="tomato" />
    </mesh>
  );
}

const ThreeDIcon = () => {
  return (
    <Canvas style={{ width: 100, height: 100 }}>
      <ambientLight />
      <SpinningCube />
    </Canvas>
  );
};

export default ThreeDIcon;
