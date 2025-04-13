import { gsap } from "gsap";
import React, { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function ShowcaseSection() {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(() => {
    const projects = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
    ];
    projects.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );
  }, []);

  return (
    <section ref={sectionRef} id="work" className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div className="first-project-wrapper" ref={project1Ref}>
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="dfghj" />
            </div>
            <div className="text-content">
              <h2>
                On-Demand Rides Made Simple With a Powerful, User-Friendly App
                Called GoRide
              </h2>
              <p className="txet-white-50 md:text-xl">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam
                maxime dolorum itaque, atque odio temporibus maiores voluptas
                asperiores, pariatur beatae natus ratione qui deleniti
                repellendus soluta culpa vitae cum fugiat.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2Ref}>
              <div className="image-wrapper bg-[#ffefdb]">
                <img src="/images/project2.png" alt="lmp" />
              </div>
              <h2>
                On-Demand Rides Made Simple With a Powerful, User-Friendly App
                Called GoRide
              </h2>
            </div>
            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#ffefdb]">
                <img src="/images/project3.png" alt="lmp" />
              </div>
              <h2>
                On-Demand Rides Made Simple With a Powerful, User-Friendly App
                Called GoRide
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShowcaseSection;
