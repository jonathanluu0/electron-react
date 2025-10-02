import { useRef, useState } from "react";
import { Mesh } from "three";
import { ShapeProps } from "./types/shapeProps";

//call object info onClick
export default function displayInfo({posX, scaleX ,color, rotY}: ShapeProps){
    console.log("posX: " + posX);
    console.log("scaleX: " + scaleX);
    console.log("rotY: " + rotY);
    console.log("color: " + color);
}