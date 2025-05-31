// import React from "react";
// import "./About.css";

// function About() {
//   return (
//     <section className="aboutSection" id="about">
//       <h2 className="sectionTitle">About Me</h2>
//       <p className="aboutText">
//         I am a front-end developer proficient in React, currently expanding my
//         expertise into backend technologies with the goal of becoming a full-stack developer.
//         I am passionate about crafting clean, intuitive, and user-friendly designs that bring
//         ideas to life through functional and engaging websites.
//       </p>
//       <p className="aboutText">
//         With a foundation in Java programming, I am committed to continuous learning and
//         practical application of new skills. Beyond coding, I enjoy video editing and poster design,
//         while drawing remains my personal hobby — a creative outlet that inspires my work and fuels
//         my passion for design.
//       </p>
//     </section>
//   );
// }

// export default About;




import React, { useEffect } from 'react';
import AOS from 'aos';
import './About.css';

function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="aboutSection" id="about" data-aos="fade-up">
      <div className="container">
        <h2 className="sectionTitle">About Me</h2>
        <p className="aboutText">
          I am a front-end developer proficient in React, currently expanding my expertise into backend technologies with the goal of becoming a full-stack developer.
          I am passionate about crafting clean, intuitive, and user-friendly designs that bring ideas to life through functional and engaging websites.
        </p>
        <p className="aboutText">
          With a foundation in Java programming, I am committed to continuous learning and practical application of new skills.
          Beyond coding, I enjoy video editing and poster design, while drawing remains my personal hobby—a creative outlet that inspires my work and fuels my passion for design.
        </p>
      </div>
    </section>
  );
}

export default About;
