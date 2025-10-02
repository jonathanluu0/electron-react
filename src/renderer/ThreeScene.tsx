// src/renderer/ThreeScene.tsx
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Cube from "./objects/cube";
import Sphere from "./objects/sphere";

export default function ThreeScene() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Cube />
      <Sphere />
      <OrbitControls />
    </Canvas>
  );
}
