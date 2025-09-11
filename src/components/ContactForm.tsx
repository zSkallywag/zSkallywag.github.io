import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import Button from './Button';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    service: 'general',
    privacy: false,
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
    
    // Clear error when field is changed
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
    
    // Clear submit error when user makes changes
    if (submitError) {
      setSubmitError(null);
    }
  };
  
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Il nome è obbligatorio';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'L\'email è obbligatoria';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Inserisci un\'email valida';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Il messaggio è obbligatorio';
    }
    
    if (!formData.privacy) {
      newErrors.privacy = 'È necessario accettare l\'informativa sulla privacy';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      // Map service codes to readable names
      const serviceNames: Record<string, string> = {
        'general': 'Consulenza Generale',
        'cybersecurity': 'Cybersecurity',
        'infrastructure': 'Infrastrutture IT',
        'data': 'Gestione Dati',
        'consulting': 'Consulenza Informatica'
      };
      
      const serviceName = serviceNames[formData.service] || 'Non specificato';
      
      // Create email content
      const emailBody = `
Nuovo messaggio di contatto da CyberNest Website

Nome: ${formData.name}
Email: ${formData.email}
${formData.phone ? `Telefono: ${formData.phone}` : ''}
${formData.company ? `Azienda: ${formData.company}` : ''}
Servizio di interesse: ${serviceName}

Messaggio:
${formData.message}

---
Inviato dal form di contatto del sito web CyberNest
Data: ${new Date().toLocaleString('it-IT', { timeZone: 'Europe/Rome' })}
      `.trim();
      
      // Create mailto link
      const subject = encodeURIComponent(`Nuovo contatto da ${formData.name} - ${serviceName}`);
      const body = encodeURIComponent(emailBody);
      const mailtoLink = `mailto:info@cybernest.it?subject=${subject}&body=${body}`;
      
      // Open email client
      window.location.href = mailtoLink;
      
      // Show success message
      setIsSubmitted(true);
      
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        service: 'general',
        privacy: false,
      });
      
    } catch (error) {
      console.error('Error preparing email:', error);
      setSubmitError('Si è verificato un errore durante la preparazione del messaggio.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const inputClasses = "w-full bg-primary-dark/50 border border-accent/30 rounded-md py-3 px-4 text-white focus:outline-none focus:border-accent-bright transition-colors duration-300";
  const errorClasses = "text-red-400 text-sm mt-1";
  
  return (
    <div className="card-gradient border-glow rounded-lg p-6 md:p-8">
      {isSubmitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center justify-center py-8 text-center"
        >
          <CheckCircle size={64} className="text-green-400 mb-4" />
          <h3 className="text-2xl font-bold mb-2">Messaggio preparato con successo!</h3>
          <p className="text-gray-300 mb-4">
            Il tuo client email dovrebbe aprirsi automaticamente con il messaggio precompilato. 
            Se non si apre, puoi inviare manualmente un'email a <a href="mailto:info@cybernest.it" className="text-accent-bright hover:underline">info@cybernest.it</a>.
          </p>
          <p className="text-sm text-gray-400 mb-6">
            Includi nel messaggio tutti i dettagli che hai inserito nel form.
          </p>
          <Button 
            variant="primary"
            onClick={() => setIsSubmitted(false)}
          >
            Invia un altro messaggio
          </Button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit}>
          {submitError && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-md flex items-start"
            >
              <AlertCircle size={20} className="text-red-400 mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-red-400 font-medium">Errore nella preparazione del messaggio</p>
                <p className="text-red-300 text-sm mt-1">{submitError}</p>
              </div>
            </motion.div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block mb-2 font-medium">
                Nome e Cognome <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`${inputClasses} ${errors.name ? 'border-red-400' : ''}`}
                placeholder="Il tuo nome"
              />
              {errors.name && <p className={errorClasses}>{errors.name}</p>}
            </div>
            
            {/* Email */}
            <div>
              <label htmlFor="email" className="block mb-2 font-medium">
                Email <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`${inputClasses} ${errors.email ? 'border-red-400' : ''}`}
                placeholder="La tua email"
              />
              {errors.email && <p className={errorClasses}>{errors.email}</p>}
            </div>
            
            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block mb-2 font-medium">
                Telefono
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={inputClasses}
                placeholder="Il tuo numero di telefono"
              />
            </div>
            
            {/* Company */}
            <div>
              <label htmlFor="company" className="block mb-2 font-medium">
                Azienda
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className={inputClasses}
                placeholder="La tua azienda"
              />
            </div>
            
            {/* Service */}
            <div className="md:col-span-2">
              <label htmlFor="service" className="block mb-2 font-medium">
                Servizio di interesse
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className={inputClasses}
              >
                <option value="general">Consulenza Generale</option>
                <option value="cybersecurity">Cybersecurity</option>
                <option value="infrastructure">Infrastrutture IT</option>
                <option value="data">Gestione Dati</option>
                <option value="consulting">Consulenza Informatica</option>
              </select>
            </div>
            
            {/* Message */}
            <div className="md:col-span-2">
              <label htmlFor="message" className="block mb-2 font-medium">
                Messaggio <span className="text-red-400">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={`${inputClasses} min-h-[120px] resize-y ${errors.message ? 'border-red-400' : ''}`}
                placeholder="Descrivici il tuo progetto o la tua esigenza"
                rows={5}
              />
              {errors.message && <p className={errorClasses}>{errors.message}</p>}
            </div>
          </div>
          
          {/* Privacy Policy */}
          <div className="mt-6">
            <div className="flex items-start">
              <input
                type="checkbox"
                id="privacy"
                name="privacy"
                checked={formData.privacy}
                onChange={handleChange}
                className="mt-1 mr-3 w-4 h-4 text-accent-bright bg-primary-dark/50 border-accent/30 rounded focus:ring-accent-bright focus:ring-2"
              />
              <label htmlFor="privacy" className="text-sm text-gray-300 leading-relaxed">
                <span className="text-red-400">*</span> Accetto l'informativa sulla privacy e autorizzo il trattamento dei miei dati personali ai sensi del Regolamento UE 2016/679 (GDPR) per le finalità indicate nell'informativa stessa. 
                I dati saranno utilizzati esclusivamente per rispondere alla richiesta di contatto e non saranno ceduti a terzi. 
                È possibile esercitare i diritti previsti dal GDPR (accesso, rettifica, cancellazione, limitazione, portabilità, opposizione) 
                contattandoci all'indirizzo <a href="mailto:info@cybernest.it" className="text-accent-bright hover:underline">info@cybernest.it</a>.
              </label>
            </div>
            {errors.privacy && <p className={errorClasses}>{errors.privacy}</p>}
          </div>
          
          <div className="mt-6 flex justify-end">
            <Button
              variant="primary"
              size="lg"
              className="w-full md:w-auto"
              icon={isSubmitting ? null : <Send size={18} />}
              onClick={isSubmitting ? undefined : () => {}}
            >
              {isSubmitting ? (
                <div className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Preparazione in corso...
                </div>
              ) : (
                'Invia Messaggio'
              )}
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
