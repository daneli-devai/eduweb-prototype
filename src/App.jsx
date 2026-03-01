import React, { useState, useEffect, useRef } from 'react';
import {
  Menu, X, ArrowRight, CheckCircle, Zap, Smartphone, Users, Globe,
  ChevronDown, Star, Send, Mail, Building, Layout, Play, Cloud,
  ShieldCheck, Code2, Briefcase, GraduationCap, Award, MapPin,
  Phone, Linkedin, Facebook, Instagram, Twitter, FileText, Monitor,
  Rocket, Check, BarChart3, PieChart, Search, Bell, Settings, LogOut,
  Calendar, BookOpen, Clock, AlertCircle, FileCheck, MoreHorizontal,
  ChevronRight, Plus, Minus, HelpCircle, Heart, Server, MessageCircle, Bot, BellRing, Cpu, Table, Target, RotateCcw,
  FilePlus2, ScanLine, Tags, Sparkles
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

const LoginPage = ({ onBack }) => {
  const [view, setView] = useState('login'); // 'login' or 'forgot'

  if (view === 'forgot') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-violet-100 via-blue-50 to-rose-100 flex items-center justify-center p-6 relative overflow-hidden font-sans">
        <div className="absolute top-[-10%] right-[-5%] w-[60vw] h-[60vw] rounded-full bg-blue-400/20 blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-purple-400/20 blur-[150px] animate-float-slow"></div>

        <div className="relative z-10 w-full max-w-md animate-fade-in-up">
          <div className="bg-white/40 backdrop-blur-3xl border border-white/60 rounded-[48px] p-10 shadow-[0_32px_64px_-16px_rgba(31,38,135,0.15)] relative overflow-hidden">
            <div className="text-center mb-10">
              <div className="bg-blue-600/10 w-16 h-16 rounded-3xl flex items-center justify-center mx-auto mb-6 border border-blue-600/20">
                <ShieldCheck className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-3xl font-black text-slate-900 uppercase italic tracking-tighter mb-4">¿Olvidaste tu contraseña?</h2>
              <p className="text-slate-500 font-bold text-sm leading-relaxed mb-2 px-4">
                Ingresa tu correo institucional y te enviaremos un código de 6 dígitos para cambiar tu clave.
              </p>
              <p className="text-slate-400 font-medium text-[10px] uppercase tracking-widest italic">Recuerda revisar tu correo spam.</p>
            </div>

            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-800 uppercase tracking-widest ml-4">Tu Correo Institucional</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-600 transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    type="email"
                    placeholder="ejemplo@colegio.cl"
                    className="w-full bg-white/50 border border-white p-4 pl-14 rounded-2xl text-slate-900 outline-none focus:bg-white focus:border-blue-500/50 focus:shadow-lg transition-all font-bold placeholder:text-slate-400 text-sm"
                  />
                </div>
              </div>

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-5 rounded-2xl uppercase tracking-[0.2em] text-[11px] shadow-xl shadow-blue-600/20 transition-all active:scale-95 group flex items-center justify-center gap-3">
                Enviar Código <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>

            <button
              onClick={() => setView('login')}
              className="mt-8 text-center w-full text-blue-600 font-black text-[10px] uppercase tracking-widest hover:underline hover:text-indigo-700 transition-colors"
            >
              Volver a iniciar sesión
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-100 via-blue-50 to-rose-100 flex items-center justify-center p-6 relative overflow-hidden font-sans">
      {/* Dynamic Background Elements */}
      <div className="absolute top-[-10%] right-[-5%] w-[60vw] h-[60vw] rounded-full bg-blue-400/20 blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-[10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-purple-400/20 blur-[150px] animate-float-slow"></div>
      <div className="absolute top-[20%] left-[10%] w-[30vw] h-[30vw] rounded-full bg-rose-300/20 blur-[100px]"></div>

      <div className="relative z-10 w-full max-w-md animate-fade-in-up">
        {/* Logo and Welcome Message */}
        <div className="flex flex-col items-center mb-8">
          <div className="cursor-pointer group flex flex-col items-center" onClick={onBack}>
            <div className="bg-white/40 backdrop-blur-xl p-4 rounded-[2rem] border border-white/40 mb-6 group-hover:scale-110 transition-transform shadow-xl">
              <img src="/logosolo.png" alt="Logo" className="h-10 w-auto" />
            </div>
            <h1 className="text-3xl font-black text-slate-900 tracking-tighter uppercase italic text-center leading-none">
              Bienvenido a <span className="text-blue-600">EduSis</span>
            </h1>
            <p className="mt-3 text-slate-500 font-bold text-xs uppercase tracking-[0.2em] text-center">
              Construyendo el futuro de la educación, hoy.
            </p>
          </div>
        </div>

        {/* High-End Glassmorphism Card */}
        <div className="bg-white/40 backdrop-blur-3xl border border-white/60 rounded-[48px] p-10 shadow-[0_32px_64px_-16px_rgba(31,38,135,0.15)] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>

          <div className="text-center mb-10">
            <p className="text-indigo-600/70 text-[10px] font-black uppercase tracking-[0.3em] leading-none">Acceso Seguro al Ecosistema</p>
          </div>

          <form className="space-y-5">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-800 uppercase tracking-widest ml-4">Email Corporativo</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-600 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <input
                  type="email"
                  placeholder="usuario@edusis.cl"
                  className="w-full bg-white/50 border border-white p-4 pl-14 rounded-2xl text-slate-900 outline-none focus:bg-white focus:border-blue-500/50 focus:shadow-lg transition-all font-bold placeholder:text-slate-400 text-sm"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center ml-4 pr-4">
                <label className="text-[10px] font-black text-slate-800 uppercase tracking-widest">Contraseña</label>
                <button
                  type="button"
                  onClick={() => setView('forgot')}
                  className="text-[9px] font-black text-blue-600 hover:text-indigo-700 uppercase tracking-widest transition-colors"
                >
                  ¿Olvidaste tu clave?
                </button>
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-600 transition-colors">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full bg-white/50 border border-white p-4 pl-14 rounded-2xl text-slate-900 outline-none focus:bg-white focus:border-blue-500/50 focus:shadow-lg transition-all font-bold placeholder:text-slate-400 text-sm"
                />
              </div>
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-5 rounded-2xl uppercase tracking-[0.2em] text-[11px] mt-4 hover:scale-[1.02] transition-all active:scale-95 shadow-xl shadow-blue-600/20 group flex items-center justify-center gap-3">
              Entrar al Sistema <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="mt-10 pt-8 border-t border-slate-900/5 text-center">
            <p className="text-slate-600 text-[10px] font-bold uppercase tracking-widest">
              ¿Problemas para entrar? <a href="#" className="text-blue-600 hover:underline transition-colors font-black">Contactar Soporte</a>
            </p>
          </div>
        </div>

        <button
          onClick={onBack}
          className="mt-8 mx-auto flex items-center gap-2 text-[10px] font-black text-slate-500 hover:text-slate-900 uppercase tracking-widest transition-colors group"
        >
          <RotateCcw className="w-4 h-4 group-hover:rotate-[-45deg] transition-transform" /> Volver al Inicio
        </button>
      </div>
    </div>
  );
};

