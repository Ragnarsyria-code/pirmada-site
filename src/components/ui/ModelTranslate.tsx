
"use client";
import React, { useRef, useState, useEffect, useMemo } from "react";
import * as THREE from "three";
import {
  useGLTF,
  Center,
  MeshTransmissionMaterial,
  Text,
} from "@react-three/drei";
import { useThree, useFrame } from "@react-three/fiber";
import { useControls } from "leva";
import { Text as TroikaText } from "troika-three-text";
import { MathUtils, Raycaster, Plane, Vector2, Vector3 } from "three";

// Patch troika‑three‑text so React doesn't complain about custom materials
const patchTroikaText = (): void => {
  const depthDesc = Object.getOwnPropertyDescriptor(
    TroikaText.prototype,
    "customDepthMaterial"
  );
  if (!depthDesc?.set) {
    Object.defineProperty(TroikaText.prototype, "customDepthMaterial", {
      set() {},
    });
  }
  const distanceDesc = Object.getOwnPropertyDescriptor(
    TroikaText.prototype,
    "customDistanceMaterial"
  );
  if (!distanceDesc?.set) {
    Object.defineProperty(TroikaText.prototype, "customDistanceMaterial", {
      set() {},
    });
  }
};
patchTroikaText();

interface GLTFResult {
  nodes: { [key: string]: THREE.Object3D };
}

// A standard ease in-out cubic function
function easeInOutCubic(t: number): number {
  t = Math.min(Math.max(t, 0), 1);
  return t < 0.5
    ? 4 * t * t * t
    : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

const Model = () => {
  const groupRef = useRef<THREE.Group | null>(null);
  const { viewport, gl, camera } = useThree();
  const { nodes } = useGLTF("/medias/pirmadaLogo.gltf") as GLTFResult;

  // Stable initial position
  const initialPosition = useMemo(() => ({ x: 0, y: 0, z: 0 }), []);
  const [targetPos, setTargetPos] = useState<{ x: number; y: number; z: number }>(
    initialPosition
  );

  // Detect mobile
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Pointer events
  useEffect(() => {
    const handlePointerMove = (event: MouseEvent) => {
      const rect = gl.domElement.getBoundingClientRect();
      const ndcX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const ndcY = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      const mouseNDC = new Vector2(ndcX, ndcY);
      const raycaster = new Raycaster();
      raycaster.setFromCamera(mouseNDC, camera);
      const plane = new Plane(new Vector3(0, 0, 1), -initialPosition.z);
      const intersection = new Vector3();
      raycaster.ray.intersectPlane(plane, intersection);

      setTargetPos({
        x: intersection.x,
        y: intersection.y,
        z: initialPosition.z,
      });
    };

    const handlePointerLeave = () => setTargetPos(initialPosition);

    gl.domElement.addEventListener("pointermove", handlePointerMove);
    gl.domElement.addEventListener("pointerleave", handlePointerLeave);
    return () => {
      gl.domElement.removeEventListener("pointermove", handlePointerMove);
      gl.domElement.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, [gl.domElement, camera, initialPosition]);

  // Leva controls for the 3D material
  const materialProps = useControls({
    thickness: { value: 6, min: 0, max: 6, step: 0.05 },
    roughness: { value: 0.2, min: 0, max: 1, step: 0.1 },
    transmission: { value: 1, min: 0, max: 1, step: 0.1 },
    ior: { value: 2, min: 0, max: 3, step: 0.1 },
    chromaticAberration: { value: 1, min: 0, max: 1 },
    backside: { value: true },
  });

  // Scale for 3D logo
  const scaleFactor = isMobile ? 0.23 : (viewport.width / 30.5) * 0.26;
  const groupScale: [number, number, number] = [scaleFactor, scaleFactor, scaleFactor];

  // Vertical offset for mobile vs desktop
  const mobileYOffset = isMobile ? 5 : 6;

  // Reveal animation for text
  const [textOpacity, setTextOpacity] = useState(0);
  const revealDuration = 1; // seconds
  const revealTime = useRef(0);

  useFrame((_, delta) => {
    // Animate text from opacity 0 to 1
    if (textOpacity < 1) {
      revealTime.current += delta;
      const progress = revealTime.current / revealDuration;
      setTextOpacity(progress >= 1 ? 1 : easeInOutCubic(progress));
    }

    // Animate group position and rotation
    if (groupRef.current) {
      groupRef.current.position.x = MathUtils.lerp(
        groupRef.current.position.x,
        targetPos.x,
        0.1
      );
      groupRef.current.position.y = MathUtils.lerp(
        groupRef.current.position.y,
        targetPos.y + mobileYOffset,
        0.1
      );
      groupRef.current.position.z = MathUtils.lerp(
        groupRef.current.position.z,
        targetPos.z,
        0.1
      );
      groupRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <Center>
      <group ref={groupRef} position={[0, mobileYOffset, 0]} scale={groupScale}>
        <Center>
          <mesh {...(nodes["Shape_0"] as THREE.Mesh)}>
            <MeshTransmissionMaterial {...materialProps} />
          </mesh>
        </Center>
      </group>

      <Text
        // Choose a position so that the text is in view; 
        // anchorY="middle" means the text will be centered around this Y.
        position={isMobile ? [0, 2.7, -10] : [0, 3, -10]}
        
        // Center horizontally & vertically
        anchorX="center"
        anchorY="middle"
        textAlign="center"
        
        font="/fonts/BiggerDisplay.otf"
        fontSize={isMobile ? 2 : 5}
        lineHeight={0.86}
        color="white"
        
        // For fade in
        material-transparent
        material-opacity={textOpacity}
      >
        {`IGNITE YOUR VISION\nELEVATE YOUR BRAND`}
      </Text>




      <Text
        // Choose a position so that the text is in view; 
        // anchorY="middle" means the text will be centered around this Y.
        position={isMobile ? [0, -.2, -1] : [0, -2, -10]}
        
        // Center horizontally & vertically
        anchorX="center"
        anchorY="middle"
        textAlign="center"
        
        
        fontSize={isMobile ? 0.42 : 0.5}
        lineHeight={1.5}
        color="#f1f1f1"
        
        // For fade in
        material-transparent
        material-opacity={textOpacity}
      >
       {!isMobile &&  `Welcome to Pirmada. we help tou bring your idea to life, from making great websites and apps to full development services\n we help enterpreneurs, startups and businesses shine`}
       {isMobile &&  `Bring your idea to life with Pirmada,\nwe help enterpreneurs, startups and businesses shine`}
      </Text>
      
    </Center>
  );
};

export default Model;


