import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone size={24} className="text-accent-bright" />,
      title: 'Telefono',
      details: '+39 012 345 6789',
      link: 'tel:+390123456789'
    },
    {
      icon: <Mail size={24} className="text-accent-bright" />,
      title: 'Email',
      details: 'info@cybernest.it',
      link: 'mailto:info@cybernest.it'
    },
    {
      icon: <MapPin size={24} className="text-accent-bright" />,
      title: 'Indirizzo',
      details: 'Vivaio Digitale, Via Luigi Pasteur, 26, 70024 Gravina in Puglia (BA)',
      link: 'https://maps.google.com'
    },
    {
      icon: <Clock size={24} className="text-accent-bright" />,
      title: 'Orari',
      details: 'Lun-Ven: 9:00-18:00',
      link: null
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 heading-gradient">Contattaci</h1>
            <p className="text-xl text-gray-300 mb-8">
              Siamo qui per rispondere a tutte le tue domande. Compila il modulo sottostante o utilizza uno dei nostri canali di contatto per parlare con un esperto.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Contact Info Section */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="card-gradient rounded-lg p-6 text-center border-glow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, boxShadow: '0 10px 25px rgba(168, 60, 240, 0.2)' }}
              >
                <div className="flex justify-center mb-4">
                  {info.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{info.title}</h3>
                {info.link ? (
                  <a 
                    href={info.link} 
                    className="text-gray-300 hover:text-accent-bright transition-colors duration-300"
                    target={info.title === 'Indirizzo' ? '_blank' : undefined}
                    rel={info.title === 'Indirizzo' ? 'noopener noreferrer' : undefined}
                  >
                    {info.details}
                  </a>
                ) : (
                  <p className="text-gray-300">{info.details}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Inviaci un Messaggio"
            subtitle="Compila il form sottostante per richiedere informazioni o prenotare una consulenza gratuita."
            light
            centered
          />
          
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-20 bg-accent/10">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Dove Trovarci"
            subtitle="Vieni a trovarci nella nostra sede."
            light
            centered
          />
          
          <motion.div
            className="max-w-5xl mx-auto rounded-lg overflow-hidden border-glow"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="aspect-w-16 aspect-h-9 relative h-[400px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24087.367972753334!2d16.39959164741211!3d40.81996799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1347c5a4d45579f9%3A0x5c1ea8c26d64b2e!2s70024%20Gravina%20in%20Puglia%2C%20Metropolitan%20City%20of%20Bari!5e0!3m2!1sen!2sit!4v1710835437410!5m2!1sen!2sit"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="CyberNest Location"
                className="absolute inset-0"
              />
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Domande Frequenti"
            subtitle="Risposte alle domande più comuni."
            light
            centered
          />
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  q: "Quanto costa una consulenza iniziale?",
                  a: "La prima consulenza è sempre gratuita. Crediamo nell'importanza di comprendere le tue esigenze specifiche prima di proporre qualsiasi soluzione o preventivo."
                },
                {
                  q: "Lavorate anche con piccole aziende?",
                  a: "Assolutamente sì. Le nostre soluzioni sono scalabili e personalizzabili per adattarsi alle esigenze e al budget di aziende di qualsiasi dimensione, dalle startup alle grandi imprese."
                },
                {
                  q: "Quanto tempo richiede l'implementazione di una soluzione?",
                  a: "I tempi variano in base alla complessità del progetto. Dopo un'analisi iniziale, ti forniremo una tempistica dettagliata. Generalmente, le implementazioni possono richiedere da alcune settimane a qualche mese."
                },
                {
                  q: "Offrite formazione per il nostro personale?",
                  a: "Sì, la formazione è una parte fondamentale del nostro processo. Crediamo che sia essenziale non solo implementare soluzioni tecnologiche, ma anche assicurarci che il tuo team sappia utilizzarle al meglio."
                },
                {
                  q: "Come garantite la sicurezza dei nostri dati?",
                  a: "La sicurezza è la nostra priorità. Utilizziamo protocolli di crittografia avanzati, implementiamo best practices di settore e seguiamo rigorosamente le normative sulla protezione dei dati, come il GDPR."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="card-gradient rounded-lg p-6 border-glow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h3 className="text-xl font-semibold mb-3">{item.q}</h3>
                  <p className="text-gray-300">{item.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;