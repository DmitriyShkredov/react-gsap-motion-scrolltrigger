import "./App.css";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/dist/MotionPathPlugin";
import { ReactComponent as Way } from "./assets/way.svg";
import { ReactComponent as Figure1 } from "./assets/figure1.svg";
import { ReactComponent as Figure2 } from "./assets/figure2.svg";
import { ReactComponent as Figure3 } from "./assets/figure3.svg";

function App() {
  gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);
  useLayoutEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "section",
          start: "top top",
          end: "bottom -=200%",
          scrub: true,
          pin: true,
          markers: {
            startColor: "white",
            endColor: "white",
          },
        },
      })
      .fromTo(
        "#figure1",
        { x: 0, y: 0 },
        {
          motionPath: {
            path: "path",
            align: "path",
            alignOrigin: [0.5, 0.5],
          },
          duration: 5,
        }
      )
      .fromTo(
        "#figure2",
        { x: 0, y: 0 },
        {
          motionPath: {
            path: "path",
            align: "path",
            alignOrigin: [0.5, 0.5],
            autoRotate: true,
          },
          duration: 5,
        }
      )
      .fromTo(
        "#figure3",
        { x: 0, y: 0 },
        {
          motionPath: {
            path: "path",
            align: "path",
            alignOrigin: [0.5, 0.5],
            autoRotate: true,
          },
          duration: 5,
        }
      );
  }, []);
  return (
    <>
      <section id="section">
        <Way />
        <Figure1 id="figure1" className="figure" />
        <Figure2 id="figure2" className="figure" />
        <Figure3 id="figure3" className="figure" />
        <div className="start"></div>
        <div className="end"></div>
        <div className="block1"></div>
        <div className="block2"></div>
        <div className="block3"></div>
      </section>
    </>
  );
}

export default App;
