
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Collaborate from './pages/Collaborate';
import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/perros" element={<Gallery title="Nuestros Perros" type="perro" />} />
            <Route path="/gatos" element={<Gallery title="Nuestros Gatos" type="gato" />} />
            <Route path="/finales-felices" element={<Gallery title="Finales Felices" isHappyEnding={true} />} />
            <Route path="/nosotros" element={<About />} />
            <Route path="/colabora" element={<Collaborate />} />
            <Route path="/contacto" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
