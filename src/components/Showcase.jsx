import { useGSAP } from "@gsap/react";
import React from "react";
import { useMediaQuery } from "react-responsive";
import gsap from "gsap";

function Showcase() {
  const isTablet = useMediaQuery({ query: "(max-width : 1024)" });

  useGSAP(() => {
    if (!isTablet) {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: "#showcase",
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: true,
        },
      });

      timeline
        .to(".mask img", {
          transform: "scale(1.1",
        })
        .to(".content", { opacity: 1, y: 0, ease: "power1.in" });
    }
  }, [isTablet]);
  return (
    <section id="showcase">
      <div className="media">
        <video src="/videos/game.mp4" loop autoPlay muted playsInline />
        <div className="mask">
          <img src="/mask-logo.svg" alt="" />
        </div>
      </div>

      <div className="content">
        <div className="wrapper">
          <div className="lg:max-w-md">
            <h2>Rocket Chip</h2>
            <div className="space-y-5 mt-7 pe-10">
              <p>
                Intruducing{" "}
                <span className="text-white">
                  M4, the next generaion of Apple Intellegance
                </span>
                . M4 powers
              </p>

              <p>
                aliquam beatae, officiis, ab, maxime harum ea est animi a.
                Sapiente optio, aliquid nostrum natus quaerat quidem, adipisci
                ea quae aut dolore voluptatum. Quod aliquam vero excepturi
                maiores atque dolores culpa, labore doloribus placeat libero
                nesciunt ea. Nesciunt qui cum itaque. Recusandae minus
                repellendus laborum nihil dignissimos similique temporibus sint
                dolore!
              </p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus eveniet porro quaerat quas exercitationem quis quod nihil neque dolorum sit.</p>

              <p className="text-primary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt quod rerum incidunt aperiam commodi facere sit dolorem
                doloremque magni aut iste corrupti minima incidunt id totam!
              </p>
            </div>
            <div className="max-w-3xs space-y-12">
              <div className="space-y-2">
                <p>Up to </p>
                <h3>4xfaster</h3>
                <p>pro rendering Performance</p>
              </div>
            </div>
            <div className="max-w-3xs space-y-12">
              <div className="space-y-2">
                <p>Up to </p>
                <h3>1.5xfaster</h3>
                <p>CPU Performance than M2</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Showcase;
