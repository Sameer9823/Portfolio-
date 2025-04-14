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
          <a href="https://ai-nexus-gamma.vercel.app/">
            <div className="image-wrapper">
              <img src="/images/AI.png" alt="dfghj" />
            </div>
            <div className="text-content">
              <h2>AI-Nexus — One Platform, Multiple Powerful AI Tools</h2>
              <p className="text-white-50 md:text-xl">
                I created <strong>AI-Nexus</strong>, a centralized platform
                offering tools like AI Video Compression, Image Enhancement, GPT
                Assistant, Content Detection, Text-to-Image generation, and an
                AI-curated News Section — all in one user-friendly interface.
              </p>
            </div>
          </a>
          </div>

        
          <div className="project-list-wrapper overflow-hidden">

            <div className="project" ref={project2Ref}>
            <a href="https://github.com/Sameer9823/Learning-Management-System">
              <div className="image-wrapper bg-[#ffefdb]">
                <img src="/images/LMS.png" alt="lmp" />
              </div>

              <h2>Learning Management System (LMS).</h2>
            </a>
            </div>

            <div className="project" ref={project3Ref}>
            <a href="https://github.com/Sameer9823/Portfolio-">
              <div className="image-wrapper bg-[#ffefdb]">
                <img src="/images/port.png" alt="lmp" />
              </div>
              <h2>Portfolio: A Glimpse into My Code World</h2>
            </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShowcaseSection;
