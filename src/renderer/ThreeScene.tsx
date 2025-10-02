// src/renderer/ThreeScene.tsx
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Cube from "./objects/cube";
import Sphere from "./objects/sphere";
import { ShapeProps } from "./types/shapeProps";

interface ThreeSceneProps {
  cube: ShapeProps;
  sphere: ShapeProps;
}

export default function ThreeScene({ cube, sphere }: ThreeSceneProps) {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Cube posX={cube.posX} scaleX={cube.scaleX} color={cube.color} />
      <Sphere posX={sphere.posX} scaleX={sphere.scaleX} color={sphere.color} />
      <OrbitControls />
    </Canvas>
  );
}
