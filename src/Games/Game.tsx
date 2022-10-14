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
        id={1}
        xAxis={-10.1}
        yAxis={2}
        zAxis={0}
        color={"gray"}
        width={10}
        height={2}
        playerSide={true}
      />
      <Platform
        id={2}
        xAxis={0}
        yAxis={2}
        zAxis={0}
        color={"gray"}
        width={10}
        height={2}
        playerSide={true}
      />
      <Platform
        id={3}
        xAxis={10.1}
        yAxis={2}
        zAxis={0}
        color={"gray"}
        width={10}
        height={2}
        playerSide={true}
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
        id={4}
        xAxis={-10.1}
        yAxis={-2}
        zAxis={0}
        color={"gray"}
        width={10}
        height={2}
        playerSide={false}
      />
      <Platform
        id={5}
        xAxis={0}
        yAxis={-2}
        zAxis={0}
        color={"gray"}
        width={10}
        height={2}
        playerSide={false}
      />
      <Platform
        id={6}
        xAxis={10.1}
        yAxis={-2}
        zAxis={0}
        color={"gray"}
        width={10}
        height={2}
        playerSide={false}
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
        <Character xAxis={0} yAxis={1.5} zAxis={1} width={1} height={1} />
      </Suspense>
    </Canvas>
  );
}

export default Game;
