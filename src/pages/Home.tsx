import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Server, Database, Code, Globe, UserCheck, ArrowRight, Zap, Lock, Cloud } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import Logo from '../components/Logo';

const Home = () => {
  const services = [
    {
      title: 'Cybersecurity',
      description: 'Protezione avanzata contro minacce informatiche, audit di sicurezza e consulenza GDPR.',
      icon: <Shield size={32} />,
      link: '/servizi/cybersecurity',
      features: ['Audit di sicurezza', 'Test di vulnerabilità', 'Monitoraggio SIEM']
    },
    {
      title: 'Infrastrutture IT',
      description: 'Progettazione, implementazione e gestione di infrastrutture IT sicure ed efficienti.',
      icon: <Server size={32} />,
      link: '/servizi/infrastrutture-it',
      features: ['Reti e server', 'Virtualizzazione', 'Cloud e VPN']
    },
    {
      title: 'Gestione Dati',
      description: 'Soluzioni di backup, disaster recovery e replica in tempo reale per i tuoi dati sensibili.',
      icon: <Database size={32} />,
      link: '/servizi/gestione-dati',
      features: ['Backup automatizzati', 'Disaster recovery', 'Replica in tempo reale']
    },
    {
      title: 'Consulenza Informatica',
      description: 'Ottimizzazione dei processi IT, formazione del personale e supporto tecnico continuo.',
      icon: <UserCheck size={32} />,
      link: '/servizi/consulenza-informatica',
      features: ['Audit dei processi', 'Formazione', 'Supporto continuo']
    }
  ];
  
  const highlights = [
    {
      title: 'Partner Unico',
      description: 'Un solo interlocutore per tutte le tue esigenze digitali.',
      icon: <Zap size={24} className="text-accent-bright" />
    },
    {
      title: 'Approccio Integrato',
      description: 'Soluzioni coordinate che lavorano in sinergia tra loro.',
      icon: <Lock size={24} className="text-accent-bright" />
    },
    {
      title: 'Tecnologie All\'avanguardia',
      description: 'Utilizziamo le più recenti tecnologie per garantire prestazioni ottimali.',
      icon: <Cloud size={24} className="text-accent-bright" />
    }
  ];
  
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen pt-32 pb-20 relative overflow-hidden grid-bg">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/50 to-primary/70 backdrop-blur-sm" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 heading-gradient"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Un unico partner per la tua trasformazione digitale
              </motion.h1>
              
              <motion.p 
                className="text-xl text-gray-300 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                CyberNest offre soluzioni integrate in cybersecurity, infrastrutture IT, comunicazione digitale, sviluppo web, gestione dati e consulenza informatica.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Button 
                  to="/contatti"
                  variant="primary"
                  size="lg"
                  icon={<Shield size={20} />}
                >
                  Richiedi una consulenza
                </Button>
                
                <Button 
                  to="/servizi"
                  variant="outline"
                  size="lg"
                  icon={<ArrowRight size={20} />}
                >
                  Scopri i nostri servizi
                </Button>
              </motion.div>
            </div>
            
            <div className="lg:w-1/2 flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="relative"
              >
                <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-accent/20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 filter blur-3xl animate-pulse-slow" />
                <Logo size="large" />
              </motion.div>
            </div>
          </div>
          
          {/* Stats */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {highlights.map((highlight, index) => (
              <motion.div 
                key={index}
                className="card-gradient p-6 rounded-lg border-glow text-center"
                whileHover={{ y: -5, boxShadow: '0 10px 25px rgba(168, 60, 240, 0.2)' }}
              >
                <div className="flex justify-center mb-4">
                  {highlight.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{highlight.title}</h3>
                <p className="text-gray-300">{highlight.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="I Nostri Servizi"
            subtitle="Offriamo una gamma completa di servizi IT per supportare la crescita e la sicurezza della tua azienda."
            centered
            light
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  link={service.link}
                  features={service.features}
                />
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button 
              to="/servizi"
              variant="outline"
              size="lg"
            >
              Esplora tutti i servizi
            </Button>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden bg-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6 heading-gradient"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Scopri le vulnerabilità della tua rete
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Contattaci oggi stesso per prenotare un audit gratuito della tua infrastruttura IT e scoprire come possiamo aiutarti a migliorare la sicurezza e l'efficienza del tuo sistema.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button 
                to="/contatti"
                variant="primary"
                size="lg"
                icon={<Shield size={20} />}
              >
                Prenota un Audit Gratuito
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;