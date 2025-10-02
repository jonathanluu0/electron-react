import { useRef, useState } from "react";
import { Mesh } from "three";
import { ShapeProps } from "../types/shapeProps";
import displayInfo from "../DisplayInfo";

//Cube object
export default function Cube({posX, scaleX ,color = "ff0000", rotY = 0}: ShapeProps) {
  const ref = useRef<Mesh>(null!);
  return (
    <mesh 
    ref={ref} 
    position={[posX, 0, 0]} 
    rotation={[0, rotY, 0]} 
    onClick={displayInfo}>
      <boxGeometry args={[scaleX, 1, 1]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}
