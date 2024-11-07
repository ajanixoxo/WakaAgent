import React from 'react';
import { Home, Facebook, Twitter, Linkedin, Instagram, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import Waka from '/assets/images/logo/logo.png'
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-sky-500 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-4 md:mb-0">
            <img src={Waka} alt="logo" className="w-32 lg:w-36"  />
            <div>
              <h2 className="text-xl font-bold hidden"> Agent Waka</h2>
              <p className="text-smtext-sky- hidden">Rental Service</p>
            </div>
          </div>
          <nav className="mb-4 md:mb-0">
            <ul className="flex flex-wrap justify-center space-x-6">
              <li><a href="#" className="hover:text-sky-500 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-sky-500 transition-colors">About</a></li>
              <li><a href="#service" className="hover:text-sky-500 transition-colors">How To</a></li>
              <li><Link to="/register-agent" className="hover:text-sky-500 transition-colors">Join Team</Link></li>
              <li><a href="#contact" className="hover:text-sky-500 transition-colors">Contact</a></li>
            </ul>
          </nav>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-sky-500 transition-colors">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-sky-500 transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-sky-500 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-sky-500 transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="text-center text-smtext-sky-200">
          <p>Copyright © 2024.WakaAgent</p>
        </div>
      </div>
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 bg-sky-500 text-white p-2 rounded-full shadow-lg hover:bg-sky-600 transition-colors"
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-6 h-6" />
      </button>
    </footer>
  );
};

export default Footer;