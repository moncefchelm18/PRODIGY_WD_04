import React from "react";
import { useInView } from "react-intersection-observer";
import SectionWithFade from "./OtherComponents/SectionWithFade";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: false, // Set this to true if you want the animation to trigger only once
    threshold: 0, // Adjust this threshold as needed
  });

  return (
    <>
      <section className="about" id="about" ref={ref}>
        <SectionWithFade
          inView={inView}
          duration={1000}
          delay={250}
          distance={"25px"}
          direction={{ center: true }}
        >
          <h2 className={`heading ${inView ? "visible" : ""}`}>
            About <span>Me</span>
          </h2>
        </SectionWithFade>
        <SectionWithFade
          inView={inView}
          duration={1000}
          delay={350}
          distance={"25px"}
          direction={{ left: true }}
        >
          <div className={`about-img ${inView ? "visible" : ""}`}>
            <img src="mch.png" alt="doctor" />
            <span className="circle-spin"></span>
            <span className={`overlay ${inView ? "visible" : ""}`}></span>
          </div>
        </SectionWithFade>

        <div className={`about-content ${inView ? "visible" : ""}`}>
          <SectionWithFade
            inView={inView}
            duration={1000}
            delay={450}
            distance={"25px"}
            direction={{ right: true }}
          >
            <h3>Frontend Developer!</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              vero tempore numquam exercitationem iusto accusamus neque
              explicabo deleniti. Ipsa dignissimos voluptas ut numquam odio
              soluta praesentium voluptate sit, esse nesciunt?
            </p>
          </SectionWithFade>

          <SectionWithFade
            inView={inView}
            duration={1000}
            delay={350}
            distance={"25px"}
            direction={{ bottom: true }}
          >
            <div className={`btn-box btns ${inView ? "visible" : ""}`}>
              <a href="www.google.com" className="btn" style={{ "--i": 1 }}>
                Read More
              </a>
            </div>
          </SectionWithFade>
        </div>
      </section>
    </>
  );
};

export default About;
