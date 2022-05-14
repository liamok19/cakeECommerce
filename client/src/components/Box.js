import React, { useRef } from 'react'; 
import { useFrame } from '@react-three/fiber'; 


export const Box = props => { 
  // This reference will give us direct access to the mesh 
  const ref = useRef() 
  // Rotate mesh every frame, this is outside of React without overhead 
  useFrame(() => { 
    ref.current.rotation.y += 0.03 
  }) 
  return ( 
    <mesh 
      {...props} 
      ref={ref}> 
      <cylinderGeometry  args={[5, 5, 7, 32]} /> 
      <meshStandardMaterial color='#FFE5B4' /> 
    </mesh> 
  ) 
} 

export const TopTier = props =>{
  // const ref = useRef() 
  // // Rotate mesh every frame, this is outside of React without overhead 
  // useFrame(() => { 
  //   ref.current.position.y += 0.1
  // }) 
  return ( 
    <mesh 
      {...props} 
      // ref={ref}
      > 
      <cylinderGeometry  args={[5, 5, 7, 32]} /> 
      <meshStandardMaterial color='#FFE5B4' /> 
    </mesh> 
  ) 
}
