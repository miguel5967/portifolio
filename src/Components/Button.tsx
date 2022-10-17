import { extend } from "@react-three/fiber";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { Text } from "@react-three/drei";
import { useAppDispatch } from "../Store/hooks";

function Button({
  xAxis,
  yAxis,
  zAxis,
  color,
  width,
  height,
  id
}: any) {
    const dispatch = useAppDispatch();

  return (
    <mesh position={[xAxis, yAxis, zAxis]} onClick={() => dispatch({
        type: "game/fight"
      })}>
      <planeBufferGeometry args={[width, height]} />
      <Text color={color} scale={[width,height+3, 0]}>Fight !</Text>
    </mesh>
  );
}

export default Button;
