import { BiSolidUpArrowSquare } from "react-icons/bi";
import SectionWithFade from "./OtherComponents/SectionWithFade";
import { useInView } from "react-intersection-observer";
const Footer = () => {
  const [ref, inView] = useInView({
    triggerOnce: false, // Set this to true if you want the animation to trigger only once
    threshold: 0, // Adjust this threshold as needed
  });
  return (
    <>
      <footer className="footer" ref={ref}>
        <SectionWithFade
          inView={inView}
          duration={1000}
          delay={350}
          distance={"25px"}
          direction={{ bottom: true }}
        >
          <div className="footer-text">
            <p>
              Copyright &copy; 2024 Par Chelgham Mounsif | Tous Droits Réservés
            </p>
          </div>
        </SectionWithFade>
        <SectionWithFade
          inView={inView}
          duration={1000}
          delay={350}
          distance={"25px"}
          direction={{ bottom: true }}
        >
          <div className="footer-iconTop">
            <a href="#home">
              <BiSolidUpArrowSquare size={40} color="#27ae60" />
            </a>
          </div>
        </SectionWithFade>
      </footer>
    </>
  );
};
export default Footer;
