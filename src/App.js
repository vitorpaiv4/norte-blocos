import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Footer from './components/Footer';
import Contact from './components/Contact';

import './index.css';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Contact />

      <Footer />
    </div>
  );
}

export default App;
