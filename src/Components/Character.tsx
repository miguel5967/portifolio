import { useFrame, useLoader } from "@react-three/fiber";
import { useAnimations } from "@react-three/drei";
import { useEffect, useRef } from "react";
import THREE, { Group, Mesh, TextureLoader } from "three";
import image from "../image/Character_Idle.gif";
function Character({ xAxis, yAxis, zAxis, width, height }: any) {
  const character = useLoader(TextureLoader, image);
  const meshRef = useRef<Mesh>(null);

  useFrame(() => {
    if (!meshRef.current) {
      return;
    }

     meshRef.current.translateY(0.1);
    // meshRef.current.rotation.x +=0.01;
     meshRef.current.translateY(-0.1);
  });

  return (
    <mesh ref={meshRef} position={[xAxis, yAxis, zAxis]}>
      <planeBufferGeometry
        attach="geometry"
        args={[width, height]}
        backgroundColor="white"
      />
      <meshBasicMaterial attach="material" map={character} transparent />
    </mesh>
  );
}
export default Character;
