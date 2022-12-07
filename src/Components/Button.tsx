import { extend } from "@react-three/fiber";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { Text } from "@react-three/drei";
import { useAppDispatch } from "../Store/hooks";
import FireBall from "./FireBall";

function Button({
  xAxis,
  yAxis,
  zAxis,
  color,
  width,
  height,
  showFireBall
}: any) {
    const dispatch = useAppDispatch();
console.log("freball on button =  " + showFireBall)
    if(showFireBall)
    {
      return (
        <mesh position={[xAxis, yAxis, zAxis]} onClick={() => dispatch({
          type: "game/fight"
        })}>
          <planeBufferGeometry args={[width, height]} />
          <Text color={color} scale={[width,height+3, 0]}>Fight !</Text>
          <FireBall position={0} width={width} height={height} />
        </mesh>
      );
    }
    else
    {
      return(null)
      }
}

export default Button;
