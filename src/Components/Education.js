import React from "react";
import { useInView } from "react-intersection-observer";
import SectionWithFade from "./OtherComponents/SectionWithFade";
import JourneyInfos from "./OtherComponents/JourneyInfos";
const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0,
  });
  const educationData = [
    {
      date: "2017-2018",
      title: "Master university",
    },
    {
      date: "2018-2019",
      title: "Master university",
    },
    {
      date: "2019-2020",
      title: "Master university",
    },
  ];
  const experienceData = [
    {
      date: "2017-2018",
      title: "Master university",
    },
    {
      date: "2018-2019",
      title: "Master university",
    },
    {
      date: "2019-2020",
      title: "Master university",
    },
  ];
  return (
    <>
      <section className="education" id="education" ref={ref}>
        <SectionWithFade
          inView={inView}
          duration={1000}
          delay={250}
          distance={"25px"}
          direction={{ center: true }}
        >
          <h2 className="heading">
            My <span>Journey</span>
          </h2>
        </SectionWithFade>
        <div className="education-content">
          <div className="education-infos">
            <SectionWithFade
              inView={inView}
              duration={1000}
              delay={250}
              distance={"25px"}
              direction={{ left: true }}
            >
              <h3>Education</h3>
            </SectionWithFade>

            {}
            <SectionWithFade
              inView={inView}
              duration={1000}
              delay={250}
              distance={"25px"}
              direction={{ left: true }}
            >
              <span>
                {educationData.map((e) => {
                  return <JourneyInfos date={e.date} title={e.title} />;
                })}
              </span>
            </SectionWithFade>
          </div>
          <div className="education-infos">
            <SectionWithFade
              inView={inView}
              duration={1000}
              delay={250}
              distance={"25px"}
              direction={{ right: true }}
            >
              <h3>Experience</h3>
            </SectionWithFade>
            <SectionWithFade
              inView={inView}
              duration={1000}
              delay={250}
              distance={"25px"}
              direction={{ right: true }}
            >
              <span>
                {experienceData.map((e) => {
                  return <JourneyInfos date={e.date} title={e.title} />;
                })}
              </span>
            </SectionWithFade>
          </div>
        </div>
      </section>
    </>
  );
};

export default Education;
