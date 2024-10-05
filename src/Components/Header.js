import React, { useState, useEffect, useRef } from "react";
import { BiBlock, BiCloset, BiMenu, BiX } from "react-icons/bi";
import Nav from "./OtherComponents/Nav";

const Header = () => {
  const [activeItem, setActiveItem] = useState("");
  const [menuIcon, setMenuIcon] = useState(false);
  const [menu, setMenu] = useState(false);
  const [menuActive, setMenuActive] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      // header style
      let header = document.querySelector("header");
      header.classList.toggle("sticky", window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleMenuIconClick = () => {
    setMenuIcon(!menuIcon);
    setMenu(!menu);
    setMenuActive("active");
  };

  return (
    <>
      <header className="header">
        <div className="header-logo">Moncef.</div>
        <div className="menu-icon" id="menu-icon" onClick={handleMenuIconClick}>
          {!menuIcon ? <BiMenu size={40} /> : <BiX size={40} color="white" />}
        </div>
        {menu ? <Nav menuActive={menuActive} /> : <Nav />}
      </header>
    </>
  );
};

export default Header;
