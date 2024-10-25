/**
 * Home component
 *
 * The section at the top of the page to display image of your
 * choice, name and title that describes your career focus.
 */

import React, { useState } from 'react';
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";
import "./Home.css";
import Typewriter from 'typewriter-effect';

/**
 * Home background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/background.jpg";

const imageAltText = "Adult male with white background";

const Home = ({ nameAbove, name, title }) => {

  const [isMoved, setIsMoved] = useState(false);

  const handleClick = () => {
      setIsMoved(!isMoved);
  };


  return (
    <section id="home" className="min-height">
      <img className="background" src={image} alt="" />
      <div style={{ position: 'absolute', top: '5rem', left: '2rem', width: '15rem', color:"black" }}>
      <h2 className="nameAbove">
        <Typewriter
          options={{
            strings: [nameAbove],
            autoStart: true,
            loop: true,
            cursor: null
          }}
        />
      </h2>
      <h1 className="name">
        <Typewriter
          options={{
            strings: [name],
            autoStart: true,
            loop: true,
            cursor: null
          }}
        />
      </h1>
      <h2 className="nameTitle">
        <Typewriter
          options={{
            strings: [title],
            autoStart: true,
            loop: true,
            cursor: null
          }}
        />
      </h2>
    </div>
      <a href="#about" onClick={handleClick} style={{ position: "absolute", bottom: "3rem", left: "50%", transform: "translateX(-50%)" }}>
        <img src={arrowSvg} className={`arrow-icon ${isMoved ? 'move-down' : ''}`} alt={imageAltText} />
      </a>
    </section>
  );
};

Home.defaultProps = {
  nameAbove: "",
  name: "",
  title: "",
};

Home.propTypes = {
  nameAbove: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
