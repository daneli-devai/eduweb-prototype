import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, X, ArrowRight, CheckCircle, Zap, Smartphone, Users, Globe, 
  ChevronDown, Star, Send, Mail, Building, Layout, Play, Cloud, 
  ShieldCheck, Code2, Briefcase, GraduationCap, Award, MapPin, 
  Phone, Linkedin, Facebook, Instagram, Twitter, FileText, Monitor, 
  Rocket, Check, BarChart3, PieChart, Search, Bell, Settings, LogOut,
  Calendar, BookOpen, Clock, AlertCircle, FileCheck, MoreHorizontal,
  ChevronRight, Plus, Minus, HelpCircle, Heart, Server, MessageCircle, Bot, BellRing, Cpu
} from 'lucide-react';

const LandingPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Estados de visibilidad
  const [storyVisible, setStoryVisible] = useState(false);
  const [benefitsVisible, setBenefitsVisible] = useState(false);
  const [teamVisible, setTeamVisible] = useState(false);
  const [contactVisible, setContactVisible] = useState(false);
  const [demoVisible, setDemoVisible] = useState(false);
  const [faqVisible, setFaqVisible] = useState(false);
  const [missionVisible, setMissionVisible] = useState(false);

  // Estados para acordeón FAQ
  const [openFaq, setOpenFaq] = useState(null);

  // --- Estado del Carrusel del Hero ---
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);

  // Datos del Carrusel (Texto + Imagen + Cards + Gradientes + Posición Imagen)
  const heroSlides = [
    {
      id: 0,
      badge: "Ecosistema v3.0",
      title: "Gestión escolar",
      highlight: "inteligente.",
      desc: "La plataforma integral que conecta directivos, docentes y familias. Automatiza lo administrativo y enfócate 100% en educar.",
      image: "/profesora.png", 
      gradient: "from-blue-600 via-indigo-600 to-purple-700",
      // 🚩 AQUI EDITAS LA POSICIÓN DE LA IMAGEN 1 (Profesora)
      imageStyling: "translate-y-8 h-[90%]", 
      cards: [
        {
           id: 'c1',
           position: 'top-12 -left-12', 
           delay: '0s',
           content: (
             <div className="flex gap-3 items-center w-auto pr-6">
                <div className="bg-blue-100 p-2.5 rounded-full text-blue-600">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-400 font-bold uppercase">Asistente IA</span>
                  <span className="text-xs font-bold text-slate-700">Respondiendo...</span>
                </div>
             </div>
           )
        },
        {
           id: 'c2',
           position: 'bottom-24 -right-12', 
           delay: '1.5s',
           content: (
              <div className="flex gap-3 items-center">
                  <div className="bg-green-100 p-2 rounded-full text-green-600">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-800 text-lg leading-none">98%</p>
                    <p className="text-[10px] text-slate-500 font-bold uppercase">Asistencia</p>
                  </div>
              </div>
           )
        }
      ]
    },
    {
      id: 1,
      badge: "Nuevo: EduBot IA",
      title: "Tu asistente virtual",
      highlight: "siempre activo.",
      desc: "Resuelve dudas de apoderados y docentes al instante. Nuestro Chatbot con IA optimiza la comunicación interna y externa 24/7.",
      image: "/edubot.png", 
      // Celeste AZULADO (Tipo Blue-400/Indigo-300) - Sin tonos verdosos
      gradient: "from-blue-400 via-indigo-300 to-sky-400",
      // 🚩 AQUI EDITAS LA POSICIÓN DE LA IMAGEN 2 (EduBot)
      imageStyling: "translate-y-20 h-[110%]", 
      cards: [
        {
           id: 'c4',
           position: 'top-16 -left-10',
           delay: '0.5s',
           content: (
             <div className="flex gap-3 items-center pr-2">
                <div className="bg-violet-100 p-2.5 rounded-full text-violet-600">
                  <Bot className="w-6 h-6" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-400 font-bold uppercase">EduBot</span>
                  <span className="text-xs font-bold text-slate-700">¿En qué ayudo?</span>
                </div>
             </div>
           )
        },
        {
           id: 'c5',
           position: 'bottom-32 -right-8',
           delay: '2s',
           content: (
              <div className="flex gap-3 items-center">
                  <div className="bg-blue-100 p-2 rounded-full text-blue-600">
                      <Clock className="w-5 h-5" />
                  </div>
                  <div>
                       <p className="font-bold text-slate-800 text-sm">24/7</p>
                       <p className="text-[10px] text-slate-500 font-bold uppercase">Soporte</p>
                  </div>
              </div>
           )
        }
      ]
    },
    {
      id: 2,
      badge: "Cumplimiento Normativo",
      title: "Eficiencia y",
      highlight: "Circular N°30.",
      desc: "Automatización de procesos críticos y Libro de Clases Digital diseñado específicamente para cumplir con los estándares del MINEDUC.",
      image: "/escritorio.png", 
      // Morado Vibrante (Violeta/Fucsia) - Estilo referencia EduBot Phone
      gradient: "from-violet-500 via-purple-500 to-fuchsia-500",
      // 🚩 AQUI EDITAS LA POSICIÓN DE LA IMAGEN 3 (Escritorio)
      imageStyling: "translate-y-8 h-[90%]", 
      cards: [
        {
           id: 'c7',
           position: 'top-10 -left-14',
           delay: '0.8s',
           content: (
             <div className="flex gap-3 items-center pr-2">
                 <div className="bg-orange-100 p-2 rounded-full text-orange-600">
                     <FileCheck className="w-5 h-5" />
                 </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-slate-400 font-bold uppercase">Reportes</span>
                    <span className="text-xs font-bold text-slate-700">Listos en 1 clic</span>
                  </div>
             </div>
           )
        },
        {
           id: 'c8',
           position: 'bottom-20 -right-10',
           delay: '2.2s',
           content: (
               <div className="flex gap-3 items-center">
                   <div className="bg-pink-100 p-2 rounded-full text-pink-600">
                        <Heart className="w-5 h-5 fill-current" />
                   </div>
                   <div>
                        <p className="font-bold text-slate-800 text-sm">Satisfacción</p>
                        <p className="text-[10px] text-slate-500 font-bold uppercase">Equipo Feliz</p>
                   </div>
               </div>
           )
        }
      ]
    }
  ];

  // Refs
  const storyRef = useRef(null);
  const benefitsRef = useRef(null);
  const teamRef = useRef(null);
  const contactRef = useRef(null);
  const demoRef = useRef(null);
  const faqRef = useRef(null);
  const missionRef = useRef(null);
  const canvasRef = useRef(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // --- EFECTO DE AUTOPLAY CARRUSEL ---
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000); // Cambia cada 6 segundos
    return () => clearInterval(interval);
  }, []);

  // --- OBSERVER DE SCROLL ---
  useEffect(() => {
    const observerOptions = { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }; 
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target === storyRef.current) setStoryVisible(true);
          if (entry.target === benefitsRef.current) setBenefitsVisible(true);
          if (entry.target === teamRef.current) setTeamVisible(true);
          if (entry.target === contactRef.current) setContactVisible(true);
          if (entry.target === demoRef.current) setDemoVisible(true);
          if (entry.target === faqRef.current) setFaqVisible(true);
          if (entry.target === missionRef.current) setMissionVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    if (storyRef.current) observer.observe(storyRef.current);
    if (benefitsRef.current) observer.observe(benefitsRef.current);
    if (teamRef.current) observer.observe(teamRef.current);
    if (contactRef.current) observer.observe(contactRef.current);
    if (demoRef.current) observer.observe(demoRef.current);
    if (faqRef.current) observer.observe(faqRef.current);
    if (missionRef.current) observer.observe(missionRef.current);

    return () => observer.disconnect();
  }, []);

  // --- EFECTO DE SCROLL NAVBAR ---
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 overflow-x-hidden selection:bg-orange-100 selection:text-orange-900">
      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@600;700&family=Anta&family=Orbitron:wght@400;500;600;700&family=Allerta+Stencil&family=Noto+Sans:wght@200;300;400;500;700&family=Baumans&display=swap');
        /* Importamos Wrongo desde CDNFonts */
        @import url('https://fonts.cdnfonts.com/css/wrongo');
        
        /* Aplicamos la fuente Baumans SOLO a la clase .font-display (Logo) */
        .font-display { font-family: 'Baumans', cursive; }

        @keyframes fade-in-up { 0% { opacity: 0; transform: translateY(20px); } 100% { opacity: 1; transform: translateY(0); } }
        @keyframes fade-in-left { 0% { opacity: 0; transform: translateX(-20px); } 100% { opacity: 1; transform: translateX(0); } }
        @keyframes pop-in { 
          0% { transform: scale(0); opacity: 0; } 
          60% { transform: scale(1.1); opacity: 1; } 
          100% { transform: scale(1); opacity: 1; } 
        }
        @keyframes ticker-slide { 
          0% { transform: translateY(0); } 
          100% { transform: translateY(-80%); } 
        }
        @keyframes grow-bar { from { width: 0%; } to { width: var(--target-width); } }
        @keyframes grow-height { from { height: 0%; } to { height: var(--target-height); } }
        @keyframes float-slow { 
          0%, 100% { transform: translateY(0) rotate(3deg); } 
          50% { transform: translateY(-8px) rotate(1deg); } 
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.15; transform: scale(1.1); }
        }
        
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
        .animate-fade-in-left { animation: fade-in-left 0.8s ease-out forwards; }
        .animate-pop-in { animation: pop-in 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }
        .animate-ticker { animation: ticker-slide 3s cubic-bezier(0.4, 0, 0.2, 1) forwards; }
        .animate-grow-bar { animation: grow-bar 1.5s cubic-bezier(0.4, 0, 0.2, 1) forwards; }
        .animate-grow-height { animation: grow-height 1.5s ease-out forwards; }
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
        .perspective-1000 { perspective: 1000px; }
        
        /* Glassmorphism Header ERP */
        .glass-header {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.5);
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
        }

        /* Glassmorphism Formulario */
        .glass-form {
          background: rgba(255, 255, 255, 0.15); 
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.2);
        }

        /* Glassmorphism Dashboard Container */
        .glass-dashboard {
          background: rgba(255, 255, 255, 0.4); 
          backdrop-filter: blur(25px); 
          -webkit-backdrop-filter: blur(25px);
          border: 1px solid rgba(255, 255, 255, 0.2); /* Borde mucho más sutil (20%) */
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
        }
      `}</style>

      {/* --- NAVBAR (ABSOLUTE - SIN STICKY - FONDO BLANCO) --- */}
      <nav className={`fixed w-full z-50 transition-all duration-300 bg-white/90 backdrop-blur-md border-b border-slate-100 ${isScrolled ? 'py-3 shadow-sm' : 'py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          
          <div className="flex items-center gap-3 cursor-pointer group">
             {/* LOGO IMAGEN PNG (Tamaño aumentado a h-14) */}
             <img 
               src="/logosolo.png" 
               alt="Logo EduSis" 
               className="h-14 w-auto object-contain transition-transform group-hover:scale-110" 
             />
             {/* Texto EduSis - CON FUENTE BAUMANS */}
             <span className="font-bold text-2xl tracking-normal text-slate-900 group-hover:text-blue-700 transition-colors font-display">EduSis</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 mr-2 lg:mr-6">
            <a href="#demo" className="hover:text-blue-600 transition-colors">Demo</a>
            <a href="#beneficios" className="hover:text-blue-600 transition-colors">Beneficios</a>
            <a href="#equipo" className="hover:text-blue-600 transition-colors">Equipo</a>
            <a href="#blog" className="hover:text-blue-600 transition-colors">Blog</a>
            
            {/* BOTÓN AZUL - INICIAR SESIÓN */}
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full shadow-lg shadow-blue-500/20 transition-all active:scale-95 font-bold flex items-center gap-2">
              Iniciar sesión <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          
          <button className="md:hidden text-slate-900" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
        
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-100 mt-4 pt-4 px-6 flex flex-col gap-4 text-slate-800 animate-fadeIn bg-white">
            <a href="#demo" className="text-base font-medium py-2" onClick={() => setMobileMenuOpen(false)}>Demo</a>
            <a href="#beneficios" className="text-base font-medium py-2" onClick={() => setMobileMenuOpen(false)}>Beneficios</a>
            <a href="#equipo" className="text-base font-medium py-2" onClick={() => setMobileMenuOpen(false)}>Equipo</a>
            <a href="#blog" className="text-base font-medium py-2" onClick={() => setMobileMenuOpen(false)}>Blog</a>
            <button className="bg-blue-600 text-white px-4 py-3 rounded-xl w-full font-bold shadow-md">Iniciar sesión</button>
          </div>
        )}
      </nav>

      {/* --- HERO SECTION CON CARRUSEL Y CARD DE COLOR --- */}
      <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white min-h-[700px] flex items-center">
        
        {/* Fondo decorativo suave (Global) */}
        <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-br from-blue-50 via-white to-indigo-50">
           <div className="absolute top-[-10%] right-[-5%] w-[60vw] h-[60vw] rounded-full bg-blue-100/40 blur-[100px]"></div>
           <div className="absolute bottom-[10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-indigo-100/30 blur-[120px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* --- CONTENIDO IZQUIERDA (CARRUSEL TEXTO) --- */}
            <div className="text-left animate-fade-in-up order-2 lg:order-1 min-h-[300px] flex flex-col justify-center">
              
              <div key={currentHeroSlide} className="animate-fade-in-up">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-blue-700 text-[11px] font-bold uppercase tracking-wider mb-6 shadow-sm">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                    </span>
                    {heroSlides[currentHeroSlide].badge}
                  </div>
                  
                  <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-6">
                    {heroSlides[currentHeroSlide].title} <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-500">
                      {heroSlides[currentHeroSlide].highlight}
                    </span>
                  </h1>
                  
                  <p className="text-lg text-slate-500 mb-10 leading-relaxed font-bold max-w-lg">
                    {heroSlides[currentHeroSlide].desc}
                  </p>
              </div>
              
              {/* Controles del Carrusel (Puntos) */}
              <div className="flex gap-2 mb-8">
                {heroSlides.map((_, idx) => (
                    <button 
                        key={idx}
                        onClick={() => setCurrentHeroSlide(idx)}
                        className={`h-2.5 rounded-full transition-all duration-300 ${currentHeroSlide === idx ? 'w-8 bg-blue-600' : 'w-2.5 bg-slate-300 hover:bg-slate-400'}`}
                        aria-label={`Ir a diapositiva ${idx + 1}`}
                    />
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-full font-bold text-base shadow-xl shadow-blue-600/20 transition-all hover:-translate-y-0.5 hover:shadow-blue-600/30 flex items-center justify-center gap-2">
                  Solicitar Asesoría
                </button>
                <button className="px-8 py-3.5 rounded-full font-bold text-slate-600 hover:text-blue-600 bg-white border border-slate-200 hover:border-blue-200 transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow-md">
                  <Play className="w-4 h-4 fill-current" /> Ver Demo
                </button>
              </div>

              <div className="flex flex-wrap gap-6 opacity-70 hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                   <Cloud className="w-4 h-4 text-blue-500" /> Google Cloud
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                   <ShieldCheck className="w-4 h-4 text-emerald-500" /> SSL Secure
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                   <Code2 className="w-4 h-4 text-slate-700" /> Angular
                </div>
              </div>
            </div>

            {/* --- IMAGEN DERECHA (CARD 3D DE COLOR + IMAGEN) --- */}
            <div className="relative h-[550px] w-full flex items-center justify-center animate-fade-in-left delay-300 order-1 lg:order-2">
               
               {/* --- LA TARJETA DE COLOR (ESTÁTICA, NO FLOTA) --- */}
               {/* Aumentado a max-w-[500px] para que se vea un poco más grande */}
               <div 
                 key={currentHeroSlide} 
                 className={`relative z-10 w-full max-w-[500px] aspect-[4/5] rounded-[3rem] p-4 transition-all duration-700 shadow-2xl bg-gradient-to-br ${heroSlides[currentHeroSlide].gradient}`}
               >
                  
                  {/* --- RECTÁNGULO INTERNO CON GLASMORMISMO --- */}
                  <div className="w-full h-full rounded-[2.5rem] bg-white/20 backdrop-blur-md border border-white/30 relative flex items-end justify-center">
                      
                      {/* Brillo decorativo interno */}
                      <div className="absolute top-[-20%] left-[-20%] w-[80%] h-[80%] bg-white/20 rounded-full blur-3xl pointer-events-none"></div>

                      {/* IMAGEN DEL PERSONAJE - AQUI SE APLICA EL STYLE DINÁMICO */}
                      <img 
                        src={heroSlides[currentHeroSlide].image}
                        alt="Ilustración 3D" 
                        className={`relative z-10 w-auto object-contain drop-shadow-2xl transition-all duration-500 ${heroSlides[currentHeroSlide].imageStyling}`} 
                      />

                      {/* --- NOTIFICACIONES FLOTANTES (FUERA DEL OVERFLOW HIDDEN) --- */}
                      {/* Se renderizan aquí para que estén dentro del contexto relativo de la card pero sobre la imagen */}
                      {heroSlides[currentHeroSlide].cards.map((card) => (
                        <div 
                            key={card.id}
                            className={`absolute bg-white/90 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-white/60 animate-float-slow z-30 ${card.position}`}
                            style={{animationDelay: card.delay || '0s'}}
                        >
                            {card.content}
                        </div>
                      ))}

                  </div>
               </div>

            </div>

          </div>
        </div>
      </header>

      {/* --- FRANJA DE PILARES (TIPO PARTNERS) --- */}
      <div className="w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 py-5 relative z-20 shadow-lg">
        <div className="max-w-7xl mx-auto px-6">
           <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 md:gap-x-12 opacity-95">
              
              <div className="flex items-center gap-2 text-white group cursor-default">
                 <Cpu className="w-5 h-5 group-hover:scale-110 transition-transform" />
                 <span className="text-sm font-bold tracking-wide">Tecnología</span>
              </div>
              
              <div className="hidden md:block text-white/30 font-light">•</div>
              
              <div className="flex items-center gap-2 text-white group cursor-default">
                 <GraduationCap className="w-5 h-5 group-hover:scale-110 transition-transform" />
                 <span className="text-sm font-bold tracking-wide">Educación</span>
              </div>
              
              <div className="hidden md:block text-white/30 font-light">•</div>
              
              <div className="flex items-center gap-2 text-white group cursor-default">
                 <Bot className="w-5 h-5 group-hover:scale-110 transition-transform" />
                 <span className="text-sm font-bold tracking-wide">Inteligencia Artificial</span>
              </div>
              
              <div className="hidden md:block text-white/30 font-light">•</div>
              
              <div className="flex items-center gap-2 text-white group cursor-default">
                 <Cloud className="w-5 h-5 group-hover:scale-110 transition-transform" />
                 <span className="text-sm font-bold tracking-wide">Cloud</span>
              </div>
              
              <div className="hidden md:block text-white/30 font-light">•</div>
              
              <div className="flex items-center gap-2 text-white group cursor-default">
                 <ShieldCheck className="w-5 h-5 group-hover:scale-110 transition-transform" />
                 <span className="text-sm font-bold tracking-wide">Seguridad</span>
              </div>

           </div>
        </div>
      </div>

      {/* --- SECCIÓN DEMO INTERACTIVA --- */}
      <section ref={demoRef} id="demo" className="py-24 px-6 bg-slate-50 relative border-t border-slate-100 overflow-hidden">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[500px] bg-gradient-to-r from-blue-100/40 via-purple-100/40 to-orange-100/40 blur-[100px] rounded-full pointer-events-none z-0"></div>

         <div className="max-w-6xl mx-auto relative z-10">
            <div className={`text-center mb-16 transition-all duration-700 ${demoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
               <h2 className="text-3xl font-bold text-slate-900 mb-4">Control Total de tu Institución</h2>
               <p className="text-slate-500 max-w-2xl mx-auto">Visualiza métricas en tiempo real, gestiona finanzas y asistencia desde un solo lugar.</p>
            </div>
            
            <div className={`relative rounded-3xl glass-dashboard p-2 transition-all duration-1000 ${demoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
                
                <div className="glass-header h-14 mb-4 flex items-center justify-between px-6 rounded-t-2xl sticky top-0 z-20">
                   <div className="flex items-center gap-4">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-400 border border-red-500/20"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400 border border-yellow-500/20"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400 border border-green-500/20"></div>
                      </div>
                      <div className="h-6 w-px bg-slate-400/30 mx-2"></div>
                      <div className="hidden sm:flex items-center gap-2 text-xs font-medium text-slate-600 bg-white/40 px-4 py-1.5 rounded-full border border-white/50 shadow-sm">
                        <Globe className="w-3 h-3 text-blue-600" /> 
                        <span className="font-mono tracking-tight">app.edusis.cl/dashboard</span>
                      </div>
                   </div>
                   <div className="flex items-center gap-4">
                      <div className="w-9 h-9 rounded-full bg-white/80 border border-white flex items-center justify-center text-slate-400 hover:text-blue-500 cursor-pointer transition-colors shadow-sm">
                        <Bell className="w-4 h-4" />
                      </div>
                      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center font-bold text-xs shadow-md border-2 border-white">
                        AL
                      </div>
                   </div>
                </div>

                <div className="grid grid-cols-12 gap-0 h-[650px] lg:h-[700px] overflow-hidden bg-[#F8FAFC]/80 rounded-b-2xl border border-slate-200/50 shadow-inner relative z-0 backdrop-blur-sm">
                   
                   {/* SIDEBAR BLANCO LIMPIO */}
                   <div className="col-span-2 hidden lg:flex flex-col gap-2 border-r border-slate-200/60 pr-4 pl-4 pt-6 bg-white h-full">
                      <div className="flex items-center gap-2 mb-8 px-2 text-slate-800">
                         <div className="w-6 h-6 rounded bg-blue-600 flex items-center justify-center text-white font-bold text-xs">E</div>
                         {/* Logo en Sidebar usando Baumans */}
                         <span className="font-bold text-lg font-display tracking-tight">EduSis</span>
                      </div>
                      
                      <div className="space-y-1">
                         <div className="flex items-center gap-3 px-3 py-2.5 bg-blue-50 text-blue-700 rounded-xl text-sm font-semibold cursor-pointer border border-blue-100">
                            <Layout className="w-4 h-4" /> <span>Dashboard</span>
                         </div>
                         <div className="flex items-center gap-3 px-3 py-2.5 text-slate-500 hover:bg-slate-50 hover:text-slate-900 rounded-xl text-sm font-medium cursor-pointer transition-all">
                            <Users className="w-4 h-4" /> <span>Alumnos</span>
                         </div>
                         <div className="flex items-center gap-3 px-3 py-2.5 text-slate-500 hover:bg-slate-50 hover:text-slate-900 rounded-xl text-sm font-medium cursor-pointer transition-all">
                            <Briefcase className="w-4 h-4" /> <span>Docentes</span>
                         </div>
                         <div className="flex items-center gap-3 px-3 py-2.5 text-slate-500 hover:bg-slate-50 hover:text-slate-900 rounded-xl text-sm font-medium cursor-pointer transition-all">
                            <BarChart3 className="w-4 h-4" /> <span>Finanzas</span>
                         </div>
                         <div className="flex items-center gap-3 px-3 py-2.5 text-slate-500 hover:bg-slate-50 hover:text-slate-900 rounded-xl text-sm font-medium cursor-pointer transition-all">
                            <BookOpen className="w-4 h-4" /> <span>Libro Clases</span>
                         </div>
                         {/* NUEVO ITEM: COMUNICACIONES */}
                         <div className="flex items-center gap-3 px-3 py-2.5 text-slate-500 hover:bg-slate-50 hover:text-slate-900 rounded-xl text-sm font-medium cursor-pointer transition-all">
                            <MessageCircle className="w-4 h-4" /> <span>Comunicaciones</span>
                         </div>
                      </div>
                      
                      <div className="mt-auto pt-4 border-t border-slate-100 pb-4 space-y-1">
                         <div className="flex items-center gap-3 px-3 py-2.5 text-slate-400 hover:text-slate-600 rounded-xl text-sm font-medium cursor-pointer transition-colors">
                            <Settings className="w-4 h-4" /> <span>Ajustes</span>
                         </div>
                         <div className="flex items-center gap-3 px-3 py-2.5 text-slate-400 hover:bg-red-50 hover:text-red-500 rounded-xl text-sm font-medium cursor-pointer transition-colors">
                            <LogOut className="w-4 h-4" /> <span>Cerrar Sesión</span>
                         </div>
                      </div>
                   </div>

                   {/* MAIN CONTENT */}
                   <div className="col-span-12 lg:col-span-10 grid grid-cols-12 gap-6 p-8 overflow-y-auto">
                      <div className="col-span-12 flex justify-between items-center mb-2">
                        <div>
                          <h3 className="text-2xl font-bold text-slate-800">Hola, Ana López 👋</h3>
                          <p className="text-sm text-slate-500 mt-1">Resumen del día en <span className="font-semibold text-blue-600">tu institución</span></p>
                        </div>
                        <div className="flex items-center gap-3">
                           <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-600 shadow-sm hover:bg-slate-50">
                             <Calendar className="w-3 h-3" /> Hoy, 24 Oct
                           </button>
                        </div>
                      </div>

                      <div className="col-span-12 lg:col-span-8 flex flex-col gap-6">
                          <div className="grid grid-cols-2 gap-4">
                             {/* Card 1 */}
                             <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all group relative overflow-hidden">
                                <div className="flex justify-between items-start mb-3">
                                   <div className="p-2 bg-blue-50 text-blue-600 rounded-xl"><Users className="w-5 h-5"/></div>
                                   <MoreHorizontal className="w-4 h-4 text-slate-300 cursor-pointer hover:text-slate-500" />
                                </div>
                                <div className="h-9 relative overflow-hidden flex items-center">
                                   <div className="absolute top-0 left-0 flex flex-col animate-ticker">
                                      <span className="h-9 flex items-center text-3xl font-bold text-slate-800">1,200</span>
                                      <span className="h-9 flex items-center text-3xl font-bold text-slate-800">1,990</span>
                                      <span className="h-9 flex items-center text-3xl font-bold text-slate-800">2,000</span>
                                      <span className="h-9 flex items-center text-3xl font-bold text-slate-800">2,000</span>
                                   </div>
                                </div>
                                <div className="text-xs text-slate-500 font-medium uppercase tracking-wide mt-1">Matrícula Total</div>
                             </div>
                             {/* Card 2 */}
                             <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all group">
                                <div className="flex justify-between items-start mb-3">
                                   <div className="p-2 bg-green-50 text-green-600 rounded-xl"><CheckCircle className="w-5 h-5"/></div>
                                </div>
                                <div className="h-9 relative overflow-hidden flex items-center">
                                   <div className="absolute top-0 left-0 flex flex-col animate-ticker" style={{animationDelay: '0.2s'}}>
                                      <span className="h-9 flex items-center text-3xl font-bold text-slate-800">92%</span>
                                      <span className="h-9 flex items-center text-3xl font-bold text-slate-800">95%</span>
                                      <span className="h-9 flex items-center text-3xl font-bold text-slate-800">98%</span>
                                      <span className="h-9 flex items-center text-3xl font-bold text-slate-800">98%</span>
                                   </div>
                                </div>
                                <div className="text-xs text-slate-400 font-medium uppercase tracking-wide mt-1">Asistencia Hoy</div>
                             </div>
                             {/* Card 3 */}
                             <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all group">
                                <div className="flex justify-between items-start mb-3">
                                   <div className="p-2 bg-orange-50 text-orange-600 rounded-xl"><Clock className="w-5 h-5"/></div>
                                </div>
                                <div className="text-3xl font-bold text-slate-800 mb-1 h-9 flex items-center">76</div>
                                <div className="text-xs text-slate-400 font-medium uppercase tracking-wide mt-1">Ausentes</div>
                             </div>
                             {/* Card 4 */}
                             <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all group">
                                <div className="flex justify-between items-start mb-3">
                                   <div className="p-2 bg-red-50 text-red-600 rounded-xl"><AlertCircle className="w-5 h-5"/></div>
                                </div>
                                <div className="text-3xl font-bold text-slate-800 mb-1 h-9 flex items-center">12</div>
                                <div className="text-xs text-slate-400 font-medium uppercase tracking-wide mt-1">Atrasos</div>
                             </div>
                          </div>

                          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex-1 flex flex-col">
                             <div className="flex justify-between items-center mb-6">
                                <h3 className="font-bold text-slate-700 text-sm uppercase tracking-wide">Asistencia Mensual</h3>
                                <div className="flex gap-2 items-center text-xs text-blue-600 font-medium cursor-pointer hover:bg-blue-50 px-2 py-1 rounded transition-colors">
                                   Ver reporte completo <ChevronRight className="w-3 h-3"/>
                                </div>
                             </div>
                             <div className="flex items-end gap-3 h-48 w-full px-2 pb-2">
                                {['Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct'].map((m, i) => {
                                   const h = [65, 75, 60, 85, 90, 82, 88, 95][i];
                                   return (
                                     <div key={i} className="flex-1 flex flex-col items-center gap-2 group cursor-pointer">
                                        <div className="w-full bg-blue-50 rounded-t-md relative h-full overflow-hidden">
                                            <div className="absolute bottom-0 left-0 w-full bg-blue-500 rounded-t-md transition-all duration-1000 ease-out animate-grow-height group-hover:bg-blue-600" style={{'--target-height': `${h}%`}}></div>
                                        </div>
                                        <span className="text-[10px] text-slate-400 font-bold uppercase">{m}</span>
                                     </div>
                                   )
                                })}
                             </div>
                          </div>
                      </div>

                      <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
                          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                            <h3 className="font-bold text-slate-700 text-xs uppercase tracking-wide mb-4">Accesos Directos</h3>
                            <div className="space-y-3">
                               <button className="w-full text-left p-3 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50 transition-all flex items-center justify-between group bg-slate-50/50">
                                  <div className="flex items-center gap-3">
                                     <div className="p-1.5 bg-slate-100 rounded text-slate-500 group-hover:bg-blue-100 group-hover:text-blue-600"><FileCheck className="w-4 h-4"/></div>
                                     <span className="text-xs font-semibold text-slate-600 group-hover:text-blue-700">Certificados</span>
                                  </div>
                                  <ChevronRight className="w-3 h-3 text-slate-300 group-hover:text-blue-500" />
                               </button>
                               <button className="w-full text-left p-3 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50 transition-all flex items-center justify-between group bg-slate-50/50">
                                  <div className="flex items-center gap-3">
                                     <div className="p-1.5 bg-slate-100 rounded text-slate-500 group-hover:bg-blue-100 group-hover:text-blue-600"><Mail className="w-4 h-4"/></div>
                                     <span className="text-xs font-semibold text-slate-600 group-hover:text-blue-700">Comunicados</span>
                                  </div>
                                  <ChevronRight className="w-3 h-3 text-slate-300 group-hover:text-blue-500" />
                               </button>
                               <button className="w-full text-left p-3 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50 transition-all flex items-center justify-between group bg-slate-50/50">
                                  <div className="flex items-center gap-3">
                                     <div className="p-1.5 bg-slate-100 rounded text-slate-500 group-hover:bg-blue-100 group-hover:text-blue-600"><Briefcase className="w-4 h-4"/></div>
                                     <span className="text-xs font-semibold text-slate-600 group-hover:text-blue-700">Pagos</span>
                                  </div>
                                  <ChevronRight className="w-3 h-3 text-slate-300 group-hover:text-blue-500" />
                               </button>
                            </div>
                          </div>

                          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex-1">
                             <h3 className="font-bold text-slate-700 text-xs uppercase tracking-wide mb-4">Próximos Eventos</h3>
                             <div className="space-y-4">
                                <div className="flex gap-4 items-center group cursor-pointer hover:bg-slate-50 p-2 rounded-lg -mx-2 transition-colors">
                                   <div className="w-11 h-11 rounded-xl bg-orange-50 flex flex-col items-center justify-center text-orange-600 font-bold border border-orange-100 group-hover:bg-orange-100">
                                      <span className="text-[9px] uppercase">Oct</span>
                                      <span className="text-sm leading-none">12</span>
                                   </div>
                                   <div>
                                      <div className="text-xs font-bold text-slate-700">Reunión Apoderados</div>
                                      <div className="text-[10px] text-slate-400 mt-0.5">18:00 hrs • Aula Magna</div>
                                   </div>
                                </div>
                                <div className="flex gap-4 items-center group cursor-pointer hover:bg-slate-50 p-2 rounded-lg -mx-2 transition-colors">
                                   <div className="w-11 h-11 rounded-xl bg-blue-50 flex flex-col items-center justify-center text-blue-600 font-bold border border-blue-100 group-hover:bg-blue-100">
                                      <span className="text-[9px] uppercase">Oct</span>
                                      <span className="text-sm leading-none">15</span>
                                   </div>
                                   <div>
                                      <div className="text-xs font-bold text-slate-700">Cierre Semestre</div>
                                      <div className="text-[10px] text-slate-400 mt-0.5">Entrega de notas</div>
                                   </div>
                                </div>
                             </div>
                          </div>
                      </div>
                   </div>
                </div>

                {/* Floating Notification */}
                <div className="absolute -right-8 top-1/4 w-60 bg-white/95 backdrop-blur-md rounded-xl shadow-2xl border border-slate-100 p-4 transform rotate-6 animate-float-slow hidden lg:block z-20">
                   <div className="flex justify-between items-center mb-2">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">Sincronización</span>
                      {/* Check Animado POP */}
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white shadow-md animate-pop-in scale-0" style={{ animationDelay: '1.5s', animationFillMode: 'forwards' }}>
                         <Check className="w-3.5 h-3.5" strokeWidth={3} />
                      </div>
                   </div>
                   <div className="text-sm font-bold text-slate-700">Base de datos actualizada</div>
                   <div className="h-1.5 w-full bg-slate-100 rounded-full mt-3 overflow-hidden">
                      <div className="h-full bg-green-500 w-full animate-grow-bar" style={{ '--target-width': '100%' }}></div>
                   </div>
                </div>
            </div>
         </div>
      </section>

      {/* --- BENEFICIOS (NUEVO DISEÑO DE CARDS - GLASMORMISMO) --- */}
      <section ref={benefitsRef} id="beneficios" className="py-24 px-6 relative bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600 overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_#ffffff10_0%,_transparent_50%)] pointer-events-none"></div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className={`text-center mb-20 transition-all duration-700 ${benefitsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">¿Por qué elegir EduSis?</h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">Dejamos atrás los sistemas grises y complicados para ofrecerte una experiencia fluida.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Card 1: Normativa (Estilo Glass Clean Dark Mode) */}
            <div className={`p-8 rounded-3xl border border-white/20 bg-white/10 backdrop-blur-md hover:bg-white/15 hover:shadow-2xl transition-all duration-500 flex flex-col items-start ${benefitsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`} style={{ transitionDelay: '0ms' }}>
              <div className="w-14 h-14 rounded-2xl bg-white text-green-600 flex items-center justify-center mb-6">
                 <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Cumplimiento Normativo</h3>
              <p className="text-blue-100 text-sm leading-relaxed mb-6">
                Diseñado bajo los estándares de la <strong>Circular N°30</strong>. Asegura la subvención con un Libro de Clases Digital validado y seguro.
              </p>
              <div className="mt-auto pt-4 border-t border-white/20 w-full">
                 <span className="text-xs font-bold text-white bg-white/20 px-3 py-1 rounded-full">100% Legal</span>
              </div>
            </div>

            {/* Card 2: IA & Automatización (DESTACADA - Glass + Glow) */}
            <div className={`p-8 rounded-3xl border border-white/30 bg-white/20 backdrop-blur-md shadow-2xl hover:scale-105 transition-all duration-500 flex flex-col items-start relative overflow-hidden text-white ${benefitsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`} style={{ transitionDelay: '150ms' }}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              
              <div className="w-14 h-14 rounded-2xl bg-white text-blue-600 flex items-center justify-center mb-6">
                 <Bot className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Agente IA & EduBot</h3>
              <p className="text-blue-50 text-sm leading-relaxed mb-6">
                Tu copiloto inteligente. Automatiza reportes, responde dudas 24/7 y detecta riesgos académicos antes de que ocurran.
              </p>
              <div className="mt-auto pt-4 border-t border-white/20 w-full flex items-center gap-2">
                 <span className="text-xs font-bold bg-white/20 px-3 py-1 rounded-full backdrop-blur-md text-white">Tecnología 2025</span>
                 <Zap className="w-4 h-4 text-yellow-300 fill-current animate-pulse" />
              </div>
            </div>

            {/* Card 3: Notificaciones (Estilo Glass Clean Dark Mode) */}
            <div className={`p-8 rounded-3xl border border-white/20 bg-white/10 backdrop-blur-md hover:bg-white/15 hover:shadow-2xl transition-all duration-500 flex flex-col items-start ${benefitsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`} style={{ transitionDelay: '300ms' }}>
              <div className="w-14 h-14 rounded-2xl bg-white text-orange-600 flex items-center justify-center mb-6">
                 <BellRing className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Alertas Inteligentes</h3>
              <p className="text-blue-100 text-sm leading-relaxed mb-6">
                Mantén a los apoderados informados en tiempo real. Notificaciones automáticas de asistencia, atrasos y reuniones.
              </p>
              <div className="mt-auto pt-4 border-t border-white/20 w-full">
                 <span className="text-xs font-bold text-white bg-white/20 px-3 py-1 rounded-full">Comunicación Fluida</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- MISION --- */}
      <section ref={missionRef} className={`py-24 bg-white text-slate-900 relative overflow-hidden transition-all duration-700 ${storyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* ... (Contenido de Misión igual) ... */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Column: Image */}
            <div className="relative">
               {/* Maybe a decorative border or shadow */}
               <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-violet-600 rounded-3xl transform rotate-3 scale-[1.02] opacity-20 blur-sm"></div>
               <img 
                 src="/mision.png" 
                 alt="Nuestra Misión" 
                 className="relative z-10 w-full rounded-3xl shadow-2xl object-cover"
               />
            </div>

            {/* Right Column: Text */}
            <div className="text-left">
              <div className="inline-block p-3 rounded-full bg-orange-50 mb-6 animate-float-slow">
                <Heart className="w-8 h-8 text-orange-500" fill="currentColor" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                Nuestra Misión
              </h2>
              <p className="text-lg md:text-xl font-light text-slate-500 leading-relaxed italic">
                "Democratizar la gestión educativa de excelencia, permitiendo que cada colegio, sin importar su tamaño, tenga las herramientas para centrarse en lo que realmente importa: <span className="text-blue-600 font-bold not-italic">formar el futuro</span>."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- HISTORIA / EVOLUCIÓN --- */}
      <section ref={storyRef} className="py-24 px-6 bg-slate-900 relative overflow-hidden">
        {/* ... (Contenido de Historia igual) ... */}
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_#ffffff10_0%,_transparent_50%)] pointer-events-none"></div>
        <div className="max-w-6xl mx-auto px-4 relative z-10 flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2 w-full perspective-1000">
            <div className="relative w-full aspect-[4/3] bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl overflow-hidden shadow-2xl p-8 flex items-center justify-center">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:30px_30px]"></div>
              <div className="relative w-full max-w-lg z-10">
                  <div className="absolute top-6 left-0 w-full h-1 bg-white/20 rounded-full"></div>
                  <div className={`absolute top-6 left-0 h-1 bg-gradient-to-r from-white to-blue-200 rounded-full origin-left w-full transition-transform duration-[4000ms] ease-linear ${storyVisible ? 'scale-x-100' : 'scale-x-0'}`}></div>
                  <div className="flex justify-between relative mt-1">
                      <div className={`flex flex-col items-center gap-4 transition-all duration-700 ${storyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                          <div className={`w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center z-10 shadow-lg relative transition-all duration-500 bg-indigo-900 text-white`}>
                               <FileText className="w-5 h-5" />
                          </div>
                          <div className="text-center w-24"><p className={`text-xs font-bold leading-tight transition-colors duration-500 text-blue-100`}>Gestión Manual</p></div>
                      </div>
                      <div className={`flex flex-col items-center gap-4 transition-all duration-700 delay-[2000ms] ${storyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                          <div className="w-12 h-12 rounded-full bg-indigo-900 border-2 border-white/50 flex items-center justify-center text-white z-10 shadow-lg shadow-white/20 relative">
                               <div className="absolute inset-0 bg-white/20 rounded-full blur-md"></div>
                               <Monitor className="w-5 h-5 relative z-10" />
                               <div className={`absolute inset-0 rounded-full border-2 border-white/50 opacity-0 ${storyVisible ? 'animate-ping-once' : ''}`} style={{ animationDelay: '2s' }}></div>
                          </div>
                          <div className="text-center w-24"><p className="text-white text-xs font-bold leading-tight">Tecnología Educativa</p></div>
                      </div>
                      <div className={`flex flex-col items-center gap-4 transition-all duration-700 delay-[4000ms] ${storyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                          <div className="w-14 h-14 rounded-full bg-white text-indigo-600 flex items-center justify-center z-10 shadow-xl shadow-white/30 relative transform scale-110">
                               <Rocket className="w-6 h-6" />
                               <div className={`absolute inset-0 rounded-full border-2 border-white opacity-0 ${storyVisible ? 'animate-ping-once' : ''}`} style={{ animationDelay: '4s' }}></div>
                          </div>
                          <div className="text-center w-28"><p className="text-white text-sm font-bold leading-tight shadow-black drop-shadow-sm">Aprendizaje Optimizado</p></div>
                      </div>
                  </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 w-full text-white">
            <h3 className="text-orange-300 font-bold uppercase tracking-widest text-xs mb-4 flex items-center gap-2"><span className="w-8 h-[2px] bg-orange-300 rounded-full"></span> Nuestra Evolución</h3>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Más que software, <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">somos socios en el crecimiento.</span></h2>
            <p className="text-blue-100 text-lg mb-10 leading-relaxed font-light">Entendemos que cada colegio está en una etapa distinta de su viaje digital. Nuestra plataforma te acompaña desde la digitalización básica hasta la automatización inteligente con IA.</p>
            <a href="#equipo" className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 transition-all group text-white font-medium backdrop-blur-sm"><span>Conoce al equipo experto</span><ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" /></a>
          </div>
        </div>
      </section>

      {/* --- EQUIPO (4 FUNDADORES) --- */}
      <section ref={teamRef} id="equipo" className="py-24 px-6 bg-slate-50 border-t border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-700 ${teamVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Liderado por Expertos</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Un equipo multidisciplinario comprometido con la transformación educativa en Latinoamérica.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {/* Fundador 1: Fabián */}
            <div className={`bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col items-center text-center group ${teamVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
               <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-blue-50 group-hover:border-blue-100 transition-colors">
                  <div className="w-full h-full bg-slate-100 flex items-center justify-center text-slate-300">
                    <Users className="w-10 h-10" />
                  </div>
               </div>
               <h3 className="text-lg font-bold text-slate-900">Fabián González</h3>
               <p className="text-blue-600 font-medium text-xs uppercase tracking-wider mb-3 h-8 flex items-center justify-center">Director Educativo & Co-Founder</p>
               <p className="text-slate-500 text-xs leading-relaxed mb-4 flex-1">
                 Master en e-Learning, con más de 25 años de experiencia en desarrollo de Proyectos Tecno-Educativos, gestión de Plataformas y Diseño Instruccional. Liderando I+D en soluciones IA.
               </p>
               <a href="https://www.linkedin.com/in/fabian-gonzalez-araya/" target="_blank" rel="noopener noreferrer" className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all">
                 <Linkedin className="w-4 h-4" />
               </a>
            </div>

            {/* Fundadora 2: Roxana */}
            <div className={`bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col items-center text-center group ${teamVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
               <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-violet-50 group-hover:border-violet-100 transition-colors">
                  <div className="w-full h-full bg-slate-100 flex items-center justify-center text-slate-300">
                    <Users className="w-10 h-10" />
                  </div>
               </div>
               <h3 className="text-lg font-bold text-slate-900">Roxana Rebolledo</h3>
               <p className="text-violet-600 font-medium text-xs uppercase tracking-wider mb-3 h-8 flex items-center justify-center">Tecnología Educativa</p>
               <p className="text-slate-500 text-xs leading-relaxed mb-4 flex-1">
                 Dra(c). en Tecnología Educativa, 20 años implementando Proyectos Digitales. Especialista en Formación Docente y gestión LMS.
               </p>
               <a href="#" className="p-2 text-slate-400 hover:text-violet-600 hover:bg-violet-50 rounded-full transition-all">
                 <Linkedin className="w-4 h-4" />
               </a>
            </div>

            {/* Fundador 3: José */}
            <div className={`bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col items-center text-center group ${teamVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
               <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-orange-50 group-hover:border-orange-100 transition-colors">
                  <div className="w-full h-full bg-slate-100 flex items-center justify-center text-slate-300">
                    <Users className="w-10 h-10" />
                  </div>
               </div>
               <h3 className="text-lg font-bold text-slate-900">José Ignacio Mellado</h3>
               <p className="text-orange-600 font-medium text-xs uppercase tracking-wider mb-3 h-8 flex items-center justify-center">Data Engineer & Co-Founder</p>
               <p className="text-slate-500 text-xs leading-relaxed mb-4 flex-1">
                 Experto en GCP, Airflow y Dataflow. Impulsa la infraestructura de datos y analítica avanzada de EduSis.
               </p>
               <a href="https://www.linkedin.com/in/jos%C3%A9-ignacio-mellado-galaz-382625232/" target="_blank" rel="noopener noreferrer" className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all">
                 <Linkedin className="w-4 h-4" />
               </a>
            </div>

            {/* Fundadora 4: Danae */}
            <div className={`bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col items-center text-center group ${teamVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
               <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-indigo-50 group-hover:border-indigo-100 transition-colors">
                  <div className="w-full h-full bg-slate-100 flex items-center justify-center text-slate-300">
                    <Users className="w-10 h-10" />
                  </div>
               </div>
               <h3 className="text-lg font-bold text-slate-900">Danae González</h3>
               <p className="text-indigo-600 font-medium text-xs uppercase tracking-wider mb-3 h-8 flex items-center justify-center">Co-Founder & Frontend AI Lead</p>
               <p className="text-slate-500 text-xs leading-relaxed mb-4 flex-1">
                 Frontend Developer & AI Solutions. Especialista en automatización de procesos y chatbots educativos.
               </p>
               <a href="https://www.linkedin.com/in/danae-talia-gonz%C3%A1lez-carvajal-536333215/" target="_blank" rel="noopener noreferrer" className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-full transition-all">
                 <Linkedin className="w-4 h-4" />
               </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- FAQ (Updated layout: Left Text, Right Image) --- */}
      <section ref={faqRef} className={`py-24 px-6 bg-white relative transition-all duration-700 ${faqVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="max-w-6xl mx-auto px-4">
           <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
             
             {/* Left Column: Text & Accordion */}
             <div>
                <div className="text-left mb-10"> 
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Preguntas Frecuentes</h2>
                    <p className="text-slate-500">Todo lo que necesitas saber antes de empezar.</p>
                </div>
                <div className="space-y-4">
                  {[
                    { 
                      q: "¿Cómo es el proceso de migración de datos?", 
                      a: "Es un servicio especializado donde nuestro equipo técnico evalúa y migra tu data histórica con los más altos estándares de seguridad e integridad. Dado que cada colegio es único, este proceso se cotiza según el volumen y complejidad de la información, garantizando que no pierdas ningún registro importante." 
                    },
                    { 
                      q: "¿Están seguros los datos de mi colegio?", 
                      a: "Totalmente. Utilizamos infraestructura de Google Cloud con encriptación de alto nivel y respaldos automáticos diarios. Tus datos están protegidos bajo estrictos protocolos de seguridad y confidencialidad." 
                    },
                    { 
                      q: "¿La plataforma cumple con la normativa del MINEDUC?", 
                      a: "Sí, EduSis está diseñado siguiendo estrictamente los estándares y requerimientos del Ministerio de Educación, asegurando que todos tus reportes oficiales estén siempre al día." 
                    },
                     { 
                      q: "¿Qué tipo de soporte y facilidad de uso ofrecen?", 
                      a: "Nuestro enfoque es la simplicidad. La plataforma es intuitiva para que cualquier docente la domine rápidamente. Además, ofrecemos soporte técnico prioritario para resolver cualquier duda operativa y acompañarte en el uso diario de la plataforma." 
                    }
                  ].map((faq, i) => (
                    <div key={i} className="border border-slate-100 rounded-2xl bg-white shadow-sm overflow-hidden group">
                      <button 
                        onClick={() => toggleFaq(i)}
                        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                      >
                        <span className="font-bold text-slate-800 text-sm md:text-base">{faq.q}</span>
                        {openFaq === i ? <Minus className="w-5 h-5 text-blue-600 flex-shrink-0" /> : <Plus className="w-5 h-5 text-slate-400 flex-shrink-0" />}
                      </button>
                      <div className={`px-6 text-slate-600 text-sm leading-relaxed overflow-hidden transition-all duration-300 ease-in-out ${openFaq === i ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                        {faq.a}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="text-left mt-8">
                  <button className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 transition-colors text-sm">
                    <HelpCircle className="w-4 h-4" /> Ir al Centro de Ayuda
                  </button>
                </div>
             </div>

             {/* Right Column: Image */}
             <div className="relative flex justify-center">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-violet-600 rounded-3xl transform rotate-3 scale-[1.02] opacity-20 blur-sm"></div>
                <img 
                  src="/soporte.png" 
                  alt="Soporte EduSis" 
                  className="relative z-10 w-full rounded-3xl shadow-2xl object-cover"
                />
             </div>

           </div>
        </div>
      </section>

      {/* --- FORMULARIO DE CONTACTO (GLASS AZUL/MORADO VIBRANTE) --- */}
      <section ref={contactRef} id="contacto" className="py-32 px-6 relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600">
          
          <div className="max-w-6xl mx-auto px-4 relative z-10 flex flex-col md:flex-row gap-16 items-center">
            
            <div className="md:w-1/2 text-white">
                <h2 className="text-4xl lg:text-5xl font-bold mb-6">Transforma la experiencia de tu comunidad educativa.</h2>
                <p className="text-white/90 text-lg mb-8 font-light">
                   Agenda una demo y descubre cómo optimizar tu gestión en 15 minutos.
                </p>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-white"/><span className="font-medium">Asesoría experta en la implementación</span></div>
                  <div className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-white"/><span className="font-medium">Soporte técnico preferencial 24/7</span></div>
                </div>
            </div>

            <div className="md:w-1/2 w-full">
              {/* GLASS-FORM: Vibrante y Nítido */}
              <div className="glass-form p-8 rounded-3xl">
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-white/90 uppercase">Nombre</label>
                      <input type="text" className="w-full bg-white/10 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-white/70 focus:outline-none focus:bg-white/20 transition-all backdrop-blur-sm" placeholder="Tu nombre" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-white/90 uppercase">Apellido</label>
                      <input type="text" className="w-full bg-white/10 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-white/70 focus:outline-none focus:bg-white/20 transition-all backdrop-blur-sm" placeholder="Tu apellido" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-white/90 uppercase">Email Institucional</label>
                    <input type="email" className="w-full bg-white/10 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-white/70 focus:outline-none focus:bg-white/20 transition-all backdrop-blur-sm" placeholder="director@colegio.cl" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-white/90 uppercase">Colegio / Universidad</label>
                    <div className="relative">
                      <Building className="absolute left-4 top-3.5 w-5 h-5 text-white/60" />
                      <input type="text" className="w-full bg-white/10 border border-white/30 rounded-xl pl-12 pr-4 py-3 text-white placeholder-white/70 focus:outline-none focus:bg-white/20 transition-all backdrop-blur-sm" placeholder="Nombre de la institución" />
                    </div>
                  </div>
                  {/* Botón blanco con texto azul */}
                  <button className="w-full bg-white text-blue-700 font-bold py-4 rounded-xl shadow-xl hover:bg-blue-50 transition-all hover:scale-[0.98] duration-300 flex justify-center items-center gap-2 mt-2">
                    Solicitar Asesoría Gratis <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </div>
          </div>
      </section>

      <footer className="bg-slate-900 pt-24 pb-12 px-6 border-t border-slate-800 font-sans text-slate-400">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              {/* Logo sin fondo azul */}
              <img src="/logosolo.png" alt="Logo EduSis" className="h-10 w-auto object-contain" />
              <span className="font-bold text-xl text-white font-display">EduSis</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Transformamos la gestión educativa con tecnología inteligente, conectando a toda tu comunidad escolar.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="p-2 bg-slate-800 rounded-full border border-slate-700 text-slate-400 hover:text-white hover:border-blue-500 hover:bg-blue-600 transition-all"><Linkedin className="w-4 h-4"/></a>
              <a href="#" className="p-2 bg-slate-800 rounded-full border border-slate-700 text-slate-400 hover:text-white hover:border-blue-500 hover:bg-blue-600 transition-all"><Twitter className="w-4 h-4"/></a>
              <a href="#" className="p-2 bg-slate-800 rounded-full border border-slate-700 text-slate-400 hover:text-white hover:border-blue-500 hover:bg-blue-600 transition-all"><Instagram className="w-4 h-4"/></a>
              <a href="#" className="p-2 bg-slate-800 rounded-full border border-slate-700 text-slate-400 hover:text-white hover:border-blue-500 hover:bg-blue-600 transition-all"><Facebook className="w-4 h-4"/></a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-white mb-6">Plataforma</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-blue-500 transition-colors">Gestión Académica</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">App para Familias</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Integraciones (API)</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-6">Compañía</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-blue-500 transition-colors">Sobre Nosotros</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Blog Educativo</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Centro de Ayuda</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-6">Contacto</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-500 mt-0.5" />
                <span>Av. Providencia 1234, Of. 601<br/>Santiago, Chile</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-500" />
                <a href="mailto:edusis@contacto.cl" className="hover:text-blue-500">edusis@contacto.cl</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-500" />
                <a href="tel:+56912345678" className="hover:text-blue-500">+56 9 1234 5678</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-4 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© 2024 EduSis SpA. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-blue-500">Política de Privacidad</a>
            <a href="#" className="hover:text-blue-500">Términos de Servicio</a>
            <a href="#" className="hover:text-blue-500">Seguridad</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;