"use client";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import Model from "./ModelTranslate";
import { Leva } from "leva";
const Scene = () => {
  return (
    <>
      <Leva hidden />

      <Canvas shadows={false} dpr={[1, 1.5]} camera={{ position: [0, 0, 100], fov: 10 }}>
        <Suspense fallback={null}>
          <Environment preset="sunset" />
          <Model />
        </Suspense>
      </Canvas>
    </>
  );
};

export default Scene;
// dpr={[1, 1]}