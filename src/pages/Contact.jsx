// // // Contact.jsx
// // import React from 'react';
// // import './Contact.css';
// // import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

// // const Contact = () => {
// //   return (
// //     <section className="contact-section" id="contact">
// //       <div className="contact-container">
// //         <h2>Contact Me</h2>
// //         <p className="subtitle">I’d love to hear about your project or opportunity.</p>

// //         <div className="contact-content">
// //           <form className="contact-form">
// //             <input type="text" placeholder="Your Name" required />
// //             <input type="email" placeholder="Your Email" required />
// //             <textarea placeholder="Your Message" rows="5" required></textarea>
// //             <button type="submit">Send Message</button>
// //           </form>

// //           <div className="contact-info">
// //             <h3>Direct Contact</h3>
// //             <p>Email: <a href="mailto:your@email.com">your@email.com</a></p>
// //             <p>Location: Open to remote work</p>

// //             <h3>Connect with me</h3>
// //             <div className="social-icons">
            
// //               <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
// //               <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
// //               <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
// //               <a href="mailto:your@email.com"><FaEnvelope /></a>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Contact;







// import React from 'react';
// import './Contact.css';
// import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaYoutube } from 'react-icons/fa';

// const Contact = () => {
//   return (
//     <section className="contact-section" id="contact">
//       <div className="contact-container">
//         <h2>Contact Me</h2>
//         <p className="subtitle">I'm open to collaboration, freelance work, or new opportunities. Let's connect!</p>

//         <div className="contact-content">
//           <form className="contact-form">
//             <div className="form-group">
//               <label htmlFor="name">Name</label>
//               <input type="text" id="name" placeholder="Your Name" required />
//             </div>

//             <div className="form-group">
//               <label htmlFor="email">Email</label>
//               <input type="email" id="email" placeholder="poornabuddha2318@gmail.com" required />
//             </div>

//             <div className="form-group">
//               <label htmlFor="message">Message</label>
//               <textarea id="message" placeholder="Your Message" rows="5" required></textarea>
//             </div>

//             <button type="submit" className="send-button">Send Message</button>
//           </form>

//           <div className="contact-info">
//             <h3>Direct Contact</h3>
//             <p>Email: <a href="poornabuddha2318@gmail.com">your@email.com</a></p>
            

//             <h3>Connect with me</h3>
//             <div className="social-icons">
//               <a href="https://github.com/dashboard" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
//               <a href="https://www.linkedin.com/in/poorna-buddha-678373235/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
//               <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
//               <a href="https://www.youtube.com/@Talentedmuthyams" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
//               <a href="poornabuudha2318@gmail.com"><FaEnvelope /></a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;


import React, { useState, useRef } from 'react';
import './Contact.css';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaYoutube } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_bf3q6qr',   // 👉 replace with actual Service ID
      'template_vtlduki',  // 👉 replace with actual Template ID
      form.current,
      'nL0hVzWEBfetjRpNV'    // 👉 replace with actual Public Key
    ).then((result) => {
      console.log(result.text);
      setMessageSent(true);
      form.current.reset();
    }, (error) => {
      console.log(error.text);
    });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2>Contact Me</h2>
        <p className="subtitle">I'm open to collaboration, freelance work, or new opportunities. Let's connect!</p>

        <div className="contact-content">
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="user_name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="user_email" required />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>

            <button type="submit" className="send-button">Send Message</button>
            {messageSent && <p className="success-message">✅ Message sent successfully!</p>}
          </form>

          <div className="contact-info">
            <h3>Direct Contact</h3>
            <p>Email: <a href="mailto:poornabuddha2318@gmail.com">poornabuddha2318@gmail.com</a></p>

            <h3>Connect with me</h3>
            <div className="social-icons">
              <a href="https://github.com/buddhapoorna" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/poorna-buddha-678373235/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a href="https://www.youtube.com/@Talentedmuthyams" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
              <a href="mailto:poornabuddha2318@gmail.com"><FaEnvelope /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
