// src/renderer/ThreeScene.tsx
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function ThreeScene() {
  return (
    <Canvas>
      {/* Lights */}
      <ambientLight />
      <pointLight position={[10, 10, 10]} />

      {/* Cube */}
      <mesh rotation={[0.5, 0.5, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="green" />
      </mesh>

      {/* Sphere */}
      <mesh rotation={[0.5, 0.5, 0]}>
        <sphereGeometry args={[1, 32, 16]} />
        <meshStandardMaterial color="green" />
      </mesh>

      {/* Camera controls */}
      <OrbitControls />
    </Canvas>
  );
}
