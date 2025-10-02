import { useRef } from 'react';
import { Mesh } from 'three';

export default function Sphere() {
  const ref = useRef<Mesh>(null!);

  return (
    <mesh ref={ref} position={[2, 0, 0]}>
      <sphereGeometry args={[1, 32, 16]} />
      <meshStandardMaterial color="green" />
    </mesh>
  );
}