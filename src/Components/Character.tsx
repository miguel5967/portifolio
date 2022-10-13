import THREE from "three";

function Character({ xAxis, yAxis, zAxis, color, width, height }: any) {
   const character = new THREE.Group();

  const body = (
    <mesh position={[xAxis, yAxis, zAxis]}>
      <boxBufferGeometry args={[width, height]} />
      <meshBasicMaterial color={color} map={null} />
    </mesh>
  );

  return body;
}
export default Character;
