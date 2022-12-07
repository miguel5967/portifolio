import { useFrame, useLoader, Vector3 } from "@react-three/fiber";
import {  useRef, useState } from "react";
import THREE,{ Mesh, TextureLoader } from "three";
import image from "../image/Fireball_Idle.gif";
import { a } from "@react-spring/three";
interface CharProps {
  position: Vector3,
  width: number,
  height: number
}
function FireBall({ position, width, height}: CharProps, showFireBall: boolean = false) {
  const character = useLoader(TextureLoader, image);
  const meshRef = useRef<Mesh>(null);
  const [frame,setFrame] = useState(0);
  const timeVar = 3 * 12;
  const yvar = 0.0010;
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

if(showFireBall) {
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
  else{
    return(null)
  }
}
export default FireBall;
