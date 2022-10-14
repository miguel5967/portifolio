import { Vector3 } from "@react-three/fiber";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../Store/hooks";
import {RootState} from "../Store"

function Platform({
  xAxis,
  yAxis,
  zAxis,
  color,
  width,
  height,
  playerSide,
  id,
}: any) {

  const [hovered, setHovered] = useState(false);
  
  const dispatch = useAppDispatch();
  const selected = useAppSelector((state: RootState) => state.game.platformSeleteced === id);

  const dataVector = (playerSide ? [xAxis, yAxis + 0.1, zAxis] : [xAxis, yAxis - 0.1, zAxis - 0.01]) as Vector3;
  const data = ( hovered ? dataVector : [xAxis, yAxis, zAxis] ) as Vector3;

  const platform = (
    <mesh
      position={data}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={() => dispatch({type:"game/platformSelect", payload: {id: id}})}
    >
      <planeBufferGeometry args={[width, height]} />
      <meshBasicMaterial color={selected ? 'red' : color} map={null} />
    </mesh>
  );
  return platform;
}
export default Platform;
