import React, { useState } from 'react';
import { Menu, X, ChevronDown, Mail, Phone, MapPin, Send } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    institution: '',
    message: ''
  });

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'Sobre Nosotros', href: '#about' },
    { name: 'Producto', href: '#product' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contacto', href: '#contact' }
  ];

  const team = [
    { name: 'Renato German Reyes Valenzuela', role: 'Backend & ML Engineer', image: '/img/renato-profile.png' },
    { name: 'Jose Adrian Luza Carhuamaca', role: 'Full Stack Developer', image: '/img/foto_joseluza.jpg' },
    { name: 'Aaron Alejandro Cruz Ticona', role: 'Frontend Developer', image: '/img/foto-carnet-aaron.jpg' },
    { name: 'Luis Angel Anampa Lavado', role: 'DevOps Engineer', image: '/img/angel-profile.jpeg' },
    { name: 'Alessandro Alonso David Polanco', role: 'Software Architect', image: '/img/alessandro-profile.jpeg' }
  ];

  const features = [
    '- Análisis automatizado con modelos de IA entrenados en imágenes clínicas',
    '- Resultados rápidos con métricas de confianza y visualizaciones Grad-CAM',
    '- Integración segura con sistemas hospitalarios y plataformas en la nube',
    '- Reducción del tiempo promedio de diagnóstico en más del 40%'
  ];

  const faqs = [
    {
      question: '¿Qué tipos de imágenes puede analizar MediScanAI?',
      answer: 'MediScanAI puede procesar radiografías, tomografías computarizadas (CT) y resonancias magnéticas (MRI) en formatos DICOM, JPG y PNG.'
    },
    {
      question: '¿Los diagnósticos son 100% automáticos?',
      answer: 'No. MediScanAI proporciona diagnósticos preliminares como apoyo clínico. Todos los resultados deben ser validados por un médico especialista antes de su uso final.'
    },
    {
      question: '¿Cómo se garantiza la privacidad de los datos?',
      answer: 'Implementamos cifrado end-to-end, cumplimos con HIPAA/GDPR, y todos los datos se procesan de forma anonimizada. Los estudios se almacenan en servidores seguros con auditoría completa.'
    },
    {
      question: '¿Puedo integrar MediScanAI con mi sistema hospitalario?',
      answer: 'Sí. Ofrecemos integración mediante APIs REST y soporte para estándares DICOM y HL7/FHIR, facilitando la conectividad con sistemas PACS y HIS existentes.'
    },
    {
      question: '¿Cuánto debo pagar?',
      answer: 'Ofrecemos planes flexibles: Free (análisis limitados), Pro (uso moderado) y Enterprise (volumen alto con soporte dedicado). Contáctanos para una cotización personalizada.'
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('¡Gracias por tu interés! Nos pondremos en contacto pronto.');
    setFormData({ name: '', email: '', institution: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 via-white to-gray-100 font-inter">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <img src="/img/MediScanIA.png" alt="Logo MediScanAI"/>
                </div>
                <span className="text-xl font-bold text-secondary font-dmsans">MediScanAI</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
                >
                  {item.name}
                </a>
              ))}
              <button className="bg-[#10BEAE] text-white px-6 py-2 rounded-lg hover:bg-[#0da89a] transition-all duration-200 shadow-md">
                Iniciar Sesión
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-primary"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 pt-2 pb-4 space-y-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-gray-700 hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <button className="w-full bg-[#10BEAE] text-white px-6 py-2 rounded-lg hover:bg-[#0da89a] transition-all duration-200 shadow-md mt-2">
                Iniciar Sesión
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 bg-linear-to-br from-secondary via-blue-900 to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-dmsans leading-tight">
                Analiza imágenes médicas en minutos
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-300">
                MediScanAI transforma el análisis de imágenes médicas con resultados precisos en cuestión de minutos. Ahorra tiempo en diagnósticos y mejora la toma de decisiones con inteligencia artificial diseñada para profesionales de la salud.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-[#081828] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg">
                  Comenzar Ahora
                </button>
                <button className="border-2 border-white bg-transparent text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#081828] transition-all duration-200 shadow-lg">
                  Ver Demo
                </button>
              </div>
            </div>
            <div className="hidden md:block">
                <img src="/img/doctor-looking.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4 font-dmsans">Sobre Nosotros</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-2xl font-bold text-secondary mb-4 font-dmsans">SaludVision</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Es una startup peruana de base tecnológica dedicada a desarrollar soluciones de apoyo clínico basadas en inteligencia artificial aplicada al análisis de imágenes médicas.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Nuestro propósito es reducir los tiempos de diagnóstico, mejorar la precisión clínica y facilitar la labor de los profesionales de la salud en toda Latinoamérica.
              </p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></div>
                  <p className="text-gray-700">Misión: Mejorar la atención médica con IA rápida, segura y confiable</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></div>
                  <p className="text-gray-700">Visión: Ser la plataforma líder en IA médica en Latinoamérica</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {team.map((member, index) => {
                const parts = member.name.split(' ').filter(Boolean);
                const displayName = parts.slice(0, 1).join(' ');
                return (
                  <div key={index} className="text-center bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200">
                    <div className="w-20 h-20 bg-linear-to-br from-primary to-blue-600 rounded-full mx-auto mb-3 flex items-center justify-center shadow-lg overflow-hidden">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-sm font-semibold text-gray-800">{displayName}</p>
                    <p className="text-xs text-gray-600 mt-1">{member.role}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="product" className="py-20 bg-linear-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4 font-dmsans">Nuestro Producto - MediScanAI</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-secondary mb-4 font-dmsans">
                Diagnóstico asistido por IA para imágenes médicas
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                MediScanAI procesa radiografías, tomografías y resonancias mediante algoritmos de aprendizaje profundo, ofreciendo resultados rápidos, trazables y explicables.
              </p>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 shrink-0"></div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <img src="/img/results-ai.png" alt="" />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-linear-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4 font-dmsans">Preguntas Frecuentes</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="font-semibold text-gray-800">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#10BEAE] transition-transform duration-300 ease-in-out ${
                      openFaq === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 py-4 bg-gray-50 border-t">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-linear-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4 font-dmsans">Contáctanos</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-700">
              ¿Deseas implementar MediScanAI en tu hospital o clínica? Escríbenos:
            </p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-gray-50 rounded-2xl p-8 shadow-lg">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Nombre y Apellidos
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                  placeholder="Tu nombre completo"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                  placeholder="ejemplo@gmail.com"
                />
              </div>

              <div>
                <label htmlFor="institution" className="block text-sm font-semibold text-gray-700 mb-2">
                  Institución / Empresa
                </label>
                <input
                  type="text"
                  id="institution"
                  name="institution"
                  value={formData.institution}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                  placeholder="Tu institución o empresa"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Tu mensaje"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#10BEAE] text-white py-4 rounded-lg font-semibold hover:bg-[#0da89a] transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg"
              >
                <Send size={20} />
                <span>Enviar</span>
              </button>
            </div>
          </form>

          <div className="mt-12 grid sm:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-primary mb-2" />
              <p className="text-sm text-gray-600">contacto@saludvision.ai</p>
            </div>
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-primary mb-2" />
              <p className="text-sm text-gray-600">+51 987 654 321</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-primary mb-2" />
              <p className="text-sm text-gray-600">Lima, Perú</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-linear-to-br from-secondary to-blue-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm">© 2025 SaludVision. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-primary transition-colors duration-200">
                Términos
              </a>
              <a href="#" className="hover:text-primary transition-colors duration-200">
                Privacidad
              </a>
              <a href="#" className="hover:text-primary transition-colors duration-200">
                Contacto
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;