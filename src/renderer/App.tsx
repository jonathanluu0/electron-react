import React from "react";
import ThreeScene from "./ThreeScene";

//main render for React/TS/Three
export default function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
        <button>Cube</button>
        <button>Sphere</button>
      <ThreeScene />
    </div>
  );
}
