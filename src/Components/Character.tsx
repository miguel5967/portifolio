import { useFrame, useLoader } from "@react-three/fiber";
import {  useRef, useState } from "react";
import THREE,{ Mesh, TextureLoader } from "three";
import image from "../image/Character_Idle.gif";
import { useSpring, a } from "@react-spring/three";
function Character({ xAxis, yAxis, zAxis, width, height }: any) {
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
    if(playerMoving) {
      if (frame < timeVar) {
        meshRef.current.position.x+=yvar * 2;
      } else {
        meshRef.current.position.x-=yvar * 2;
      }
      setFrame((frame) => frame = frame >= timeVar * 8 ? 0 : frame + 1);
    }
  });
  
   const rops = useSpring({ xAxis, yAxis, zAxis, width, height});

  return (
    <a.mesh ref={meshRef} position={[xAxis, yAxis, zAxis]}>
      <planeBufferGeometry
        attach="geometry"
        args={[width, height]}
      />
      <meshBasicMaterial attach="material" map={character} transparent  />
    </a.mesh>
  );
}
export default Character;
