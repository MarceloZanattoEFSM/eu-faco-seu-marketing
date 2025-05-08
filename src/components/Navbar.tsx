
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        isScrolled ? 'bg-dark-light/90 backdrop-blur-md py-3 shadow-md' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="/public/lovable-uploads/ae37cbee-2306-4d0f-881d-12198ce3a9cc.png"
            alt="Eu Faço Seu Marketing"
            className="h-10"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#sobre" className="text-white hover:text-primary transition-colors">Sobre</a>
          <a href="#servicos" className="text-white hover:text-primary transition-colors">Serviços</a>
          <a href="#beneficios" className="text-white hover:text-primary transition-colors">Benefícios</a>
          <a href="#depoimentos" className="text-white hover:text-primary transition-colors">Depoimentos</a>
          <a 
            href="https://wa.me/5511999907739?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20de%20marketing%20estratégico."
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Consultoria Gratuita
          </a>
        </div>

        {/* Mobile Navigation Toggle */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 focus:outline-none"
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-dark-light/95 backdrop-blur-lg shadow-lg py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <a href="#sobre" className="text-white hover:text-primary transition-colors px-4 py-2" onClick={() => setIsMenuOpen(false)}>Sobre</a>
            <a href="#servicos" className="text-white hover:text-primary transition-colors px-4 py-2" onClick={() => setIsMenuOpen(false)}>Serviços</a>
            <a href="#beneficios" className="text-white hover:text-primary transition-colors px-4 py-2" onClick={() => setIsMenuOpen(false)}>Benefícios</a>
            <a href="#depoimentos" className="text-white hover:text-primary transition-colors px-4 py-2" onClick={() => setIsMenuOpen(false)}>Depoimentos</a>
            <a 
              href="https://wa.me/5511999907739?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20de%20marketing%20estratégico."
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary mx-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Consultoria Gratuita
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
