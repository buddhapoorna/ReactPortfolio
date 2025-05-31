// import { useEffect } from "react";
// import Typed from "typed.js";
// import { FaDownload, FaGithub } from "react-icons/fa";
// import "./Home.css";

// function Home() {
//   useEffect(() => {
//     const typed = new Typed("#element", {
//       strings: ["Front End Developer", "Video Editor", "React Enthusiast"],
//       typeSpeed: 60,
//       backSpeed: 50,
//       loop: true,
//     });

//     return () => typed.destroy();
//   }, []);

//   return (
//     <section className="firstSection" id="home">
//       {/* Decorative shapes */}
//       <div className="backgroundShapes">
//         <span className="shape shape1"></span>
//         <span className="shape shape2"></span>
//         <span className="shape shape3"></span>
//       </div>

//       <div className="profileContainer" data-aos="fade-right">
//         <img src="/profile.png" alt="Poorna" className="profileImage" />
//       </div>

//       <div className="contentSection" data-aos="fade-left">
//         <h1 className="introText">
//           Hi!! My Name Is <span className="purpleGradient">Poorna</span>
//         </h1>
//         <div className="passionText">And I am a Passionate</div>
//         <span id="element" className="typedText"></span>

//         <div className="buttons">
//           <button className="btn btnDownload">
//             <FaDownload className="icon" />
//             <a href="PoornaBuddhaResume.docx" download>
//               Download Resume
//             </a>
//           </button>
//           <button className="btn btnGitHub">
//             <FaGithub className="icon" />
//             <a
//               href="https://github.com/buddhapoorna"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Visit GitHub
//             </a>
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Home;


// import React from "react";
// import Typed from "react-typed";
// import "./Home.css";

// function Home() {
//   return (
//     <section className="firstSection" id="home">
//       <div className="profileContainer">
//         <img src="/profile.png" alt="Profile" className="profileImage" />
//       </div>

//       <div className="contentSection">
//         <h1>
//           Hi!! My Name Is <span className="purple">Poorna</span>
//         </h1>
//         <div className="passionText">And I am a Passionate</div>

//         <Typed
//           className="typedText"
//           strings={["Front End Developer", "Video Editor", "React Enthusiast"]}
//           typeSpeed={60}
//           backSpeed={50}
//           loop
//           showCursor
//           cursorChar="|"
//         />

//         <div className="buttons">
//           <button className="btn">
//             <a href="PoornaBuddhaResume.docx" download>
//               Download Resume
//             </a>
//           </button>
//           <button className="btn">
//             <a
//               href="https://github.com/buddhapoorna"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Visit GitHub
//             </a>
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Home;




import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { FaDownload, FaBriefcase } from "react-icons/fa";
import resumeFile from "../assets/PoornaResume.pdf";
import profileImage from '../assets/profile.jpg';

import "./Home.css";

function Home() {
  const typedRef = useRef(null); // Create a ref for the span element
  const typedInstance = useRef(null); // Ref to store Typed instance

  useEffect(() => {
    if (typedRef.current) {
      typedInstance.current = new Typed(typedRef.current, {
        strings: ["Front End Developer", "React Enthusiast", "Video Editor"],
        typeSpeed: 60,
        backSpeed: 50,
        loop: true,
        showCursor: false,
        
      });
    }

    return () => {
      if (typedInstance.current) typedInstance.current.destroy();
    };
  }, []);

  return (
    <section className="firstSection" id="home">
      <div className="backgroundShapes">
        <span className="shape shape1"></span>
        <span className="shape shape2"></span>
        <span className="shape shape3"></span>
      </div>

      <div className="profileContainer" data-aos="fade-right">
       <img src={profileImage} alt="Poorna" className="profileImage" />
 
      </div>

      <div className="contentSection" data-aos="fade-left">
        <h1 className="introText">
          Hi!! My Name Is <span className="purpleGradient">Poorna</span>
        </h1>
        <div className="passionText">And I am a Passionate</div>
        <span ref={typedRef} className="typedText"></span>

        <div className="buttons">
          <button className="btn btnDownload">
            <FaDownload className="icon" />
             <a href={resumeFile} download style={{ textDecoration: "none", color: "white" }}>
              Download Resume
            </a>
          </button>
          <button
  className="btn btnHire"
  onClick={() => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  }}
>
  <FaBriefcase className="icon" />
  Hire Me
</button>


          
        </div>
      </div>
    </section>
  );
}

export default Home;
