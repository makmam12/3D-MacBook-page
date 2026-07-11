import { PresentationControls } from '@react-three/drei';
import React, { useRef } from 'react'
import MacBookModel16 from '../models/Macbook-16';
import { snap } from 'gsap/all';
import MacBookModel14 from '../models/Macbook-14';

function ModelSwitcher({scale, isMobile}) {
    const smallMacbookRef = useRef();
    const largeMacbookRef = useRef();

    const showLarggeMacbook = scale == 0.08 || scale == 0.05;

    const controlsConfig ={
      snap: true, 
      speed: 1, 
      zoom: 1, 
      azimuth: [-Infinity, Infinity],
    }
    
  return (
    <>
    <PresentationControls {...controlsConfig}>
        <group ref={largeMacbookRef}>
            <MacBookModel16 scale={isMobile? 0.05: 0.08}/>
        </group>
    </PresentationControls>
    {/* <PresentationControls>
        <group ref={largeMacbookRef}>
            <MacBookModel14 scale={isMobile? 0.03: 0.06}/>
        </group>
    </PresentationControls> */}
    </>
  )
}

export default ModelSwitcher