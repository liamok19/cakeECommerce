import React, { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
// import { Preload, useCursor } from '@react-three/drei'


export const TopTierPink = (props) => {
  // const [hovered, setHovered] = useState(false);
  const ref = useRef();

  // useEffect(() => {
    //   document.body.style.cursor = hovered ? "crosshair" : "auto";
    // }, [hovered]);

  useFrame(() => {
    if (props.hovered && ref.current.position.y < 20) {
      ref.current.position.y += 1;
    } else if (!props.hovered && ref.current.position.y > 0)
      ref.current.position.y -= 1;
  });
  return (
    <mesh
      {...props}
      ref={ref}
      // onPointerOver={() => setHovered(true)}
      // onPointerOut={() => setHovered(false)}
    >
      <cylinderGeometry args={[5, 5, 7, 32]} />
      <meshStandardMaterial color="pink" />
    </mesh>
  );
};

export const MidTierPink = (props) => {
  const ref = useRef();
  return (
    <mesh
      {...props}
      ref={ref}
      onPointerOver={() => props.setHovered(true)}
      onPointerOut={() => props.setHovered(false)}
    >
      <cylinderGeometry args={[5, 5, 7, 32]} />
      <meshStandardMaterial color="pink" />
    </mesh>
  );
};

export const BtmTierPink = (props) => {
  // const [hovered, setHovered] = useState(false);
  const ref = useRef();

  useFrame(() => {
    if (props.hovered && ref.current.position.y > -55) {
      ref.current.position.y -= 1;
    } else if (!props.hovered && ref.current.position.y < -35)
      ref.current.position.y += 1;
  });
  return (
    <mesh
      {...props}
      ref={ref}
      // onClick={() => changeMouse(true)}
      // onPointerOver={() => setHovered(true)}
      // onPointerOut={() => setHovered(false)}
    >
      <cylinderGeometry args={[5, 5, 7, 32]} />
      <meshStandardMaterial color="pink" />
    </mesh>
  );
};

export const TopTierBlue = (props) => {
  const ref = useRef();

  useFrame(() => {
    if (props.hovered && ref.current.position.y > -55) {
      ref.current.position.y -= 1;
    } else if (!props.hovered && ref.current.position.y < -35)
      ref.current.position.y += 1;
  });

  return (
    <mesh
      {...props}
      ref={ref}
    >
      <cylinderGeometry args={[5, 5, 7, 32]} />
      <meshStandardMaterial color="cyan" />
    </mesh>
  );
};

export const MidTierBlue = (props) => {
  const ref = useRef();
  return (
    <mesh
      {...props}
      ref={ref}
      onPointerOver={() => props.setHovered(true)}
      onPointerOut={() => props.setHovered(false)}
    >
      <cylinderGeometry args={[5, 5, 7, 32]} />
      <meshStandardMaterial color="cyan" />
    </mesh>
  );
};

export const BtmTierBlue = (props) => {
  const ref = useRef();

  useFrame(() => {
    if (props.hovered && ref.current.position.y > -55) {
      ref.current.position.y -= 1;
    } else if (!props.hovered && ref.current.position.y < -35)
      ref.current.position.y += 1;
  });
  return (
    <mesh
      {...props}
      ref={ref}
    >
      <cylinderGeometry args={[5, 5, 7, 32]} />
      <meshStandardMaterial color="cyan" />
    </mesh>
  );
};

export const TopTierPearl = (props) => {
  const ref = useRef();

  useFrame(() => {
    if (props.hovered && ref.current.position.y > -55) {
      ref.current.position.y -= 1;
    } else if (!props.hovered && ref.current.position.y < -35)
      ref.current.position.y += 1;
  });
  return (
    <mesh
      {...props}
      ref={ref}
    >
      <cylinderGeometry args={[5, 5, 7, 32]} />
      <meshStandardMaterial color="#FDEAFD" />
    </mesh>
  );
};

export const MidTierPearl = (props) => {
  const ref = useRef();
  return (
    <mesh
      {...props}
      ref={ref}
      onPointerOver={() => props.setHovered(true)}
      onPointerOut={() => props.setHovered(false)}
    >
      <cylinderGeometry args={[5, 5, 7, 32]} />
      <meshStandardMaterial color="#FDEAFD" />
    </mesh>
  );
};

export const BtmTierPearl = (props) => {
  const ref = useRef();

  useFrame(() => {
    if (props.hovered && ref.current.position.y > -55) {
      ref.current.position.y -= 1;
    } else if (!props.hovered && ref.current.position.y < -35)
      ref.current.position.y += 1;
  });
  return (
    <mesh
      {...props}
      ref={ref}
    >
      <cylinderGeometry args={[5, 5, 7, 32]} />
      <meshStandardMaterial color="#FDEAFD" />
    </mesh>
  );
};

export const TopTierChoc = (props) => {
  const ref = useRef();

  useFrame(() => {
    if (props.hovered && ref.current.position.y > -55) {
      ref.current.position.y -= 1;
    } else if (!props.hovered && ref.current.position.y < -35)
      ref.current.position.y += 1;
  });
  return (
    <mesh
      {...props}
      ref={ref}
    >
      <cylinderGeometry args={[5, 5, 7, 32]} />
      <meshStandardMaterial color="#B99C7B" />
    </mesh>
  );
};

export const MidTierChoc = (props) => {
  const ref = useRef();
  return (
    <mesh
      {...props}
      ref={ref}
      onPointerOver={() => props.setHovered(true)}
      onPointerOut={() => props.setHovered(false)}
    >
      <cylinderGeometry args={[5, 5, 7, 32]} />
      <meshStandardMaterial color="#B99C7B" />
    </mesh>
  );
};

export const BtmTierChoc = (props) => {
  const ref = useRef();

  useFrame(() => {
    if (props.hovered && ref.current.position.y > -55) {
      ref.current.position.y -= 1;
    } else if (!props.hovered && ref.current.position.y < -35)
      ref.current.position.y += 1;
  });
  return (
    <mesh
      {...props}
      ref={ref}
    >
      <cylinderGeometry args={[5, 5, 7, 32]} />
      <meshStandardMaterial color="#B99C7B" />
    </mesh>
  );
};

export const TopTierFestive = (props) => {
  const ref = useRef();

  useFrame(() => {
    if (props.hovered && ref.current.position.y > -55) {
      ref.current.position.y -= 1;
    } else if (!props.hovered && ref.current.position.y < -35)
      ref.current.position.y += 1;
  });
  return (
    <mesh
      {...props}
      ref={ref}
    >
      <cylinderGeometry args={[5, 5, 7, 32]} />
      <meshStandardMaterial color="#9CB97B" />
    </mesh>
  );
};

export const MidTierFestive = (props) => {
  const ref = useRef();
  return (
    <mesh
      {...props}
      ref={ref}
      onPointerOver={() => props.setHovered(true)}
      onPointerOut={() => props.setHovered(false)}
    >
      <cylinderGeometry args={[5, 5, 7, 32]} />
      <meshStandardMaterial color="#B97B7B" />
    </mesh>
  );
};

export const BtmTierFestive = (props) => {
  const ref = useRef();

  useFrame(() => {
    if (props.hovered && ref.current.position.y > -55) {
      ref.current.position.y -= 1;
    } else if (!props.hovered && ref.current.position.y < -35)
      ref.current.position.y += 1;
  });
  return (
    <mesh
    {...props}
      ref={ref}
    >
      <cylinderGeometry args={[5, 5, 7, 32]} />
      <meshStandardMaterial color="#9CB97B" />
    </mesh>
  );
};



//test Model
    // export const Box = (props) => {
    //   // This reference will give us direct access to the mesh
    //   const ref = useRef();
    //   // Rotate mesh every frame, this is outside of React without overhead
    //   useFrame(() => {
    //     ref.current.rotation.y = ref.current.rotation.x += 0.01;
    //   });
    //   return (
    //     <mesh {...props} ref={ref}>
    //       <torusGeometry args={[5, 5, 7, 32]} />
    //       <meshStandardMaterial color="#FFE5B4" />
    //     </mesh>
    //   );
    // };