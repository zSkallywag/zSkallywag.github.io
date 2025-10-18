import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, MapPin } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary-dark/80 backdrop-blur-sm border-t border-accent/20 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 - About */}
          <div>
            <div className="flex items-center mb-4">
              <Logo />
              <span className="ml-2 text-xl font-bold">CyberNest</span>
            </div>
            <p className="text-gray-300 mb-4">
              CyberNest è il tuo partner unico per la trasformazione digitale. Offriamo soluzioni integrate in cybersecurity, IT, comunicazione digitale e consulenza informatica.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent-bright transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent-bright transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent-bright transition-colors duration-300">
                <Linkedin size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent-bright transition-colors duration-300">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-accent/20 pb-2">Link Rapidi</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-accent-bright transition-colors duration-300">Home</Link>
              </li>
              <li>
                <Link to="/chi-siamo" className="text-gray-300 hover:text-accent-bright transition-colors duration-300">Chi Siamo</Link>
              </li>
              <li>
                <Link to="/servizi" className="text-gray-300 hover:text-accent-bright transition-colors duration-300">Servizi</Link>
              </li>
              <li>
                <Link to="/metodo" className="text-gray-300 hover:text-accent-bright transition-colors duration-300">Metodo di Lavoro</Link>
              </li>
              <li>
                <Link to="/contatti" className="text-gray-300 hover:text-accent-bright transition-colors duration-300">Contatti</Link>
              </li>
            </ul>
          </div>
          
          {/* Column 3 - Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-accent/20 pb-2">Servizi</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/servizi/cybersecurity" className="text-gray-300 hover:text-accent-bright transition-colors duration-300">Cybersecurity</Link>
              </li>
              <li>
                <Link to="/servizi/infrastrutture-it" className="text-gray-300 hover:text-accent-bright transition-colors duration-300">Infrastrutture IT</Link>
              </li>
              <li>
                <Link to="/servizi/gestione-dati" className="text-gray-300 hover:text-accent-bright transition-colors duration-300">Gestione Dati</Link>
              </li>
              <li>
                <Link to="/servizi/consulenza-informatica" className="text-gray-300 hover:text-accent-bright transition-colors duration-300">Consulenza Informatica</Link>
              </li>
            </ul>
          </div>
          
          {/* Column 4 - Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-accent/20 pb-2">Contatti</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-accent-bright mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-300">Vivaio Digitale, Via Luigi Pasteur, 26<br />70024 Gravina in Puglia (BA)</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-accent-bright mr-3 flex-shrink-0" />
                <a href="mailto:info@cybernest.it" className="text-gray-300 hover:text-accent-bright transition-colors duration-300">info@cybernest.it</a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-12 pt-4 border-t border-accent/20 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {currentYear} CyberNest. Tutti i diritti riservati.</p>
          <div className="mt-2 md:mt-0 flex space-x-4">
            <a href="#" className="hover:text-accent-bright transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-accent-bright transition-colors duration-300">Termini di Servizio</a>
            <a href="#" className="hover:text-accent-bright transition-colors duration-300">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;