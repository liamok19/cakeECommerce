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
      <circleGeometry args={[5, 32 ]} /> 
      <meshStandardMaterial color='#45775E' /> 
    </mesh> 
  ) 
} 

export const Box2 = props => { 
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
        <icosahedronGeometry args={[3,1]} /> 
        <meshStandardMaterial color='#45775E' /> 
      </mesh> 
    ) 
  } 

  
  export const Box3 = props => { 
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
        <circleGeometry args={[5, 32 ]} /> 
        <meshStandardMaterial color='#45775E' /> 
      </mesh> 
    ) 
  } 
  
