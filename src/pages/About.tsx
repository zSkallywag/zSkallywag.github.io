import { motion } from 'framer-motion';
import { FileCode, Shield, Users, Heart, BarChart, Award } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';

const About = () => {
  const founders = [
    {
      name: 'Gaetano Cesano',
      role: 'Fondatore & CEO',
      expertise: 'IT Network & Security Engineer | Vulnerability Researcher | Discovered CVE-2025-49618',
      image: '/WhatsApp Image 2025-05-27 at 14.20.45.jpeg',
      description: 'IT Network & Security Engineer | Vulnerability Researcher | Discovered CVE-2025-49618'
    }
  ];
  
  const values = [
    {
      title: 'Trasparenza',
      description: 'Crediamo in relazioni oneste e trasparenti con i nostri clienti, comunicando sempre in modo chiaro e diretto.',
      icon: <Users size={36} className="text-accent-bright" />
    },
    {
      title: 'Innovazione',
      description: 'Ci impegniamo a rimanere all\'avanguardia delle tecnologie emergenti per offrire soluzioni innovative ed efficaci.',
      icon: <FileCode size={36} className="text-accent-bright" />
    },
    {
      title: 'Formazione continua',
      description: 'Investiamo costantemente nella formazione del nostro team per garantire competenze sempre aggiornate.',
      icon: <BarChart size={36} className="text-accent-bright" />
    },
    {
      title: 'Eccellenza',
      description: 'Puntiamo all\'eccellenza in ogni aspetto del nostro lavoro, dai progetti più complessi ai dettagli più piccoli.',
      icon: <Award size={36} className="text-accent-bright" />
    },
    {
      title: 'Sicurezza',
      description: 'La sicurezza è alla base di tutto ciò che facciamo, garantendo la protezione dei dati e delle informazioni dei nostri clienti.',
      icon: <Shield size={36} className="text-accent-bright" />
    },
    {
      title: 'Centralità del cliente',
      description: 'Mettiamo i clienti al centro, creando soluzioni su misura per rispondere alle loro specifiche esigenze.',
      icon: <Heart size={36} className="text-accent-bright" />
    }
  ];
  
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden grid-bg">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/50 to-primary/70 backdrop-blur-sm" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 heading-gradient">Chi Siamo</h1>
            <p className="text-xl text-gray-300 mb-8">
              CyberNest nasce dalla passione per la tecnologia e dalla visione di due esperti nel settore IT che hanno unito le loro competenze per creare un partner unico per la trasformazione digitale delle aziende.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Founders Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Il Fondatore"
            subtitle="Competenza, passione e visione al servizio dei nostri clienti."
            light
            centered
          />
          
          <div className="flex justify-center max-w-2xl mx-auto">
            {founders.map((founder, index) => (
              <motion.div
                key={index}
                className="card-gradient rounded-lg overflow-hidden border-glow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="h-100 overflow-hidden">
                  <img 
                    src={founder.image} 
                    alt={founder.name}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-1">{founder.name}</h3>
                  <p className="text-accent-bright mb-2">{founder.role}</p>
                  <p className="text-sm text-gray-400 mb-4">{founder.expertise}</p>
                  <p className="text-gray-300">{founder.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Mission & Vision Section */}
      <section className="py-20 bg-accent/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6 heading-gradient">La Nostra Mission</h2>
              <div className="w-20 h-1 bg-accent-bright mb-6" />
              <p className="text-lg text-gray-300 mb-6">
                La nostra missione è fornire soluzioni tecnologiche integrate e su misura, che consentano alle aziende di ogni dimensione di crescere in sicurezza nell'era digitale.
              </p>
              <p className="text-lg text-gray-300">
                Crediamo che la tecnologia debba essere un alleato per il business, non un ostacolo. Per questo progettiamo soluzioni intuitive, scalabili e robuste, sempre in linea con le esigenze specifiche di ogni cliente.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold mb-6 heading-gradient">La Nostra Vision</h2>
              <div className="w-20 h-1 bg-accent-bright mb-6" />
              <p className="text-lg text-gray-300 mb-6">
                Aspiriamo a diventare il punto di riferimento tecnologico per le aziende del Sud Italia, guidandole nel processo di trasformazione digitale con soluzioni innovative e approccio umano.
              </p>
              <p className="text-lg text-gray-300">
                Immaginiamo un futuro in cui ogni azienda, indipendentemente dalle dimensioni, possa accedere a tecnologie all'avanguardia e beneficiare di un partner affidabile che la supporti in ogni fase del suo percorso digitale.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="I Nostri Valori"
            subtitle="Principi che guidano ogni nostra azione e decisione."
            light
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="card-gradient rounded-lg p-6 border-glow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, boxShadow: '0 10px 25px rgba(168, 60, 240, 0.2)' }}
              >
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-primary-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 heading-gradient">
                Entra a far parte della famiglia CyberNest
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Scopri come possiamo aiutare la tua azienda a crescere in modo sicuro ed efficiente con le nostre soluzioni tecnologiche integrate.
              </p>
              <Button 
                to="/contatti"
                variant="primary"
                size="lg"
              >
                Contattaci Ora
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;