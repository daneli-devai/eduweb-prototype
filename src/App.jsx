import React, { useState, useEffect, useRef } from 'react';
import {
  Menu, X, ArrowRight, CheckCircle, Zap, Smartphone, Users, Globe,
  ChevronDown, Star, Send, Mail, Building, Layout, Play, Cloud,
  ShieldCheck, Code2, Briefcase, GraduationCap, Award, MapPin,
  Phone, Linkedin, Facebook, Instagram, Twitter, FileText, Monitor,
  Rocket, Check, BarChart3, PieChart, Search, Bell, Settings, LogOut,
  Calendar, BookOpen, Clock, AlertCircle, FileCheck, MoreHorizontal,
  ChevronRight, Plus, Minus, HelpCircle, Heart, Server, MessageCircle, Bot, BellRing, Cpu, Table, Target, RotateCcw, Smile,
  FilePlus2, ScanLine, Tags, Sparkles, Tablet, Activity, Puzzle, ShieldAlert, LayoutGrid
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
            className={`px-6 py-3 rounded-full text-sm font-semibold flex items-center gap-2 transition-all duration-300 ${activeTab === tab.id
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
                  <h4 className="text-lg font-semibold text-slate-900 mb-2">{tab.title}</h4>
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
              <div className="bg-brand-blue/10 w-16 h-16 rounded-3xl flex items-center justify-center mx-auto mb-6 border border-brand-blue/20">
                <ShieldCheck className="w-8 h-8 text-brand-blue" />
              </div>
              <h2 className="text-2xl font-semibold text-slate-900 tracking-tight mb-4">¿Olvidaste tu contraseña?</h2>
              <p className="text-slate-700 font-medium text-sm leading-relaxed mb-2 px-4">
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

              <button className="w-full btn-black !py-5">
                Enviar Código <ArrowRight className="w-4 h-4" />
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
    <div className="min-h-screen bg-surface-lavender relative overflow-hidden font-sans flex items-center justify-center p-6">
      {/* Dynamic Background Elements */}
      <div className="absolute top-[-10%] right-[-5%] w-[60vw] h-[60vw] rounded-full bg-brand-teal/10 blur-[120px] animate-pulse-soft"></div>
      <div className="absolute bottom-[10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-brand-purple/10 blur-[150px] animate-float"></div>
      <div className="absolute top-[20%] left-[10%] w-[30vw] h-[30vw] rounded-full bg-brand-orange/5 blur-[100px]"></div>

      <div className="relative z-10 w-full max-w-md animate-fade-in-up">
        {/* Logo and Welcome Message */}
        <div className="flex flex-col items-center mb-8">
          <div className="cursor-pointer group flex flex-col items-center" onClick={onBack}>
            <div className="bg-white/40 backdrop-blur-xl p-4 rounded-[2rem] border border-white/40 mb-6 group-hover:scale-110 transition-transform shadow-xl">
              <img src="/logosolo.png" alt="Logo" className="h-12 w-auto" />
            </div>
            <h1 className="text-2xl font-semibold text-slate-900 tracking-tight text-center leading-none">
              Bienvenido a <span className="text-[#FF9D42]">EduSis</span>
            </h1>
            <p className="mt-3 text-slate-700 font-medium text-[10px] uppercase tracking-[0.2em] text-center">
              Construyendo el futuro de la educación, hoy.
            </p>
          </div>
        </div>

        {/* High-End Glassmorphism Card */}
        <div className="glass-card !p-10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-orange via-brand-teal to-brand-purple opacity-50"></div>

          <p className="text-slate-700 text-[10px] font-semibold uppercase tracking-[0.2em] leading-none">Acceso Seguro al Ecosistema</p>

          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-semibold text-slate-800 uppercase tracking-widest ml-4">Email Corporativo</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none text-slate-400 group-focus-within:text-brand-blue transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <input
                  type="email"
                  placeholder="usuario@edusis.cl"
                  className="w-full bg-white/40 border border-white/60 p-4 pl-14 rounded-2xl text-slate-900 outline-none focus:bg-white focus:border-brand-blue/30 focus:shadow-lg transition-all font-semibold placeholder:text-slate-400 text-sm"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center ml-4 pr-4">
                <label className="text-[10px] font-semibold text-slate-800 uppercase tracking-widest">Contraseña</label>
                <button
                  type="button"
                  onClick={() => setView('forgot')}
                  className="text-[9px] font-semibold text-[#690efe] hover:text-brand-purple uppercase tracking-widest transition-colors"
                >
                  ¿Olvidaste tu clave?
                </button>
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none text-slate-400 group-focus-within:text-brand-blue transition-colors">
                  <FileCheck className="w-4 h-4" />
                </div>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full bg-white/40 border border-white/60 p-4 pl-14 rounded-2xl text-slate-900 outline-none focus:bg-white focus:border-brand-blue/30 focus:shadow-lg transition-all font-semibold placeholder:text-slate-400 text-sm"
                />
              </div>
            </div>

            <button className="w-full btn-black !py-5 mt-4">
              Entrar al Sistema <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="mt-10 pt-8 border-t border-white/20 text-center">
            <p className="text-slate-700 text-[10px] font-semibold uppercase tracking-widest">
              ¿Problemas para entrar? <a href="#" className="text-[#690efe] hover:underline transition-colors font-semibold">Contactar Soporte</a>
            </p>
          </div>
        </div>

        <button
          onClick={onBack}
          className="mt-8 mx-auto flex items-center gap-2 text-[10px] font-semibold text-slate-700 hover:text-slate-900 uppercase tracking-widest transition-colors group"
        >
          <RotateCcw className="w-4 h-4 group-hover:rotate-[-45deg] transition-transform" /> Volver al Inicio
        </button>
      </div>
    </div>
  );
};

const FlipCard = React.memo(({ icon, title, description, colorScheme = 'blue' }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const colors = {
    pink: { text: '#9D174D', iconBg: '#FCE7F3', iconColor: '#BE185D', border: '#FBCFE8', bg: '#FCE7F3' },
    green: { text: '#166534', iconBg: '#DCFCE7', iconColor: '#15803D', border: '#BBF7D0', bg: '#DCFCE7' },
    yellow: { text: '#854D0E', iconBg: '#FEF9C3', iconColor: '#A16207', border: '#FEF08A', bg: '#FEF9C3' },
    lila: { text: '#5B21B6', iconBg: '#EDE9FE', iconColor: '#7C3AED', border: '#DDD6FE', bg: '#EDE9FE' },
    purple: { text: '#5B21B6', iconBg: '#EDE9FE', iconColor: '#7C3AED', border: '#DDD6FE', bg: '#EDE9FE' },
    cyan: { text: '#155E75', iconBg: '#CFFAFE', iconColor: '#0891B2', border: '#A5F3FC', bg: '#CFFAFE' },
    orange: { text: '#9A3412', iconBg: '#FFEDD5', iconColor: '#EA580C', border: '#FED7AA', bg: '#FFEDD5' }
  };

  const current = colors[colorScheme] || colors.purple;

  return (
    <div
      className="w-full aspect-square max-w-[280px] mx-auto cursor-pointer group perspective-1000"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={`relative w-full h-full transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}
      >
        {/* Front Face: Pastel Background */}
        <div
          className="absolute inset-0 w-full h-full p-8 flex flex-col items-center justify-center text-center backface-hidden rounded-[2.5rem] shadow-xl transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2 border"
          style={{ backgroundColor: current.bg, borderColor: current.border }}
        >
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-white/60 transform transition-transform duration-500 group-hover:scale-110" style={{ backgroundColor: current.iconBg }}>
            <div style={{ color: current.iconColor }}>
              {React.cloneElement(icon, { size: 28, strokeWidth: 2 })}
            </div>
          </div>
          <h3 className="text-xl font-semibold leading-tight tracking-tight mb-3" style={{ color: current.text }}>
            {title}
          </h3>
          <div className="h-0.5 w-12 rounded-full mb-4 opacity-30" style={{ backgroundColor: current.text }}></div>
          <div className="flex items-center gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
            <span className="text-[9px] font-black uppercase tracking-widest" style={{ color: current.text }}>Saber más</span>
            <RotateCcw className="w-3 h-3 hover:rotate-45 transition-transform" style={{ color: current.text }} />
          </div>
        </div>

        {/* Back Face: Pastel Background */}
        <div
          className="absolute inset-0 w-full h-full rounded-[2.5rem] flex flex-col items-center justify-center p-8 shadow-2xl backface-hidden rotate-y-180 border"
          style={{ backgroundColor: current.bg, borderColor: current.border }}
        >
          <div className="mb-6 text-left italic">
            <div className="text-[10px] font-black uppercase tracking-widest opacity-40 mb-2" style={{ color: current.text }}>Detalles:</div>
            <p className="font-bold text-sm leading-relaxed" style={{ color: current.text }}>
              {description}
            </p>
          </div>
          <div className="mt-4 flex items-center gap-2 opacity-60 cursor-pointer">
            <span className="text-[9px] font-black uppercase tracking-[0.2em]" style={{ color: current.text }}>Volver</span>
            <RotateCcw className="w-3 h-3" style={{ color: current.text }} />
          </div>
        </div>
      </div>
    </div>
  );
});

