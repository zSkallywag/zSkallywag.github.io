import { motion } from 'framer-motion';
import { Shield, Server, Globe, Database, UserCheck } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';

const Services = () => {
  const services = [
    {
      title: 'Cybersecurity',
      description: 'Proteggi la tua azienda dalle minacce informatiche con soluzioni avanzate di sicurezza, audit e monitoraggio continuo.',
      icon: <Shield size={32} />,
      link: '/servizi/cybersecurity',
      features: [
        'Audit di sicurezza completi',
        'Test di vulnerabilità e penetration testing',
        'Simulazioni di phishing e formazione del personale',
        'Consulenza GDPR e normative sulla privacy',
        'Monitoraggio SIEM e gestione degli incidenti',
        'Soluzioni di firewall e protezione endpoint'
      ]
    },
    {
      title: 'Infrastrutture IT',
      description: 'Costruisci fondamenta solide per il tuo business con infrastrutture IT scalabili, resilienti e ottimizzate per le tue esigenze.',
      icon: <Server size={32} />,
      link: '/servizi/infrastrutture-it',
      features: [
        'Progettazione e implementazione di reti',
        'Configurazione e gestione server',
        'Soluzioni di virtualizzazione',
        'Migrazione e gestione cloud',
        'Implementazione VPN e accesso remoto sicuro',
        'Ottimizzazione delle performance'
      ]
    },
    {
      title: 'Gestione Dati',
      description: 'Proteggi, organizza e ottimizza i tuoi dati aziendali con soluzioni di backup, disaster recovery e gestione efficiente.',
      icon: <Database size={32} />,
      link: '/servizi/gestione-dati',
      features: [
        'Strategie e implementazione di backup',
        'Piani di disaster recovery',
        'Soluzioni di replica in tempo reale',
        'Archiviazione sicura e conforme alle normative',
        'Ottimizzazione database',
        'Gestione del ciclo di vita dei dati'
      ]
    },
    {
      title: 'Consulenza Informatica',
      description: 'Ottimizza i tuoi processi IT, forma il tuo personale e ricevi supporto continuo per tutte le tue esigenze tecnologiche.',
      icon: <UserCheck size={32} />,
      link: '/servizi/consulenza-informatica',
      features: [
        'Audit e ottimizzazione dei processi IT',
        'Formazione del personale',
        'Supporto tecnico continuativo',
        'Consulenza strategica IT',
        'Implementazione di soluzioni software',
        'Gestione progetti tecnologici'
      ]
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 heading-gradient">I Nostri Servizi</h1>
            <p className="text-xl text-gray-300 mb-8">
              Offriamo soluzioni integrate che coprono l'intero spettro delle esigenze IT aziendali, dalla sicurezza allo sviluppo, dall'infrastruttura alla consulenza strategica.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Services Grid Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="card-gradient rounded-lg overflow-hidden border-glow h-full">
                  <div className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="bg-accent/20 rounded-full w-16 h-16 flex items-center justify-center mr-4 text-accent-bright">
                        {service.icon}
                      </div>
                      <h2 className="text-2xl font-bold">{service.title}</h2>
                    </div>
                    
                    <p className="text-gray-300 mb-6">{service.description}</p>
                    
                    <h3 className="text-lg font-semibold mb-4">Caratteristiche principali:</h3>
                    <ul className="mb-8 space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-accent-bright mr-2">•</span>
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      to={service.link}
                      variant="primary"
                    >
                      Scopri di più
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Integrated Approach Section */}
      <section className="py-20 bg-accent/10">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Un Approccio Integrato"
            subtitle="Le nostre soluzioni lavorano in sinergia per garantire risultati ottimali."
            light
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="order-2 md:order-1"
            >
              <p className="text-lg text-gray-300 mb-6">
                Ciò che distingue CyberNest è la capacità di integrare perfettamente tutte le soluzioni IT in un ecosistema coerente e ottimizzato.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                Non ci limitiamo a offrire servizi isolati, ma progettiamo sistemi in cui ogni componente comunica e collabora con gli altri, creando un ambiente IT armonioso e altamente efficiente.
              </p>
              <p className="text-lg text-gray-300">
                Questo approccio integrato si traduce in una riduzione dei costi, un aumento della produttività e una maggiore sicurezza per la tua azienda.
              </p>
              
              <div className="mt-8">
                <Button 
                  to="/contatti"
                  variant="primary"
                >
                  Richiedi una consulenza
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="order-1 md:order-2"
            >
              <div className="card-gradient rounded-lg p-8 border-glow">
                <h3 className="text-xl font-semibold mb-4">I vantaggi di un partner unico:</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-accent-bright mr-3 text-xl">•</span>
                    <span className="text-gray-300">
                      <strong className="text-white">Comunicazione semplificata</strong>
                      <br />Un unico interlocutore per tutte le tue esigenze IT
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-bright mr-3 text-xl">•</span>
                    <span className="text-gray-300">
                      <strong className="text-white">Soluzioni coerenti</strong>
                      <br />Tecnologie che si integrano perfettamente tra loro
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-bright mr-3 text-xl">•</span>
                    <span className="text-gray-300">
                      <strong className="text-white">Risparmio economico</strong>
                      <br />Efficienza operativa e ottimizzazione dei costi
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-bright mr-3 text-xl">•</span>
                    <span className="text-gray-300">
                      <strong className="text-white">Visione d'insieme</strong>
                      <br />Strategia IT coordinata e orientata agli obiettivi aziendali
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>
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
                Prenota un Audit Gratuito
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Scopri le vulnerabilità della tua infrastruttura IT e come possiamo aiutarti a risolverle con un audit gratuito e senza impegno.
              </p>
              <Button 
                to="/contatti"
                variant="primary"
                size="lg"
                icon={<Shield size={20} />}
              >
                Richiedi Subito
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;