const FlipCard = React.memo(({ icon, title, description, detailedInfo, colorScheme = 'blue' }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const colors = {
    blue: { bg: 'bg-[#f0f9ff]', text: 'text-[#0ea5e9]', border: 'border-[#e0f2fe]', shadow: 'shadow-blue-100/50' },
    purple: { bg: 'bg-[#f5f3ff]', text: 'text-[#8b5cf6]', border: 'border-[#ede9fe]', shadow: 'shadow-purple-100/50' },
    rose: { bg: 'bg-[#fff1f2]', text: 'text-[#f43f5e]', border: 'border-[#ffe4e6]', shadow: 'shadow-rose-100/50' },
    amber: { bg: 'bg-[#fffbeb]', text: 'text-[#f59e0b]', border: 'border-[#fef3c7]', shadow: 'shadow-amber-100/50' },
    emerald: { bg: 'bg-[#f0fdf4]', text: 'text-[#10b981]', border: 'border-[#dcfce7]', shadow: 'shadow-emerald-100/50' },
    orange: { bg: 'bg-[#fff7ed]', text: 'text-[#f97316]', border: 'border-[#ffedd5]', shadow: 'shadow-orange-100/50' }
  };

  const current = colors[colorScheme] || colors.blue;

  return (
    <div
      className="w-full aspect-[4/5.2] cursor-pointer group perspective-1000"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className="relative w-full h-full transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] preserve-3d"
        style={{
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* Front Face */}
        <div
          className={`absolute inset-0 w-full h-full ${current.bg} rounded-[48px] p-10 flex flex-col items-center justify-center text-center border ${current.border} backface-hidden shadow-sm transition-all duration-500 group-hover:shadow-xl ${current.shadow}`}
        >
          <div className={`${current.text} mb-8 transform transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-2`}>
            {React.cloneElement(icon, { size: 64, strokeWidth: 1.2 })}
          </div>
          <h3 className={`text-3xl font-black ${current.text} leading-tight tracking-tighter uppercase italic px-4 mb-4`}>
            {title}
          </h3>
          <div className={`mt-4 flex items-center gap-2 opacity-30 group-hover:opacity-60 transition-opacity duration-300`}>
            <span className={`text-[10px] font-black uppercase tracking-[0.2em] ${current.text}`}>Ver más</span>
            <RotateCcw className={`w-3 h-3 ${current.text} group-hover:rotate-45 transition-transform duration-500`} />
          </div>
        </div>

        {/* Back Face */}
        <div
          className={`absolute inset-0 w-full h-full bg-white rounded-[48px] border-2 ${current.border} flex flex-col items-center p-10 shadow-2xl ${current.shadow} backface-hidden rotate-y-180`}
        >
          <div className="flex-1 flex flex-col items-center text-center justify-center">
            <div className={`${current.text} mb-8`}>
              {React.cloneElement(icon, { size: 40, strokeWidth: 1.5 })}
            </div>
            <p className="text-slate-600 font-bold text-base leading-relaxed mb-6 px-4">
              {description}
            </p>
          </div>
          <div className="flex items-center gap-2 opacity-50 mt-auto pt-4">
            <span className={`text-[10px] font-black uppercase tracking-[0.25em] ${current.text}`}>Volver</span>
            <RotateCcw className={`w-3 h-3 ${current.text}`} />
          </div>
        </div>
      </div>
    </div>
  );
});

const EduBotPage = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 overflow-x-hidden selection:bg-blue-100 selection:text-blue-900 relative">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div
          className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-blue-600/5 blur-[120px] animate-pulse"
          style={{ willChange: 'transform, opacity' }}
        ></div>
        <div
          className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-indigo-600/5 blur-[150px] animate-float-slow"
          style={{ willChange: 'transform, opacity' }}
        ></div>
      </div>

      {/* Navbar Minimalista para EduBot */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 py-4">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={onBack}>
            <img src="/logosolo.png" alt="Logo EduSis" className="h-10 w-auto object-contain" />
            <span className="font-bold text-xl tracking-normal text-slate-900 font-display">EduSis</span>
          </div>
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors"
          >
            <ChevronRight className="w-4 h-4 rotate-180" /> Volver al Inicio
          </button>
        </div>
      </nav>

      {/* Hero EduBot */}
      <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex items-center min-h-[600px]">
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-center lg:text-left">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 border border-blue-200 text-blue-600 text-[11px] font-bold uppercase tracking-widest mb-6 uppercase">
                Inteligencia Artificial Educativa
              </div>
              <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-tight mb-6 tracking-tighter uppercase italic">
                Conoce a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">EduBot</span>
              </h1>
              <p className="text-lg text-slate-500 mb-10 leading-relaxed font-bold max-w-lg mx-auto lg:mx-0">
                El asistente de IA diseñado específicamente para ecosistemas educativos. Potencia la labor docente y optimiza la gestión institucional en tiempo real.
              </p>
              <div className="flex gap-4 justify-center lg:justify-start">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl shadow-blue-500/20 transition-all active:scale-95">Solicitar Demo de EduBot</button>
              </div>
            </div>
            <div className="relative flex justify-center items-center">
              <div className="relative w-full max-w-md aspect-square bg-gradient-to-br from-blue-600 to-indigo-600 rounded-[3rem] p-8 shadow-2xl overflow-hidden animate-float-slow">
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm border border-white/20 rounded-[2.5rem]"></div>
                <img src="/edubot.png" alt="EduBot" className="relative z-10 w-full h-full object-contain drop-shadow-2xl" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Tarjetas Modern Square */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tighter uppercase italic">Potencia tu Colegio</h2>
            <p className="text-slate-500 font-black uppercase text-[10px] tracking-[0.3em] opacity-60">Funcionalidades Core de EduBot</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            <FlipCard
              icon={<Zap />}
              title="Ayuda a Planificar"
              description="Genera sugerencias de planificación alineadas al Mineduc en segundos. Optimiza tu tiempo administrativo docente."
              colorScheme="blue"
            />
            <FlipCard
              icon={<BookOpen />}
              title="Domina la Plataforma"
              description="Resuelve dudas técnicas y operativas de EduSis al instante. EduBot conoce cada detalle del sistema para guiarte."
              colorScheme="purple"
            />
            <FlipCard
              icon={<Target />}
              title="Radar de Riesgo"
              description="Identifica patrones de ausentismo y bajo rendimiento preventivamente. Actúa antes de que ocurra la deserción escolar."
              colorScheme="rose"
            />
            <FlipCard
              icon={<Tags />}
              title="Categorizador"
              description="Clasifica tus recursos por unidades, niveles y OA automáticamente para un orden institucional perfecto."
              colorScheme="orange"
            />
          </div>
        </div>
      </section>

      {/* Motivational Engagement Section */}
      <section className="relative mt-32 min-h-[600px] flex items-center">
        {/* Wave Background SVG */}
        <div className="absolute inset-x-0 top-0 bottom-0 pointer-events-none">
          <svg className="w-full h-[150px] md:h-full" viewBox="0 0 1440 800" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 80C300 150 600 0 900 0C1150 0 1300 220 1440 100V800H0V80Z"
              fill="url(#blue_gradient_wave)"
            />
            <defs>
              <linearGradient id="blue_gradient_wave" x1="720" y1="0" x2="720" y2="800" gradientUnits="userSpaceOnUse">
                <stop stopColor="#2563EB" />
                <stop offset="1" stopColor="#4F46E5" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute top-[10%] left-[-5%] w-[40vw] h-[40vw] rounded-full bg-white/10 blur-[80px]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-20 text-center lg:text-left">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-6xl font-black text-white leading-[1.1] tracking-tighter uppercase italic mb-8">
                Transforma tu <br />
                colegio en una <br />
                <span className="text-white/80">fábrica de futuro.</span>
              </h2>
              <p className="text-xl text-white font-medium mb-10 max-w-xl opacity-90">
                Libera a tus docentes de la carga administrativa y permíteles enfocarse en lo que realmente importa: la formación de sus alumnos.
              </p>
              <button className="bg-white text-blue-600 px-10 py-5 rounded-full font-black text-xs uppercase tracking-[0.2em] shadow-2xl hover:shadow-white/20 hover:scale-105 transition-all active:scale-95 group flex items-center gap-3">
                Comenzar ahora <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="hidden lg:flex justify-end opacity-20 transform rotate-12">
              <Cpu size={300} className="text-white" strokeWidth={0.5} />
            </div>
          </div>
        </div>
      </section>

      {/* Footer Minimal para EduBot */}
      <footer className="bg-slate-900 py-12 px-6 text-center">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-6">
          <div className="flex items-center gap-3">
            <img src="/logosolo.png" alt="Logo" className="h-8 w-auto" />
            <span className="font-display font-bold text-white text-xl">EduSis</span>
          </div>
          <p className="text-slate-500 text-xs uppercase tracking-[0.2em] font-black">© 2026 EduSis SpA • Ingeniería Pedagógica</p>
          <button onClick={onBack} className="text-blue-500 text-[10px] font-black uppercase tracking-widest hover:text-white transition-colors">Volver al Inicio</button>
        </div>
      </footer>
    </div>
  );
};

