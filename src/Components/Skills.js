import React from "react";
import SectionWithFade from "./OtherComponents/SectionWithFade";
import { useInView } from "react-intersection-observer";
import SkillsBox from "./OtherComponents/SkillsBox";
import Progress from "./OtherComponents/Progress";
const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: false, // Set this to true if you want the animation to trigger only once
    threshold: 0, // Adjust this threshold as needed
  });
  return (
    <>
      <section className="skills" id="skills" ref={ref}>
        <SectionWithFade
          inView={inView}
          duration={1000}
          delay={250}
          distance={"25px"}
          direction={{ center: true }}
        >
          <h3 className="heading">
            My <span>Skills</span>
          </h3>
        </SectionWithFade>

        <div className="skills-content">
          <div className="skills-row">
            <SectionWithFade
              inView={inView}
              duration={1000}
              delay={350}
              distance={"25px"}
              direction={{ left: true }}
            >
              <h3 className="title">Coding Skills</h3>
            </SectionWithFade>
            <SectionWithFade
              inView={inView}
              duration={1000}
              delay={350}
              distance={"25px"}
              direction={{ left: true }}
            >
              <SkillsBox>
                <Progress title={"HTML"} percentage={"90"} />
                <Progress title={"CSS"} percentage={"75"} />
                <Progress title={"JAVA SCRIPT"} percentage={"60"} />
                <Progress title={"REACT"} percentage={"70"} />
              </SkillsBox>
            </SectionWithFade>
          </div>
          <div className="skills-row">
            <SectionWithFade
              inView={inView}
              duration={1000}
              delay={350}
              distance={"25px"}
              direction={{ right: true }}
            >
              <h3 className="title">Professional Skills</h3>
            </SectionWithFade>
            <SectionWithFade
              inView={inView}
              duration={1000}
              delay={350}
              distance={"25px"}
              direction={{ right: true }}
            >
              <SkillsBox>
                <Progress
                  title={"Problem Solving".toLocaleUpperCase()}
                  percentage={"60"}
                />
                <Progress
                  title={"Effective Communication".toLocaleUpperCase()}
                  percentage={"65"}
                />
                <Progress
                  title={"Time Management".toLocaleUpperCase()}
                  percentage={"70"}
                />
                <Progress
                  title={"Collaboration and Teamwork".toLocaleUpperCase()}
                  percentage={"70"}
                />
              </SkillsBox>
            </SectionWithFade>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
