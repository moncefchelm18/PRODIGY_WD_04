import React from "react";
import { useInView } from "react-intersection-observer";
import SectionWithFade from "./OtherComponents/SectionWithFade";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: false, // Définissez ceci sur true si vous voulez que l'animation se déclenche une seule fois
    threshold: 0, // Ajustez ce seuil si nécessaire
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
            À <span>Propos</span>
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
            <img src="mch.png" alt="docteur" />
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
            <h3>Développeur Web !</h3>
            <p>
              Étudiant en Master 2 en ingénierie logicielle et systèmes
              intelligents à l'Université Constantine 2, avec une licence <br />
              en génie logiciel et une expérience en développement web
              (ReactJS).
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
                En savoir plus
              </a>
            </div>
          </SectionWithFade>
        </div>
      </section>
    </>
  );
};

export default About;
