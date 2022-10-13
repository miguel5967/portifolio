function Platform({ xAxis, yAxis, zAxis, color, width, height }: any) {
  const playerSide = (
    <mesh position={[xAxis, yAxis, zAxis]}>
      <planeBufferGeometry args={[width, height]} />
      <meshBasicMaterial color={color} map={null} />
    </mesh>
  );
  return playerSide;
}
export default Platform;