const LandingPage = () => {
  const [page, setPage] = useState('home');
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
  const [blogVisible, setBlogVisible] = useState(false);
  const [introVisible, setIntroVisible] = useState(false);

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
  const blogRef = useRef(null);
  const introRef = useRef(null);

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
      imageStyling: "translate-y-20 h-[110%]",
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
      title: "Tu asistente",
      highlight: "virtual.",
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
      imageStyling: "translate-y-20 h-[110%]",
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
          if (entry.target === blogRef.current) setBlogVisible(true);
          if (entry.target === introRef.current) setIntroVisible(true);
        }
      });
    }, observerOptions);

    const elementsToObserve = [storyRef, benefitsRef, teamRef, contactRef, demoRef, faqRef, missionRef, blogRef, introRef];
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
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 30s linear infinite;
        }

        .marquee-mask {
          mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
        }
        
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
        .animate-fade-in-left { animation: fade-in-left 0.8s ease-out forwards; }
        .animate-pop-in { animation: pop-in 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }
        .animate-grow-height { animation: grow-height 1.5s ease-out forwards; }
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
        .animate-ping-once { animation: ping-once 1s ease-out forwards; }
        
        .glass-form { background: rgba(255, 255, 255, 0.15); backdrop-filter: blur(16px); border: 1px solid rgba(255, 255, 255, 0.3); box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.2); }
        .perspective-1000 { perspective: 1000px; -webkit-perspective: 1000px; }
        .preserve-3d { transform-style: preserve-3d; -webkit-transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; -webkit-backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); -webkit-transform: rotateY(180deg); }
        .transform-gpu { transform: translateZ(0); -webkit-transform: translateZ(0); }
      `}</style>

      {page === 'edubot' ? (
        <EduBotPage onBack={() => setPage('home')} />
      ) : page === 'login' ? (
        <LoginPage onBack={() => setPage('home')} />
      ) : (
        <>
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
                <button
                  onClick={() => setPage('edubot')}
                  className="hover:text-blue-600 transition-colors"
                >
                  EduBot
                </button>
                <button
                  onClick={() => setPage('login')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2.5 rounded-full shadow-lg shadow-blue-500/20 transition-all active:scale-95 font-bold flex items-center gap-2 text-left"
                >
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
                <button
                  onClick={() => { setPage('edubot'); setMobileMenuOpen(false); }}
                  className="text-base font-medium py-2 text-left hover:text-blue-600 transition-colors"
                >
                  EduBot
                </button>
                <button
                  onClick={() => { setPage('login'); setMobileMenuOpen(false); }}
                  className="bg-blue-600 text-white px-4 py-3 rounded-xl w-full font-bold shadow-md"
                >
                  Iniciar sesión
                </button>
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
                    <a href="#contacto" className="bg-[#5c6eff] hover:bg-blue-700 text-white px-10 py-4 rounded-full font-black text-xs uppercase tracking-widest shadow-xl shadow-blue-600/20 transition-all hover:-translate-y-0.5 hover:shadow-blue-600/30 flex items-center justify-center gap-2">Solicitar Asesoría</a>
                    <a href="#demo" className="px-10 py-4 rounded-full font-black text-xs uppercase tracking-widest text-slate-600 hover:text-blue-600 bg-white border border-slate-200 hover:border-blue-200 transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow-md"><Play className="w-4 h-4 fill-current" /> Ver Demo</a>
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

          {/* --- FRANJA DE PILARES (REDISEÑADA) --- */}
          <div className="w-full bg-white py-6 relative z-20 border-b border-slate-100 text-left overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 marquee-mask">
              <div className="animate-marquee items-center gap-12 md:gap-16 text-slate-400 font-black text-[11px] uppercase tracking-[0.2em]">
                {/* original items group */}
                <div className="flex items-center gap-12 md:gap-16 shrink-0">
                  <div className="flex items-center gap-3 hover:text-blue-600 transition-colors"><Cpu className="w-5 h-5 text-blue-500" /> Tecnología</div>
                  <div className="opacity-20 text-slate-300">•</div>
                  <div className="flex items-center gap-3 hover:text-indigo-600 transition-colors"><GraduationCap className="w-5 h-5 text-indigo-500" /> Educación</div>
                  <div className="opacity-20 text-slate-300">•</div>
                  <div className="flex items-center gap-3 hover:text-violet-600 transition-colors"><Bot className="w-5 h-5 text-violet-500" /> Inteligencia Artificial</div>
                  <div className="opacity-20 text-slate-300">•</div>
                  <div className="flex items-center gap-3 hover:text-sky-600 transition-colors"><Cloud className="w-5 h-5 text-sky-500" /> Cloud</div>
                  <div className="opacity-20 text-slate-300">•</div>
                  <div className="flex items-center gap-3 hover:text-emerald-600 transition-colors"><ShieldCheck className="w-5 h-5 text-green-500" /> Seguridad</div>
                  <div className="opacity-20 text-slate-300">•</div>
                </div>
                {/* duplicated items group for loop */}
                <div className="flex items-center gap-12 md:gap-16 shrink-0">
                  <div className="flex items-center gap-3 hover:text-blue-600 transition-colors"><Cpu className="w-5 h-5 text-blue-500" /> Tecnología</div>
                  <div className="opacity-20 text-slate-300">•</div>
                  <div className="flex items-center gap-3 hover:text-indigo-600 transition-colors"><GraduationCap className="w-5 h-5 text-indigo-500" /> Educación</div>
                  <div className="opacity-20 text-slate-300">•</div>
                  <div className="flex items-center gap-3 hover:text-violet-600 transition-colors"><Bot className="w-5 h-5 text-violet-500" /> Inteligencia Artificial</div>
                  <div className="opacity-20 text-slate-300">•</div>
                  <div className="flex items-center gap-3 hover:text-sky-600 transition-colors"><Cloud className="w-5 h-5 text-sky-500" /> Cloud</div>
                  <div className="opacity-20 text-slate-300">•</div>
                  <div className="flex items-center gap-3 hover:text-emerald-600 transition-colors"><ShieldCheck className="w-5 h-5 text-green-500" /> Seguridad</div>
                  <div className="opacity-20 text-slate-300">•</div>
                </div>
              </div>
            </div>
          </div>

          {/* --- SECCIÓN INTRO: QUE ES EDUSIS --- */}
          <section ref={introRef} className={`py-32 relative overflow-hidden transition-all duration-1000 ${introVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="absolute inset-0 bg-white"></div>

            {/* Refined Subtle Blobs & Solid Shapes - Responsive */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute top-[10%] left-[-10%] w-[35vw] h-[35vw] rounded-full bg-blue-500/5 blur-[60px] md:blur-[100px] animate-pulse"></div>
              <div className="absolute bottom-[-15%] right-[-10%] w-[45vw] h-[45vw] rounded-full bg-indigo-500/8 blur-[80px] md:blur-[120px] animate-float-slow"></div>



              {/* Solid Orange Shapes (Reference Image Style) - Responsive sizes */}
              <div className="absolute top-[5%] right-[-5%] w-[150px] md:w-[400px] h-[150px] md:h-[400px] rounded-full bg-orange-500/[0.12] blur-[2px]"></div>
              {/* Connected smaller circle */}
              <div className="absolute top-[30%] right-[2%] w-[100px] md:w-[280px] h-[100px] md:h-[280px] rounded-full bg-orange-500/[0.08] blur-[1px]"></div>
              <div className="absolute bottom-[5%] left-[-15%] w-[200px] md:w-[500px] h-[200px] md:h-[500px] rounded-full bg-orange-600/[0.07] blur-[1px]"></div>
            </div>

            {/* Top Wave Transition - Responsive */}
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180">
              <svg className="relative block w-full h-[40px] md:h-[60px]" viewBox="0 0 1440 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 45C840 60 960 90 1080 105C1200 120 1320 120 1380 120L1440 120V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V120Z" fill="#ffffff" opacity="0.5"></path>
              </svg>
            </div>

            <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
              <div className="bg-white/40 backdrop-blur-2xl border border-white/60 rounded-[48px] p-12 lg:p-16 shadow-[0_32px_64px_-16px_rgba(31,38,135,0.1)]">
                <div className="inline-block px-4 py-1.5 rounded-full bg-blue-600/10 text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] mb-8">
                  La Nueva Era Educativa
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 tracking-tighter uppercase italic leading-tight">
                  ¿Qué es <span className="text-blue-600">EduSis</span> y por qué elegir el cambio?
                </h2>
                <p className="text-lg md:text-xl text-slate-600 font-bold leading-relaxed max-w-3xl mx-auto mb-10">
                  EduSis es el primer ecosistema inteligente diseñado para liberar a los colegios del peso de la burocracia. Elegir el cambio significa priorizar la enseñanza sobre el papeleo, integrando IA de vanguardia y cumplimiento normativo en una experiencia fluida que empodera a toda la comunidad escolar.
                </p>
                <div className="flex flex-wrap justify-center gap-8">
                  <div className="flex flex-col items-center gap-2">
                    <span className="text-3xl font-black text-blue-600">IA</span>
                    <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">Automatización</span>
                  </div>
                  <div className="w-[1px] h-10 bg-slate-200 hidden sm:block"></div>
                  <div className="flex flex-col items-center gap-2">
                    <span className="text-3xl font-black text-indigo-600">v3.0</span>
                    <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">Tecnología</span>
                  </div>
                  <div className="w-[1px] h-10 bg-slate-200 hidden sm:block"></div>
                  <div className="flex flex-col items-center gap-2">
                    <span className="text-3xl font-black text-violet-600">100%</span>
                    <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">Normativo</span>
                  </div>
                </div>
              </div>
            </div>
          </section>



          {/* --- SECCIÓN DE BENEFICIOS (NUEVAS CARDS) --- */}
          <section ref={benefitsRef} id="beneficios" className="py-32 px-6 relative bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600 overflow-hidden text-left">
            {/* Top Wave for Benefits - Crescendo Effect - Responsive */}
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
              <svg className="relative block w-full h-[50px] md:h-[100px]" viewBox="0 0 1440 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0L48 15C96 30 192 60 288 75.8C384 92 480 93 576 84.2C672 75 768 55 864 45.8C960 37 1056 38 1152 35.8C1248 33 1344 27 1392 23.3L1440 20V0H0V0Z" fill="#ffffff"></path>
              </svg>
            </div>

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

          {/* --- BLOG SECTION --- */}
          <section ref={blogRef} id="blog" className={`py-28 bg-slate-50 relative overflow-hidden transition-all duration-1000 ${blogVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_#5c6eff05_0%,_transparent_40%)] pointer-events-none"></div>
            <div className="max-w-7xl mx-auto px-6 relative z-10">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tighter uppercase italic leading-none">Blog Educativo</h2>
                <p className="text-slate-500 max-w-2xl mx-auto font-black uppercase text-[10px] tracking-[0.3em] opacity-60">Ingeniería Pedagógica & Futuro</p>
              </div>

              <article className="bg-white rounded-[48px] overflow-hidden shadow-2xl border border-slate-100 flex flex-col lg:flex-row items-center gap-0 lg:gap-12 group hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-1">
                <div className="w-full lg:w-1/2 h-[400px] lg:h-[600px] overflow-hidden relative">
                  <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  <img
                    src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=2070"
                    alt="IA en Educación"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute top-8 left-8 z-20">
                    <span className="bg-blue-600 text-white px-4 py-2 rounded-full font-black text-[10px] uppercase tracking-[0.2em] shadow-lg shadow-blue-500/30">
                      Caso de Éxito
                    </span>
                  </div>
                </div>

                <div className="w-full lg:w-1/2 p-8 lg:p-12 lg:pl-0 flex flex-col">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 rounded-full border-2 border-white bg-blue-100 flex items-center justify-center overflow-hidden">
                        <img src="/fabian.png" alt="Autor" className="w-full h-full object-cover" />
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-black text-slate-900 uppercase tracking-wider">Equipo EduSis</span>
                      <span className="text-[10px] text-slate-400 font-bold">24 de Febrero, 2026</span>
                    </div>
                  </div>

                  <h1 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight mb-8 tracking-tighter uppercase italic">
                    IA vs. Burocracia: Cómo EduBot reduce el tiempo de planificación en un 60%
                  </h1>

                  <div className="max-w-none space-y-6 text-slate-600 font-medium leading-relaxed">
                    <p>
                      En la última década, la labor docente en Chile se ha visto inundada por una "marea administrativa". Según diversos estudios sobre la carga laboral, un profesor promedio dedica más tiempo a gestionar papeles y cumplir con la Circular 30 que a la enseñanza directa en el aula.
                    </p>
                    <p className="border-l-4 border-blue-500 pl-6 italic text-lg text-slate-900 font-bold">
                      Pero, ¿qué pasaría si la Inteligencia Artificial no viniera a reemplazar al profesor, sino a liberarlo de su mayor enemigo: la burocracia?
                    </p>

                    <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight mt-10">La Realidad de los Datos: El tiempo "robado" al docente</h3>
                    <p>
                      Un estudio global de McKinsey & Company reveló que los docentes trabajan un promedio de 50 horas a la semana. Lo alarmante es que solo dedican el 49% de ese tiempo a la instrucción directa. ¿El resto? Se pierde en preparación, administración y evaluación.
                    </p>
                    <p>
                      El informe destaca que aproximadamente entre el 20% y el 40% de las tareas docentes actuales pueden ser automatizadas con la tecnología disponible hoy. En el área específica de la preparación y planificación de clases, la IA puede reducir el tiempo invertido hasta en un 45%.
                    </p>

                    <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight mt-10">EduBot: Transformando el "Copiar y Pegar" en Ingeniería Pedagógica</h3>
                    <p>
                      En EduSIS, hemos llevado estos datos al contexto chileno. La planificación curricular (ajustada a los Objetivos de Aprendizaje del Mineduc) suele ser un proceso de "copiar y pegar" tedioso. EduBot cambia las reglas del juego:
                    </p>

                    <ul className="space-y-4 pt-4">
                      <li className="flex gap-4">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                          <Zap className="w-3.5 h-3.5" />
                        </div>
                        <span><strong>Integración Curricular Instantánea:</strong> Al tener las bases del Mineduc precargadas, EduBot permite al docente seleccionar un OA y generar sugerencias de inicio, desarrollo y cierre en segundos.</span>
                      </li>
                      <li className="flex gap-4">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                          <FileCheck className="w-3.5 h-3.5" />
                        </div>
                        <span><strong>Sincronización con el Libro Digital:</strong> Lo que se planifica, se inyecta automáticamente en el leccionario del Libro de Clases Digital.</span>
                      </li>
                      <li className="flex gap-4">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                          <BarChart3 className="w-3.5 h-3.5" />
                        </div>
                        <span><strong>Análisis de Cobertura en Tiempo Real:</strong> EduBot avisa proactivamente sobre el porcentaje de cobertura curricular y sugiere priorizaciones estratégicas.</span>
                      </li>
                    </ul>

                    <div className="bg-slate-900 rounded-3xl p-8 my-10 text-white relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"></div>
                      <h4 className="text-2xl font-black uppercase italic mb-4">¿Por qué hablamos de un ahorro del 60%?</h4>
                      <p className="text-blue-100/80">
                        Nuestras pruebas internas con el prototipo de EduSIS muestran que un docente que antes tardaba 3 horas semanales en documentar y alinear sus planificaciones, hoy lo hace en menos de 70 minutos.
                      </p>
                    </div>

                    <p>
                      <strong>Conclusión:</strong> El foco vuelve al alumno. Al automatizar la burocracia con EduBot, logramos que el sistema escolar deje de ser una fábrica de registros para convertirse en lo que siempre debió ser: un espacio de aprendizaje activo y proactivo.
                    </p>

                    <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-slate-100">
                      <div className="text-[10px] font-bold text-slate-400 space-y-1">
                        <p className="uppercase tracking-widest">Fuentes:</p>
                        <p>McKinsey & Company (2020) • UNESCO-IBE Reports</p>
                      </div>
                      <button
                        onClick={() => setPage('edubot')}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-2xl font-black text-xs uppercase tracking-widest transition-all active:scale-95 shadow-xl shadow-blue-500/20 flex items-center gap-2"
                      >
                        Conocer EduBot <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </section>

          {/* --- MISION --- */}
          <section ref={missionRef} className={`py-32 bg-slate-50 relative overflow-hidden transition-all duration-700 ${missionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Soft Background Blobs & Shapes - Responsive */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute top-[10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-blue-500/5 blur-[60px] md:blur-[100px]"></div>
              <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-indigo-500/5 blur-[80px] md:blur-[120px]"></div>

              {/* Solid Decorative Circles - Concentric Effect - Responsive */}
              <div className="absolute top-[-5%] left-[5%] w-[150px] md:w-[300px] h-[150px] md:h-[300px] rounded-full bg-blue-500/[0.04] blur-[2px]"></div>
              <div className="absolute bottom-[5%] right-[5%] w-[200px] md:w-[400px] h-[200px] md:h-[400px] rounded-full bg-indigo-500/[0.04] blur-[2px] flex items-center justify-center">
                <div className="w-[80px] md:w-[180px] h-[80px] md:h-[180px] rounded-full bg-indigo-600/[0.1] blur-[1px]"></div>
              </div>
              <div className="absolute top-[40%] left-[45%] w-[80px] md:w-[150px] h-[80px] md:h-[150px] rounded-full bg-violet-500/[0.03] blur-[1px]"></div>
            </div>

            <div className="max-w-6xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-20 items-center text-left">
              <div className="relative group">
                <div className="absolute inset-0 bg-blue-600/10 rounded-[48px] transform rotate-3 scale-[1.02] blur-xl group-hover:rotate-6 transition-transform duration-500"></div>
                <img src="/mision.png" alt="Misión" className="relative z-10 rounded-[48px] shadow-2xl border border-slate-200 object-cover w-full h-[400px]" />
              </div>
              <div className="text-left">
                <Heart className="w-10 h-10 text-blue-600 mb-8 fill-current text-left opacity-80" />
                <h2 className="text-5xl font-black mb-8 tracking-tighter uppercase italic leading-none text-slate-900 font-black text-left">Nuestra Misión</h2>
                <p className="text-2xl font-medium text-slate-600 italic leading-relaxed text-left">
                  "Democratizar la gestión educativa de excelencia, permitiendo que cada colegio tenga las herramientas para <span className="text-blue-600 font-black not-italic border-b-4 border-blue-600/20">formar el futuro</span>."
                </p>
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
          <section ref={contactRef} id="contacto" className="py-24 bg-gradient-to-br from-[#5c6eff] via-indigo-600 to-violet-600 px-6 relative overflow-hidden transition-all duration-700 text-left">
            {/* Top Wave for Contact - Responsive */}
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
              <svg className="relative block w-full h-[50px] md:h-[100px]" viewBox="0 0 1440 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0L40 10C80 20 160 40 240 46.7C320 53 400 47 480 43.3C560 40 640 40 720 45C800 50 880 60 960 63.3C1040 67 1120 63 1200 53.3C1280 43 1360 27 1400 18.3L1440 10V0H1400C1360 0 1280 0 1200 0C1120 0 1040 0 960 0C880 0 800 0 720 0C640 0 560 0 480 0C400 0 320 0 240 0C160 0 80 0 40 0H0V0Z" fill="#ffffff"></path>
              </svg>
            </div>

            <div className={`max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10 pt-20 ${contactVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} text-left`}>
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
        </>
      )}
    </div>
  );
};

export default LandingPage;