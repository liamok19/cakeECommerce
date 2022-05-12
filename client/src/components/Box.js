import React, { useRef } from 'react'; 
import { useFrame } from '@react-three/fiber'; 


export const Box = props => { 
  // This reference will give us direct access to the mesh 
  const ref = useRef() 
  // Rotate mesh every frame, this is outside of React without overhead 
  useFrame(() => { 
    ref.current.rotation.x += 0.03 
  }) 
  return ( 
    <mesh 
      {...props} 
      ref={ref}> 
      <torusGeometry  args={[10, 5, 16, 100 ]} /> 
      <meshStandardMaterial color='#FFE5B4' /> 
    </mesh> 
  ) 
} 
