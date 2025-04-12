import React from "react";
import * as THREE from "three";
export const HeroLight = () => {
  return (
    <>
     <spotLight 
     position={[2, 5, 6]}
     intensity={100}
     angle={0.15}
     penumbra={0.2}
     color="white"

     />


     <spotLight 
     position={[-3, 5, 5]}
     intensity={60}
     angle={0.4}
     penumbra={1}
     color="#9d4edd"

     />

     <primitive
        object={new THREE.ReactAreaLight('#A259FF', 8, 3, 2)}
        position={[0, 1, 0]}
        intensity={15}
        rotation={[-Math.PI/4, Math.PI/4, 0]}
     />


    
    </>
  );
};
