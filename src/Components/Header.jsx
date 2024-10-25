/**
 * Header component
 *
 * Top navigation bar for your site. Set to remain visible as the
 * user scrolls so that they can constantly reach any part of your page.
 */
import React, { useState } from "react";
import "./Header.css"
import { FaBars } from "react-icons/fa";

const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () =>{
    setIsMenuOpen(!isMenuOpen);
  }

return (
  <div className="hamburger-menu">
    <div className="hamburger-icon" onClick={toggleMenu}>
      <FaBars />
    </div>
    <div className={`menu-links ${isMenuOpen ? "active" : ""}`}>
      <a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
      <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
      <a href="#portfolio" onClick={() => setIsMenuOpen(false)}>Portfolio</a>
      <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
    </div>
  </div>
);
};

export default Header;
