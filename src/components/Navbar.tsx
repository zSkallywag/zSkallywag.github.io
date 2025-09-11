import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Shield, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setServicesOpen(false);
  };

  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'Chi Siamo', path: '/chi-siamo' },
    { title: 'Servizi', path: '/servizi', hasDropdown: true },
    { title: 'Metodo', path: '/metodo' },
    { title: 'Contatti', path: '/contatti' },
  ];

  const serviceLinks = [
    { title: 'Cybersecurity', path: '/servizi/cybersecurity' },
    { title: 'Infrastrutture IT', path: '/servizi/infrastrutture-it' },
    { title: 'Gestione Dati', path: '/servizi/gestione-dati' },
    { title: 'Consulenza Informatica', path: '/servizi/consulenza-informatica' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-primary-dark/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center" onClick={closeMenu}>
          <Logo />
          <span className="ml-2 text-xl font-bold">CyberNest</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => 
            link.hasDropdown ? (
              <div key={link.title} className="relative group">
                <button 
                  className="flex items-center text-white hover:text-accent-bright transition-colors duration-300"
                  onClick={() => setServicesOpen(!servicesOpen)}
                >
                  {link.title}
                  <ChevronDown className="ml-1 w-4 h-4" />
                </button>
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute left-0 mt-2 w-64 bg-primary-dark/90 backdrop-blur-sm border border-accent/20 rounded-md shadow-lg overflow-hidden z-20"
                    >
                      <div className="py-2">
                        {serviceLinks.map((service) => (
                          <NavLink
                            key={service.title}
                            to={service.path}
                            className={({ isActive }) => 
                              `block px-4 py-2 text-sm hover:bg-accent/20 transition-colors duration-200 ${
                                isActive ? 'text-accent-bright' : 'text-white'
                              }`
                            }
                            onClick={closeMenu}
                          >
                            {service.title}
                          </NavLink>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <NavLink
                key={link.title}
                to={link.path}
                className={({ isActive }) => 
                  `text-white hover:text-accent-bright transition-colors duration-300 ${
                    isActive ? 'text-accent-bright font-medium' : ''
                  }`
                }
                onClick={closeMenu}
              >
                {link.title}
              </NavLink>
            )
          )}
          <Link to="/contatti" className="btn-primary flex items-center">
            <Shield className="mr-2 w-4 h-4" />
            Audit Gratuito
          </Link>
        </div>
        
        {/* Mobile Navigation Button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label={isOpen ? "Chiudi menu" : "Apri menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      
      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-primary-dark/95 backdrop-blur-sm overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navLinks.map((link) => 
                link.hasDropdown ? (
                  <div key={link.title} className="flex flex-col">
                    <button 
                      className="flex items-center justify-between text-white py-2 border-b border-accent/20"
                      onClick={() => setServicesOpen(!servicesOpen)}
                    >
                      {link.title}
                      <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="ml-4 mt-2 flex flex-col space-y-2"
                        >
                          {serviceLinks.map((service) => (
                            <NavLink
                              key={service.title}
                              to={service.path}
                              className={({ isActive }) => 
                                `py-2 text-sm ${
                                  isActive ? 'text-accent-bright' : 'text-white'
                                }`
                              }
                              onClick={closeMenu}
                            >
                              {service.title}
                            </NavLink>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <NavLink
                    key={link.title}
                    to={link.path}
                    className={({ isActive }) => 
                      `text-white py-2 border-b border-accent/20 ${
                        isActive ? 'text-accent-bright font-medium' : ''
                      }`
                    }
                    onClick={closeMenu}
                  >
                    {link.title}
                  </NavLink>
                )
              )}
              <Link 
                to="/contatti" 
                className="btn-primary text-center mt-4"
                onClick={closeMenu}
              >
                <Shield className="inline-block mr-2 w-4 h-4" />
                Audit Gratuito
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;