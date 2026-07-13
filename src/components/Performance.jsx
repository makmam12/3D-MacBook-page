import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { performanceImages } from "../constants/index.js";

gsap.registerPlugin(ScrollTrigger);

function Performance() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const section = sectionRef.current;

      // Text animation (runs on all screen sizes)
      gsap.from(".content p", {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".content",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      // Desktop-only animations
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1025px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
            invalidateOnRefresh: true,
          },
        });

        performanceImages
          .filter((image) => image.id !== "p5")
          .forEach((image) => {
            const el = section.querySelector(`.${image.id}`);
            if (!el) return;

            tl.to(
              el,
              {
                left: image.left ?? "auto",
                right: image.right ?? "auto",
                bottom: image.bottom ?? "auto",
                transform: image.transform ?? "none",
                ease: "none",
              },
              0 // all animations start together
            );
          });
      });

      

      return () => {
        mm.revert();
        ScrollTrigger.refresh();
      };
    },
    { scope: sectionRef }
  );

  return (
    <section id="performance" ref={sectionRef}>
      <h2>Next-level graphics performance. Game on.</h2>

      <div className="wrapper">
        {performanceImages.map((image) => (
          <img
            key={image.id}
            className={image.id}
            src={image.src}
            alt={image.id}
          />
        ))}
      </div>

      <div className="content">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis
          <span className="text-white">
            {" "}
            provident, quam laudantium blanditiis culpa
          </span>{" "}
          nihil, vel nisi nesciunt incidunt minima velit ipsam. Quam amet quia
          corporis, sed debitis minima nostrum.
        </p>
      </div>
    </section>
  );
}

export default Performance;