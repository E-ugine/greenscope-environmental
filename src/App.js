import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './component/NavBar';
import Hero from './component/Hero';
import Footer from './component/Footer';

export default function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Hero />
        <Hero />
        <Footer />
      </div>
    </Router>
  );
}
