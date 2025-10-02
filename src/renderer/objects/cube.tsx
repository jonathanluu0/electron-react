import { useRef, useState } from "react";
import { Mesh } from "three";
import { ShapeProps } from "../types/shapeProps";

export default function Cube({posX, scaleX ,color = "ff0000",}: ShapeProps) {
  const ref = useRef<Mesh>(null!);
  return (
    <mesh ref={ref} position={[posX, 0, 0]}>
      <boxGeometry args={[scaleX, 1, 1]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}
