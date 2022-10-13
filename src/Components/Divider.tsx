import React from 'react'

const Divider = ({xAxis, yAxis, zAxis, width, height, color}: any) => {
  return (
    <mesh position={[xAxis, yAxis,zAxis]}>
      <planeBufferGeometry args={[width, height]} />
      <meshBasicMaterial color={color} map={null} />
    </mesh>
  )
}

export default Divider