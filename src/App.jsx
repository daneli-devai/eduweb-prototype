import React, { useState, useEffect, useRef } from 'react';
import {
  Menu, X, ArrowRight, CheckCircle, Zap, Smartphone, Users, Globe,
  ChevronDown, Star, Send, Mail, Building, Layout, Play, Cloud,
  ShieldCheck, Code2, Briefcase, GraduationCap, Award, MapPin,
  Phone, Linkedin, Facebook, Instagram, Twitter, FileText, Monitor,
  Rocket, Check, BarChart3, PieChart, Search, Bell, Settings, LogOut,
  Calendar, BookOpen, Clock, AlertCircle, FileCheck, MoreHorizontal,
  ChevronRight, Plus, Minus, HelpCircle, Heart, Server, MessageCircle, Bot, BellRing, Cpu, Table, Target
} from 'lucide-react';

const DemoTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 0, label: "Dashboard", icon: <Layout className='w-4 h-4' />, image: "/demo1.png", title: "Visión Global", desc: "Todo lo que pasa en tu colegio, en una sola pantalla. Métricas en tiempo real." },
    { id: 1, label: "Libro de Clases", icon: <BookOpen className='w-4 h-4' />, image: "/screen2.jpg", title: "Registro de Aula", desc: "Asistencia, leccionario y firma digital. Todo el libro de clases en tu bolsillo." },
    { id: 2, label: "Horario", icon: <Calendar className='w-4 h-4' />, image: "/screen3.jpg", title: "Bloques Académicos", desc: "Organización visual de cargas horarias para docentes y cursos." },
    { id: 3, label: "Entrevistas", icon: <MessageCircle className='w-4 h-4' />, image: "/screen4.jpg", title: "Gestión de Reuniones", desc: "Registro de entrevistas con apoderados y seguimiento de casos." }
  ];

  return (
    <div className="flex flex-col items-center">
      {/* Tabs Navigation */}
      <div className="flex flex-wrap justify-center gap-2 mb-12 bg-white/50 backdrop-blur-sm p-2 rounded-full border border-slate-200 shadow-sm">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 rounded-full text-sm font-bold flex items-center gap-2 transition-all duration-300 ${activeTab === tab.id
              ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30 scale-105'
              : 'text-slate-500 hover:text-blue-600 hover:bg-blue-50'
              }`}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content Display */}
      <div className="relative w-full max-w-5xl aspect-[16/9] perspective-1000">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`absolute inset-0 transition-all duration-700 ease-out transform ${activeTab === tab.id
              ? 'opacity-100 rotate-x-0 translate-y-0 scale-100 pointer-events-auto'
              : 'opacity-0 rotate-x-12 translate-y-12 scale-95 pointer-events-none'
              }`}
          >
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200/60 h-full flex flex-col">
              {/* Browser Header */}
              <div className="bg-slate-50 border-b border-slate-100 px-6 py-3 flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="mx-auto bg-slate-200/50 px-4 py-1 rounded-md text-[10px] font-mono text-slate-400 tracking-wider">
                  edusis.app / {tab.label.toLowerCase()}
                </div>
              </div>
              {/* Image Area */}
              <div className="relative flex-1 bg-slate-100 overflow-hidden group">
                <img src={tab.image} alt={tab.label} className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />

                {/* Floating Caption/Badge */}
                <div className="absolute bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-80 bg-white/90 backdrop-blur-xl p-6 rounded-2xl border border-white/40 shadow-xl text-left translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  <h4 className="text-lg font-black text-slate-900 mb-2">{tab.title}</h4>
                  <p className="text-xs font-medium text-slate-500 leading-relaxed">{tab.desc}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const LandingPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Estados de visibilidad para animaciones
  const [storyVisible, setStoryVisible] = useState(false);
  const [benefitsVisible, setBenefitsVisible] = useState(false);
  const [teamVisible, setTeamVisible] = useState(false);
  const [contactVisible, setContactVisible] = useState(false);
  const [demoVisible, setDemoVisible] = useState(false);
  const [faqVisible, setFaqVisible] = useState(false);
  const [missionVisible, setMissionVisible] = useState(false);

  const [openFaq, setOpenFaq] = useState(null);
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);

  // Refs para observadores
  const storyRef = useRef(null);
  const benefitsRef = useRef(null);
  const teamRef = useRef(null);
  const contactRef = useRef(null);
  const demoRef = useRef(null);
  const faqRef = useRef(null);
  const missionRef = useRef(null);

  // Datos del Carrusel del Hero
  const heroSlides = [
    {
      id: 0,
      badge: "Ecosistema v3.0",
      title: "Gestión escolar",
      highlight: "inteligente.",
      desc: "La plataforma integral que conecta directivos, docentes y familias. Automatiza lo administrativo y enfócate 100% en educar.",
      image: "/profesora.png",
      gradient: "from-blue-600 via-indigo-600 to-purple-700",
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
              <div className="flex flex-col text-left">
                <span className="text-[10px] text-slate-400 font-black uppercase tracking-widest leading-none mb-1 text-left">Asistente IA</span>
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
            <div className="flex gap-3 items-center text-left">
              <div className="bg-green-100 p-2 rounded-full text-green-600">
                <CheckCircle className="w-6 h-6" />
              </div>
              <div>
                <p className="font-black text-slate-800 text-lg leading-none">98%</p>
                <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Asistencia</p>
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
      gradient: "from-blue-400 via-indigo-300 to-sky-400",
      imageStyling: "translate-y-20 h-[110%]",
      cards: [
        {
          id: 'c4',
          position: 'top-16 -left-10',
          delay: '0.5s',
          content: (
            <div className="flex gap-3 items-center pr-2 text-left">
              <div className="bg-violet-100 p-2.5 rounded-full text-violet-600">
                <Bot className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-400 font-black uppercase tracking-widest">EduBot</span>
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
            <div className="flex gap-3 items-center text-left">
              <div className="bg-blue-100 p-2 rounded-full text-blue-600">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <p className="font-black text-slate-800 text-sm">24/7</p>
                <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Soporte</p>
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
      gradient: "from-violet-500 via-purple-500 to-fuchsia-500",
      imageStyling: "translate-y-8 h-[90%]",
      cards: [
        {
          id: 'c7',
          position: 'top-10 -left-14',
          delay: '0.8s',
          content: (
            <div className="flex gap-3 items-center pr-2 text-left">
              <div className="bg-orange-100 p-2 rounded-full text-orange-600">
                <FileCheck className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Reportes</span>
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
            <div className="flex gap-3 items-center text-left">
              <div className="bg-pink-100 p-2 rounded-full text-pink-600">
                <Heart className="w-5 h-5 fill-current" />
              </div>
              <div>
                <p className="font-black text-slate-800 text-sm">Satisfacción</p>
                <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Equipo Feliz</p>
              </div>
            </div>
          )
        }
      ]
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

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
        }
      });
    }, observerOptions);

    const elementsToObserve = [storyRef, benefitsRef, teamRef, contactRef, demoRef, faqRef, missionRef];
    elementsToObserve.forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 overflow-x-hidden selection:bg-blue-100 selection:text-blue-900">

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@600;700&family=Anta&family=Orbitron:wght@400;500;600;700&family=Allerta+Stencil&family=Noto+Sans:wght@200;300;400;500;700&family=Baumans&display=swap');
        @import url('https://fonts.cdnfonts.com/css/wrongo');
        
        .font-display { font-family: 'Baumans', cursive; }

        @keyframes fade-in-up { 0% { opacity: 0; transform: translateY(20px); } 100% { opacity: 1; transform: translateY(0); } }
        @keyframes fade-in-left { 0% { opacity: 0; transform: translateX(-20px); } 100% { opacity: 1; transform: translateX(0); } }
        @keyframes pop-in { 0% { transform: scale(0); opacity: 0; } 60% { transform: scale(1.1); opacity: 1; } 100% { transform: scale(1); opacity: 1; } }
        @keyframes grow-height { from { height: 0%; } to { height: var(--target-height); } }
        @keyframes float-slow { 0%, 100% { transform: translateY(0) rotate(3deg); } 50% { transform: translateY(-8px) rotate(1deg); } }
        @keyframes ping-once { 0% { transform: scale(1); opacity: 1; } 100% { transform: scale(2); opacity: 0; } }
        
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
        .animate-fade-in-left { animation: fade-in-left 0.8s ease-out forwards; }
        .animate-pop-in { animation: pop-in 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }
        .animate-grow-height { animation: grow-height 1.5s ease-out forwards; }
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
        .animate-ping-once { animation: ping-once 1s ease-out forwards; }
        
        .glass-form { background: rgba(255, 255, 255, 0.15); backdrop-filter: blur(16px); border: 1px solid rgba(255, 255, 255, 0.3); box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.2); }
        .perspective-1000 { perspective: 1000px; }
      `}</style>

      {/* --- NAVBAR --- */}
      <nav className={`fixed w-full z-50 transition-all duration-300 bg-white/90 backdrop-blur-md border-b border-slate-100 ${isScrolled ? 'py-3 shadow-sm' : 'py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer group">
            <img src="/logosolo.png" alt="Logo EduSis" className="h-14 w-auto object-contain transition-transform group-hover:scale-110" />
            <span className="font-bold text-2xl tracking-normal text-slate-900 group-hover:text-blue-700 transition-colors font-display">EduSis</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 mr-2 lg:mr-6">
            <a href="#demo" className="hover:text-blue-600 transition-colors">Demo</a>
            <a href="#beneficios" className="hover:text-blue-600 transition-colors">Beneficios</a>
            <a href="#equipo" className="hover:text-blue-600 transition-colors">Equipo</a>
            <a href="#blog" className="hover:text-blue-600 transition-colors">Blog</a>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2.5 rounded-full shadow-lg shadow-blue-500/20 transition-all active:scale-95 font-bold flex items-center gap-2 text-left">
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

      {/* --- HERO SECTION --- */}
      <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white min-h-[700px] flex items-center">
        <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-br from-blue-50 via-white to-indigo-50">
          <div className="absolute top-[-10%] right-[-5%] w-[60vw] h-[60vw] rounded-full bg-blue-100/40 blur-[100px]"></div>
          <div className="absolute bottom-[10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-indigo-100/30 blur-[120px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-left">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="text-left animate-fade-in-up order-2 lg:order-1 min-h-[300px] flex flex-col justify-center">
              <div key={currentHeroSlide} className="animate-fade-in-up text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-blue-700 text-[11px] font-bold uppercase tracking-widest mb-6 shadow-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                  </span>
                  {heroSlides[currentHeroSlide].badge}
                </div>
                <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight mb-6 uppercase italic text-left">
                  {heroSlides[currentHeroSlide].title} <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5c6eff] to-[#5cb4ff]">
                    {heroSlides[currentHeroSlide].highlight}
                  </span>
                </h1>
                <p className="text-lg text-slate-500 mb-10 leading-relaxed font-bold max-w-lg text-left">
                  {heroSlides[currentHeroSlide].desc}
                </p>
              </div>
              <div className="flex gap-2 mb-8">
                {heroSlides.map((_, idx) => (
                  <button key={idx} onClick={() => setCurrentHeroSlide(idx)} className={`h-2.5 rounded-full transition-all duration-300 ${currentHeroSlide === idx ? 'w-8 bg-blue-600' : 'w-2.5 bg-slate-300 hover:bg-slate-400'}`} />
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button className="bg-[#5c6eff] hover:bg-blue-700 text-white px-10 py-4 rounded-full font-black text-xs uppercase tracking-widest shadow-xl shadow-blue-600/20 transition-all hover:-translate-y-0.5 hover:shadow-blue-600/30 flex items-center justify-center gap-2">Solicitar Asesoría</button>
                <button className="px-10 py-4 rounded-full font-black text-xs uppercase tracking-widest text-slate-600 hover:text-blue-600 bg-white border border-slate-200 hover:border-blue-200 transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow-md"><Play className="w-4 h-4 fill-current" /> Ver Demo</button>
              </div>
            </div>
            <div className="relative h-[550px] w-full flex items-center justify-center animate-fade-in-left delay-300 order-1 lg:order-2">
              <div key={currentHeroSlide} className={`relative z-10 w-full max-w-[500px] aspect-[4/5] rounded-[3rem] p-4 transition-all duration-700 shadow-2xl bg-gradient-to-br ${heroSlides[currentHeroSlide].gradient}`}>
                <div className="w-full h-full rounded-[2.5rem] bg-white/20 backdrop-blur-md border border-white/30 relative flex items-end justify-center">
                  <div className="absolute top-[-20%] left-[-20%] w-[80%] h-[80%] bg-white/20 rounded-full blur-3xl pointer-events-none"></div>
                  <img src={heroSlides[currentHeroSlide].image} alt="Ilustración 3D" className={`relative z-10 w-auto object-contain drop-shadow-2xl transition-all duration-500 ${heroSlides[currentHeroSlide].imageStyling}`} />
                  {heroSlides[currentHeroSlide].cards.map((card) => (
                    <div key={card.id} className={`absolute bg-white/90 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-white/60 animate-float-slow z-30 ${card.position}`} style={{ animationDelay: card.delay || '0s' }}>{card.content}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* --- FRANJA DE PILARES --- */}
      <div className="w-full bg-gradient-to-r from-[#5c6eff] via-indigo-600 to-violet-600 py-6 relative z-20 shadow-lg text-left">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 md:gap-x-12 opacity-95 text-white font-black text-[10px] uppercase tracking-widest">
            <div className="flex items-center gap-2"><Cpu className="w-5 h-5" /> Tecnología</div>
            <div className="hidden md:block opacity-30">•</div>
            <div className="flex items-center gap-2"><GraduationCap className="w-5 h-5" /> Educación</div>
            <div className="hidden md:block opacity-30">•</div>
            <div className="flex items-center gap-2"><Bot className="w-5 h-5" /> Inteligencia Artificial</div>
            <div className="hidden md:block opacity-30">•</div>
            <div className="flex items-center gap-2"><Cloud className="w-5 h-5" /> Cloud</div>
            <div className="hidden md:block opacity-30">•</div>
            <div className="flex items-center gap-2"><ShieldCheck className="w-5 h-5" /> Seguridad</div>
          </div>
        </div>
      </div>

      {/* --- MISION --- */}
      <section ref={missionRef} className={`py-28 bg-white relative overflow-hidden transition-all duration-700 ${missionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50"></div>
        <div className="max-w-6xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-20 items-center text-left">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#5c6eff] to-violet-600 rounded-[48px] transform rotate-3 scale-[1.02] opacity-10 blur-xl group-hover:rotate-6 transition-transform duration-500"></div>
            <img src="/mision.png" alt="Misión" className="relative z-10 rounded-[48px] shadow-3xl object-cover w-full h-[400px]" />
          </div>
          <div className="text-left">
            <Heart className="w-10 h-10 text-[#ffca5c] mb-8 fill-current text-left" />
            <h2 className="text-5xl font-black mb-8 tracking-tighter uppercase italic leading-none text-slate-900 font-black text-left">Nuestra Misión</h2>
            <p className="text-2xl font-medium text-slate-500 italic leading-relaxed text-left">
              "Democratizar la gestión educativa de excelencia, permitiendo que cada colegio tenga las herramientas para <span className="text-[#5c6eff] font-black not-italic border-b-4 border-[#5c6eff]/20">formar el futuro</span>."
            </p>
          </div>
        </div>
      </section>

      {/* --- SECCIÓN DE BENEFICIOS (NUEVAS CARDS) --- */}
      <section ref={benefitsRef} id="beneficios" className="py-28 px-6 relative bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600 overflow-hidden text-left">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_#ffffff10_0%,_transparent_50%)] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-left">
          <div className={`text-center mb-24 transition-all duration-700 ${benefitsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-4xl md:text-6xl font-black text-white italic uppercase tracking-tighter mb-4 leading-none font-black text-center">¿Por qué elegir EduSis?</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto font-medium text-center">Dejamos atrás los sistemas grises y complicados para ofrecerte una experiencia fluida.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className={`p-12 rounded-[48px] border border-white/20 bg-white/10 backdrop-blur-md hover:bg-white/15 transition-all group ${benefitsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
              <div className="w-16 h-16 rounded-2xl bg-[#5be6b4] text-white flex items-center justify-center mb-10 shadow-xl shadow-green-500/10"><ShieldCheck className="w-8 h-8" /></div>
              <h3 className="text-2xl font-black text-white uppercase mb-4 tracking-tighter italic leading-none text-left">Cumplimiento Normativo</h3>
              <p className="text-blue-100 text-sm leading-relaxed mb-10 font-medium text-left">Diseñado bajo los estándares de la <strong>Circular N°30</strong> y el <strong>Decreto 67</strong>. Asegura la subvención y los procesos de evaluación formativa con un sistema 100% legal.</p>
              <div className="mt-auto pt-6 border-t border-white/10 flex justify-between items-center"><span className="text-[10px] font-black bg-white/10 px-4 py-1.5 rounded-full uppercase text-white tracking-widest text-left">100% Legal</span><ArrowRight className="w-5 h-5 text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all" /></div>
            </div>
            <div className={`p-12 rounded-[48px] border border-white/20 bg-white/10 backdrop-blur-md hover:bg-white/15 transition-all group ${benefitsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`} style={{ transitionDelay: '100ms' }}>
              <div className="w-16 h-16 rounded-2xl bg-[#5c6eff] text-white flex items-center justify-center mb-10 shadow-xl shadow-indigo-500/10"><Zap className="w-8 h-8" /></div>
              <h3 className="text-2xl font-black text-white uppercase mb-4 tracking-tighter italic leading-none text-left">Planificación Inteligente</h3>
              <p className="text-blue-100 text-sm leading-relaxed mb-10 font-medium text-left">Accede a las Bases Curriculares Mineduc precargadas. Selecciona tus OAs y automatiza tu leccionario en segundos sin perder tiempo administrativo.</p>
              <div className="mt-auto pt-6 border-t border-white/10 flex justify-between items-center"><span className="text-[10px] font-black bg-white/10 px-4 py-1.5 rounded-full uppercase text-white tracking-widest text-left">Fricción Cero</span><ArrowRight className="w-5 h-5 text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all" /></div>
            </div>
            <div className={`p-12 rounded-[48px] border border-white/20 bg-white/10 backdrop-blur-md hover:bg-white/15 transition-all group ${benefitsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`} style={{ transitionDelay: '200ms' }}>
              <div className="w-16 h-16 rounded-2xl bg-[#5cb4ff] text-white flex items-center justify-center mb-10 shadow-xl shadow-blue-400/10"><Clock className="w-8 h-8" /></div>
              <h3 className="text-2xl font-black text-white uppercase mb-4 tracking-tighter italic leading-none text-left">Gestión Inteligente de Atrasos</h3>
              <p className="text-blue-100 text-sm leading-relaxed mb-10 font-medium text-left">Controla atrasos en tiempo real con registro ágil y alertas automáticas. Identificación inmediata de reincidencias para apoyar la toma de decisiones y mejorar la convivencia escolar.</p>
              <div className="mt-auto pt-6 border-t border-white/10 flex justify-between items-center"><span className="text-[10px] font-black bg-white/10 px-4 py-1.5 rounded-full uppercase text-white tracking-widest text-left">Hasta 70% menos tiempo en gestión manual</span><ArrowRight className="w-5 h-5 text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all" /></div>
            </div>
            <div className={`p-12 rounded-[48px] border border-white/20 bg-white/10 backdrop-blur-md hover:bg-white/15 transition-all group ${benefitsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`} style={{ transitionDelay: '300ms' }}>
              <div className="w-16 h-16 rounded-2xl bg-[#ff6b9c] text-white flex items-center justify-center mb-10 shadow-xl shadow-pink-500/10"><Target className="w-8 h-8" /></div>
              <h3 className="text-2xl font-black text-white uppercase mb-4 tracking-tighter italic leading-none text-left">Radar de Riesgo (RAT)</h3>
              <p className="text-blue-100 text-sm leading-relaxed mb-10 font-medium text-left">Cruce de datos estratégico. Identifica automáticamente a estudiantes en riesgo por inasistencia o notas bajo 4.0 antes de que ocurran casos críticos.</p>
              <div className="mt-auto pt-6 border-t border-white/10 flex justify-between items-center"><span className="text-[10px] font-black bg-white/10 px-4 py-1.5 rounded-full uppercase text-white tracking-widest text-left">Gestión Proactiva</span><ArrowRight className="w-5 h-5 text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all" /></div>
            </div>
            <div className={`p-12 rounded-[48px] border border-white/30 bg-white/20 backdrop-blur-md shadow-2xl hover:scale-105 transition-all group ${benefitsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`} style={{ transitionDelay: '400ms' }}>
              <div className="w-16 h-16 rounded-2xl bg-[#ffca5c] text-slate-900 flex items-center justify-center mb-10 shadow-xl shadow-yellow-500/20"><BellRing className="w-8 h-8" /></div>
              <h3 className="text-2xl font-black text-white uppercase mb-4 tracking-tighter italic leading-none text-left">Automatización de Alertas</h3>
              <p className="text-white text-sm leading-relaxed mb-10 font-medium opacity-90 text-left">EduBot monitorea tus datos 24/7 bajo reglas programadas. Recibe avisos automáticos si un alumno falta 3 lunes seguidos o bajan los promedios.</p>
              <div className="mt-auto pt-6 border-t border-white/10 flex justify-between items-center"><span className="text-[10px] font-black bg-white/10 px-4 py-1.5 rounded-full uppercase text-white tracking-widest text-left">IA Paramétrica</span><ArrowRight className="w-5 h-5 text-white" /></div>
            </div>
            <div className={`p-12 rounded-[48px] border border-white/20 bg-white/10 backdrop-blur-md hover:bg-white/15 transition-all group ${benefitsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`} style={{ transitionDelay: '500ms' }}>
              <div className="w-16 h-16 rounded-2xl bg-slate-800 text-white flex items-center justify-center mb-10 shadow-xl"><MessageCircle className="w-8 h-8" /></div>
              <h3 className="text-2xl font-black text-white uppercase mb-4 tracking-tighter italic leading-none text-left">Comunicación Fluida</h3>
              <p className="text-blue-100 text-sm leading-relaxed mb-10 font-medium text-left">Mantén a los apoderados informados en tiempo real. Notificaciones automáticas de asistencia, atrasos y reuniones agendadas directamente desde el libro.</p>
              <div className="mt-auto pt-6 border-t border-white/10 flex justify-between items-center"><span className="text-[10px] font-black bg-white/10 px-4 py-1.5 rounded-full uppercase text-white tracking-widest text-left">Vínculo Familia</span><ArrowRight className="w-5 h-5 text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all" /></div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECCIÓN DEMO INTERACTIVA (Rediseñada con Tabs y enfoque UX moderno) --- */}
      <section ref={demoRef} id="demo" className="py-24 px-6 bg-slate-50 relative border-t border-slate-100 overflow-hidden text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[600px] bg-gradient-to-r from-blue-100/30 via-purple-100/30 blur-[120px] rounded-full z-0 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10 text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tighter uppercase italic leading-none">Control Total Institucional</h2>
          <p className="text-slate-500 max-w-2xl mx-auto font-black uppercase text-[10px] tracking-[0.3em] opacity-60">Una plataforma, múltiples soluciones.</p>
        </div>

        {/* Componente de Tabs Interactivo */}
        <div className={`max-w-6xl mx-auto relative transition-all duration-1000 ${demoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
          <DemoTabs />
        </div>
      </section>


      {/* --- HISTORIA / EVOLUCIÓN (Con Animación del Cohete) --- */}
      <section ref={storyRef} className={`py-28 bg-slate-900 text-white relative overflow-hidden transition-all duration-1000 ${storyVisible ? 'opacity-100' : 'opacity-0'} text-left`}>
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_#ffffff08_0%,_transparent_50%)] pointer-events-none"></div>
        <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-20 relative z-10 text-left">

          <div className="lg:w-1/2 w-full perspective-1000 text-left">
            <div className="relative w-full aspect-[4/3] bg-white/5 backdrop-blur-md border border-white/10 rounded-[48px] overflow-hidden shadow-2xl p-12 flex items-center justify-center">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
              <div className="relative w-full max-w-lg z-10">
                <div className="absolute top-6 left-0 w-full h-1 bg-white/10 rounded-full"></div>
                <div className={`absolute top-6 left-0 h-1 bg-gradient-to-r from-white to-[#5cb4ff] rounded-full origin-left w-full transition-transform duration-[4000ms] ease-linear ${storyVisible ? 'scale-x-100' : 'scale-x-0'}`}></div>
                <div className="flex justify-between relative mt-1">
                  <div className={`flex flex-col items-center gap-4 transition-all duration-700 ${storyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <div className="w-12 h-12 rounded-full border-2 border-white/20 bg-slate-800 flex items-center justify-center z-10 shadow-lg text-white font-black italic"><FileText className="w-5 h-5" /></div>
                    <div className="text-center w-24"><p className="text-[10px] font-black uppercase tracking-widest text-blue-100">Manual</p></div>
                  </div>
                  <div className={`flex flex-col items-center gap-4 transition-all duration-700 delay-[2000ms] ${storyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <div className="w-12 h-12 rounded-full bg-slate-800 border-2 border-white/40 flex items-center justify-center text-white z-10 shadow-lg relative">
                      <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-md"></div>
                      <Monitor className="w-5 h-5 relative z-10" />
                      <div className={`absolute inset-0 rounded-full border-2 border-white/50 opacity-0 ${storyVisible ? 'animate-ping-once' : ''}`} style={{ animationDelay: '2.5s' }}></div>
                    </div>
                    <div className="text-center w-24"><p className="text-[10px] font-black uppercase tracking-widest text-blue-100">Digital</p></div>
                  </div>
                  <div className={`flex flex-col items-center gap-4 transition-all duration-700 delay-[4000ms] ${storyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <div className="w-16 h-16 rounded-3xl bg-white text-[#5c6eff] flex items-center justify-center z-10 shadow-2xl relative transform scale-110 shadow-[#5c6eff]/40">
                      <Rocket className="w-8 h-8" />
                      <div className={`absolute inset-0 rounded-3xl border-2 border-white opacity-0 ${storyVisible ? 'animate-ping-once' : ''}`} style={{ animationDelay: '4.5s' }}></div>
                    </div>
                    <div className="text-center w-28"><p className="text-sm font-black uppercase italic text-white tracking-tighter drop-shadow-md text-center">Optimizado</p></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 text-left">
            <h3 className="text-[#ffca5c] font-black uppercase tracking-[0.3em] text-[10px] mb-4 flex items-center gap-2 leading-none text-left"><span className="w-8 h-[2px] bg-[#ffca5c] rounded-full"></span> Nuestra Evolución</h3>
            <h2 className="text-5xl md:text-7xl font-black mb-8 leading-[0.9] tracking-tighter uppercase italic text-left">Más que software, <br /><span className="text-[#5cb4ff]">somos tus socios.</span></h2>
            <p className="text-blue-100/70 text-lg mb-10 font-medium leading-relaxed max-w-lg text-left">Entendemos que cada colegio está en una etapa distinta. EduSIS te acompaña desde la digitalización básica hasta la automatización inteligente paramétrica bajo normativa vigente.</p>
          </div>
        </div>
      </section>

      {/* --- EQUIPO --- */}
      <section ref={teamRef} id="equipo" className="py-28 bg-slate-50 border-t border-slate-100 text-center transition-all duration-700 text-left">
        <div className={`max-w-7xl mx-auto px-6 ${teamVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl font-black mb-4 tracking-tighter uppercase italic text-slate-900 leading-none text-center">Liderado por Expertos</h2>
          <p className="text-slate-400 font-black uppercase text-[10px] tracking-[0.3em] mb-20 opacity-60 text-center">Compromiso con la Transformación Digital</p>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { n: 'Fabián González', r: 'Director Educativo', c: 'border-indigo-100', img: '/fabian.png' },
              { n: 'Roxana Rebolledo', r: 'Tecnología Educativa', c: 'border-purple-100', img: '/roxana.png' },
              { n: 'José Mellado', r: 'Data Engineer', c: 'border-orange-100', img: '/jose.png' },
              { n: 'Danae González', r: 'Frontend AI Lead', c: 'border-blue-100', img: '/danae.png' }
            ].map((m, i) => (
              <div key={i} className={`bg-white p-10 rounded-[40px] shadow-sm border ${m.c} hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group text-center`}>
                <div className="w-24 h-24 rounded-[32px] bg-slate-50 mx-auto mb-6 flex items-center justify-center overflow-hidden border-2 border-slate-100 group-hover:border-[#5c6eff]/20 transition-all duration-500">
                  <img src={m.img} alt={m.n} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-black text-slate-900 tracking-tighter uppercase italic text-sm text-center">{m.n}</h3>
                <p className="text-[10px] text-blue-600 uppercase font-black mt-2 tracking-widest opacity-70 leading-none text-center">{m.r}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FAQ --- */}
      <section ref={faqRef} className={`py-28 bg-white px-6 transition-all duration-1000 ${faqVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} text-left`}>
        <div className="max-w-4xl mx-auto text-left">
          <h2 className="text-4xl font-black text-center mb-16 tracking-tighter uppercase italic text-slate-900 leading-none">Preguntas Frecuentes</h2>
          <div className="space-y-4">
            {[
              { q: "¿Cómo es el proceso de migración de datos?", a: "Evaluamos y migramos tu data histórica con los más altos estándares de seguridad e integridad técnica en Google Cloud." },
              { q: "¿Qué tan seguros están los datos del colegio?", a: "Totalmente. Usamos encriptación bancaria y respaldos automáticos diarios. Tus datos nunca se comparten con terceros." },
              { q: "¿Cumple con la normativa del Mineduc?", a: "Sí, EduSIS está diseñado específicamente bajo los lineamientos de la Circular 30 y el Decreto 67 de evaluación formativa." },
              { q: "¿Ofrecen soporte y facilidad de uso?", a: "Tenemos un enfoque de 'Cero Curva de Aprendizaje' y soporte técnico prioritario 24/7 para todos los docentes." }
            ].map((f, i) => (
              <div key={i} className="border border-slate-100 rounded-[24px] overflow-hidden shadow-sm hover:border-blue-200 transition-all text-left">
                <button onClick={() => toggleFaq(i)} className="w-full p-8 text-left font-black text-slate-800 uppercase tracking-tighter text-sm flex justify-between items-center group outline-none">
                  <span>{f.q}</span>
                  <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-[#5c6eff] group-hover:text-white transition-all duration-300">
                    {openFaq === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>
                {openFaq === i && <div className="p-8 pt-0 text-slate-500 font-medium leading-relaxed text-sm animate-fade-in-up text-left">{f.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTACTO --- */}
      <section ref={contactRef} id="contacto" className="py-32 bg-gradient-to-br from-[#5c6eff] via-indigo-600 to-violet-600 px-6 relative overflow-hidden transition-all duration-700 text-left">
        <div className={`max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10 ${contactVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} text-left`}>
          <div className="text-white text-left">
            <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter mb-8 leading-[0.9] text-left">Transforma tu <br /> comunidad.</h2>
            <p className="text-xl opacity-90 mb-12 font-medium leading-relaxed max-w-md text-blue-50 text-left">Agenda una demo personalizada y optimiza tu gestión administrativa en 15 minutos.</p>
            <div className="flex flex-col gap-6 text-left">
              <div className="flex items-center gap-4 text-left"><div className="w-6 h-6 rounded-full bg-[#5be6b4] flex items-center justify-center shadow-lg shadow-green-500/20"><Check className="w-3 h-3 text-white" strokeWidth={5} /></div><span className="font-black text-[11px] uppercase tracking-widest text-left">Asesoría Estratégica</span></div>
              <div className="flex items-center gap-4 text-left"><div className="w-6 h-6 rounded-full bg-[#5be6b4] flex items-center justify-center shadow-lg shadow-green-500/20"><Check className="w-3 h-3 text-white" strokeWidth={5} /></div><span className="font-black text-[11px] uppercase tracking-widest text-left">Soporte Prioritario 24/7</span></div>
            </div>
          </div>
          <div className="glass-form p-12 rounded-[56px] shadow-3xl text-left">
            <form className="space-y-5 text-left">
              <input type="text" placeholder="Nombre y Apellido" className="w-full bg-white/10 border border-white/20 p-4 rounded-2xl text-white outline-none focus:bg-white/20 transition-all font-medium placeholder:text-white/30 text-left" />
              <input type="email" placeholder="Email Institucional" className="w-full bg-white/10 border border-white/20 p-4 rounded-2xl text-white outline-none focus:bg-white/20 transition-all font-medium placeholder:text-white/30 text-left" />
              <input type="text" placeholder="Institución Educativa" className="w-full bg-white/10 border border-white/20 p-4 rounded-2xl text-white outline-none focus:bg-white/20 transition-all font-medium placeholder:text-white/30 text-left" />
              <button className="w-full bg-white text-[#5c6eff] font-black py-5 rounded-2xl uppercase tracking-[0.2em] text-xs mt-6 hover:scale-[1.02] transition-all active:scale-95 shadow-2xl text-center">Agendar Demo Gratis</button>
            </form>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-900 pt-32 pb-16 px-6 text-slate-400 text-left">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-16 border-b border-slate-800 pb-20 mb-16 text-left">
          <div className="space-y-6 text-left">
            <div className="flex items-center gap-3 mb-4 text-left">
              <img src="/logosolo.png" className="h-10 object-contain text-left" />
              <span className="font-display font-bold text-white text-2xl text-left">EduSis</span>
            </div>
            <p className="text-sm leading-relaxed font-medium text-left">Tecnología inteligente y gestión de ingeniería pedagógica bajo normativa Mineduc.</p>
          </div>
          <div className="text-left text-left">
            <h4 className="text-white font-black uppercase text-[10px] tracking-[0.3em] mb-8 italic text-left">Plataforma</h4>
            <ul className="text-sm space-y-4 font-black text-left">
              <li><a href="#" className="hover:text-blue-500 transition-all uppercase tracking-widest text-left">Gestión Académica</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-all uppercase tracking-widest text-left">App para Familias</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-all uppercase tracking-widest text-left">Reportes SIGE</a></li>
            </ul>
          </div>
          <div className="text-left text-left">
            <h4 className="text-white font-black uppercase text-[10px] tracking-[0.3em] mb-8 italic text-left">Compañía</h4>
            <ul className="text-sm space-y-4 font-black text-left">
              <li><a href="#" className="hover:text-blue-500 transition-all uppercase tracking-widest text-left">Sobre Nosotros</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-all uppercase tracking-widest text-left">Seguridad</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-all uppercase tracking-widest text-left">Contacto</a></li>
            </ul>
          </div>
          <div className="text-left text-left">
            <h4 className="text-white font-black uppercase text-[10px] tracking-[0.3em] mb-8 italic text-left">Contacto</h4>
            <ul className="text-sm space-y-4 font-black text-left">
              <li className="flex items-center gap-3 text-left"><Mail className="w-4 h-4 text-blue-500 text-left" /> contacto@edusis.cl</li>
              <li className="flex items-center gap-3 text-left"><Phone className="w-4 h-4 text-blue-500 text-left" /> +56 9 455 37 056</li>
            </ul>
          </div>
        </div>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase font-black tracking-[0.3em] text-slate-600 text-left">
          <p>© 2026 EduSis SpA. Todos los derechos reservados.</p>
          <div className="flex gap-10 text-left">
            <a href="#" className="hover:text-[#5c6eff] transition-all text-left">Privacidad</a>
            <a href="#" className="hover:text-[#5c6eff] transition-all text-left">Términos</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;