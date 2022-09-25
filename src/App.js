import React from "react";
import CTA from "./components/CTA";
import Extension from "./components/Extension";
import FAQ from "./components/FAQ";
import Features from "./components/Features";
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'


function App() {
  return (
    <div className="font-rubik">
      <Navbar />
      <Hero />
      <Features />
      <Extension />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
