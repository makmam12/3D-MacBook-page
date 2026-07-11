import { PresentationControls } from '@react-three/drei';
import React, { useRef } from 'react'
import MacBookModel16 from '../models/Macbook-16';
import { snap } from 'gsap/all';
import MacBookModel14 from '../models/Macbook-14';
import { _config } from 'gsap/gsap-core.js';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';


const ANIMATION_DURATION = 1;
const OFFSET_DISTANCE= 5;

const fadeMeshes = (group, opacity) => {
   if(!group) return;
   group.traverse((child) => {
    if(child.isMesh) {
      child.material.transparent = true;
      gsap.to(child.material, {opacity, duraiton: ANIMATION_DURATION  })
    }
   })
}

const movegroup = (group, x) =>{
  if(!group) return;

  gsap.to(group.position, {x, duration: ANIMATION_DURATION})
}

function ModelSwitcher({scale, isMobile}) {
    const smallMacbookRef = useRef();
    const largeMacbookRef = useRef();

    const showLarggeMacbook = scale == 0.08 || scale == 0.05;
    
    useGSAP(() => {
      if (showLarggeMacbook){
        movegroup(smallMacbookRef.current, -OFFSET_DISTANCE);
        movegroup(largeMacbookRef.current, 0)

        fadeMeshes(smallMacbookRef.current, 0);
        fadeMeshes(largeMacbookRef.current, 1)
      } else{
        movegroup(smallMacbookRef.current, 0);
        movegroup(largeMacbookRef.current, OFFSET_DISTANCE)

        fadeMeshes(smallMacbookRef.current, 1);
        fadeMeshes(largeMacbookRef.current, 0)

      }
     
    }, [scale])

    const controlsConfig ={
      snap: true, 
      speed: 1, 
      zoom: 1, 
      azimuth: [-Infinity, Infinity],
      config: {mass: 1, tension: 0, fraction: 26}
      
    }
    
  return (
    <>
    <PresentationControls {...controlsConfig}>
        <group ref={largeMacbookRef}>
            <MacBookModel16 scale={isMobile? 0.05: 0.08}/>
        </group>
    </PresentationControls>
    <PresentationControls {...controlsConfig}>
        <group ref={smallMacbookRef}>
            <MacBookModel14 scale={isMobile? 0.03: 0.06}/>
        </group>
    </PresentationControls>
    </>
  )
}

export default ModelSwitcher