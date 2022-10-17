import { useFrame, useLoader, Vector3 } from "@react-three/fiber";
import {  useRef, useState } from "react";
import THREE,{ Mesh, TextureLoader } from "three";
import image from "../image/Character_Idle.gif";
import { a } from "@react-spring/three";
interface CharProps {
  position: Vector3,
  width: number,
  height: number
}
function Character({ position, width, height }: CharProps) {
  const character = useLoader(TextureLoader, image);
  const meshRef = useRef<Mesh>(null);
  const [frame,setFrame] = useState(0);
  const timeVar = 3 * 8;
  const yvar = 0.008;
  const idle = true
  const playerMoving = !idle

  useFrame(() => {
    if (!meshRef.current) {
      return;
    }
    if (idle) {
      if (frame <= timeVar) {
        meshRef.current.position.y+=yvar;
      } else {
        meshRef.current.position.y-=yvar;
      }
      setFrame((frame) => frame = frame > timeVar * 2 ? 0 : frame + 1);
    }
    
  });

  return (
    <a.mesh ref={meshRef} position={position}>
      <planeBufferGeometry
        attach="geometry"
        args={[width, height]}
        />
      <meshBasicMaterial attach="material" map={character} transparent  />
    </a.mesh>
  );
}
export default Character;
