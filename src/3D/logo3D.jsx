import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

function Logo3D() {
  const { scene } = useGLTF('/src/3D/logo3D.glb');
  const logoRef = useRef();

  useFrame(() => {
    if (logoRef.current) {
      logoRef.current.rotation.y += 0.03; 
    }
  });

  return <primitive ref={logoRef} object={scene} scale={1} />;
}

export default Logo3D;
