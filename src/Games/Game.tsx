import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Character from "../Components/Character";
import Divider from "../Components/Divider";
import Platform from "../Components/Platform";

function Game() {
  return (
    <Canvas>
      {/*
        Platform on Hover - yAxis = 2.1 (Para fazer a sensação de vida no jogo) =>PLAYERSIDE
        Platform on Hover - yAxis = -2.1  e width = 9.9 (Para fazer a sensação de vida no jogo)  => BOTSIDE
         */}
      <Platform
        xAxis={-10.1}
        yAxis={2}
        zAxis={0}
        color={"gray"}
        width={10}
        height={2}
      />
      <Platform
        xAxis={0}
        yAxis={2}
        zAxis={0}
        color={"gray"}
        width={10}
        height={2}
      />
      <Platform
        xAxis={10.1}
        yAxis={2}
        zAxis={0}
        color={"gray"}
        width={10}
        height={2}
      />
      <Divider
        xAxis={0}
        yAxis={0}
        zAxis={0}
        width={30.2}
        height={2}
        color={"gray"}
      />
      <Platform
        xAxis={-10.1}
        yAxis={-2}
        zAxis={0}
        color={"gray"}
        width={10}
        height={2}
      />
      <Platform
        xAxis={0}
        yAxis={-2}
        zAxis={0}
        color={"gray"}
        width={10}
        height={2}
      />
      <Platform
        xAxis={10.1}
        yAxis={-2}
        zAxis={0}
        color={"gray"}
        width={10}
        height={2}
      />
      <Divider
        xAxis={0}
        yAxis={2}
        zAxis={-1}
        width={70}
        height={20}
        color={"black"}
      />
      <Suspense fallback={null}>
        <Character
          xAxis={0}
          yAxis={1.5}
          zAxis={1}
          width={1}
          height={1}
        />
      </Suspense>
    </Canvas>
  );
}

export default Game;
