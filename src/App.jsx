/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";
import Contact from "./Components/Contact";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  nameAbove: "Hello, I'm",
  name: "Virender Prasad" ,
  title: "MERN Stack Developer",
  email: "virender288@gmail.com",
  gitHub: "Virenishere",
  instagram: "",
  linkedIn: "virenderprasad",
  medium: "",
  twitter: "Viren_iz_here",
  youTube: "",
};

const primaryColor = "#C8C2AE";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home nameAbove={siteProps.nameAbove} name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Contact />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
