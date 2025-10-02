import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import { ShapeProps } from "./types/shapeProps";
import ThreeScene from "./ThreeScene";

//main render for React/TS/Three
export default function App() {
  const [cube, setCube] = useState<ShapeProps>({ //instantiate cube
    posX: -2,
    scaleX: 1,
    color: "#00ff00",
    rotY: 0,
  });

  const [sphere, setSphere] = useState<ShapeProps>({ //instantiate sphere
    posX: 2,
    scaleX: 1,
    color: "#ff0000",
    rotY: 0,
  });
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <div>
        <label>Cube</label>
        <input //position slider
          id="cube"
          name="position" 
          type="range"
          min={-5}
          max={5}
          step={0.1}
          value={cube.posX}
          onChange={(e) =>
            setCube({ ...cube, posX: parseFloat(e.target.value) })
          }
        />
        <input //scale slider
          id="cube"
          name="scale" 
          type="range"
          min={-5}
          max={5}
          step={0.1}
          onChange={(e) =>
            setCube({ ...cube, scaleX: parseFloat(e.target.value) })
          }
        />
        <input //rotate slider
          id="cube"
          name="rotate" 
          type="range"
          min={0}
          max={360}
          step={1}
          value={cube.rotY} 
          onChange={(e) =>
            setCube({
              ...cube,
              rotY: parseFloat(e.target.value),
            })
          }
        />
        <input //color slider
          type="color" 
          value={cube.color}
          onChange={(e) => setCube({ ...cube, color: e.target.value })}
        />
      </div>
      <div>
        <label>Sphere</label>
        <input //position slider
          id="sphere"
          name="position" 
          type="range"
          min={-5}
          max={5}
          step={0.1}
          onChange={(e) =>
            setSphere({ ...sphere, posX: parseFloat(e.target.value) })
          }
        />
        <input //scale slider
          id="sphere"
          name="scale" 
          type="range"
          min={-5}
          max={5}
          step={0.1}
          onChange={(e) =>
            setSphere({ ...sphere, scaleX: parseFloat(e.target.value) })
          }
        />
        <input //rotate slider
          id="sphere"
          name="rotate" 
          type="range"
          min={0}
          max={360}
          step={1}
          value={sphere.rotY}
          onChange={(e) =>
            setSphere({ ...sphere, rotY: parseFloat(e.target.value) })
          }
        />
        <input // color slider
          type="color" 
          value={sphere.color}
          onChange={(e) => setSphere({ ...sphere, color: e.target.value })}
        />
      </div>
      <ThreeScene cube={cube} sphere={sphere} /> {/*Render objects */ }
    </div>
  );
}
