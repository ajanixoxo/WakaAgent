/* eslint-disable react/prop-types */
import React, { useState } from 'react'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
AOS.init();
import './Home.css'
import HowTo from './HowTo';
import Hero from './Hero';
import About from './About';
import Contact from './Contact';
import Reviews from './Reviews';
import Footer from './Footer';
import Area from './Area';


function Home() {

 
 
 




  return (
    <>
      <Hero />
      <HowTo />
      <Area />
      <About />
      <Contact />
      <Reviews />
      <Footer />

    
    
    </>

  )
}

export default Home