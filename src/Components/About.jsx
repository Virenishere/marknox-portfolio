import React from "react";
import image from "../images/graybackground.jpg";
import "./About.css"


const About = () => {
  
  


  return (
    <section
      className="padding relative"
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
