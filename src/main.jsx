import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )



// import Navbar from './components/Navbar';
// import Home from './pages/Home';
// import About from './pages/About';
// import Skills from './pages/Skills';
// import Contact from './pages/Contact';
// import './index.css';

// function App() {
//   return (
//     <>
//       <Navbar />
//       <Home />
//       <About />
//       <Skills />
//       <Contact />
//     </>
//   );
// }
// export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Create a root and render the App component into the DOM
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
