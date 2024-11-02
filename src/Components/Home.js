import React, { useEffect, useState } from "react";
import {
  BiLogoInstagram,
  BiLogoFacebook,
  BiLogoTwitter,
  BiLogoLinkedin,
  BiLogoGithub,
} from "react-icons/bi";
import { useInView } from "react-intersection-observer";
import SectionWithFade from "./OtherComponents/SectionWithFade";

const NameDisplay = () => {
  const [names, setNames] = useState([
    "Développeur Frontend",
    "Étudiant",
    "Designer",
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % names.length);
    }, 6000);

    return () => {
      clearInterval(interval);
    };
  }, [names]);

  const currentName = names[currentIndex];

  return (
    <div className="text-animate">
      <h3 className={currentName.toLowerCase()}>{currentName}</h3>
    </div>
  );
};
const Home = () => {
  const title = ["Développeur Frontend", "Étudiant", "Designer"];
  const [ref, inView] = useInView({
    triggerOnce: false, // Définissez ceci sur true si vous voulez que l'animation se déclenche une seule fois
    threshold: 0, // Ajustez ce seuil si nécessaire
  });

  return (
    <>
      <section className="home" id="home" ref={ref}>
        <div className="home-content">
          <SectionWithFade
            inView={inView}
            duration={1000}
            delay={250}
            distance={"25px"}
            direction={{ left: true }}
          >
            <h1>
              Salut, je suis <span>Chelgham Moncef</span>
            </h1>
          </SectionWithFade>

          <SectionWithFade
            inView={inView}
            duration={1000}
            delay={350}
            distance={"25px"}
            direction={{ left: true }}
          >
            <div className="text-animate">
              <h3>
                <NameDisplay />
              </h3>
            </div>
          </SectionWithFade>
          <SectionWithFade
            inView={inView}
            duration={1000}
            delay={250}
            distance={"25px"}
            direction={{ left: true }}
          >
            <p>
              En tant que développeur frontend, je crée des interfaces modernes
              et réactives avec ReactJS. Mon objectif est de fournir des
              expériences utilisateur fluides et optimisées, adaptées aux
              besoins des utilisateurs.
            </p>
          </SectionWithFade>
          <SectionWithFade
            inView={inView}
            duration={1000}
            delay={450}
            distance={"25px"}
            direction={{ left: true }}
          >
            <div className="btn-box">
              <a href="#hireme" className="btn">
                Mon CV
              </a>
              <a href="#contact" className="btn">
                Discutons
              </a>
            </div>
          </SectionWithFade>
          <SectionWithFade
            inView={inView}
            duration={1000}
            delay={550}
            distance={"25px"}
            direction={{ left: true }}
          >
            <div className="home-sci">
              <a href="#contact" className="btn">
                <BiLogoLinkedin size={20} color={"#27AE60"} />
              </a>
              <a href="#contact" className="btn">
                <BiLogoGithub size={20} color={"#27AE60"} />
              </a>
              <a href="#contact" className="btn">
                <BiLogoInstagram size={20} color={"#27AE60"} />
              </a>
              <a href="#contact" className="btn">
                <BiLogoFacebook size={20} color={"#27AE60"} />
              </a>
            </div>
          </SectionWithFade>
        </div>
        <SectionWithFade
          inView={inView}
          duration={1000}
          delay={350}
          distance={"25px"}
          direction={{ right: true }}
        >
          <div className="home-img">
            <img src="mch.png" alt="docteur" />
          </div>
        </SectionWithFade>
      </section>
    </>
  );
};

export default Home;
