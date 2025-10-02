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
//Scene to hold multiple 
export default function ThreeScene({ cube, sphere }: { cube: ShapeProps; sphere: ShapeProps }) {
    return (
        <Canvas>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Cube {...cube} />
            <Sphere {...sphere} />
            <OrbitControls />
        </Canvas>
    );
}
