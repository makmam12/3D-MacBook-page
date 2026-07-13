import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

function Highlights() {

    const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });

    useGSAP(() => {
      gsap.to('.lef-column', '.right-column'),{
        scrollTrigger: {
          trigger: '#highlghts', 
          start: isMobile? 'bottom bottom': 'top top',
          y: 0,
          stagger: 0.5,
          duration: 1,
          ease: 'power1'
        }
      }
    })
  return (
    <section id="highlights">
      <h2>There's never been a better time to upgrade</h2>
      <h3>here's what you get with the new MacBook pro</h3>

      <div className="masonry">
        <div className="left-column">
          <div>
            <img src="/laptop.png" alt="" />
            <p>Fly through demanding tasks up to 9.8 faster.</p>
          </div>
          <div>
            <img src="/sun.png" alt="" />
            <p>
              Liquid retina XDR <br /> display
            </p>
          </div>
        </div>
        
        <div className="right-column">
          <div className="apple-gradient">
            <img src="/ai.png" alt="ai" />
            <p>Built for <br /> <span>Appel intellegence.</span></p>
          </div>
          <div>
            <img src="/battery.png" alt="battery" />
            <p>
              Up to <span className="green-gradient">{' '} 14 more hours {' '}</span>battery life.
              <div className="text-dark-100"> (Up to 24 hours total.)</div>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Highlights;
