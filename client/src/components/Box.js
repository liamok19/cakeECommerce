import React, { useRef } from 'react'; 
import { useFrame } from '@react-three/fiber'; 
 
export const Box = props => { 
  // This reference will give us direct access to the mesh 
  const ref = useRef() 
  // Rotate mesh every frame, this is outside of React without overhead 
  useFrame(() => { 
    ref.current.rotation.x = ref.current.rotation.y += 0.01 
  }) 
  return ( 
    <mesh 
      {...props} 
      ref={ref}> 
      <torusGeometry args={[10, 3, 16, 100 ]} /> 
      <meshStandardMaterial color='#FFE5B4' /> 
    </mesh> 
  ) 
} 
