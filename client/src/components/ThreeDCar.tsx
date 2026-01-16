import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Lightformer, Environment, ContactShadows } from "@react-three/drei";
import { useRef, useState } from "react";
import * as THREE from "three";

function AbstractCar(props: any) {
  const group = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (!group.current) return;
    
    // Rotate car based on mouse position
    const t = state.clock.getElapsedTime();
    const x = (state.mouse.x * Math.PI) / 10;
    const y = (state.mouse.y * Math.PI) / 10;
    
    // Smooth rotation interpolation
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, x, 0.1);
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -y, 0.1);
  });

  return (
    <group ref={group} {...props} dispose={null}>
      {/* Sleek abstract car body */}
      <mesh castShadow receiveShadow position={[0, 0.5, 0]}>
        <boxGeometry args={[2, 0.5, 4.5]} />
        <meshStandardMaterial 
          color="#aa0000" 
          roughness={0.1} 
          metalness={0.8}
          envMapIntensity={2}
        />
      </mesh>
      
      {/* Cabin */}
      <mesh castShadow receiveShadow position={[0, 1.0, -0.5]}>
        <boxGeometry args={[1.8, 0.6, 2.5]} />
        <meshStandardMaterial 
          color="#111" 
          roughness={0} 
          metalness={1} 
        />
      </mesh>
      
      {/* Wheels */}
      <mesh position={[1.1, 0.35, 1.5]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.35, 0.35, 0.4, 32]} />
        <meshStandardMaterial color="#111" />
      </mesh>
      <mesh position={[-1.1, 0.35, 1.5]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.35, 0.35, 0.4, 32]} />
        <meshStandardMaterial color="#111" />
      </mesh>
      <mesh position={[1.1, 0.35, -1.5]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.35, 0.35, 0.4, 32]} />
        <meshStandardMaterial color="#111" />
      </mesh>
      <mesh position={[-1.1, 0.35, -1.5]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.35, 0.35, 0.4, 32]} />
        <meshStandardMaterial color="#111" />
      </mesh>
      
      {/* Headlights */}
      <mesh position={[0.6, 0.5, 2.26]}>
        <boxGeometry args={[0.5, 0.1, 0.1]} />
        <meshStandardMaterial color="#ccffff" emissive="#ccffff" emissiveIntensity={5} />
      </mesh>
      <mesh position={[-0.6, 0.5, 2.26]}>
        <boxGeometry args={[0.5, 0.1, 0.1]} />
        <meshStandardMaterial color="#ccffff" emissive="#ccffff" emissiveIntensity={5} />
      </mesh>
      
      {/* Taillights */}
      <mesh position={[0, 0.6, -2.26]}>
        <boxGeometry args={[1.8, 0.1, 0.1]} />
        <meshStandardMaterial color="#ff0000" emissive="#ff0000" emissiveIntensity={3} />
      </mesh>
    </group>
  );
}

export function ThreeDCar() {
  return (
    <div className="w-full h-full absolute inset-0 z-10">
      <Canvas shadows camera={{ position: [5, 2, 5], fov: 45 }}>
        {/* Lights */}
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={100} castShadow />
        <ambientLight intensity={0.5} />
        
        {/* Environment for reflections */}
        <Environment preset="city" />
        
        {/* Floating Car */}
        <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
          <AbstractCar />
        </Float>
        
        {/* Floor Shadow */}
        <ContactShadows resolution={1024} scale={20} blur={2} opacity={0.5} far={10} color="#000000" />
        
        {/* Dramatic background lights */}
        <Lightformer position={[10, 0, -10]} scale={10} color="red" intensity={2} />
        <Lightformer position={[-10, 0, -10]} scale={10} color="white" intensity={2} />
      </Canvas>
    </div>
  );
}
