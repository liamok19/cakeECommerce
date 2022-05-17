import React, { Suspense, useEffect, useState } from "react";

//model Loader:
import { Html, useProgress } from "@react-three/drei";

//React three fiber - canvas and environment scene
import { Canvas } from "@react-three/fiber";
// import { Environment } from "@react-three/drei";

// import Box  from "./components/Box";

//Cake 1
import { TopTierPink, MidTierPink, BtmTierPink } from "../Box";

//Cake 2
import { TopTierBlue, MidTierBlue, BtmTierBlue } from "../Box";

//Cake 3
import { TopTierPearl, MidTierPearl, BtmTierPearl } from "../Box";

//Cake 4
import { TopTierChoc, MidTierChoc, BtmTierChoc } from "../Box";

//Cake 5
import {
  TopTierFestive,
  MidTierFestive,
  BtmTierFestive,
} from "../Box";

function CanvasModel() {
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    document.body.style.cursor = hovered ? "crosshair" : "auto";
  }, [hovered]);


  const Loader = () => {
    const { progress } = useProgress();
    return <Html center>{progress} % loaded</Html>;

  };

  const styles = {
    modelPosition: {
      position: "absolute",
      left: 0,
      top: 0,
      // zIndex: -1,
      height: "285vh",
    },
  };

  
  return (
  <Canvas style={styles.modelPosition} id="modelcontainer">
    <Suspense fallback={<Loader />}>
      <ambientLight intensity={0.05} />
      <pointLight position={[-5, -5, -5]} />
      <spotLight position={[1, 1, 1]} angle={0.15} penumbra={1} />
      {/* <OrbitControls 
            enablePan={true}
            enableZoom={true}
            enableRotate={true} /> */}
      {/* PinkCollection Model */}
      <TopTierPink hovered={hovered} setHovered={setHovered} position={[-80, 0, -240]} scale={[1, 1, 1]} />
      <MidTierPink hovered={hovered} setHovered={setHovered} position={[-80, -15, -240]} scale={[2, 2, 2]} />
      <BtmTierPink hovered={hovered} setHovered={setHovered} position={[-80, -35, -240]} scale={[3, 3, 3]} />
      {/* <BtmTierPink position={[-80, -35, -1000000]} scale={[3, 3, 3]} /> */}

      {/* BlueCollection Model */}
      <TopTierBlue hovered={hovered} setHovered={setHovered} position={[-35, 0, -210]} scale={[1, 1, 1]} />
      <MidTierBlue hovered={hovered} setHovered={setHovered} position={[-35, -15, -210]} scale={[2, 2, 2]} />
      <BtmTierBlue hovered={hovered} setHovered={setHovered} position={[-35, -35, -210]} scale={[3, 3, 3]} />

      {/* Down the Aisle */}
      <TopTierPearl hovered={hovered} setHovered={setHovered} position={[0, 0, -180]} scale={[1, 1, 1]} />
      <MidTierPearl hovered={hovered} setHovered={setHovered} position={[0, -15, -180]} scale={[2, 2, 2]} />
      <BtmTierPearl hovered={hovered} setHovered={setHovered} position={[0, -35, -180]} scale={[3, 3, 3]} />

      {/* EverythingCollection Model */}
      <TopTierChoc hovered={hovered} setHovered={setHovered} position={[35, 0, -210]} scale={[1, 1, 1]} />
      <MidTierChoc hovered={hovered} setHovered={setHovered} position={[35, -15, -210]} scale={[2, 2, 2]} />
      <BtmTierChoc hovered={hovered} setHovered={setHovered} position={[35, -35, -210]} scale={[3, 3, 3]} />

      {/* festive Collection */}
      <TopTierFestive hovered={hovered} setHovered={setHovered} position={[80, 0, -240]} scale={[1, 1, 1]} />
      <MidTierFestive hovered={hovered} setHovered={setHovered} position={[80, -15, -240]} scale={[2, 2, 2]} />
      <BtmTierFestive hovered={hovered} setHovered={setHovered} position={[80, -35, -240]} scale={[3, 3, 3]} />
      {/* <Environment  preset="sunset" background /> */}
      {/* <Box hovered={hovered} setHovered={setHovered} position={[180, -100, -240]} scale={[15,15,15]}/> */}
    </Suspense>
    {/* <color attach="background" args={["#FDF9FF"]} /> */}

    {/* <fog attach="fog" color="#ffccff" near={1} far={400} /> */}
  </Canvas>
  )
}
export default CanvasModel;
