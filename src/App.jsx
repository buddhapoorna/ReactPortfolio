import Navbar from './pages/components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Footer from './pages/components/Footer';
import 'aos/dist/aos.css';
import './index.css';
import Projects from './pages/projects';


function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
     <Projects/>
      <Contact />
      <Footer/>
    </>
  );
}
export default App;