const EduBotPage = ({ onBack, onStartNow }) => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 overflow-x-hidden selection:bg-[#3B82F6]/10 selection:text-[#3B82F6] relative">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div
          className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#3B82F6]/5 blur-[120px] animate-pulse"
          style={{ willChange: 'transform, opacity' }}
        ></div>
        <div
          className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-[#3B82F6]/5 blur-[150px] animate-float-slow"
          style={{ willChange: 'transform, opacity' }}
        ></div>
      </div>

      {/* Navbar Minimalista para EduBot */}
      <nav className="fixed w-full z-50 transition-all duration-300 bg-white/90 backdrop-blur-md border-b border-slate-100 py-4">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={onBack}>
            <img src="/logosolo.png" alt="Logo EduSis" className="h-10 w-auto object-contain transition-transform group-hover:scale-110" />
            <span className="text-lg tracking-tight text-slate-900" style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 300 }}>EDUSIS</span>
          </div>
          <button
            onClick={onBack}
            className="text-[11px] font-semibold uppercase tracking-widest text-slate-700 hover:text-brand-blue transition-colors flex items-center gap-2"
          >
            <ChevronRight className="w-3 h-3 rotate-180" /> Volver al Inicio
          </button>
        </div>
      </nav>

      {/* Hero EduBot */}
      <header className="relative pt-32 pb-40 lg:pt-48 lg:pb-56 overflow-hidden flex items-center min-h-[700px]" style={{ backgroundColor: '#F5F3FF' }}>
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-center lg:text-left">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FF9D42]/10 border border-[#FF9D42]/20 text-[#FF9D42] text-[11px] font-bold uppercase tracking-widest mb-6 uppercase">
                Inteligencia Artificial Educativa
              </div>
              <h1 className="text-4xl lg:text-5xl font-semibold text-slate-900 leading-tight mb-6 tracking-tight text-left uppercase">
                Conoce a <span className="text-slate-900">EduBot</span>
              </h1>
              <p className="text-base text-slate-700 mb-10 leading-relaxed font-medium max-w-lg mx-auto lg:mx-0">
                El asistente de IA diseñado específicamente para ecosistemas educativos. Potencia la labor docente y optimiza la gestión institucional en tiempo real.
              </p>
              <div className="flex gap-4 justify-center lg:justify-start">
                <button className="btn-black">Solicitar Demo de EduBot</button>
              </div>
            </div>
            <div className="hidden lg:flex relative justify-center items-center px-10">
              {/* Floating Notifications */}
              {/* 1. Planificación (Green) */}
              <div className="absolute -top-8 -right-4 bg-[#F0FDF4] backdrop-blur-xl p-4 rounded-[2rem] shadow-2xl border border-[#BBF7D0]/60 animate-float z-30 flex items-center gap-3">
                <div className="bg-[#15803D]/10 p-2 rounded-full text-[#15803D]">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[8px] text-[#166534]/70 font-black uppercase tracking-widest leading-none mb-1">EduBot IA</span>
                  <span className="text-[10px] font-extrabold text-slate-800">Planificación Lista</span>
                </div>
              </div>

              {/* 2. Chat (Cyan) */}
              <div className="absolute top-1/4 -left-8 bg-[#F0FDFA] backdrop-blur-xl p-4 rounded-[2rem] shadow-2xl border border-[#A5F3FC]/60 animate-float z-30 flex items-center gap-3" style={{ animationDelay: '0.6s' }}>
                <div className="bg-[#0891B2]/10 p-2 rounded-full text-[#0891B2]">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[8px] text-[#155E75]/70 font-black uppercase tracking-widest leading-none mb-1">Chat Activo</span>
                  <span className="text-[10px] font-extrabold text-slate-800">Respuestas IA</span>
                </div>
              </div>

              {/* 3. Sugerencia (Yellow) */}
              <div className="absolute bottom-10 -left-12 bg-[#FFFBEB] backdrop-blur-xl p-4 rounded-[2rem] shadow-2xl border border-[#FEF08A]/60 animate-float z-30 flex items-center gap-3" style={{ animationDelay: '1.2s' }}>
                <div className="bg-[#A16207]/10 p-2 rounded-full text-[#A16207]">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[8px] text-[#854D0E]/70 font-black uppercase tracking-widest leading-none mb-1">Sugerencia</span>
                  <span className="text-[10px] font-extrabold text-slate-800">Actividad Creada</span>
                </div>
              </div>

              {/* 4. Radar (Pink) */}
              <div className="absolute bottom-0 -right-8 bg-[#FDF2F8] backdrop-blur-xl p-4 rounded-[2rem] shadow-2xl border border-[#FBCFE8]/60 animate-float z-30 flex items-center gap-3" style={{ animationDelay: '1.8s' }}>
                <div className="bg-[#BE185D]/10 p-2 rounded-full text-[#BE185D]">
                  <ShieldAlert className="w-4 h-4" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[8px] text-[#9D174D]/70 font-black uppercase tracking-widest leading-none mb-1">Radar RAT</span>
                  <span className="text-[10px] font-extrabold text-slate-800">Alerta de Riesgo</span>
                </div>
              </div>

              <div className="relative w-full max-w-sm lg:max-w-md aspect-square bg-white rounded-[3rem] p-8 shadow-2xl overflow-hidden animate-float-slow border border-slate-100">
                <div className="absolute inset-0 bg-slate-50/50 backdrop-blur-sm border border-white/20 rounded-[2.5rem]"></div>
                <img src="/edubot.png" alt="EduBot" className="relative z-10 w-full h-full object-contain drop-shadow-2xl" />
              </div>
            </div>
          </div>
        </div>

        {/* Wave Wave Finish */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg className="relative block w-full h-[60px] md:h-[120px]" viewBox="0 0 1440 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path fill="#ffffff" d="M0,0 C480,100 960,100 1440,0 V120 H0 Z"></path>
          </svg>
        </div>
      </header>

      {/* Tarjetas Modern Square */}
      <section className="py-24 relative z-10 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight uppercase">Potencia tu Colegio</h2>
            <div className="h-1.5 w-24 bg-[#690efe]/30 mx-auto rounded-full mt-4 mb-8"></div>
            <p className="text-slate-400 font-medium uppercase text-[10px] tracking-[0.2em] opacity-80">Funcionalidades Core de EduBot</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            <FlipCard
              icon={<Zap />}
              title="Ayuda a Planificar"
              description="Genera sugerencias de planificación alineadas al Mineduc en segundos. Optimiza tu tiempo administrativo docente."
              colorScheme="lila"
            />
            <FlipCard
              icon={<BookOpen />}
              title="Domina la Plataforma"
              description="Resuelve dudas técnicas y operativas de EduSis al instante. EduBot conoce cada detalle del sistema para guiarte."
              colorScheme="pink"
            />
            <FlipCard
              icon={<Target />}
              title="Radar de Riesgo"
              description="Identifica patrones de ausentismo y bajo rendimiento preventivamente. Actúa antes de que ocurra la deserción escolar."
              colorScheme="cyan"
            />
            <FlipCard
              icon={<Tags />}
              title="Categorizador"
              description="Clasifica tus recursos por unidades, niveles y OA automáticamente para un orden institucional perfecto."
              colorScheme="yellow"
            />
          </div>
        </div>
      </section>

      {/* Motivational Engagement Section */}
      <section className="relative mt-20 md:mt-32 min-h-[500px] md:min-h-[600px] flex items-center overflow-hidden bg-[#FFB163]">
        {/* Wave Background SVG */}
        <div className="absolute inset-x-0 top-0 bottom-0 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 1440 800" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 0C300 100 600 0 900 0C1150 0 1300 150 1440 50V800H0V0Z"
              fill="url(#blue_gradient_wave)"
            />
            <defs>
              <linearGradient id="blue_gradient_wave" x1="720" y1="0" x2="720" y2="800" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FFB163" />
                <stop offset="0.7" stopColor="#FFB163" />
                <stop offset="1" stopColor="#C4B5FD" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute top-[10%] left-[-5%] w-[40vw] h-[40vw] rounded-full bg-white/10 blur-[80px]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center lg:text-left">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-semibold text-white leading-[1.1] tracking-tight mb-8 uppercase">
                Transforma tu <br />
                colegio en una <br />
                fábrica de futuro.
              </h2>
              <p className="text-xl text-white font-medium mb-10 max-w-xl opacity-90">
                Libera a tus docentes de la carga administrativa y permíteles enfocarse en lo que realmente importa: la formación de sus alumnos.
              </p>
              <button
                onClick={onStartNow}
                className="bg-white text-slate-900 btn-premium shadow-2xl hover:bg-slate-50"
              >
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
      <footer className="bg-gradient-to-br from-[#2D1B69] via-[#1E1B4B] to-[#0F172A] py-16 px-6 text-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-8 relative z-10">
          <div className="flex items-center gap-4">
            <img src="/logosolo.png" alt="Logo" className="h-10 w-auto object-contain" />
            <span className="text-xl tracking-tight text-white" style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 300 }}>EDUSIS</span>
          </div>
          <p className="text-slate-400 text-[10px] uppercase tracking-[0.3em] font-semibold">© 2026 EduSis SpA • Ingeniería Pedagógica</p>
          <button
            onClick={onBack}
            className="text-[10px] font-semibold uppercase tracking-widest text-white/60 hover:text-white transition-all underline underline-offset-8 decoration-white/20 hover:decoration-white"
          >
            Volver al Inicio
          </button>
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

  const handleStartNow = () => {
    setPage('home');
    setTimeout(() => {
      const contactSection = document.getElementById('contacto');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

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

  // Datos del Carrusel del Hero - Textos que rotan
  const heroSlides = [
    {
      id: 0,
      badge: "Ecosistema v3.0",
      title: "GESTIÓN ESCOLAR INTELIGENTE",
      desc: "La plataforma integral que conecta directivos, docentes y familias. Automatiza lo administrativo y enfócate 100% en educar.",
      image: "/edusis-plataformas.png"
    },
    {
      id: 1,
      badge: "Nuevo: EduBot IA",
      title: "TU ASISTENTE VIRTUAL CON IA",
      desc: "Resuelve dudas de apoderados y docentes al instante. Nuestro Chatbot con IA optimiza la comunicación interna y externa 24/7.",
      image: "/edusis-plataformas.png"
    },
    {
      id: 2,
      badge: "Cumplimiento Normativo",
      title: "EFICIENCIA BAJO CIRCULAR N°30",
      desc: "Automatización de procesos críticos y Libro de Clases Digital diseñado específicamente para cumplir con los estándares del MINEDUC.",
      image: "/edusis-plataformas.png"
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
    <div className="min-h-screen bg-white font-sans text-slate-800 overflow-x-hidden selection:bg-brand-blue/10 selection:text-brand-blue">
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[60vw] h-[60vw] rounded-full bg-brand-teal/5 blur-[120px] animate-pulse-soft"></div>
        <div className="absolute bottom-[10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-brand-purple/5 blur-[150px] animate-float"></div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@600;700&family=Anta&family=Orbitron:wght@400;500;600;700&family=Allerta+Stencil&family=Noto+Sans:wght@200;300;400;500;700&family=Baumans&family=Inter:wght@400;700;900&display=swap');
        @import url('https://fonts.cdnfonts.com/css/wrongo');
        
        .font-display { font-family: 'Baumans', cursive; }

        @keyframes fade-in-up { 0% { opacity: 0; transform: translateY(20px); } 100% { opacity: 1; transform: translateY(0); } }
        @keyframes fade-in-left { 0% { opacity: 0; transform: translateX(-20px); } 100% { opacity: 1; transform: translateX(0); } }
        @keyframes pop-in { 0% { transform: scale(0); opacity: 0; } 60% { transform: scale(1.1); opacity: 1; } 100% { transform: scale(1); opacity: 1; } }
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
        
        .perspective-1000 { perspective: 1000px; -webkit-perspective: 1000px; }
        .preserve-3d { transform-style: preserve-3d; -webkit-transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; -webkit-backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); -webkit-transform: rotateY(180deg); }
      `}</style>

      {page === 'edubot' ? (
        <EduBotPage onBack={() => setPage('home')} onStartNow={handleStartNow} />
      ) : page === 'login' ? (
        <LoginPage onBack={() => setPage('home')} />
      ) : (
        <>
          {/* --- NAVBAR --- */}
          <nav className={`fixed w-full z-50 transition-all duration-300 bg-white border-b border-slate-100 ${isScrolled ? 'py-3 shadow-sm' : 'py-5'}`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
              <div className="flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <img src="/logosolo.png" alt="Logo EduSis" className="h-12 w-auto object-contain transition-transform group-hover:scale-110" />
                <span className="text-xl tracking-tight text-slate-900" style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 300 }}>EDUSIS</span>
              </div>
              <div className="hidden md:flex items-center gap-8 text-[11px] font-semibold uppercase tracking-widest text-slate-700 mr-2 lg:mr-6">
                <a href="#demo" className="hover:text-brand-blue transition-colors">Demo</a>
                <a href="#beneficios" className="hover:text-brand-blue transition-colors">Beneficios</a>
                <a href="#equipo" className="hover:text-brand-blue transition-colors">Equipo</a>
                <a href="#blog" className="hover:text-brand-blue transition-colors">Blog</a>
                <button
                  onClick={() => setPage('edubot')}
                  className="hover:text-brand-blue transition-colors"
                >
                  EDUBOT
                </button>
                <button
                  onClick={() => setPage('login')}
                  className="btn-black btn-small"
                >
                  Iniciar sesión <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              <button className="md:hidden text-slate-900" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
            {mobileMenuOpen && (
              <div className="md:hidden border-t border-slate-100 mt-4 pt-4 px-6 flex flex-col gap-4 text-slate-800 animate-fadeIn bg-white/95 backdrop-blur-md">
                <a href="#demo" className="text-xs font-black uppercase tracking-widest py-2" onClick={() => setMobileMenuOpen(false)}>Demo</a>
                <a href="#beneficios" className="text-xs font-black uppercase tracking-widest py-2" onClick={() => setMobileMenuOpen(false)}>Beneficios</a>
                <a href="#equipo" className="text-xs font-black uppercase tracking-widest py-2" onClick={() => setMobileMenuOpen(false)}>Equipo</a>
                <a href="#blog" className="text-xs font-black uppercase tracking-widest py-2" onClick={() => setMobileMenuOpen(false)}>Blog</a>
                <button
                  onClick={() => { setPage('edubot'); setMobileMenuOpen(false); }}
                  className="text-xs font-black uppercase tracking-widest py-2 text-left"
                >
                  EduBot
                </button>
                <button
                  onClick={() => { setPage('login'); setMobileMenuOpen(false); }}
                  className="btn-black btn-small w-full"
                >
                  Iniciar sesión
                </button>
              </div>
            )}
          </nav>

          {/* --- HERO SECTION --- */}
          <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-[90vh] flex items-center bg-white">
            {/* Diffused Gradient Aura - Lowered and more compact */}
            <div className="absolute bottom-0 left-0 w-full h-[40%] pointer-events-none opacity-20 overflow-hidden">
              <div
                className="absolute bottom-[-20%] left-[-15%] right-[-15%] h-full blur-[110px]"
                style={{
                  background: 'linear-gradient(to top, rgba(124, 58, 237, 0.3) 0%, rgba(236, 72, 153, 0.4) 30%, rgba(249, 115, 22, 0.4) 60%, transparent 100%)'
                }}
              ></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-left">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <div className="text-left animate-fade-in-up order-2 lg:order-1 min-h-[350px] flex flex-col justify-center">
                  <div key={currentHeroSlide} className="animate-fade-in-up text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-100 text-brand-blue text-[10px] font-black uppercase tracking-widest mb-6 shadow-sm">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-teal opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-teal"></span>
                      </span>
                      {heroSlides[currentHeroSlide].badge}
                    </div>
                    <h1 className="text-4xl lg:text-6xl font-semibold text-slate-900 leading-[1.1] tracking-tight mb-6 text-left uppercase">
                      {heroSlides[currentHeroSlide].title}
                    </h1>
                    <p className="text-base text-slate-700 mb-10 leading-relaxed font-medium max-w-lg text-left">
                      {heroSlides[currentHeroSlide].desc}
                    </p>
                  </div>
                  <div className="flex gap-2 mb-8">
                    {heroSlides.map((_, idx) => (
                      <button key={idx} onClick={() => setCurrentHeroSlide(idx)} className={`h-2 rounded-full transition-all duration-300 ${currentHeroSlide === idx ? 'w-10 bg-slate-900' : 'w-2 bg-slate-300 hover:bg-slate-400'}`} />
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 mb-12 relative">
                    <a href="#contacto" className="btn-black !rounded-full !px-12">Solicitar Asesoría</a>
                    <a href="#demo" className="btn-outline-purple !rounded-full !px-12"><Play className="w-4 h-4 fill-current" /> Ver Demo</a>
                  </div>
                </div>
                <div className="hidden lg:flex relative h-[650px] w-full items-center justify-center animate-fade-in-left delay-300 order-1 lg:order-2">
                  <div key={currentHeroSlide} className="relative z-10 w-full max-w-[750px] transition-all duration-700 px-4">


                    <img src="/edusis-plataformas.png" alt="EduSis Plataformas" className="w-full h-auto rounded-[2.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border border-slate-100 relative z-10" />

                    {/* Persistent Floating Notifications - Fixed for all slides */}

                    {/* 1. EduBot IA (Yellow Pastel) */}
                    <div className="absolute top-[65%] -left-20 -translate-y-1/2 bg-[#FFFFE0] backdrop-blur-2xl p-3 rounded-[1.5rem] shadow-2xl border border-[#FEF08A]/60 animate-float z-30 transform hover:scale-105 transition-transform">
                      <div className="flex gap-2 items-center w-auto pr-3">
                        <div className="bg-brand-blue/10 p-2 rounded-full text-brand-blue">
                          <Bot className="w-4 h-4" />
                        </div>
                        <div className="flex flex-col text-left">
                          <span className="text-[8px] text-slate-400 font-black uppercase tracking-widest leading-none mb-0.5 text-left">EduBot IA</span>
                          <span className="text-[10px] font-bold text-slate-700">Asistente Activo</span>
                        </div>
                      </div>
                    </div>

                    {/* 2. Reportes Listos (Green Pastel) */}
                    <div className="absolute top-12 -right-24 bg-[#F0FFF4] backdrop-blur-2xl p-3 rounded-[1.5rem] shadow-2xl border border-[#C6F6D5]/60 animate-float z-30 transform hover:scale-105 transition-transform" style={{ animationDelay: '0.8s' }}>
                      <div className="flex gap-2 items-center pr-1 text-left">
                        <div className="bg-[#22C55E]/10 p-2 rounded-full text-[#22C55E]">
                          <FileCheck className="w-4 h-4" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[8px] text-[#22C55E]/70 font-black uppercase tracking-widest">Reportes</span>
                          <span className="text-[10px] font-bold text-slate-800">Listos en 1 clic</span>
                        </div>
                      </div>
                    </div>

                    {/* 3. Radar RAT (Lower Right) */}
                    <div className="absolute bottom-16 -right-28 bg-white/95 backdrop-blur-xl p-3 rounded-[1.5rem] shadow-2xl border border-white/60 animate-float z-20" style={{ animationDelay: '1.5s' }}>
                      <div className="flex gap-2 items-center">
                        <div className="bg-brand-teal/10 p-2 rounded-full text-brand-teal"><Activity className="w-4 h-4" /></div>
                        <div className="text-left">
                          <p className="text-[8px] font-black uppercase text-slate-400 leading-none mb-0.5">Radar RAT</p>
                          <p className="text-[10px] font-bold text-slate-700">Escaneando...</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>



          <section ref={introRef} className={`py-40 relative overflow-hidden transition-all duration-1000 ${introVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} bg-white text-left`}>
            {/* Clean Background */}
            <div className="absolute inset-0 pointer-events-none bg-white"></div>



            <div className="max-w-7xl mx-auto px-6 relative z-10">
              <div className="grid lg:grid-cols-12 gap-8 items-stretch">
                {/* Left Large Card */}
                <div className="lg:col-span-7 flex">
                  <div className="w-full glass-card !p-12 lg:!p-16 flex flex-col items-center text-center justify-center shadow-[0_0_60px_-15px_rgba(0,0,0,0.1),0_40px_80px_-20px_rgba(0,0,0,0.15)] border-white/60 bg-white/40 backdrop-blur-3xl rounded-[3rem]">
                    <div className="inline-block px-5 py-2 rounded-full bg-brand-blue/10 text-brand-blue text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                      La Nueva Era Educativa
                    </div>
                    <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight leading-[1.1]">
                      ¿Qué es <span className="text-[#FF9D42] capitalize">EduSis</span> y por qué elegir el cambio?
                    </h2>
                    <div className="h-1.5 w-20 bg-[#690efe]/30 rounded-full mt-6 mb-8"></div>
                    <p className="text-base text-slate-500 font-bold leading-relaxed max-w-2xl mx-auto mb-12">
                      EduSis es el primer ecosistema inteligente diseñado para liberar a los colegios del peso de la burocracia. Elegir el cambio significa priorizar la enseñanza sobre el papeleo, integrando IA de vanguardia y cumplimiento normativo en una experiencia fluida que empodera a toda la comunidad escolar.
                    </p>
                    <div className="flex flex-wrap justify-center gap-10">
                      <div className="flex flex-col items-center gap-3 group">
                        <div className="p-4 rounded-[1.5rem] bg-brand-blue/5 text-brand-blue group-hover:scale-110 transition-transform shadow-sm"><Cpu size={28} /></div>
                        <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">IA Activa</span>
                      </div>
                      <div className="flex flex-col items-center gap-3 group">
                        <div className="p-4 rounded-[1.5rem] bg-brand-purple/5 text-brand-purple group-hover:scale-110 transition-transform shadow-sm"><Zap size={28} /></div>
                        <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">Eficiencia 3.0</span>
                      </div>
                      <div className="flex flex-col items-center gap-3 group">
                        <div className="p-4 rounded-[1.5rem] bg-brand-teal/5 text-brand-teal group-hover:scale-110 transition-transform shadow-sm"><ShieldCheck size={28} /></div>
                        <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">100% Normativo</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Stacked Cards */}
                <div className="lg:col-span-5 flex flex-col gap-8">
                  {/* Card 1: Ingenieria Pedagogica */}
                  <div className="flex-1 glass-card !p-6 flex flex-col md:flex-row gap-6 items-center shadow-[0_0_50px_-10px_rgba(0,0,0,0.08),0_25px_60px_-15px_rgba(0,0,0,0.12)] border-white/60 bg-white/40 backdrop-blur-2xl rounded-[2.5rem] transition-all hover:-translate-y-1">
                    <div className="w-full md:w-2/5 aspect-square rounded-[2rem] overflow-hidden shrink-0 border border-white/40">
                      <img src="/RecuperaTiempo.png" alt="Recupera Tiempo" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex flex-col justify-center text-left">
                      <h3 className="text-base font-black text-slate-900 mb-2 leading-tight">Ingeniería Pedagógica (Planificación):</h3>
                      <p className="text-[13px] text-slate-500 font-medium leading-relaxed">
                        "Automatiza tu planificación alineada al Mineduc mediante EduBot. Recupera el tiempo administrativo para inspirar en el aula con actividades creativas y desafiantes."
                      </p>
                    </div>
                  </div>

                  {/* Card 2: Gestion Proactiva */}
                  <div className="flex-1 glass-card !p-6 flex flex-col md:flex-row gap-6 items-center shadow-[0_0_50px_-10px_rgba(0,0,0,0.08),0_25px_60px_-15px_rgba(0,0,0,0.12)] border-white/60 bg-white/40 backdrop-blur-2xl rounded-[2.5rem] transition-all hover:-translate-y-1">
                    <div className="w-full md:w-2/5 aspect-square rounded-[2rem] overflow-hidden shrink-0 border border-white/40">
                      <img src="/GestionProactiva.png" alt="Gestión Proactiva" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex flex-col justify-center text-left">
                      <h3 className="text-base font-black text-slate-900 mb-2 leading-tight">Gestión Proactiva (Comunidad/Radar):</h3>
                      <p className="text-[13px] text-slate-500 font-medium leading-relaxed">
                        "Detecta riesgos de deserción al instante con nuestro Radar RAT. Fortalece la alianza con las familias basando cada intervención en datos reales y oportunos."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* --- SECCIÓN DE BENEFICIOS --- */}
          <section ref={benefitsRef} id="beneficios" className="py-48 px-6 relative bg-white overflow-hidden text-left">
            {/* Clean Background */}
            <div className="absolute inset-0 pointer-events-none bg-white"></div>



            {/* Premium Transition Line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-4 relative z-10 text-left">
              <div className={`text-center mb-24 transition-all duration-700 ${benefitsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight leading-none text-center">Cuadrícula de Beneficios</h2>
                <div className="h-1.5 w-24 bg-[#690efe]/30 mx-auto rounded-full mt-4"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
                <FlipCard
                  icon={<Target />}
                  title="IA Predictiva"
                  description="Análisis de patrones en tiempo real para alertar sobre riesgos de deserción y rendimiento académico."
                  colorScheme="pink"
                />
                <FlipCard
                  icon={<LayoutGrid />}
                  title="Ecosistema Uni"
                  description="Integración total académica y financiera en una plataforma coherente."
                  colorScheme="purple"
                />
                <FlipCard
                  icon={<BarChart3 />}
                  title="Reportes Pro"
                  description="Generación masiva de documentos oficiales en segundos, 100% alineado al Mineduc."
                  colorScheme="cyan"
                />
                <FlipCard
                  icon={<Smile />}
                  title="Soporte VIP"
                  description="Acompañamiento humano continuo para asegurar el éxito de tu colegio."
                  colorScheme="orange"
                />
              </div>
            </div>
          </section>

          {/* --- SECCIÓN NUESTROS MÓDULOS (ESTILO PREMIUM COMPACTO) --- */}
          <section ref={demoRef} id="demo" className="py-24 px-6 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #F5F3FF 0%, #FFFFFF 50%, #FDF2F8 100%)' }}>
            <div className="max-w-7xl mx-auto relative z-10 text-center mb-20">
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight leading-none text-center">Nuestros Módulos</h2>
              <div className="h-1.5 w-24 bg-[#690efe]/30 mx-auto rounded-full mt-4 mb-4"></div>
              <p className="text-slate-400 max-w-2xl mx-auto font-black uppercase text-[9px] tracking-[0.3em] opacity-80 italic">Gestión educativa 360°</p>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  t: 'Libro Digital',
                  d: 'Registro legal de asistencia y firmas 2FA bajo estándar Circular 30.',
                  i: <FileText />,
                  bg: '#F5F3FF', // Lila
                  color: '#7C3AED'
                },
                {
                  t: 'Gestión Alumnos',
                  d: 'Ficha 360° y control de matrícula sincronizada con datos Mineduc.',
                  i: <Users />,
                  bg: '#F0FDF4', // Verde
                  color: '#15803D'
                },
                {
                  t: 'Control Atrasos',
                  d: 'Captura rápida en puerta con ticket digital y aviso inmediato al apoderado.',
                  i: <Clock />,
                  bg: '#FDF2F8', // Rosa
                  color: '#BE185D'
                },
                {
                  t: 'Planificación IA',
                  d: 'Automatización de clases basada en los OAs ministeriales vigentes.',
                  i: <Sparkles />,
                  bg: '#FFFBEB', // Amarillo 
                  color: '#A16207'
                },
                {
                  t: 'Radar de Riesgo',
                  d: 'Alertas tempranas de deserción y bajas académicas mediante algoritmos RAT.',
                  i: <Activity />,
                  bg: '#F0FDFA', // Celeste/Cyan
                  color: '#0891B2'
                },
                {
                  t: 'Módulo PIE',
                  d: 'Inclusión escolar y bitácora de co-docencia según Decreto 170.',
                  i: <Heart />,
                  bg: '#FDF2F8', // Rosa
                  color: '#BE185D'
                },
                {
                  t: 'Convivencia',
                  d: 'Gestión de protocolos y firma de actas digitales en tiempo real.',
                  i: <ShieldCheck />,
                  bg: '#F5F3FF', // Lila
                  color: '#7C3AED'
                },
                {
                  t: 'EduFeed Social',
                  d: 'Muro de evidencias para conectar el aula con la familia y el marketing escolar.',
                  i: <Smartphone />,
                  bg: '#FFF7ED', // Naranja
                  color: '#EA580C'
                }
              ].map((m, idx) => (
                <div
                  key={idx}
                  className={`bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500 group flex flex-col text-left relative overflow-hidden ${demoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${idx * 0.1}s` }}
                >
                  {/* Subtle Background Accent */}
                  <div className="absolute top-0 right-0 w-24 h-24 blur-3xl opacity-10 group-hover:opacity-20 transition-opacity" style={{ backgroundColor: m.color }}></div>

                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-white/60 group-hover:scale-110 transition-transform duration-500" style={{ backgroundColor: m.bg }}>
                    <div style={{ color: m.color }}>
                      {React.cloneElement(m.i, { size: 28, strokeWidth: 2 })}
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold tracking-tight mb-3" style={{ color: m.color }}>
                    {m.t}
                  </h3>

                  <p className="text-sm text-slate-700 font-medium leading-relaxed mb-6">
                    {m.d}
                  </p>

                  <div className="mt-auto flex items-center gap-2 text-slate-300 group-hover:text-slate-900 transition-colors">
                    <div className="h-0.5 w-8 bg-current rounded-full"></div>
                    <span className="text-[9px] font-black uppercase tracking-widest">Premium</span>
                  </div>
                </div>
              ))}
            </div>
          </section>



          {/* --- EQUIPO --- */}
          <section ref={teamRef} id="equipo" className="py-32 bg-white relative overflow-hidden text-center transition-all duration-700">
            {/* Clean Background */}
            <div className="absolute inset-0 pointer-events-none bg-white"></div>
            <div className={`max-w-7xl mx-auto px-6 relative z-10 ${teamVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight leading-none text-center">Liderado por Expertos</h2>
              <div className="h-1.5 w-24 bg-[#690efe]/30 mx-auto rounded-full mt-4 mb-4"></div>
              <p className="text-slate-400 font-black uppercase text-[10px] tracking-[0.3em] mb-20 opacity-60 text-center">Compromiso con la Transformación Digital</p>
              <div className="grid md:grid-cols-4 gap-8">
                {[
                  { n: 'Fabián González', r: 'Director Educativo', c: 'border-indigo-100', img: '/fabian.png' },
                  { n: 'Roxana Rebolledo', r: 'Tecnología Educativa', c: 'border-purple-100', img: '/roxana.png' },
                  { n: 'José Mellado', r: 'Data Engineer', c: 'border-orange-100', img: '/jose.png' },
                  { n: 'Danae González', r: 'Frontend AI Lead', c: 'border-blue-100', img: '/danae.png' }
                ].map((m, i) => (
                  <div key={i} className="bg-[#F8F7FF] p-10 rounded-[40px] shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group text-center">
                    <div className="w-24 h-24 rounded-[32px] bg-slate-50 mx-auto mb-6 flex items-center justify-center overflow-hidden border-2 border-slate-100 group-hover:border-[#5c6eff]/20 transition-all duration-500">
                      <img src={m.img} alt={m.n} className="w-full h-full object-cover" />
                    </div>
                    <h3 className="font-semibold text-slate-900 tracking-tight text-base text-center">{m.n}</h3>
                    <p className="text-[10px] text-[#690efe] uppercase font-semibold mt-2 tracking-widest opacity-70 leading-none text-center">{m.r}</p>
                  </div>
                ))}
              </div>
            </div>
          </section >

          {/* --- BLOG SECTION (MINIMALIST) --- */}
          <section ref={blogRef} id="blog" className={`py-24 bg-white relative overflow-hidden transition-all duration-1000 ${blogVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="max-w-7xl mx-auto px-6 relative z-10">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight leading-none text-center">Blog Educativo</h2>
                <div className="h-1.5 w-20 bg-[#690efe]/30 mx-auto rounded-full mt-4 mb-4"></div>
                <p className="text-slate-400 font-medium uppercase text-[10px] tracking-[0.2em] opacity-80">Ingeniería Pedagógica & IA</p>
              </div>

              <article className="bg-white rounded-[2.5rem] overflow-hidden flex flex-col lg:flex-row items-stretch shadow-xl border border-purple-50 group cursor-pointer transition-all hover:shadow-2xl">
                <div className="w-full lg:w-[45%] h-[350px] lg:h-auto overflow-hidden relative">
                  <img
                    src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=2070"
                    alt="IA en Educación"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                <div className="w-full lg:w-[55%] p-10 lg:p-14 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-full border border-slate-100 bg-slate-50 overflow-hidden">
                      <img src="/fabian.png" alt="Autor" className="w-full h-full object-cover" />
                    </div>
                    <span className="text-[10px] text-slate-700 font-semibold uppercase tracking-widest">EduSis Team • 24 Feb</span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900 leading-[1.15] mb-4 tracking-tight">
                    IA vs. Burocracia
                  </h3>

                  <div className="space-y-4">
                    <p className="text-slate-700 font-medium leading-relaxed text-base">
                      <span className="text-[#FF9D42]">EduBot elimina el 70% de la carga administrativa</span> automatizando planificaciones y reportes Mineduc en segundos.
                    </p>
                    <p className="text-slate-400 font-medium leading-relaxed text-sm italic">
                      Hoy, gracias a la inteligencia pedagógica, el foco vuelve a ser la interacción humana y el aprendizaje profundo, liberando a los docentes del papeleo para siempre.
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </section >



          {/* --- FAQ SECTION (MINIMALIST) --- */}
          <section ref={faqRef} className={`py-24 bg-white px-6 relative overflow-hidden transition-all duration-1000 ${faqVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="max-w-3xl mx-auto relative z-10">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight leading-none text-center">Preguntas Frecuentes</h2>
                <div className="h-1.5 w-20 bg-[#690efe]/30 mx-auto rounded-full mt-4"></div>
              </div>

              <div className="space-y-4">
                {[
                  { q: "¿Cómo es el proceso de migración de datos?", a: "Evaluamos y migramos tu data histórica con los más altos estándares de seguridad e integridad técnica en Google Cloud.", color: "#E0F2FE" },
                  { q: "¿Qué tan seguros están los datos del colegio?", a: "Totalmente. Usamos encriptación bancaria y respaldos automáticos diarios. Tus datos nunca se comparten con terceros.", color: "#E0F2FE" },
                  { q: "¿Cumple con la normativa del Mineduc?", a: "Sí, EduSIS está diseñado específicamente bajo los lineamientos de la Circular 30 y el Decreto 67 de evaluación formativa.", color: "#E0F2FE" },
                  { q: "¿Ofrecen soporte y facilidad de uso?", a: "Tenemos un enfoque de 'Cero Curva de Aprendizaje' y soporte técnico prioritario 24/7 para todos los docentes.", color: "#E0F2FE" }
                ].map((f, i) => (
                  <div key={i} className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden transition-all hover:shadow-md">
                    <button
                      onClick={() => toggleFaq(i)}
                      className="w-full p-8 text-left font-semibold text-slate-900 tracking-tight text-sm flex justify-between items-center group outline-none"
                    >
                      <span className="max-w-[85%] leading-relaxed">{f.q}</span>
                      <div
                        className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-500 ${openFaq === i ? 'rotate-45 text-white' : 'text-slate-400 opacity-50'}`}
                        style={{ backgroundColor: openFaq === i ? '#0F172A' : 'transparent' }}
                      >
                        <Plus className="w-4 h-4" />
                      </div>
                    </button>
                    {openFaq === i && (
                      <div
                        className="p-8 pt-0 text-slate-700 font-medium leading-relaxed text-xs animate-fade-in-up border-t border-slate-50"
                        style={{ backgroundColor: `${f.color}20` }}
                      >
                        {f.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section >

          {/* --- CONTACTO --- */}
          <section ref={contactRef} id="contacto" className="pt-16 pb-40 relative overflow-hidden transition-all duration-700 text-left" style={{ background: 'linear-gradient(to bottom, #FFB163 0%, #FFB163 70%, #C4B5FD 100%)' }}>
            {/* Minimal, almost straight curvature */}
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
              <svg className="relative block w-full h-[40px] md:h-[80px]" viewBox="0 0 1440 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <path fill="#ffffff" d="M0,0 L1440,0 L1440,20 C1000,20 440,100 0,100 Z"></path>
              </svg>
            </div>
            <div className={`max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10 pt-10 ${contactVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} text-left`}>
              <div className="text-white text-left">
                <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white text-[10px] font-black uppercase tracking-[0.3em] mb-8 border border-white/20 backdrop-blur-md">
                  Únete al Cambio
                </div>
                <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-8 leading-tight text-left text-slate-900 uppercase">
                  Agenda <br />
                  tu Demo hoy.
                </h2>
                <p className="text-xl text-white/70 mb-12 font-medium leading-relaxed max-w-md text-left">Agenda una demo personalizada y optimiza tu gestión administrativa en 15 minutos.</p>
                <div className="flex flex-col gap-6 text-left">
                  <div className="flex items-center gap-4 text-left"><div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shadow-lg"><Check className="w-3 h-3 text-white" strokeWidth={5} /></div><span className="font-black text-[11px] uppercase tracking-widest text-white text-left">Asesoría Estratégica</span></div>
                  <div className="flex items-center gap-4 text-left"><div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shadow-lg"><Check className="w-3 h-3 text-white" strokeWidth={5} /></div><span className="font-black text-[11px] uppercase tracking-widest text-white text-left">Soporte Prioritario 24/7</span></div>
                </div>
              </div>
              <div className="glass-card !bg-white/40 !border-white/40 p-12 lg:p-16 shadow-2xl text-left relative overflow-hidden group backdrop-blur-[60px] rounded-[3rem]">
                <h3 className="text-xl font-semibold text-slate-900 tracking-[0.2em] mb-10 text-left uppercase">Agenda tu Demo</h3>
                <form className="space-y-6 text-left">
                  <input type="text" placeholder="Nombre y Apellido" className="w-full bg-white/40 border border-white/60 p-5 rounded-2xl text-slate-900 outline-none focus:bg-white/60 focus:border-white transition-all font-bold placeholder:text-slate-500 text-left" />
                  <input type="email" placeholder="Email Institucional" className="w-full bg-white/40 border border-white/60 p-5 rounded-2xl text-slate-900 outline-none focus:bg-white/60 focus:border-white transition-all font-bold placeholder:text-slate-500 text-left" />
                  <input type="text" placeholder="Institución Educativa" className="w-full bg-white/40 border border-white/60 p-5 rounded-2xl text-slate-900 outline-none focus:bg-white/60 focus:border-white transition-all font-bold placeholder:text-slate-500 text-left" />
                  <button className="w-full bg-slate-900 text-white font-black uppercase tracking-tighter italic p-7 rounded-2xl hover:scale-[1.02] transition-all shadow-xl !text-xs mt-6">
                    Agendar Demo Gratis
                  </button>
                </form>
              </div>
            </div>
          </section >

          {/* --- FOOTER --- */}
          <footer className="bg-gradient-to-br from-[#2D1B69] via-[#1E1B4B] to-[#0F172A] pt-32 pb-16 px-6 text-slate-300 text-left relative overflow-hidden">
            {/* Base Gradient Footer - No Blobs */}

            <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-20 border-b border-white/10 pb-20 mb-16 text-left relative z-10">
              <div className="space-y-8 text-left">
                <div className="flex items-center gap-4 text-left">
                  <img src="/logosolo.png" className="h-12 w-auto object-contain" />
                  <span className="text-2xl tracking-tight text-white" style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 300 }}>EDUSIS</span>
                </div>
                <p className="text-sm leading-relaxed font-bold">
                  Diseñando el futuro de la educación chilena con ingeniería pedagógica e IA de vanguardia.
                </p>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-blue hover:text-white transition-all cursor-pointer">
                    <Globe size={18} />
                  </div>
                </div>
              </div>
              <div className="text-left text-left">
                <h4 className="text-white font-black uppercase text-[10px] tracking-[0.3em] mb-10 italic text-left">Plataforma</h4>
                <ul className="text-xs space-y-5 font-black uppercase tracking-widest text-left">
                  <li><a href="#" className="hover:text-brand-blue transition-all text-left">Gestión Académica</a></li>
                  <li><a href="#" className="hover:text-brand-blue transition-all text-left">Libro Digital</a></li>
                  <li><a href="#" className="hover:text-brand-blue transition-all text-left">EduBot AI</a></li>
                  <li><a href="#" className="hover:text-brand-blue transition-all text-left">Reportes SIGE</a></li>
                </ul>
              </div>
              <div className="text-left text-left">
                <h4 className="text-white font-black uppercase text-[10px] tracking-[0.3em] mb-10 italic text-left">Compañía</h4>
                <ul className="text-xs space-y-5 font-black uppercase tracking-widest text-left">
                  <li><a href="#" className="hover:text-brand-blue transition-all text-left">Sobre EduSis</a></li>
                  <li><a href="#" className="hover:text-brand-blue transition-all text-left">Misión 2030</a></li>
                  <li><a href="#" className="hover:text-brand-blue transition-all text-left">Seguridad de Datos</a></li>
                  <li><a href="#" className="hover:text-brand-blue transition-all text-left">Prensa</a></li>
                </ul>
              </div>
              <div className="text-left text-left">
                <h4 className="text-white font-black uppercase text-[10px] tracking-[0.3em] mb-10 italic text-left">Contacto</h4>
                <ul className="text-xs space-y-5 font-black uppercase tracking-widest leading-loose text-left">
                  <li className="flex items-center gap-3 text-left text-left"><Mail className="w-4 h-4 text-brand-teal text-left" /> contacto@edusis.cl</li>
                  <li className="flex items-center gap-3 text-left text-left"><Phone className="w-4 h-4 text-brand-teal text-left" /> +56 9 455 37 056</li>
                </ul>
              </div>
            </div>
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] uppercase font-black tracking-[0.4em] text-slate-700 text-left">
              <p>© 2026 EduSis SpA • Ingeniería Pedagógica de Vanguardia</p>
              <div className="flex gap-12 text-left">
                <a href="#" className="hover:text-white transition-all text-left">Privacidad</a>
                <a href="#" className="hover:text-white transition-all text-left">Términos</a>
              </div>
            </div>
          </footer>
        </>
      )
      }
    </div >
  );
};

export default LandingPage;