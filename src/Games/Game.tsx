import { Canvas } from "@react-three/fiber";
import { platform } from "os";
import { Suspense } from "react";
import Button from "../Components/Button";
import Character from "../Components/Character";
import Divider from "../Components/Divider";
import Platform from "../Components/Platform";
import { RootState } from "../Store";
import { useAppSelector } from "../Store/hooks";

function Game() {
  const playerLocation = useAppSelector(
    (store: RootState) => store.game.player.position
  );
  const computerLocation = useAppSelector(
    (store: RootState) => store.game.computer.position
  );
  const platforms = useAppSelector((store: RootState) => store.game.platform);
  return (
    <Canvas>
      {/*
        Platform on Hover - yAxis = 2.1 (Para fazer a sensação de vida no jogo) =>PLAYERSIDE
        Platform on Hover - yAxis = -2.1  e width = 9.9 (Para fazer a sensação de vida no jogo)  => BOTSIDE
         */}
{platforms.map( (plat, index) => (
  <Platform id={index} width={10} height={2} color="gray" position={plat}/>
))}

      <Divider
        xAxis={0}
        yAxis={0}
        zAxis={0}
        width={30.2}
        height={2}
        color={"gray"}
        />
      <Divider
        xAxis={0}
        yAxis={2}
        zAxis={-1}
        width={80}
        height={20}
        color={"black"}
      />
      <Button
        xAxis={15}
        yAxis={0}
        zAxis={1}
        width={5}
        height={2}
        color={"green"}
      />
      <Suspense fallback={null}>
        <Character position={computerLocation} width={1.5} height={1.5} />
        <Character position={playerLocation} width={1.5} height={1.5} />
      </Suspense>
    </Canvas>
  );
}

export default Game;
