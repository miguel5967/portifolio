import { Vector3 } from "@react-three/fiber";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../Store/hooks";
import { RootState } from "../Store";

function Platform({ position, color, width, height, id }: any) {
  const [hovered, setHovered] = useState(false);

  const dispatch = useAppDispatch();
  const defended = useAppSelector(
    (store: RootState) => store.game.player.selects[0] === id
  );
  const attacked = useAppSelector(
    (store: RootState) => store.game.player.selects[1] === id
  );

  const dataVector =
    id <= 2
      ? [position[0], position[1] - 0.1, position[2] - 0.01]
      : [position[0], position[1] + 0.1, position[2]];
  const data = hovered ? dataVector : position;
  const playerSideColor = id <= 2 ? "blue" : "red";
  const playerSideSelect = attacked || defended ? playerSideColor : color;
  const platform = (
    <mesh
      position={data}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={() =>
        dispatch({
          type: "game/platformSelect",
          payload: { id: id, position: data },
        })
      }
    >
      <planeBufferGeometry args={[width, height]} />
      <meshBasicMaterial color={playerSideSelect} map={null} />
    </mesh>
  );

  return platform;
}
export default Platform;
