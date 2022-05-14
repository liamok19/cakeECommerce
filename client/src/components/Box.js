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

export const TopTierPink = props =>{
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
      <meshStandardMaterial color='pink' /> 
    </mesh> 
  ) 
}
export const MidTierPink = props =>{
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
      <meshStandardMaterial color='pink' /> 
    </mesh> 
  ) 
}

export const BtmTierPink = props =>{
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
      <meshStandardMaterial color='pink' /> 
    </mesh> 
  ) 
}

export const TopTierBlue = props =>{
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
      <meshStandardMaterial color='cyan' /> 
    </mesh> 
  ) 
}

export const MidTierBlue = props =>{
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
      <meshStandardMaterial color='cyan' /> 
    </mesh> 
  ) 
}

export const BtmTierBlue = props =>{
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
      <meshStandardMaterial color='cyan' /> 
    </mesh> 
  ) 
}

export const TopTierPearl = props =>{
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
      <meshStandardMaterial color='#FDEAFD' /> 
    </mesh> 
  ) 
}

export const MidTierPearl = props =>{
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
      <meshStandardMaterial color='#FDEAFD' /> 
    </mesh> 
  ) 
}

export const BtmTierPearl = props =>{
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
      <meshStandardMaterial color='#FDEAFD' /> 
    </mesh> 
  ) 
}

export const TopTierChoc = props =>{
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
      <meshStandardMaterial color='#B99C7B' /> 
    </mesh> 
  ) 
}

export const MidTierChoc = props =>{
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
      <meshStandardMaterial color='#B99C7B' /> 
    </mesh> 
  ) 
}

export const BtmTierChoc = props =>{
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
      <meshStandardMaterial color='#B99C7B' /> 
    </mesh> 
  ) 
}

export const TopTierFestive = props =>{
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
      <meshStandardMaterial color='#9CB97B' /> 
    </mesh> 
  ) 
}

export const MidTierFestive = props =>{
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
      <meshStandardMaterial color='#B97B7B' /> 
    </mesh> 
  ) 
}

export const BtmTierFestive = props =>{
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
      <meshStandardMaterial color='#9CB97B' /> 
    </mesh> 
  ) 
}