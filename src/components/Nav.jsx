import React from "react";
import "../index.css";

const Nav = () => {
  return (
    <nav>
      <div className="left">
        <a href="#hero">
          <img src="/imgs/logo_text.png" className="logo" alt="logo" />
        </a>
      </div>
      <div className="right">
        <div className="links">
          <a href="#about">About</a>
          <a href="#contact">Contact Us</a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
