import { useRef } from "react";
import { Mesh } from "three";

export default function Cube() {
  const ref = useRef<Mesh>(null!);

  
  return (
    <mesh ref={ref} position={[-2, 0, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="green" />
    </mesh>
  );
}
