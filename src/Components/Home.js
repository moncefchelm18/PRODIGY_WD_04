import React, { useEffect, useState } from "react";
import { BiLogoInstagram, BiLogoFacebook, BiLogoTwitter } from "react-icons/bi";
import { useInView } from "react-intersection-observer";
import SectionWithFade from "./OtherComponents/SectionWithFade";

const NameDisplay = () => {
  const [names, setNames] = useState([
    "Frontend Developer",
    "Student",
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
  const title = ["Frontend Developer", "Studnet", "Designer"];
  const [ref, inView] = useInView({
    triggerOnce: false, // Set this to true if you want the animation to trigger only once
    threshold: 0, // Adjust this threshold as needed
  });

  /* useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) =>
        prevIndex === title.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }); */
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
              Hi, I'm <span>Chelgham Moncef</span>
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec
              mauris non mi aliquet vehicula. Fusce non libero ut nisl mollis
              eleifend. Suspendisse potenti. Pellentesque habitant morbi
              tristique senectus.
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
                Hire Me!
              </a>
              <a href="#contact" className="btn">
                Let's Talk
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
                <BiLogoInstagram size={20} color={"#27AE60"} />
              </a>
              <a href="#contact" className="btn">
                <BiLogoFacebook size={20} color={"#27AE60"} />
              </a>
              <a href="#contact" className="btn">
                <BiLogoTwitter size={20} color={"#27AE60"} />
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
            <img src="mch.png" alt="doctor" />
          </div>
        </SectionWithFade>
      </section>
    </>
  );
};

export default Home;
