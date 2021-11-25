import React, { useState } from "react";
import { Menu, Logo } from "..";
import "./navbar.css";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const ToggleMenu = () => {
    active ? setActive(false) : setActive(true);
  };

  return (
    <>
      <nav onClick={ToggleMenu}>
        <Menu />
      </nav>
      <Logo />
      <nav className={active ? "navbar active" : "navbar"} onClick={ToggleMenu}>
        <a href="#home">home</a>
        <a href="#about">about</a>
        <a href="#destination">destination</a>
        <a href="#services">services</a>
        <a href="#gallery">gallery</a>
        <a href="#blogs">blogs</a>
      </nav>
    </>
  );
};

export default Navbar;
