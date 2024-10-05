import React from "react";
import { useState, useRef, useEffect } from "react";
const Nav = (props) => {
  const navRef = useRef(null);

  const [activeItem, setActiveItem] = useState("home");
  const [menuIcon, setMenuIcon] = useState(false);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // header style
      /* let header = document.querySelector("header");
      header.classList.toggle("sticky", window.scrollY > 50); */

      // sections style
      const nav = navRef.current;
      const sections = document.querySelectorAll("section");

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const navHeight = nav.offsetHeight;
        const id = section.getAttribute("id");
        if (
          window.pageYOffset >= sectionTop - navHeight - 400 &&
          window.pageYOffset < sectionTop + sectionHeight + 400
        ) {
          setActiveItem(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavItemClick = (itemName) => {
    setActiveItem(itemName);
    setMenu(!menu);
    setMenuIcon(!menuIcon);
  };

  return (
    <>
      <nav className={`navbar ${props.menuActive}`} ref={navRef}>
        <a
          href="#home"
          className={activeItem === "home" ? "active" : ""}
          onClick={() => handleNavItemClick("home")}
        >
          Home
        </a>
        <a
          href="#about"
          className={activeItem === "about" ? "active" : ""}
          onClick={() => handleNavItemClick("about")}
        >
          About
        </a>
        <a
          href="#education"
          className={activeItem === "education" ? "active" : ""}
          onClick={() => handleNavItemClick("education")}
        >
          Education
        </a>
        <a
          href="#skills"
          className={activeItem === "skills" ? "active" : ""}
          onClick={() => handleNavItemClick("skills")}
        >
          Skills
        </a>
        <a
          href="#contact"
          className={activeItem === "contact" ? "active" : ""}
          onClick={() => handleNavItemClick("contact")}
        >
          Contact
        </a>
        <span className="active-nav"></span>
      </nav>
    </>
  );
};

export default Nav;
