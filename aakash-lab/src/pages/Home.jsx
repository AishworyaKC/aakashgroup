import React from 'react';
import Header from '../sections/Header';
import Slider from '../sections/Slider';
import About from '../sections/About';
import Team from '../sections/Team';
import Contact from '../sections/Contact';
import Footer from '../sections/Footer';

const Home = () => {
  return (
    <>
      <Header />
      <Slider />
      <About />
      <Team />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
