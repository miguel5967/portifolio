import { useRef, useEffect, Component } from 'react'
import { GridHelper } from 'three'
import { extend, Object3DNode } from '@react-three/fiber'

// Create our custom element
class CustomElement extends GridHelper {}

// Extend so the reconciler will learn about it
extend({ CustomElement })

// Add types to ThreeElements elements so primitives pick up on it
declare module '@react-three/fiber' {
  interface ThreeElements {
    customElement: Object3DNode<CustomElement, typeof CustomElement>
  }
}

// react-three-fiber will create your custom component and TypeScript will understand it
export default CustomElement