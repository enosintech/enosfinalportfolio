/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 scene.gltf 
Author: Diamondas (https://sketchfab.com/Diamondas)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/astronaut-720532dec35a47799efe33bcf62fb393
Title: Astronaut
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('astronaut2/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={5}>
        <mesh geometry={nodes.Body000_Material003_0.geometry} material={materials['Material.003']} />
        <mesh geometry={nodes.Body000_Material001_0.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Body000_Material002_0.geometry} material={materials['Material.002']} />
      </group>
    </group>
  )
}

useGLTF.preload('astronaut2/scene.gltf')