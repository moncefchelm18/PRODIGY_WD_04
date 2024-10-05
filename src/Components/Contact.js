import { useState } from "react";
import { useInView } from "react-intersection-observer";

import SectionWithFade from "./OtherComponents/SectionWithFade";
import InputField from "./OtherComponents/InputField";
const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: false, // Set this to true if you want the animation to trigger only once
    threshold: 0, // Adjust this threshold as needed
  });
  return (
    <>
      <section className="contact" id="contact" ref={ref}>
        <SectionWithFade
          inView={inView}
          duration={1000}
          delay={250}
          distance={"25px"}
          direction={{ center: true }}
        >
          <h3 className="heading">
            Contact <span>Me!</span>
          </h3>
        </SectionWithFade>

        <form>
          <div className="contact-container">
            <SectionWithFade
              inView={inView}
              duration={1000}
              delay={550}
              distance={"25px"}
              direction={{ left: true }}
            >
              <div className="contact-infos">
                <InputField
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                />
                <InputField
                  type="email"
                  name="email"
                  placeholder="Email Address"
                />
                <InputField
                  type="number"
                  name="mobileNumber"
                  placeholder="Mobile Number"
                />
                <InputField
                  type="text"
                  name="emailSubject"
                  placeholder="Email Subject"
                />
              </div>
            </SectionWithFade>

            <SectionWithFade
              inView={inView}
              duration={1000}
              delay={450}
              distance={"25px"}
              direction={{ right: true }}
            >
              <div className="contact-message">
                <InputField
                  textarea
                  name="message"
                  placeholder="Your Message"
                />
              </div>
            </SectionWithFade>
          </div>
          <SectionWithFade
            inView={inView}
            duration={1000}
            delay={350}
            distance={"25px"}
            direction={{ bottom: true }}
          >
            <div className="btn-box ">
              <a href="#hireme" className="btn">
                Submit
              </a>
            </div>
          </SectionWithFade>
        </form>
      </section>
    </>
  );
};
export default Contact;
