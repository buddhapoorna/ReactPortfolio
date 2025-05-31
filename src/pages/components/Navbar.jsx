import { useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="logo">Poorna's Porfolio</h1>

        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <ul className={`nav-links ${menuOpen ? 'show' : ''}`}>
          <li><Link to="home" smooth={true} duration={500} onClick={closeMenu}>Home</Link></li>
          <li><Link to="about" smooth={true} duration={500} onClick={closeMenu}>About</Link></li>
          <li><Link to="skills" smooth={true} duration={500} onClick={closeMenu}>Skills</Link></li>
          <li><Link to="projects" smooth={true} duration={500} onClick={closeMenu}>Projects</Link></li>
          <li><Link to="contact" smooth={true} duration={500} onClick={closeMenu}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
