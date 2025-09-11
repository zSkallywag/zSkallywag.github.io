import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Server, Globe, Database, UserCheck, CheckCircle, ArrowLeft } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { useEffect } from 'react';

const ServiceDetail = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  
  // Redirect to services page if serviceId is invalid
  useEffect(() => {
    const validServices = [
      'cybersecurity', 
      'infrastrutture-it', 
      'gestione-dati', 
      'consulenza-informatica'
    ];
    
    if (!validServices.includes(serviceId || '')) {
      window.location.href = '/servizi';
    }
  }, [serviceId]);
  
  // Define service data
  const services = {
    'cybersecurity': {
      title: 'Cybersecurity',
      description: 'Protezione avanzata contro minacce informatiche, audit di sicurezza e consulenza GDPR.',
      longDescription: 'Nel panorama digitale attuale, la sicurezza informatica non è più un\'opzione ma una necessità. CyberNest offre soluzioni di cybersecurity complete e personalizzate, progettate per proteggere i tuoi dati, sistemi e reputazione da minacce sempre più sofisticate.',
      icon: <Shield size={48} className="text-accent-bright" />,
      features: [
        'Audit di sicurezza completi e dettagliati',
        'Test di vulnerabilità e penetration testing',
        'Simulazioni di phishing e formazione del personale',
        'Consulenza GDPR e normative sulla privacy',
        'Monitoraggio SIEM e gestione degli incidenti',
        'Soluzioni di firewall e protezione endpoint'
      ],
      benefits: [
        'Protezione proattiva contro le minacce informatiche',
        'Riduzione del rischio di violazioni dei dati',
        'Conformità con le normative sulla privacy',
        'Maggiore tranquillità per te e i tuoi clienti',
        'Risposta rapida agli incidenti di sicurezza'
      ],
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    'infrastrutture-it': {
      title: 'Infrastrutture IT',
      description: 'Progettazione, implementazione e gestione di infrastrutture IT sicure ed efficienti.',
      longDescription: 'Un\'infrastruttura IT robusta e scalabile è il fondamento di qualsiasi business moderno. CyberNest progetta, implementa e gestisce soluzioni infrastrutturali che ottimizzano le performance, garantiscono la continuità operativa e supportano la crescita aziendale.',
      icon: <Server size={48} className="text-accent-bright" />,
      features: [
        'Progettazione e implementazione di reti aziendali',
        'Configurazione e gestione server fisici e virtuali',
        'Soluzioni di virtualizzazione per ottimizzare le risorse',
        'Migrazione e gestione cloud (pubblico, privato e ibrido)',
        'Implementazione VPN e accesso remoto sicuro',
        'Ottimizzazione delle performance dell\'infrastruttura'
      ],
      benefits: [
        'Infrastruttura scalabile che cresce con il tuo business',
        'Maggiore affidabilità e tempi di attività',
        'Riduzione dei costi operativi IT',
        'Accesso sicuro alle risorse aziendali da qualsiasi luogo',
        'Migliori performance e produttività'
      ],
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    'gestione-dati': {
      title: 'Gestione Dati',
      description: 'Soluzioni di backup, disaster recovery e replica in tempo reale per i tuoi dati sensibili.',
      longDescription: 'I dati sono uno degli asset più preziosi per qualsiasi organizzazione. CyberNest offre soluzioni complete di gestione dati che proteggono le tue informazioni, ne garantiscono l\'accessibilità e ti aiutano a estrarne valore per decisioni aziendali più informate.',
      icon: <Database size={48} className="text-accent-bright" />,
      features: [
        'Strategie e implementazione di backup automatizzati',
        'Piani di disaster recovery personalizzati',
        'Soluzioni di replica in tempo reale per continuità operativa',
        'Archiviazione sicura e conforme alle normative',
        'Ottimizzazione database per migliorare le performance',
        'Gestione del ciclo di vita dei dati'
      ],
      benefits: [
        'Protezione dei dati aziendali critici',
        'Rapido ripristino in caso di perdita di dati',
        'Continuità operativa garantita',
        'Conformità con le normative sulla conservazione dei dati',
        'Accesso più veloce e affidabile alle informazioni'
      ],
      image: 'https://images.pexels.com/photos/257904/pexels-photo-257904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    'consulenza-informatica': {
      title: 'Consulenza Informatica',
      description: 'Ottimizzazione dei processi IT, formazione del personale e supporto tecnico continuo.',
      longDescription: 'Una strategia IT efficace richiede pianificazione, competenza e una visione chiara. CyberNest offre servizi di consulenza informatica che ti aiutano a ottimizzare i processi, formare il personale e implementare soluzioni tecnologiche allineate con gli obiettivi aziendali.',
      icon: <UserCheck size={48} className="text-accent-bright" />,
      features: [
        'Audit e ottimizzazione dei processi IT esistenti',
        'Formazione del personale su tecnologie e best practice',
        'Supporto tecnico continuativo e proattivo',
        'Consulenza strategica per allineare IT e obiettivi aziendali',
        'Implementazione di soluzioni software su misura',
        'Gestione completa di progetti tecnologici'
      ],
      benefits: [
        'Maggiore efficienza operativa',
        'Personale più competente e produttivo',
        'Riduzione dei tempi di inattività e dei problemi tecnici',
        'Decisioni IT più informate e strategiche',
        'Implementazione più rapida di nuove tecnologie'
      ],
      image: 'https://images.pexels.com/photos/7413915/pexels-photo-7413915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  };
  
  // Get current service data
  const service = services[serviceId as keyof typeof services];
  
  if (!service) {
    return null; // Will redirect via useEffect
  }
  
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden grid-bg">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/50 to-primary/70 backdrop-blur-sm" />
        
        <div className="container mx-auto px-4 relative z-10">
          <Link to="/servizi" className="inline-flex items-center text-gray-300 hover:text-accent-bright mb-8">
            <ArrowLeft size={16} className="mr-2" />
            Torna ai Servizi
          </Link>
          
          <div className="flex flex-col md:flex-row items-center">
            <motion.div 
              className="md:w-1/2 mb-8 md:mb-0 md:pr-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center mb-6">
                <div className="bg-accent/20 rounded-full w-20 h-20 flex items-center justify-center mr-6">
                  {service.icon}
                </div>
                <h1 className="text-4xl md:text-5xl font-bold heading-gradient">{service.title}</h1>
              </div>
              
              <p className="text-xl text-gray-300 mb-8">
                {service.longDescription}
              </p>
              
              <Button 
                to="/contatti"
                variant="primary"
                size="lg"
              >
                Richiedi una Consulenza
              </Button>
            </motion.div>
            
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="rounded-lg overflow-hidden border-glow">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Cosa Offriamo"
            subtitle="Soluzioni complete e personalizzate per le tue esigenze specifiche."
            light
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {service.features.map((feature, index) => (
              <motion.div
                key={index}
                className="card-gradient rounded-lg p-6 border-glow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, boxShadow: '0 10px 25px rgba(168, 60, 240, 0.2)' }}
              >
                <div className="flex">
                  <CheckCircle size={24} className="text-accent-bright mr-4 flex-shrink-0" />
                  <p className="text-gray-300">{feature}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-20 bg-accent/10">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Benefici"
            subtitle="Perché scegliere i nostri servizi di sicurezza informatica."
            light
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <ul className="space-y-6">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-accent/20 rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                      <CheckCircle size={20} className="text-accent-bright" />
                    </div>
                    <div>
                      <p className="text-lg text-white font-medium">{benefit}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="card-gradient rounded-lg p-8 border-glow"
            >
              <h3 className="text-2xl font-semibold mb-4">Il Nostro Approccio</h3>
              <p className="text-gray-300 mb-4">
                In CyberNest crediamo che ogni azienda abbia esigenze uniche. Per questo adottiamo un approccio personalizzato che inizia con una profonda comprensione della tua organizzazione.
              </p>
              <p className="text-gray-300 mb-4">
                Attraverso una valutazione dettagliata, identifichiamo le soluzioni più adatte alle tue specifiche necessità, implementandole con la massima attenzione ai dettagli e fornendo un supporto continuo.
              </p>
              <p className="text-gray-300">
                Il nostro obiettivo non è solo risolvere problemi, ma costruire una partnership a lungo termine che supporti la crescita e l'evoluzione del tuo business.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 heading-gradient">
                Pronto a migliorare la tua {service.title.toLowerCase()}?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contattaci oggi stesso per una consulenza personalizzata e scopri come possiamo aiutarti a raggiungere i tuoi obiettivi.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  to="/contatti"
                  variant="primary"
                  size="lg"
                >
                  Richiedi una Consulenza
                </Button>
                
                <Button 
                  to="/metodo"
                  variant="outline"
                  size="lg"
                >
                  Scopri il Nostro Metodo
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetail;