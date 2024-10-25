import React, { useEffect } from "react";
import image from "../images/graybackground.jpg";
import "./About.css"


const About = () => {
  
  useEffect(() => {
    const starField = document.querySelector('.star-field');
    const numberOfStars = 500; // Adjust the number of stars here

    for (let i = 0; i < numberOfStars; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      star.style.top = Math.random() * 100 + '%'; // Random vertical position
      star.style.left = Math.random() * 100 + '%'; // Random horizontal position
      star.style.width = Math.random() * 2 + 'px'; // Random width between 0-2px
      star.style.height = star.style.width; // Make it circular
      star.style.animationDuration = Math.random() * 1.5 + 0.5 + 's'; // Random duration for twinkling
      starField.appendChild(star);
    }
  }, []);


  return (
    <section
      className="padding relative star-field"
      id="about"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      
      <div className="boxAbout" 
        style={{
          
        }}
      >
        <h2>About Myself</h2>
        <p className="large">
        
I am a freelance MERN stack web developer with a B.Tech in Electronics and Communication from GB Pant Institute of Engineering and Technology, Uttarakhand. My background as a Technical Support Engineer sharpens my problem-solving and client communication skills, and I’m dedicated to continuous learning and delivering creative solutions.
        </p>
        <hr />
        <ul>
          {["Web design", "User experience", "Inclusive design", "Focus group testing", "Mobile user interfaces", "Graphic design"].map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>
        I thrive on finding innovative solutions to challenges. Drawing from my experience as a MERN Stack Developer and Technical Support Engineer, I strive to enhance accessibility and improve user experiences in technology.
        </p>
      </div>
    </section>
  );
};

export default About;
