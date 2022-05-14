import React, { useRef } from "react";
import {OrbitControls, useGLTF } from "@react-three/drei";
// import { useFrame } from '@react-three/fiber'; 
// import { cylinderGeometry } from "three";


// export const Model = props => {
export default function Model(props) {
    // This reference will give us direct access to the mesh 
    // const ref = useRef() 
    // // Rotate mesh every frame, this is outside of React without overhead 
    // useFrame(() => { 
    //   // ref.current.rotation.z += 0.03 
    // }) 
    // return ( 
    //   <mesh 
    //     {...props} 
    //     ref={ref}> 
    //     <cylinderGeometry args= {[5, 5, 20, 32]} />
    //     <meshStandardMaterial color='#FFE5B4' /> 
    //   </mesh> 
    // ) 

    // console.log(props, "werq")

    const group = useRef();
    const { nodes, 
      // materials 
    } = useGLTF("/cakegltf.gltf");
    return (
      <group ref={group} {...props} dispose={null}>
        <mesh
          castShadow
          // receiveShadow
          geometry={nodes.Cylinder.geometry}
          material={nodes.Cylinder.material}
          position={[0, 1, 0]}
        />
        <mesh
          castShadow
          // receiveShadow
          geometry={nodes.Cylinder001.geometry}
          material={nodes.Cylinder001.material}
          position={[0, 4, 0]}
          scale={0.5}
        />
        <mesh
          castShadow
          // receiveShadow
          geometry={nodes.Cylinder002.geometry}
          // material={nodes.Cylinder002.material}
          position={[0, 2.75, 0]}
          scale={0.75}
        />
        <mesh
          castShadow
          // receiveShadow
          geometry={nodes.Cylinder004.geometry}
          // // material={materials["cake.002"]}
          position={[0.86, 3.55, 0]}
          scale={0.08}
        />
        <mesh
          castShadow
          // receiveShadow
          geometry={nodes.Cylinder005.geometry}
          // // material={materials["cake.003"]}
          position={[0.76, 3.56, -0.44]}
          scale={0.08}
        />
        <mesh
          castShadow
          // receiveShadow
          geometry={nodes.Cylinder006.geometry}
          // // material={materials["cake.004"]}
          position={[0.46, 3.56, -0.75]}
          scale={0.08}
        />
        <mesh
          castShadow
          // receiveShadow
          geometry={nodes.Cylinder007.geometry}
          // // material={materials["cake.005"]}
          position={[0.46, 3.56, 0.75]}
          scale={0.08}
        />
        <mesh
          castShadow
          // receiveShadow
          geometry={nodes.Cylinder003.geometry}
          // // material={materials["cake.006"]}
          position={[0.76, 3.56, 0.43]}
          scale={0.08}
        />
        <mesh
          castShadow
          // receiveShadow
          geometry={nodes.Cylinder008.geometry}
          // // material={materials["cake.007"]}
          position={[0, 3.56, -0.87]}
          scale={0.08}
        />
        <mesh
          castShadow
          // receiveShadow
          geometry={nodes.Cylinder009.geometry}
          // // material={materials["cake.008"]}
          position={[0, 3.56, 0.87]}
          scale={0.08}
        />
        <mesh
          castShadow
          // receiveShadow
          geometry={nodes.Cylinder010.geometry}
          // // material={materials["cake.009"]}
          position={[-0.46, 3.56, 0.75]}
          scale={0.08}
        />
        <mesh
          castShadow
          // receiveShadow
          geometry={nodes.Cylinder011.geometry}
          // // material={materials["cake.010"]}
          position={[-0.46, 3.56, -0.75]}
          scale={0.08}
        />
        <mesh
          castShadow
          // receiveShadow
          geometry={nodes.Cylinder012.geometry}
          // // material={materials["cake.011"]}
          position={[-0.75, 3.56, -0.44]}
          scale={0.08}
        />
        <mesh
          castShadow
          // receiveShadow
          geometry={nodes.Cylinder013.geometry}
          // // material={materials["cake.012"]}
          position={[-0.87, 3.55, 0]}
          scale={0.08}
        />
        <mesh
          castShadow
          // receiveShadow
          geometry={nodes.Cylinder014.geometry}
          // // material={materials["cake.013"]}
          position={[-0.75, 3.56, 0.43]}
          scale={0.08}
        />
        <mesh
          castShadow
          // receiveShadow
          geometry={nodes.Cylinder015.geometry}
          // // material={materials["cake.014"]}
          position={[-0.28, 4.55, 0.46]}
          scale={0.08}
        />
        <mesh
          castShadow
          // receiveShadow
          geometry={nodes.Cylinder016.geometry}
          // // material={materials["cake.015"]}
          position={[-0.51, 4.54, 0.01]}
          scale={0.08}
        />
        <mesh
          castShadow
          // receiveShadow
          geometry={nodes.Cylinder017.geometry}
          // // material={materials["cake.016"]}
          position={[-0.28, 4.55, -0.44]}
          scale={0.08}
        />
        <mesh
          castShadow
          // receiveShadow
          geometry={nodes.Cylinder018.geometry}
          // // material={materials["cake.017"]}
          position={[-0.46, 4.55, -0.26]}
          scale={0.08}
        />
        <mesh
          castShadow
          // receiveShadow
          geometry={nodes.Cylinder020.geometry}
          // // material={materials["cake.019"]}
          position={[-0.01, 4.55, 0.53]}
          scale={0.08}
        />
        <mesh
          castShadow
          // receiveShadow
          geometry={nodes.Cylinder021.geometry}
          // // material={materials["cake.020"]}
          position={[-0.01, 4.55, -0.54]}
          scale={0.08}
        />
        <mesh
          castShadow
          // receiveShadow
          geometry={nodes.Cylinder022.geometry}
          // // material={materials["cake.021"]}
          position={[0.26, 4.55, 0.47]}
          scale={0.08}
        />
        <mesh
          castShadow
          // receiveShadow
          geometry={nodes.Cylinder024.geometry}
          // // material={materials["cake.023"]}
          position={[0.45, 4.55, -0.27]}
          scale={0.08}
        />
        <mesh
          castShadow
          // receiveShadow
          geometry={nodes.Cylinder025.geometry}
          // // material={materials["cake.024"]}
          position={[0.55, 4.54, 0.01]}
          scale={0.08}
        />
        <mesh
          castShadow
          // receiveShadow
          geometry={nodes.Cylinder026.geometry}
          // // material={materials["cake.025"]}
          position={[0.45, 4.55, 0.29]}
          scale={0.08}
        />
        <mesh
          castShadow
          // receiveShadow
          geometry={nodes.Cylinder023.geometry}
          // // material={materials["cake.026"]}
          position={[0.26, 4.55, -0.43]}
          scale={0.08}
        />
        <mesh
          castShadow
          // receiveShadow
          geometry={nodes.Cylinder019.geometry}
          // // material={materials["cake.027"]}
          position={[-0.46, 4.55, 0.27]}
          scale={0.08}
        />
        <mesh
          castShadow
          // receiveShadow
          geometry={nodes.Cylinder027.geometry}
          // // material={materials["cake.028"]}
          position={[0.89, 2.06, 0.81]}
          scale={0.08}
        />
        <mesh
          castShadow
          // receiveShadow
          geometry={nodes.Cylinder028.geometry}
          // // material={materials["cake.029"]}
          position={[1.19, 2.05, 0.26]}
          scale={0.08}
        />
        <mesh
          castShadow
          // receiveShadow
          geometry={nodes.Cylinder031.geometry}
          // // material={materials["cake.032"]}
          position={[0.33, 2.06, 1.16]}
          scale={0.08}
        />
        <mesh
          castShadow
          // receiveShadow
          geometry={nodes.Cylinder034.geometry}
          // // material={materials["cake.035"]}
          position={[-0.9, 2.06, 0.8]}
          scale={0.08}
        />
        <mesh
          castShadow
          // receiveShadow
          geometry={nodes.Cylinder037.geometry}
          // // material={materials["cake.038"]}
          position={[-1.18, 2.05, 0.29]}
          scale={0.08}
        />
        <mesh
          castShadow
          // receiveShadow
          geometry={nodes.Cylinder038.geometry}
          // // material={materials["cake.039"]}
          position={[-0.4, 2.06, 1.16]}
          scale={0.08}
        />
        <mesh
          castShadow
          // receiveShadow
          geometry={nodes.Cylinder029.geometry}
          // // material={materials["cake.040"]}
          position={[-0.4, 2.06, -1.14]}
          scale={0.08}
        />
        <mesh
          castShadow
          // receiveShadow
          geometry={nodes.Cylinder030.geometry}
          // // material={materials["cake.041"]}
          position={[-1.18, 2.05, -0.28]}
          scale={0.08}
        />
        <mesh
          castShadow
          // receiveShadow
          geometry={nodes.Cylinder032.geometry}
          // // material={materials["cake.042"]}
          position={[-0.9, 2.06, -0.79]}
          scale={0.08}
        />
        <mesh
          castShadow
          // receiveShadow
          geometry={nodes.Cylinder033.geometry}
          // // material={materials["cake.043"]}
          position={[0.33, 2.06, -1.14]}
          scale={0.08}
        />
        <mesh
          castShadow
          // receiveShadow
          geometry={nodes.Cylinder035.geometry}
          // // material={materials["cake.044"]}
          position={[1.17, 2.05, -0.3]}
          scale={0.08}
        />
        <mesh
          castShadow
          // receiveShadow
          geometry={nodes.Cylinder036.geometry}
          // // material={materials["cake.045"]}
          position={[0.92, 2.06, -0.78]}
          scale={0.08}
        />
        <group position={[-3.35, 1.32, 0.14]} scale={0.56}>
          <mesh
            castShadow
            // receiveShadow
            geometry={nodes.Cone001_1.geometry}
            // // material={materials.treecone}
          />
          <mesh
            castShadow
            // receiveShadow
            geometry={nodes.Cone001_2.geometry}
            // // material={materials["bottom tree"]}
          />
        </group>
        <group position={[-1.83, 0.78, -2.82]} scale={0.32}>
          <mesh
            castShadow
            // receiveShadow
            geometry={nodes.Cone002_1.geometry}
            // // material={materials["treecone.001"]}
          />
          <mesh
            castShadow
            // receiveShadow
            geometry={nodes.Cone002_2.geometry}
            // // material={materials["bottom tree.001"]}
          />
        </group>
        <group position={[-1.18, 1.32, -3.27]} scale={0.56}>
          <mesh
            castShadow
            // receiveShadow
            geometry={nodes.Cone003_1.geometry}
            // // material={materials["treecone.002"]}
          />
          <mesh
            castShadow
            // receiveShadow
            geometry={nodes.Cone003_2.geometry}
            // // material={materials["bottom tree.002"]}
          />
        </group>
        <group position={[-4.42, 0.86, -6.72]} scale={0.34}>
          <mesh
            castShadow
            // receiveShadow
            geometry={nodes.Cone004_1.geometry}
            // // material={materials["treecone.003"]}
          />
          <mesh
            castShadow
            // receiveShadow
            geometry={nodes.Cone004_2.geometry}
            // // material={materials["bottom tree.003"]}
          />
        </group>
        <group position={[-1.49, 1.32, -6.8]} scale={0.56}>
          <mesh
            castShadow
            // receiveShadow
            geometry={nodes.Cone005_1.geometry}
            // // material={materials["treecone.004"]}
          />
          <mesh
            castShadow
            // receiveShadow
            geometry={nodes.Cone005_2.geometry}
            // // material={materials["bottom tree.004"]}
          />
        </group>
        <group position={[-4.93, 1.32, -0.8]} scale={0.56}>
          <mesh
            castShadow
            // receiveShadow
            geometry={nodes.Cone006_1.geometry}
            // // material={materials["treecone.005"]}
          />
          <mesh
            castShadow
            // receiveShadow
            geometry={nodes.Cone006_2.geometry}
            // // material={materials["bottom tree.005"]}
          />
        </group>
        <group position={[-2.15, 1.32, -12.4]} scale={0.56}>
          <mesh
            castShadow
            // receiveShadow
            geometry={nodes.Cone007_1.geometry}
            // // material={materials["treecone.006"]}
          />
          <mesh
            castShadow
            // receiveShadow
            geometry={nodes.Cone007_2.geometry}
            // // material={materials["bottom tree.006"]}
          />
        </group>
        <group position={[0.78, 1.32, -4.87]} scale={0.56}>
          <mesh
            castShadow
            // receiveShadow
            geometry={nodes.Cone008_1.geometry}
            // // material={materials["treecone.007"]}
          />
          <mesh
            castShadow
            // receiveShadow
            geometry={nodes.Cone008_2.geometry}
            // // material={materials["bottom tree.007"]}
          />
        </group>
        <group position={[-5.32, 1.32, -13.41]} scale={0.56}>
          <mesh
            castShadow
            // receiveShadow
            geometry={nodes.Cone009_1.geometry}
            // // material={materials["treecone.008"]}
          />
          <mesh
            castShadow
            // receiveShadow
            geometry={nodes.Cone009_2.geometry}
            // // material={materials["bottom tree.008"]}
          />
        </group>
        <group position={[-6.69, 1.31, -7.65]} scale={0.56}>
          <mesh
            castShadow
            // receiveShadow
            geometry={nodes.Cone010_1.geometry}
            // // material={materials["treecone.009"]}
          />
          <mesh
            castShadow
            // receiveShadow
            geometry={nodes.Cone010_2.geometry}
            // // material={materials["bottom tree.009"]}
          />
        </group>
        <group position={[1.78, 1.32, -7.53]} scale={0.56}>
          <mesh
            castShadow
            // receiveShadow
            geometry={nodes.Cone011_1.geometry}
            // // material={materials["treecone.010"]}
          />
          <mesh
            castShadow
            // receiveShadow
            geometry={nodes.Cone011_2.geometry}
            // // material={materials["bottom tree.010"]}
          />
        </group>
        <group position={[0.49, 1.32, -8.45]} scale={0.56}>
          <mesh
            castShadow
            // receiveShadow
            geometry={nodes.Cone012_1.geometry}
            // // material={materials["treecone.011"]}
          />
          <mesh
            castShadow
            // receiveShadow
            geometry={nodes.Cone012_2.geometry}
            // // material={materials["bottom tree.011"]}
          />
        </group>
        <mesh
          castShadow
          // receiveShadow
          geometry={nodes.Cylinder039.geometry}
          // // material={materials.bushcake}
          position={[-2.17, 0.15, -0.29]}
          scale={0.24}
        />
        <mesh
          castShadow
          // receiveShadow
          geometry={nodes.Cube.geometry}
          // // material={materials.backdrop}
          position={[0.74, 16.25, -3.93]}
          scale={16.27}
        />
        <mesh
          castShadow
          // receiveShadow
          geometry={nodes.Cylinder040.geometry}
          // // material={materials["bushcake.001"]}
          position={[-2.64, 0.12, 0.57]}
          scale={0.19}
        />
        <group position={[-3.86, 0.87, -7.47]} scale={0.34}>
          <mesh
            castShadow
            // receiveShadow
            geometry={nodes.Cone013.geometry}
            // // material={materials["treecone.012"]}
          />
          <mesh
            castShadow
            // receiveShadow
            geometry={nodes.Cone013_1.geometry}
            // // material={materials["bottom tree.012"]}
          />
        </group>
      </group>
    );
  }

useGLTF.preload("/cakegltf.gltf");
