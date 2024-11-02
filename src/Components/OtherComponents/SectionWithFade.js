import React from "react";
import { Fade } from "react-reveal";

const SectionWithFade = (props) => {
  return props.inView ? (
    <Fade
      duration={props.duration}
      delay={props.delay}
      distance={props.distance}
      {...props.direction}
    >
      {props.children}
    </Fade>
  ) : (
    props.children
  );
};
export default SectionWithFade;
