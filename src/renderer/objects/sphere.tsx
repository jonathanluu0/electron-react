import { useRef } from 'react';
import { Mesh } from 'three';
import { ShapeProps } from "../types/shapeProps";

export default function Sphere({posX, scaleX ,color = "ff0000", rotY = 0}: ShapeProps) {
  const ref = useRef<Mesh>(null!);

  return (
    <mesh ref={ref} position={[posX, 0, 0]} rotation={[0, rotY, 0]}>
      <sphereGeometry args={[scaleX, 32, 16]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}