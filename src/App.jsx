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
              ? 'bg-blue-700 text-white shadow-lg shadow-blue-500/30 scale-105'
              : 'text-slate-500 hover:text-blue-700 hover:bg-blue-50'
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

              <button className="w-full btn-solid-brand !py-5">
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
              Bienvenido a <span className="text-[#0b8393] uppercase">EduSis</span>
            </h1>
            <p className="mt-3 text-slate-700 font-medium text-[10px] uppercase tracking-[0.2em] text-center">
              Construyendo el futuro de la educación, hoy.
            </p>
          </div>
        </div>

        {/* High-End Glassmorphism Card */}
        <div className="glass-card !p-10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-teal-400 to-indigo-600 opacity-50"></div>

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
                  className="text-[9px] font-semibold text-[#0b8393] hover:text-brand-purple uppercase tracking-widest transition-colors"
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

            <button className="w-full btn-solid-brand !py-5 mt-4">
              Entrar al Sistema <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="mt-10 pt-8 border-t border-white/20 text-center">
            <p className="text-slate-700 text-[10px] font-semibold uppercase tracking-widest">
              ¿Problemas para entrar? <a href="#" className="text-[#0b8393] hover:underline transition-colors font-semibold">Contactar Soporte</a>
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
    pink: { text: '#FFFFFF', iconBg: 'rgba(255,255,255,0.2)', iconColor: '#FFFFFF', border: 'rgba(255,255,255,0.3)', bg: 'linear-gradient(135deg, #EC4899 0%, #BE185D 100%)' },
    blue: { text: '#FFFFFF', iconBg: 'rgba(255,255,255,0.2)', iconColor: '#FFFFFF', border: 'rgba(255,255,255,0.3)', bg: 'linear-gradient(135deg, #58b9cb 0%, #0b8393 100%)' },
    green: { text: '#FFFFFF', iconBg: 'rgba(255,255,255,0.2)', iconColor: '#FFFFFF', border: 'rgba(255,255,255,0.3)', bg: 'linear-gradient(135deg, #22C55E 0%, #15803D 100%)' },
    yellow: { text: '#FFFFFF', iconBg: 'rgba(255,255,255,0.2)', iconColor: '#FFFFFF', border: 'rgba(255,255,255,0.3)', bg: 'linear-gradient(135deg, #fcd15a 0%, #fcc20f 100%)' },
    lila: { text: '#FFFFFF', iconBg: 'rgba(255,255,255,0.2)', iconColor: '#FFFFFF', border: 'rgba(255,255,255,0.3)', bg: 'linear-gradient(135deg, #c084fc 0%, #b157dd 100%)' },
    purple: { text: '#FFFFFF', iconBg: 'rgba(255,255,255,0.2)', iconColor: '#FFFFFF', border: 'rgba(255,255,255,0.3)', bg: 'linear-gradient(135deg, #c084fc 0%, #b157dd 100%)' },
    cyan: { text: '#FFFFFF', iconBg: 'rgba(255,255,255,0.2)', iconColor: '#FFFFFF', border: 'rgba(255,255,255,0.3)', bg: 'linear-gradient(135deg, #d3f4ff 0%, #58b9cb 100%)' },
    orange: { text: '#FFFFFF', iconBg: 'rgba(255,255,255,0.2)', iconColor: '#FFFFFF', border: 'rgba(255,255,255,0.3)', bg: 'linear-gradient(135deg, #ffe27a 0%, #fcc20f 100%)' }
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
          className="absolute inset-0 w-full h-full p-8 flex flex-col items-center justify-center text-center backface-hidden rounded-[2.5rem] shadow-xl transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2 border overflow-hidden"
          style={{ background: current.bg, borderColor: current.border }}
        >
          {/* Glossy Overlay */}
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/20 to-transparent pointer-events-none"></div>
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-white/20 blur-3xl rounded-full pointer-events-none"></div>
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
          className="absolute inset-0 w-full h-full rounded-[2.5rem] flex flex-col items-center justify-center p-8 shadow-2xl backface-hidden rotate-y-180 border overflow-hidden"
          style={{ background: current.bg, borderColor: current.border }}
        >
          {/* Glossy Overlay */}
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/20 to-transparent pointer-events-none"></div>
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
    <div className="min-h-screen bg-white font-sans text-slate-800 overflow-x-hidden selection:bg-[#0b8393]/10 selection:text-[#0b8393] relative">


      {/* Navbar Minimalista para EduBot */}
      <nav className="fixed w-full z-50 transition-all duration-300 bg-white/90 backdrop-blur-md border-b border-slate-100 py-4">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={onBack}>
            <img src="/logosolo.png" alt="Logo EduSis" className="h-14 w-auto object-contain transition-transform group-hover:scale-110" />
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
      <header className="relative pt-32 pb-40 lg:pt-48 lg:pb-56 overflow-hidden flex items-center min-h-[700px] bg-white">
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-center lg:text-left">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-[11px] font-bold uppercase tracking-widest mb-6 uppercase">
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

              <div className="relative w-full max-w-2xl lg:max-w-4xl aspect-square animate-float-slow lg:scale-110">
                <img src="/edubot.png" alt="EduBot" className="w-full h-full object-contain drop-shadow-[0_20px_60px_rgba(29,78,216,0.35)]" />
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

      {/* --- STRIP SECTION (POTENCIA TU COLEGIO) --- */}
      <section className="relative py-20 overflow-hidden">
        {/* Vibrant Gradient Background (Matches Strip) */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #b157dd 0%, #0b8393 100%)' }}></div>

        {/* Blended Background Image */}
        <div className="absolute inset-0 opacity-15 mix-blend-overlay pointer-events-none">
          <img src="/edubot-banner.png" alt="" className="w-full h-full object-cover" />
        </div>

        {/* Tech Textures */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Subtle Cyber Grid */}
          <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>

          {/* Light Beams */}
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
          <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>

          {/* Dynamic Glows */}
          <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-white/5 blur-[120px] animate-pulse-soft"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center justify-center">
          {/* Minimal Tech Badge */}
          <div className="flex items-center gap-4 px-5 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-10 shadow-xl">
            <span className="w-1.5 h-1.5 bg-white/60 rounded-full animate-pulse"></span>
            <span className="text-[10px] font-bold text-white/80 uppercase tracking-[0.5em]">Tecnología Inteligente</span>
            <span className="w-1.5 h-1.5 bg-white/60 rounded-full animate-pulse"></span>
          </div>

          <div className="relative">
            <h2 className="text-4xl md:text-8xl font-light text-white tracking-[0.1em] leading-none text-center uppercase" style={{ fontFamily: "'Unbounded', sans-serif" }}>
              Potencia tu <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-white/60 to-white/30">Colegio</span>
            </h2>

            <div className="mt-14 flex justify-center items-center gap-8">
              <div className="h-px w-20 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              <div className="w-2 h-2 border border-white/40 rotate-45"></div>
              <div className="h-px w-48 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
              <div className="w-2 h-2 border border-white/40 rotate-45"></div>
              <div className="h-px w-20 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Tarjetas Modern Square */}
      <section className="py-24 relative z-10 bg-white">
        <div className="max-w-7xl mx-auto px-6">

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
              colorScheme="orange"
            />
          </div>
        </div>
      </section>

      {/* Motivational Engagement Section */}
      <section className="relative mt-20 md:mt-32 min-h-[500px] md:min-h-[600px] flex items-center overflow-hidden bg-white">
        {/* Wave Background SVG */}
        <div className="absolute inset-x-0 top-0 bottom-0 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 1440 800" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 0C300 100 600 0 900 0C1150 0 1300 150 1440 50V800H0V0Z"
              fill="url(#blue_gradient_wave)"
            />
            <defs>
              <linearGradient id="blue_gradient_wave" x1="720" y1="0" x2="720" y2="800" gradientUnits="userSpaceOnUse">
                <stop stopColor="#b157dd" />
                <stop offset="0.7" stopColor="#0b8393" />
                <stop offset="1" stopColor="#043536" />
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
      <footer className="bg-gradient-to-b from-[#0f172a] to-[#020617] py-16 px-6 text-center relative overflow-hidden">
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

const TermsPage = () => {
  return (
    <div className="pt-40 pb-24 px-6 bg-white min-h-screen text-slate-800 animate-fade-in-up">
      <div className="max-w-3xl mx-auto text-left">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-2 normal-case leading-tight">
          Términos y Condiciones de Uso
        </h1>
        <div className="h-1.5 w-20 bg-[#0b8393]/30 rounded-full mb-6"></div>
        <p className="text-slate-400 font-black uppercase text-[10px] tracking-[0.3em] mb-12">EDUSIS SpA</p>

        <div className="space-y-12 leading-relaxed font-medium text-slate-700 text-sm md:text-base">
          <p className="text-slate-600 leading-relaxed text-base font-normal">
            Bienvenido al sitio web oficial de <strong>EDUSIS SpA</strong> (en adelante, "EDUSIS"). Los presentes Términos y Condiciones regulan el acceso y uso de este sitio web público (www.edusis.cl). Al navegar por este sitio, usted acepta los términos aquí descritos.
          </p>

          <div className="space-y-4">
            <h2 className="text-lg md:text-xl font-semibold text-slate-900 tracking-tight flex items-center gap-2">
              <span className="text-[#0b8393]">1.</span> Carácter Informativo y de Demostración
            </h2>
            <p className="text-slate-600 font-normal">
              Este sitio web tiene un propósito exclusivamente informativo, promocional y de demostración tecnológica de las soluciones de gestión educativa desarrolladas por EDUSIS.
            </p>
            <p className="text-slate-600 font-normal">
              Las imágenes, maquetas, descripciones de módulos (como el Libro de Clases, Asistencia, Planes de Estudio y Soluciones PIE) y simulaciones de pantallas representan prototipos y desarrollos en estado activo. Las características finales de las herramientas y servicios pueden variar, actualizarse o modificarse según las necesidades de adaptabilidad de los establecimientos adscritos y la normativa vigente del Ministerio de Educación (Mineduc) y la Superintendencia de Educación, sin previo aviso.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg md:text-xl font-semibold text-slate-900 tracking-tight flex items-center gap-2">
              <span className="text-[#0b8393]">2.</span> Limitación de Responsabilidad de la Plataforma SGE
            </h2>
            <p className="text-slate-600 font-normal">
              El acceso y uso de la plataforma privada del Sistema de Gestión Educativa (SGE) de EDUSIS por parte de los establecimientos educacionales autorizados se rige estrictamente por su respectivo Contrato Comercial de Prestación de Servicios y no por los términos de este sitio web público.
            </p>
            <p className="text-slate-600 font-normal">
              EDUSIS proporciona herramientas tecnológicas de apoyo a la administración y cumplimiento normativo (como la Circular N° 30 y el Decreto N° 67), pero es responsabilidad exclusiva de cada establecimiento educacional, de sus directivos y de sus docentes garantizar que el ingreso de datos, la toma de asistencia, el registro de leccionarios y las firmas correspondientes se realicen de forma fidedigna y oportuna. EDUSIS no asume responsabilidad por multas, sanciones o pérdidas de subvenciones derivadas del uso incorrecto, extemporáneo o fraudulento de la plataforma por parte de los usuarios.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg md:text-xl font-semibold text-slate-900 tracking-tight flex items-center gap-2">
              <span className="text-[#0b8393]">3.</span> Privacidad y Tratamiento de Datos Sensibles
            </h2>
            <p className="text-slate-600 font-normal">
              EDUSIS SpA está comprometida con el resguardo de la privacidad de acuerdo con la Ley N° 19.628 sobre protección de la vida privada y la legislación vigente de protección de datos personales.
            </p>
            <ul className="space-y-4 pl-6 list-disc marker:text-[#0b8393] text-slate-600 font-normal">
              <li>
                <strong>Sitio Público:</strong> En este sitio web público no se recopila, almacena ni procesa ningún tipo de información diagnóstica, médica, académica o personal de estudiantes o apoderados. Los formularios de contacto solo recopilan datos comerciales básicos de consentimiento voluntario (nombre, correo institucional, teléfono de contacto) para coordinar demostraciones o propuestas.
              </li>
              <li>
                <strong>Plataforma Privada:</strong> El tratamiento de datos sensibles de la Ficha 360° y del módulo de Acompañamiento (PIE) dentro de la plataforma privada se realiza en un entorno encriptado de alta seguridad y está sujeto a los convenios de confidencialidad y procesamiento de datos firmados de forma privada con cada sostenedor.
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg md:text-xl font-semibold text-slate-900 tracking-tight flex items-center gap-2">
              <span className="text-[#0b8393]">4.</span> Propiedad Intelectual e Industrial
            </h2>
            <p className="text-slate-600 font-normal">
              Todos los contenidos de este sitio web, incluyendo de manera enunciativa pero no limitativa: marcas, logotipos, diseños de interfaz (UX/UI), maquetas de pantalla, textos, códigos de programación (Angular/Django), gráficos e ilustraciones, son propiedad exclusiva de EDUSIS SpA o de sus creadores, y están protegidos por las leyes de propiedad intelectual e industrial de la República de Chile y los tratados internacionales correspondientes. Queda estrictamente prohibida su copia, reproducción, distribución o uso comercial no autorizado.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg md:text-xl font-semibold text-slate-900 tracking-tight flex items-center gap-2">
              <span className="text-[#0b8393]">5.</span> Modificaciones y Actualizaciones
            </h2>
            <p className="text-slate-600 font-normal">
              EDUSIS SpA se reserva el derecho de modificar, actualizar o eliminar cualquier parte del contenido de este sitio web o de los presentes Términos y Condiciones en cualquier momento y sin previo aviso, con el fin de adaptarlos a mejoras técnicas, de seguridad o a nuevas directrices del Ministerio de Educación.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg md:text-xl font-semibold text-slate-900 tracking-tight flex items-center gap-2">
              <span className="text-[#0b8393]">6.</span> Legislación y Jurisdicción
            </h2>
            <p className="text-slate-600 font-normal">
              Cualquier controversia derivada de la interpretación o cumplimiento de los presentes Términos y Condiciones se resolverá bajo las leyes de la República de Chile, sometiéndose las partes a la jurisdicción de los tribunales competentes de Santiago.
            </p>
          </div>

          <div className="pt-8 border-t border-slate-100 text-xs md:text-sm text-slate-500 space-y-2 font-normal">
            <p><strong className="text-slate-800">Razón Social:</strong> EDUSIS SpA</p>
            <p><strong className="text-slate-800">Ayuda:</strong> <a href="mailto:ayuda@edusis.cl" className="text-[#0b8393] hover:underline">ayuda@edusis.cl</a></p>
            <p className="pt-4 text-xs italic text-slate-400">Última actualización: Junio de 2026.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const PrivacyPage = () => {
  return (
    <div className="pt-40 pb-24 px-6 bg-white min-h-screen text-slate-800 animate-fade-in-up">
      <div className="max-w-3xl mx-auto text-left">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-2 normal-case leading-tight">
          Política de Privacidad
        </h1>
        <div className="h-1.5 w-20 bg-[#0b8393]/30 rounded-full mb-6"></div>
        <p className="text-slate-400 font-black uppercase text-[10px] tracking-[0.3em] mb-12">EDUSIS SpA</p>

        <div className="space-y-12 leading-relaxed font-medium text-slate-700 text-sm md:text-base">
          <p className="text-slate-600 leading-relaxed text-base font-normal">
            En <strong>EDUSIS SpA</strong> (en adelante, "EDUSIS") nos comprometemos a resguardar la privacidad y proteger los datos personales de nuestros usuarios y clientes, de estricto acuerdo con la <strong>Ley N° 19.628</strong> sobre protección de la vida privada y las directrices vigentes de seguridad de la información.
          </p>

          <div className="space-y-4">
            <h2 className="text-lg md:text-xl font-semibold text-slate-900 tracking-tight flex items-center gap-2">
              <span className="text-[#0b8393]">1.</span> Recopilación de Datos en el Sitio Público
            </h2>
            <p className="text-slate-600 font-normal">
              Esta Política de Privacidad aplica exclusivamente al sitio web público (www.edusis.cl). Los datos que usted proporciona de manera voluntaria a través de nuestros formularios de contacto, cotizaciones o solicitudes de demostración se limitan a antecedentes comerciales básicos:
            </p>
            <ul className="space-y-3 pl-6 list-disc marker:text-[#0b8393] text-slate-600 font-normal">
              <li>Nombre completo.</li>
              <li>Correo electrónico institucional o personal.</li>
              <li>Teléfono de contacto.</li>
              <li>Institución o comunidad educativa a la que representa.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg md:text-xl font-semibold text-slate-900 tracking-tight flex items-center gap-2">
              <span className="text-[#0b8393]">2.</span> Uso de la Información
            </h2>
            <p className="text-slate-600 font-normal">
              Los datos comerciales recopilados en este sitio web público serán utilizados única y exclusivamente para:
            </p>
            <ul className="space-y-3 pl-6 list-disc marker:text-[#0b8393] text-slate-600 font-normal">
              <li>Atender sus consultas, dudas o requerimientos de soporte preventa.</li>
              <li>Coordinar reuniones, demostraciones técnicas (Demos) o asesorías.</li>
              <li>Enviar propuestas económicas e información relevante sobre nuestras soluciones de gestión educativa.</li>
            </ul>
            <p className="text-slate-600 font-normal mt-4">
              EDUSIS garantiza que no vende, arrienda, comparte ni transfiere su información personal a terceros bajo ningún concepto, salvo cuando sea requerido explícitamente por la legislación chilena vigente.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg md:text-xl font-semibold text-slate-900 tracking-tight flex items-center gap-2">
              <span className="text-[#0b8393]">3.</span> Seguridad y Confidencialidad en la Plataforma Privada
            </h2>
            <p className="text-slate-600 font-normal">
              La información académica, de asistencia, calificaciones e inclusión (PIE) tratada dentro de la plataforma privada del Sistema de Gestión Educativa (SGE) de EDUSIS se gestiona de forma totalmente independiente a este sitio web público:
            </p>
            <ul className="space-y-3 pl-6 list-disc marker:text-[#0b8393] text-slate-600 font-normal">
              <li>No se almacenan datos diagnósticos, de salud mental, ni registros educativos de menores en esta web promocional.</li>
              <li>Todo el procesamiento de datos sensibles del establecimiento educacional se realiza en servidores de alta seguridad mediante bases de datos encriptadas, bajo las condiciones de confidencialidad pactadas individualmente en el Contrato Comercial de Prestación de Servicios con cada sostenedor.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg md:text-xl font-semibold text-slate-900 tracking-tight flex items-center gap-2">
              <span className="text-[#0b8393]">4.</span> Derechos de los Usuarios (Derechos ARCO)
            </h2>
            <p className="text-slate-600 font-normal">
              Usted tiene el derecho de acceder, rectificar, cancelar u oponerse (Derechos ARCO) al tratamiento de los datos comerciales proporcionados en este sitio público en cualquier momento. Para ejercer estos derechos, modificar sus datos o solicitar la eliminación definitiva de nuestras listas de contacto, puede comunicarse directamente con nosotros a través de nuestros canales oficiales.
            </p>
          </div>

          <div className="pt-8 border-t border-slate-100 text-xs md:text-sm text-slate-500 space-y-2 font-normal">
            <p><strong className="text-slate-800">Razón Social:</strong> EDUSIS SpA</p>
            <p><strong className="text-slate-800">Ayuda:</strong> <a href="mailto:ayuda@edusis.cl" className="text-[#0b8393] hover:underline">ayuda@edusis.cl</a></p>
            <p className="pt-4 text-xs italic text-slate-400">Última actualización: Junio de 2026.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const LibroDigitalPage = ({ onBack, onStartNow, setPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleNavigation = (targetId) => {
    setMobileMenuOpen(false);
    onBack();
    setTimeout(() => {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  };

  const modulesList = [
    {
      num: "1",
      title: "Libro de Clases",
      desc: "Optimice el tiempo de sus docentes en el aula mediante un registro ordenado y rápido:",
      i: <BookOpen className="w-6 h-6" />,
      color: "blue",
      bg: "bg-blue-50/50 border-blue-100",
      iconBg: "bg-blue-100 text-blue-600",
      items: [
        { label: "Asistencia rápida", detail: "El sistema muestra a todos los estudiantes presentes por defecto. El docente solo marca las inasistencias en pocos segundos." },
        { label: "Leccionario", detail: "Registro del contenido de la clase, conectado con la planificación anual para sugerir objetivos y actividades diarias de forma automática." },
        { label: "Bitácora de Salidas de Sala", detail: "Registro de alumnos que salen de la sala por apoyos de especialistas o evaluaciones diferenciadas, justificando su presencia ante fiscalizaciones." },
        { label: "Firma Digital de Co-Docencia", detail: "Permite que firmen tanto el docente titular de la asignatura como el profesor de apoyo (PIE) o reemplazante con una clave de seguridad." }
      ]
    },
    {
      num: "2",
      title: "Gestión de Estudiantes y Matrícula",
      desc: "Toda la información del alumno organizada en una sola ficha familiar:",
      i: <Users className="w-6 h-6" />,
      color: "emerald",
      bg: "bg-emerald-50/50 border-emerald-100",
      iconBg: "bg-emerald-100 text-emerald-600",
      items: [
        { label: "Ficha Completa del Alumno", detail: "Una carpeta digital única para cada estudiante que reúne datos personales, familiares, de contacto, salud, calificaciones y asistencia histórica en una sola pantalla." },
        { label: "Matrícula Provisoria", detail: "Registro especial para estudiantes extranjeros sin RUT definitivo (IPE/IPA), facilitando su incorporación inmediata." },
        { label: "Apoyo e Inclusión", detail: "Registro confidencial y seguro de las necesidades de apoyo del estudiante y los profesionales asignados en su proceso educativo." }
      ]
    },
    {
      num: "3",
      title: "Planilla de Calificaciones (Decreto N° 67)",
      desc: "Haga que el ingreso y control de notas sea un proceso seguro y transparente:",
      i: <Award className="w-6 h-6" />,
      color: "purple",
      bg: "bg-purple-50/50 border-purple-100",
      iconBg: "bg-purple-100 text-purple-600",
      items: [
        { label: "Ingreso ágil de notas", detail: "Planilla interactiva que permite escribir las notas usando el teclado de forma rápida." },
        { label: "Fórmulas Flexibles", detail: "Permite configurar los porcentajes de cada evaluación y promediar notas de talleres con la asignatura principal." },
        { label: "Validación de UTP", detail: "Las notas ingresadas quedan guardadas de forma provisoria hasta que el Jefe de UTP las valida y bloquea para evitar cambios no autorizados." }
      ]
    },
    {
      num: "4",
      title: "Control de Atrasos y Portería",
      desc: "Separe la labor administrativa de la sala de clases para resguardar la puntualidad:",
      i: <Clock className="w-6 h-6" />,
      color: "rose",
      bg: "bg-rose-50/50 border-rose-100",
      iconBg: "bg-rose-100 text-rose-600",
      items: [
        { label: "Registro rápido en puerta", detail: "Buscador por nombre o RUT para registrar atrasos en segundos." },
        { label: "Avisos automáticos", detail: "El sistema envía un correo al apoderado cuando el estudiante acumula su tercer atraso." }
      ]
    },
    {
      num: "5",
      title: "Reportes y Planificación UTP",
      desc: "Herramientas de control en tiempo real para el equipo directivo y sostenedores:",
      i: <BarChart3 className="w-6 h-6" />,
      color: "teal",
      bg: "bg-teal-50/50 border-teal-100",
      iconBg: "bg-teal-100 text-teal-600",
      items: [
        { label: "Semáforo de Firmas", detail: "Panel visual para saber al instante qué firmas de asistencia o leccionarios faltan por curso o profesor." },
        { label: "Exportación al SIGE", detail: "Generación automática del archivo de asistencia mensual con el formato exacto requerido por el Ministerio de Educación." },
        { label: "Planes de Estudio", detail: "Configuración de las asignaturas y horas semanales según el plan del establecimiento (Jornada Completa o Simple)." }
      ]
    },
    {
      num: "6",
      title: "Planificación Curricular",
      desc: "Planifique el año académico de forma ordenado y conectado con las exigencias oficiales:",
      i: <Sparkles className="w-6 h-6" />,
      color: "amber",
      bg: "bg-amber-50/50 border-amber-100",
      iconBg: "bg-amber-100 text-amber-600",
      items: [
        { label: "Base Curricular Integrada", detail: "Cargue los Objetivos de Aprendizaje (OA) y los Indicadores de Logro de forma automática." },
        { label: "Registro de Avances", detail: "El sistema monitorea clase a clase qué objetivos se van cumpliendo a través del leccionario, manteniendo un control claro del avance de la materia." },
        { label: "Flexibilidad Docente", detail: "Permite seleccionar individualmente los indicadores que se van a trabajar en cada sesión." }
      ]
    },
    {
      num: "7",
      title: "Radar de Alertas Tempranas (RAT)",
      desc: "Anticípese a las dificultades de sus estudiantes con alertas automáticas:",
      i: <Activity className="w-6 h-6" />,
      color: "pink",
      bg: "bg-pink-50/50 border-pink-100",
      iconBg: "bg-pink-100 text-pink-600",
      items: [
        { label: "Detección a Tiempo", detail: "El sistema analiza de forma continua el descenso de notas, atrasos repetidos o problemas de comportamiento." },
        { label: "Alertas Inteligentes", detail: "Avisa de inmediato al Profesor Jefe, UTP u Orientador cuando un estudiante se encuentra en una situación crítica para poder apoyarlo preventivamente." }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 overflow-x-hidden selection:bg-[#0b8393]/10 selection:text-[#0b8393] relative">
      {/* Navbar Idéntico al Landscape */}
      <nav className={`fixed w-full z-50 transition-all duration-300 bg-white border-b border-slate-100 ${isScrolled ? 'py-3 shadow-sm' : 'py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={onBack}>
            <img src="/logosolo.png" alt="Logo EduSis" className="h-20 w-auto object-contain transition-transform group-hover:scale-110" />
          </div>
          <div className="hidden md:flex items-center gap-8 text-[11px] font-semibold uppercase tracking-widest text-slate-700 mr-0 lg:mr-[-24px]">
            {/* Menú Desplegable de Servicios */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                className="hover:text-[#0b8393] transition-colors flex items-center gap-1 bg-transparent border-none text-[11px] font-semibold uppercase tracking-widest text-slate-700 cursor-pointer"
              >
                Servicios <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesDropdownOpen && (
                <div className="absolute left-0 mt-3 w-64 bg-white border border-slate-100 rounded-2xl shadow-xl py-3 z-50 animate-fade-in-up text-left">
                  <button
                    onClick={() => { setPage('libro-digital'); setServicesDropdownOpen(false); }}
                    className="w-full px-5 py-3 hover:bg-slate-50 flex items-start gap-3 transition-colors text-left border-none bg-transparent cursor-pointer"
                  >
                    <div className="bg-[#EBF8FF] p-1.5 rounded-lg text-blue-600 shrink-0">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900 leading-tight">EDUSIS Libro de Clases</p>
                      <p className="text-[10px] text-slate-500 font-medium leading-tight mt-0.5">Asistencia y firmas bajo Circular 30.</p>
                    </div>
                  </button>
                  <button
                    onClick={() => { setPage('edubot'); setServicesDropdownOpen(false); }}
                    className="w-full px-5 py-3 hover:bg-slate-50 flex items-start gap-3 transition-colors text-left border-none bg-transparent cursor-pointer"
                  >
                    <div className="bg-[#FFFFE0] p-1.5 rounded-lg text-amber-500 shrink-0">
                      <Bot className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900 leading-tight">EDUSIS Chatbots</p>
                      <p className="text-[10px] text-slate-500 font-medium leading-tight mt-0.5">Asistente y tutor virtual inteligente.</p>
                    </div>
                  </button>
                  <button
                    onClick={() => { setPage('moodle'); setServicesDropdownOpen(false); }}
                    className="w-full px-5 py-3 hover:bg-slate-50 flex items-start gap-3 transition-colors text-left border-none bg-transparent cursor-pointer"
                  >
                    <div className="bg-[#FFF3E0] p-1.5 rounded-lg text-orange-500 shrink-0">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900 leading-tight">EDUSIS Moodle</p>
                      <p className="text-[10px] text-slate-500 font-medium leading-tight mt-0.5">Aula virtual y notas sincronizadas.</p>
                    </div>
                  </button>
                </div>
              )}
            </div>
            <a href="#blog" onClick={(e) => { e.preventDefault(); handleNavigation('blog'); }} className="hover:text-[#0b8393] transition-colors">Blog</a>
            <a href="#contacto" onClick={(e) => { e.preventDefault(); handleNavigation('contacto'); }} className="hover:text-[#0b8393] transition-colors">Contacto</a>
            <button
              onClick={() => setPage('login')}
              className="btn-solid-brand btn-small"
            >
              Iniciar sesión <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <button className="md:hidden text-slate-900 border-none bg-transparent cursor-pointer" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-100 mt-4 pt-4 px-6 flex flex-col gap-4 text-slate-800 animate-fadeIn bg-white/95 backdrop-blur-md pb-6">
            <div>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="text-xs font-black uppercase tracking-widest py-2 text-left flex items-center justify-between w-full border-none bg-transparent cursor-pointer"
              >
                <span>Servicios</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileServicesOpen && (
                <div className="pl-4 mt-2 flex flex-col gap-3 border-l border-slate-100 py-1">
                  <button
                    onClick={() => { setPage('libro-digital'); setMobileMenuOpen(false); setMobileServicesOpen(false); }}
                    className="text-xs font-bold text-slate-600 hover:text-slate-900 text-left py-1 border-none bg-transparent cursor-pointer"
                  >
                    EDUSIS Libro de Clases
                  </button>
                  <button
                    onClick={() => { setPage('edubot'); setMobileMenuOpen(false); setMobileServicesOpen(false); }}
                    className="text-xs font-bold text-slate-600 hover:text-slate-900 text-left py-1 border-none bg-transparent cursor-pointer"
                  >
                    EDUSIS Chatbots
                  </button>
                  <button
                    onClick={() => { setPage('moodle'); setMobileMenuOpen(false); setMobileServicesOpen(false); }}
                    className="text-xs font-bold text-slate-600 hover:text-slate-900 text-left py-1 border-none bg-transparent cursor-pointer"
                  >
                    EDUSIS Moodle
                  </button>
                </div>
              )}
            </div>
            <a href="#blog" className="text-xs font-black uppercase tracking-widest py-2" onClick={(e) => { e.preventDefault(); handleNavigation('blog'); }}>Blog</a>
            <a href="#contacto" className="text-xs font-black uppercase tracking-widest py-2" onClick={(e) => { e.preventDefault(); handleNavigation('contacto'); }}>Contacto</a>
            <button
              onClick={() => { setPage('login'); setMobileMenuOpen(false); }}
              className="btn-solid-brand btn-small w-full"
            >
              Iniciar sesión
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="relative pt-36 pb-20 overflow-hidden flex items-center bg-white border-b border-slate-100">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-white to-indigo-50/20 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-center lg:text-left">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-[10px] font-bold uppercase tracking-widest mb-6">
                Ecosistema Pedagógico de Excelencia
              </div>
              <h1 className="text-4xl lg:text-5xl font-semibold text-slate-900 leading-tight mb-6 tracking-tight text-left">
                EDUSIS: Sistema de <br />
                <span className="text-[#0b8393] uppercase">Gestión Educativa Integral</span>
              </h1>
              <p className="text-base text-slate-600 mb-8 leading-relaxed font-medium max-w-2xl text-left">
                EDUSIS SGE es una plataforma unificada y fácil de usar que centraliza la administración y el flujo pedagógico de su establecimiento, adaptándose completamente a la normativa chilena vigente (<strong className="text-slate-800">Circular N° 30</strong> y <strong className="text-slate-800">Decreto N° 67</strong>).
              </p>
              <div className="flex gap-4 justify-start">
                <button onClick={onStartNow} className="btn-premium bg-[#0b8393] text-white hover:bg-[#096f7c] border-none shadow-md hover:-translate-y-1 transition-all">
                  Agenda una Asesoría
                </button>
              </div>
            </div>

            <div className="hidden lg:flex lg:col-span-5 relative justify-center items-center">
              <div className="absolute inset-0 bg-[#0b8393]/5 rounded-full blur-[100px] -z-10"></div>
              {/* Premium Dashboard Mockup Box */}
              <div className="bg-white rounded-[2.5rem] border border-slate-200/60 shadow-2xl p-8 w-full max-w-md transform hover:-rotate-1 hover:scale-[1.02] transition-all duration-500">
                <div className="flex justify-between items-center mb-6 pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 rounded-full bg-red-400"></span>
                    <span className="w-3.5 h-3.5 rounded-full bg-yellow-400"></span>
                    <span className="w-3.5 h-3.5 rounded-full bg-green-400"></span>
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">EDUSIS SGE Dashboard</span>
                </div>
                <div className="space-y-4">
                  <div className="bg-blue-50/60 border border-blue-100/50 p-4 rounded-2xl flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold">L</div>
                      <div className="text-left">
                        <p className="text-[10px] font-bold text-slate-400 uppercase leading-none mb-1">Circular 30</p>
                        <p className="text-xs font-black text-slate-800">Libro de Clases Digital</p>
                      </div>
                    </div>
                    <span className="bg-green-100 text-green-700 text-[9px] font-black uppercase px-2.5 py-1 rounded-full">100% Cumplido</span>
                  </div>

                  <div className="bg-purple-50/60 border border-purple-100/50 p-4 rounded-2xl flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center font-bold">D</div>
                      <div className="text-left">
                        <p className="text-[10px] font-bold text-slate-400 uppercase leading-none mb-1">Decreto 67</p>
                        <p className="text-xs font-black text-slate-800">Calificaciones y UTP</p>
                      </div>
                    </div>
                    <span className="bg-blue-100 text-blue-700 text-[9px] font-black uppercase px-2.5 py-1 rounded-full">Activo</span>
                  </div>

                  <div className="bg-teal-50/60 border border-teal-100/50 p-4 rounded-2xl flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-600 flex items-center justify-center font-bold">R</div>
                      <div className="text-left">
                        <p className="text-[10px] font-bold text-slate-400 uppercase leading-none mb-1">Alertas Tempranas</p>
                        <p className="text-xs font-black text-slate-800">Radar RAT</p>
                      </div>
                    </div>
                    <span className="bg-emerald-100 text-emerald-700 text-[9px] font-black uppercase px-2.5 py-1 rounded-full">Escaneando</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content: Módulos y Funcionalidades */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-100 text-blue-700 text-[10px] font-black uppercase tracking-[0.2em] mb-4 rounded-full">
              Características Clave
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-none text-center">
              🚀 Módulos y Funcionalidades del Sistema
            </h2>
            <div className="h-1 w-20 bg-blue-500/20 mx-auto rounded-full mt-4"></div>
          </div>

          {/* Grid of 7 Cards with Minimalist Premium Design */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modulesList.map((m, idx) => (
              <div
                key={idx}
                className={`bg-white border rounded-[2rem] p-8 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col text-left group hover:-translate-y-1.5 relative overflow-hidden ${m.bg} ${idx === 6 ? 'md:col-span-2 lg:col-span-3' : ''}`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-sm shrink-0 ${m.iconBg}`}>
                    {m.i}
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#0b8393] opacity-60 leading-none">Módulo {m.num}</span>
                    <h3 className="text-lg font-bold text-slate-900 leading-tight mt-0.5">{m.title}</h3>
                  </div>
                </div>

                <p className="text-xs font-semibold text-slate-600 leading-relaxed mb-6">
                  {m.desc}
                </p>

                {/* Sub-features list */}
                <div className={`space-y-4 mt-auto ${idx === 6 ? 'grid md:grid-cols-2 gap-6 space-y-0' : ''}`}>
                  {m.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex gap-3 items-start">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${m.iconBg} !bg-white/90 border border-white/60`}>
                        <Check className="w-3 h-3" strokeWidth={3} />
                      </div>
                      <div className="text-left">
                        <h4 className="text-xs font-extrabold text-slate-800 leading-tight mb-1">{item.label}</h4>
                        <p className="text-[11px] text-slate-500 font-semibold leading-relaxed">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Idéntico al Landscape */}
      <footer className="bg-gradient-to-b from-[#0f172a] to-[#020617] pt-20 pb-12 px-6 text-white text-left relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-20 border-b border-white/10 pb-12 mb-8 text-left relative z-10">
          <div className="space-y-6 text-left">
            <div className="flex items-center gap-4 text-left">
              <img src="/logosolo.png" className="h-20 w-auto object-contain -mt-6" />
            </div>
            <div className="flex flex-col gap-4 text-sm text-white/80 font-medium text-left">
              <button onClick={() => setPage('privacidad')} className="hover:text-white transition-colors outline-none text-left border-none bg-transparent cursor-pointer">Política de Privacidad</button>
              <button onClick={() => setPage('terminos')} className="hover:text-white transition-colors outline-none text-left border-none bg-transparent cursor-pointer">Términos y Condiciones</button>
            </div>
          </div>
          <div className="text-left">
            <h4 className="text-white font-bold uppercase text-xs tracking-wider mb-6 text-left">Plataforma</h4>
            <ul className="text-sm space-y-4 text-white/80 font-medium text-left p-0 list-none">
              <li><button onClick={() => setPage('home')} className="hover:text-white transition-colors text-left border-none bg-transparent cursor-pointer font-medium p-0">Gestión Académica</button></li>
              <li><button onClick={() => setPage('libro-digital')} className="hover:text-white transition-colors text-left border-none bg-transparent cursor-pointer font-medium p-0">EDUSIS Libro de Clases</button></li>
              <li><button onClick={() => setPage('edubot')} className="hover:text-white transition-colors text-left border-none bg-transparent cursor-pointer font-medium p-0">EDUSIS Chatbots</button></li>
              <li><button onClick={() => setPage('moodle')} className="hover:text-white transition-colors text-left border-none bg-transparent cursor-pointer font-medium p-0">EDUSIS Moodle</button></li>
            </ul>
          </div>
          <div className="text-left text-left">
            <h4 className="text-white font-bold uppercase text-xs tracking-wider mb-6 text-left">Compañía</h4>
            <ul className="text-sm space-y-4 text-white/80 font-medium text-left p-0 list-none">
              <li><a href="#" onClick={(e) => { e.preventDefault(); onBack(); }} className="hover:text-white transition-colors text-left">Sobre EduSis</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); onBack(); }} className="hover:text-white transition-colors text-left">Misión 2030</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); onBack(); }} className="hover:text-white transition-colors text-left">Seguridad de Datos</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); onBack(); }} className="hover:text-white transition-colors text-left">Prensa</a></li>
            </ul>
          </div>
          <div className="text-left text-left">
            <h4 className="text-white font-bold uppercase text-xs tracking-wider mb-6 text-left">Contacto</h4>
            <ul className="text-sm space-y-4 text-white/80 font-medium text-left p-0 list-none">
              <li className="flex items-center gap-3 text-left">
                <Mail className="w-4 h-4 text-white shrink-0" />
                <span className="text-white/80">contacto@edusis.cl</span>
              </li>
              <li className="flex items-start gap-3 text-left font-medium">
                <MapPin className="w-4 h-4 text-white shrink-0 mt-1" />
                <span className="text-white/80 leading-normal">Av. Presidente Kennedy 5600, Of. 507, Vitacura, Santiago.</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto flex flex-col items-center text-xs text-white/50 text-center tracking-normal font-normal">
          <p>© 2026 EduSis SpA. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

const ModuloPiePage = ({ onBack, onStartNow }) => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 overflow-x-hidden selection:bg-pink-600/10 selection:text-pink-600 relative">
      {/* Navbar Minimalista */}
      <nav className="fixed w-full z-50 transition-all duration-300 bg-white/90 backdrop-blur-md border-b border-slate-100 py-4">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={onBack}>
            <img src="/logosolo.png" alt="Logo EduSis" className="h-14 w-auto object-contain transition-transform group-hover:scale-110" />
          </div>
          <button
            onClick={onBack}
            className="text-[11px] font-semibold uppercase tracking-widest text-slate-700 hover:text-pink-600 transition-colors flex items-center gap-2"
          >
            <ChevronRight className="w-3 h-3 rotate-180" /> Volver al Inicio
          </button>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative pt-32 pb-40 lg:pt-48 lg:pb-56 overflow-hidden flex items-center min-h-[700px] bg-white">
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-center lg:text-left">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-pink-50 border border-pink-100 text-pink-600 text-[11px] font-bold uppercase tracking-widest mb-6">
                Decreto N° 170 e Inclusión
              </div>
              <h1 className="text-4xl lg:text-5xl font-semibold text-slate-900 leading-tight mb-6 tracking-tight text-left uppercase">
                Módulo <span className="text-pink-600">PIE</span>
              </h1>
              <p className="text-base text-slate-700 mb-10 leading-relaxed font-medium max-w-lg mx-auto lg:mx-0">
                Optimiza la gestión del Programa de Integración Escolar. Registra la co-docencia de forma automática y haz un seguimiento diagnóstico individual de tus alumnos.
              </p>
              <div className="flex gap-4 justify-center lg:justify-start">
                <button onClick={onStartNow} className="btn-black bg-pink-600 hover:bg-pink-700 text-white border-none">Descubrir Módulo PIE</button>
              </div>
            </div>

            <div className="hidden lg:flex relative justify-center items-center px-10">
              {/* Floating Badges */}
              <div className="absolute -top-8 -right-4 bg-pink-50 backdrop-blur-xl p-4 rounded-[2rem] shadow-2xl border border-pink-100 animate-float z-30 flex items-center gap-3">
                <div className="bg-pink-100 p-2 rounded-full text-pink-600">
                  <Heart className="w-4 h-4" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[8px] text-pink-600 font-black uppercase tracking-widest leading-none mb-1">Inclusión</span>
                  <span className="text-[10px] font-extrabold text-slate-800">Activa y Humana</span>
                </div>
              </div>

              <div className="absolute bottom-10 -left-12 bg-purple-50/90 backdrop-blur-xl p-4 rounded-[2rem] shadow-2xl border border-purple-100 animate-float z-30 flex items-center gap-3" style={{ animationDelay: '0.9s' }}>
                <div className="bg-purple-100 p-2 rounded-full text-purple-600">
                  <Users className="w-4 h-4" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[8px] text-purple-600 font-black uppercase tracking-widest leading-none mb-1">Co-docencia</span>
                  <span className="text-[10px] font-extrabold text-slate-800">Bitácora Digital</span>
                </div>
              </div>

              <div className="relative w-full max-w-lg aspect-square animate-float-slow lg:scale-110">
                <div className="absolute inset-0 bg-pink-100/40 rounded-full blur-[100px] -z-10"></div>
                <div className="bg-gradient-to-br from-pink-50 to-purple-100 w-full h-full rounded-[3rem] p-1 border border-white shadow-2xl flex items-center justify-center overflow-hidden">
                  <div className="p-8 text-center flex flex-col items-center justify-center h-full">
                    <Heart size={80} className="text-pink-600/80 mx-auto mb-6" />
                    <p className="font-bold text-xl text-slate-800">Plataforma PIE</p>
                    <p className="text-slate-500 text-xs mt-2 max-w-xs">Especialistas e inclusión escolar en una bitácora unificada y fluida.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Feature Strip */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-r from-pink-600 to-purple-700">
        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center justify-center">
          <div className="flex items-center gap-4 px-5 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-10 shadow-xl">
            <span className="w-1.5 h-1.5 bg-white/60 rounded-full animate-pulse"></span>
            <span className="text-[10px] font-bold text-white/80 uppercase tracking-[0.5em]">Inclusión & Diversidad</span>
            <span className="w-1.5 h-1.5 bg-white/60 rounded-full animate-pulse"></span>
          </div>
          <h2 className="text-3xl md:text-5xl font-light text-white tracking-[0.1em] leading-none text-center uppercase animate-pulse-soft" style={{ fontFamily: "'Unbounded', sans-serif" }}>
            Decreto N°170 <span className="font-bold text-yellow-300">Cumplimiento</span>
          </h2>
        </div>
      </section>

      {/* Grid Features */}
      <section className="py-24 relative z-10 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 text-left">
              <div className="w-12 h-12 bg-pink-100 text-pink-600 rounded-xl flex items-center justify-center mb-6">
                <Users size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Bitácora de Co-docencia</h3>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed">Registro ágil de horas de planificación conjunta y trabajo colaborativo entre docente de aula y especialista PIE.</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 text-left">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-6">
                <FileText size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Ficha Inclusiva 360°</h3>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed">Centraliza diagnósticos, adecuaciones curriculares individuales y reportes de psicopedagogos, fonoaudiólogos y psicólogos.</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 text-left">
              <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center mb-6">
                <Sparkles size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Formatos Decreto 170</h3>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed">Generación automática de informes pedagógicos y de postulación para facilitar la auditoría de subvenciones PIE.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="relative py-24 bg-gradient-to-b from-[#0f172a] to-[#020617] text-center text-white overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 uppercase">Simplifica la Gestión de Inclusión</h2>
          <p className="text-white/70 mb-10 text-sm max-w-lg">Centraliza la co-docencia y los informes clínicos bajo el resguardo absoluto de datos.</p>
          <button onClick={onStartNow} className="bg-pink-600 text-white btn-premium hover:bg-pink-700">Agenda Asesoría Gratis</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#020617] py-12 text-center text-white/50 text-[10px] uppercase tracking-widest border-t border-white/5">
        <p>© 2026 EduSis SpA • Módulo de Integración PIE</p>
        <button onClick={onBack} className="text-white/75 hover:text-white mt-4 underline">Volver al Inicio</button>
      </footer>
    </div>
  );
};

const RadarRiesgoPage = ({ onBack, onStartNow }) => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 overflow-x-hidden selection:bg-teal-600/10 selection:text-teal-600 relative">
      {/* Navbar Minimalista */}
      <nav className="fixed w-full z-50 transition-all duration-300 bg-white/90 backdrop-blur-md border-b border-slate-100 py-4">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={onBack}>
            <img src="/logosolo.png" alt="Logo EduSis" className="h-14 w-auto object-contain transition-transform group-hover:scale-110" />
          </div>
          <button
            onClick={onBack}
            className="text-[11px] font-semibold uppercase tracking-widest text-slate-700 hover:text-teal-600 transition-colors flex items-center gap-2"
          >
            <ChevronRight className="w-3 h-3 rotate-180" /> Volver al Inicio
          </button>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative pt-32 pb-40 lg:pt-48 lg:pb-56 overflow-hidden flex items-center min-h-[700px] bg-white">
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-center lg:text-left">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-50 border border-teal-100 text-teal-600 text-[11px] font-bold uppercase tracking-widest mb-6">
                Prevención de Deserción Escolar
              </div>
              <h1 className="text-4xl lg:text-5xl font-semibold text-slate-900 leading-tight mb-6 tracking-tight text-left uppercase">
                Radar de <span className="text-teal-600">Riesgo (RAT)</span>
              </h1>
              <p className="text-base text-slate-700 mb-10 leading-relaxed font-medium max-w-lg mx-auto lg:mx-0">
                Detecta y previene a tiempo el ausentismo crónico y el riesgo de deserción mediante nuestros algoritmos avanzados de Alerta Temprana (RAT).
              </p>
              <div className="flex gap-4 justify-center lg:justify-start">
                <button onClick={onStartNow} className="btn-black bg-teal-600 hover:bg-teal-700 text-white border-none">Explorar Radar RAT</button>
              </div>
            </div>

            <div className="hidden lg:flex relative justify-center items-center px-10">
              {/* Floating Badges */}
              <div className="absolute -top-8 -right-4 bg-teal-50 backdrop-blur-xl p-4 rounded-[2rem] shadow-2xl border border-teal-100 animate-float z-30 flex items-center gap-3">
                <div className="bg-teal-100 p-2 rounded-full text-teal-600">
                  <Activity className="w-4 h-4" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[8px] text-teal-600 font-black uppercase tracking-widest leading-none mb-1">Radar de Alerta</span>
                  <span className="text-[10px] font-extrabold text-slate-800">Escaneando Colegio</span>
                </div>
              </div>

              <div className="absolute bottom-10 -right-8 bg-amber-50/90 backdrop-blur-xl p-4 rounded-[2rem] shadow-2xl border border-amber-100 animate-float z-30 flex items-center gap-3" style={{ animationDelay: '0.8s' }}>
                <div className="bg-amber-100 p-2 rounded-full text-amber-600">
                  <AlertCircle className="w-4 h-4" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[8px] text-amber-600 font-black uppercase tracking-widest leading-none mb-1">Alerta Temprana</span>
                  <span className="text-[10px] font-extrabold text-slate-800">Ausentismo Crónico</span>
                </div>
              </div>

              <div className="relative w-full max-w-lg aspect-square animate-float-slow lg:scale-110">
                <div className="absolute inset-0 bg-teal-100/40 rounded-full blur-[100px] -z-10"></div>
                <div className="bg-gradient-to-br from-teal-50 to-cyan-100 w-full h-full rounded-[3rem] p-1 border border-white shadow-2xl flex items-center justify-center overflow-hidden">
                  <div className="p-8 text-center flex flex-col items-center justify-center h-full">
                    <Activity size={80} className="text-teal-600/80 mx-auto mb-6" />
                    <p className="font-bold text-xl text-slate-800">Tecnología RAT</p>
                    <p className="text-slate-500 text-xs mt-2 max-w-xs">Análisis proactivo de datos para una retención escolar exitosa.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Feature Strip */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-r from-teal-600 to-cyan-700">
        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center justify-center">
          <div className="flex items-center gap-4 px-5 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-10 shadow-xl">
            <span className="w-1.5 h-1.5 bg-white/60 rounded-full animate-pulse"></span>
            <span className="text-[10px] font-bold text-white/80 uppercase tracking-[0.5em]">Prevención Crítica</span>
            <span className="w-1.5 h-1.5 bg-white/60 rounded-full animate-pulse"></span>
          </div>
          <h2 className="text-3xl md:text-5xl font-light text-white tracking-[0.1em] leading-none text-center uppercase animate-pulse-soft" style={{ fontFamily: "'Unbounded', sans-serif" }}>
            Radar de Retención <span className="font-bold text-yellow-300">Inteligente</span>
          </h2>
        </div>
      </section>

      {/* Grid Features */}
      <section className="py-24 relative z-10 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 text-left">
              <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-xl flex items-center justify-center mb-6">
                <BarChart3 size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Monitoreo Predictivo</h3>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed">Identifica patrones sutiles de inasistencia antes de que se conviertan en ausentismo crónico, facilitando intervenciones oportunas.</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 text-left">
              <div className="w-12 h-12 bg-cyan-100 text-cyan-600 rounded-xl flex items-center justify-center mb-6">
                <BellRing size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Alertas Automatizadas</h3>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed">Envío automático de notificaciones a los profesores jefes, orientadores y directivos ante caídas bruscas en el rendimiento o la asistencia.</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 text-left">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-6">
                <Users size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Vinculación Familiar</h3>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed">Canaliza actas de compromiso y planes de acompañamiento familiar integrando el radar con la comunicación móvil con apoderados.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="relative py-24 bg-gradient-to-b from-[#0f172a] to-[#020617] text-center text-white overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 uppercase">Protege la Trayectoria de tus Alumnos</h2>
          <p className="text-white/70 mb-10 text-sm max-w-lg">Toma decisiones basadas en datos y reduce a cero la deserción escolar en tu establecimiento.</p>
          <button onClick={onStartNow} className="bg-teal-600 text-white btn-premium hover:bg-teal-700">Agenda Asesoría Gratis</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#020617] py-12 text-center text-white/50 text-[10px] uppercase tracking-widest border-t border-white/5">
        <p>© 2026 EduSis SpA • Radar RAT de Alerta Temprana</p>
        <button onClick={onBack} className="text-white/75 hover:text-white mt-4 underline">Volver al Inicio</button>
      </footer>
    </div>
  );
};

const ModuloMoodlePage = ({ onBack, onStartNow }) => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 overflow-x-hidden selection:bg-orange-600/10 selection:text-orange-600 relative">
      {/* Navbar Minimalista */}
      <nav className="fixed w-full z-50 transition-all duration-300 bg-white/90 backdrop-blur-md border-b border-slate-100 py-4">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={onBack}>
            <img src="/logosolo.png" alt="Logo EduSis" className="h-14 w-auto object-contain transition-transform group-hover:scale-110" />
          </div>
          <button
            onClick={onBack}
            className="text-[11px] font-semibold uppercase tracking-widest text-slate-700 hover:text-orange-600 transition-colors flex items-center gap-2"
          >
            <ChevronRight className="w-3 h-3 rotate-180" /> Volver al Inicio
          </button>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative pt-32 pb-40 lg:pt-48 lg:pb-56 overflow-hidden flex items-center min-h-[700px] bg-white">
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-center lg:text-left">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-50 border border-orange-100 text-orange-600 text-[11px] font-bold uppercase tracking-widest mb-6">
                Integración E-Learning LMS
              </div>
              <h1 className="text-4xl lg:text-5xl font-semibold text-slate-900 leading-tight mb-6 tracking-tight text-left uppercase">
                EDUSIS <span className="text-orange-600">Moodle</span>
              </h1>
              <p className="text-base text-slate-700 mb-10 leading-relaxed font-medium max-w-lg mx-auto lg:mx-0">
                Sincroniza tu aula virtual Moodle con el Libro de Clases de EduSis. Automatiza matrículas, cursos y traspaso de calificaciones en un solo clic.
              </p>
              <div className="flex gap-4 justify-center lg:justify-start">
                <button onClick={onStartNow} className="btn-black bg-orange-600 hover:bg-orange-700 text-white border-none">Conectar con Moodle</button>
              </div>
            </div>

            <div className="hidden lg:flex relative justify-center items-center px-10">
              {/* Floating Badges */}
              <div className="absolute -top-8 -right-4 bg-orange-50 backdrop-blur-xl p-4 rounded-[2rem] shadow-2xl border border-orange-100 animate-float z-30 flex items-center gap-3">
                <div className="bg-orange-100 p-2 rounded-full text-orange-600">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[8px] text-orange-600 font-black uppercase tracking-widest leading-none mb-1">Aula Virtual</span>
                  <span className="text-[10px] font-extrabold text-slate-800">Sincronización Activa</span>
                </div>
              </div>

              <div className="absolute bottom-10 -left-12 bg-amber-50/90 backdrop-blur-xl p-4 rounded-[2rem] shadow-2xl border border-amber-100 animate-float z-30 flex items-center gap-3" style={{ animationDelay: '0.8s' }}>
                <div className="bg-amber-100 p-2 rounded-full text-amber-600">
                  <Puzzle className="w-4 h-4" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[8px] text-amber-600 font-black uppercase tracking-widest leading-none mb-1">Conexión</span>
                  <span className="text-[10px] font-extrabold text-slate-800">SSO Integrado</span>
                </div>
              </div>

              <div className="relative w-full max-w-lg aspect-square animate-float-slow lg:scale-110">
                <div className="absolute inset-0 bg-orange-100/40 rounded-full blur-[100px] -z-10"></div>
                <div className="bg-gradient-to-br from-orange-50 to-amber-100 w-full h-full rounded-[3rem] p-1 border border-white shadow-2xl flex items-center justify-center overflow-hidden">
                  <div className="p-8 text-center flex flex-col items-center justify-center h-full">
                    <GraduationCap size={80} className="text-orange-600/80 mx-auto mb-6" />
                    <p className="font-bold text-xl text-slate-800">Plataforma Moodle</p>
                    <p className="text-slate-500 text-xs mt-2 max-w-xs">Tus cursos, estudiantes y evaluaciones conectados con tu gestión administrativa.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Feature Strip */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-r from-orange-500 to-amber-600">
        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center justify-center">
          <div className="flex items-center gap-4 px-5 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-10 shadow-xl">
            <span className="w-1.5 h-1.5 bg-white/60 rounded-full animate-pulse"></span>
            <span className="text-[10px] font-bold text-white/80 uppercase tracking-[0.5em]">Integración Total</span>
            <span className="w-1.5 h-1.5 bg-white/60 rounded-full animate-pulse"></span>
          </div>
          <h2 className="text-3xl md:text-5xl font-light text-white tracking-[0.1em] leading-none text-center uppercase animate-pulse-soft" style={{ fontFamily: "'Unbounded', sans-serif" }}>
            Moodle & EduSis <span className="font-bold text-slate-900">Unificados</span>
          </h2>
        </div>
      </section>

      {/* Grid Features */}
      <section className="py-24 relative z-10 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 text-left">
              <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mb-6">
                <Users size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Matrícula Sincronizada</h3>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed">Crea usuarios, cursos y asignaciones en Moodle automáticamente al ingresar estudiantes en la plataforma central de EduSis.</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 text-left">
              <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center mb-6">
                <Zap size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Acceso Único (SSO)</h3>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed">Estudiantes y docentes ingresan a Moodle con sus credenciales de EduSis con un solo clic, sin recordar múltiples contraseñas.</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 text-left">
              <div className="w-12 h-12 bg-yellow-100 text-yellow-600 rounded-xl flex items-center justify-center mb-6">
                <FileText size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Notas Automatizadas</h3>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed">Traspasa las calificaciones de las actividades en Moodle directamente al Libro Digital de Clases, ahorrando horas de digitación.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="relative py-24 bg-gradient-to-b from-[#0f172a] to-[#020617] text-center text-white overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 uppercase">Lleva tu aula virtual al siguiente nivel</h2>
          <p className="text-white/70 mb-10 text-sm max-w-lg">Centraliza el aprendizaje online y la gestión administrativa bajo una misma suite unificada.</p>
          <button onClick={onStartNow} className="bg-orange-600 text-white btn-premium hover:bg-orange-700">Agenda Asesoría Gratis</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#020617] py-12 text-center text-white/50 text-[10px] uppercase tracking-widest border-t border-white/5">
        <p>© 2026 EduSis SpA • Integración Moodle LMS</p>
        <button onClick={onBack} className="text-white/75 hover:text-white mt-4 underline">Volver al Inicio</button>
      </footer>
    </div>
  );
};

const LandingPage = () => {
  const [page, setPage] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { id: 1, text: "¡Hola! Soy tu asistente virtual de EduSis. ¿En qué puedo ayudarte hoy sobre la Circular 30, el Libro de Clases o nuestras plataformas?", sender: "bot" }
  ]);
  const [chatInput, setChatInput] = useState("");

  const handleSendMessage = () => {
    if (!chatInput.trim()) return;
    
    const userMsg = { id: Date.now(), text: chatInput, sender: "user" };
    setChatMessages(prev => [...prev, userMsg]);
    const currentInput = chatInput.toLowerCase();
    setChatInput("");

    setTimeout(() => {
      let botText = "Gracias por escribir. Un especialista de nuestro equipo se contactará a la brevedad para brindarte una asesoría personalizada.";
      if (currentInput.includes("circular 30") || currentInput.includes("circular30") || currentInput.includes("norma")) {
        botText = "Nuestra plataforma cumple al 100% con la Circular 30 de la Superintendencia de Educación, automatizando el registro de asistencia rápida, firmas de co-docencia y la bitácora de salidas de sala.";
      } else if (currentInput.includes("decreto 67") || currentInput.includes("decreto67") || currentInput.includes("nota") || currentInput.includes("calificaci")) {
        botText = "EduSis incorpora planillas flexibles configuradas según el Decreto 67 de evaluación formativa y sumativa, permitiendo ponderaciones personalizadas y validación por parte de UTP.";
      } else if (currentInput.includes("precio") || currentInput.includes("costo") || currentInput.includes("valor")) {
        botText = "El valor del servicio se adapta al número de matrícula de tu establecimiento. Si deseas una cotización formal o agendar una asesoría gratuita, indícanos tu correo o presiona el botón 'Agendar asesoría' en la web.";
      } else if (currentInput.includes("demo") || currentInput.includes("probar") || currentInput.includes("gratis")) {
        botText = "¡Claro! Puedes agendar una demostración en vivo guiada por nuestros ingenieros pedagógicos haciendo clic en el botón 'Agenda una asesoría gratuita' al final de esta página.";
      }
      
      setChatMessages(prev => [...prev, { id: Date.now() + 1, text: botText, sender: "bot" }]);
    }, 800);
  };

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Estados de visibilidad para animaciones
  const [storyVisible, setStoryVisible] = useState(false);
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

  const handleNavigation = (targetId) => {
    setMobileMenuOpen(false);
    if (page !== 'home') {
      setPage('home');
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Refs para observadores
  const storyRef = useRef(null);
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
      title: "Gestión educativa inteligente",
      desc: "La plataforma integral que conecta directivos, docentes y familias. Automatiza lo administrativo y enfócate 100% en educar.",
      image: "/edusis-plataformas.png"
    },
    {
      id: 1,
      badge: "Nuevo: EduBot IA",
      title: "Tu asistente virtual con IA",
      desc: "Resuelve dudas de apoderados y docentes al instante. Nuestro Chatbot con IA optimiza la comunicación interna y externa 24/7.",
      image: "/edusis-plataformas.png"
    },
    {
      id: 2,
      badge: "Cumplimiento Normativo",
      title: "Eficiencia bajo Circular N°30",
      desc: "Automatización de procesos críticos y Libro de Clases Digital diseñado específicamente para cumplir con los estándares del MINEDUC.",
      image: "/edusis-plataformas.png"
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    if (page === 'privacidad') {
      document.title = "Política de Privacidad – EDUSIS";
    } else if (page === 'terminos') {
      document.title = "Términos y Condiciones de Uso – EDUSIS";
    } else if (page === 'edubot') {
      document.title = "EDUSIS Chatbots – EDUSIS";
    } else if (page === 'libro-digital') {
      document.title = "EDUSIS Libro de Clases – EDUSIS";
    } else if (page === 'moodle') {
      document.title = "EDUSIS Moodle – EDUSIS";
    } else {
      document.title = "EduSis";
    }
  }, [page]);

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
          if (entry.target === contactRef.current) setContactVisible(true);
          if (entry.target === demoRef.current) setDemoVisible(true);
          if (entry.target === faqRef.current) setFaqVisible(true);
          if (entry.target === missionRef.current) setMissionVisible(true);
          if (entry.target === blogRef.current) setBlogVisible(true);
          if (entry.target === introRef.current) setIntroVisible(true);
        }
      });
    }, observerOptions);

    const elementsToObserve = [storyRef, contactRef, demoRef, faqRef, missionRef, blogRef, introRef];
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
      ) : page === 'libro-digital' ? (
        <LibroDigitalPage onBack={() => setPage('home')} onStartNow={handleStartNow} setPage={setPage} />
      ) : page === 'moodle' ? (
        <ModuloMoodlePage onBack={() => setPage('home')} onStartNow={handleStartNow} />
      ) : page === 'modulo-pie' ? (
        <ModuloPiePage onBack={() => setPage('home')} onStartNow={handleStartNow} />
      ) : page === 'radar-riesgo' ? (
        <RadarRiesgoPage onBack={() => setPage('home')} onStartNow={handleStartNow} />
      ) : page === 'login' ? (
        <LoginPage onBack={() => setPage('home')} />
      ) : (
        <>
          {/* --- NAVBAR --- */}
          <nav className={`fixed w-full z-50 transition-all duration-300 bg-white border-b border-slate-100 ${isScrolled ? 'py-3 shadow-sm' : 'py-5'}`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
              <div className="flex items-center gap-3 cursor-pointer group" onClick={() => { if (page !== 'home') { setPage('home'); } else { window.scrollTo({ top: 0, behavior: 'smooth' }); } }}>
                <img src="/logosolo.png" alt="Logo EduSis" className="h-20 w-auto object-contain transition-transform group-hover:scale-110" />
              </div>
              <div className="hidden md:flex items-center gap-8 text-[11px] font-semibold uppercase tracking-widest text-slate-700 mr-0 lg:mr-[-24px]">
                {/* Menú Desplegable de Servicios */}
                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                    className="hover:text-[#0b8393] transition-colors flex items-center gap-1 bg-transparent border-none text-[11px] font-semibold uppercase tracking-widest text-slate-700 cursor-pointer"
                  >
                    Servicios <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {servicesDropdownOpen && (
                    <div className="absolute left-0 mt-3 w-64 bg-white border border-slate-100 rounded-2xl shadow-xl py-3 z-50 animate-fade-in-up text-left">
                      <button
                        onClick={() => { setPage('libro-digital'); setServicesDropdownOpen(false); }}
                        className="w-full px-5 py-3 hover:bg-slate-50 flex items-start gap-3 transition-colors text-left border-none bg-transparent cursor-pointer"
                      >
                        <div className="bg-[#EBF8FF] p-1.5 rounded-lg text-blue-600 shrink-0">
                          <FileText className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-slate-900 leading-tight">EDUSIS Libro de Clases</p>
                          <p className="text-[10px] text-slate-500 font-medium leading-tight mt-0.5">Asistencia y firmas bajo Circular 30.</p>
                        </div>
                      </button>
                      <button
                        onClick={() => { setPage('edubot'); setServicesDropdownOpen(false); }}
                        className="w-full px-5 py-3 hover:bg-slate-50 flex items-start gap-3 transition-colors text-left border-none bg-transparent cursor-pointer"
                      >
                        <div className="bg-[#FFFFE0] p-1.5 rounded-lg text-amber-500 shrink-0">
                          <Bot className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-slate-900 leading-tight">EDUSIS Chatbots</p>
                          <p className="text-[10px] text-slate-500 font-medium leading-tight mt-0.5">Asistente y tutor virtual inteligente.</p>
                        </div>
                      </button>
                      <button
                        onClick={() => { setPage('moodle'); setServicesDropdownOpen(false); }}
                        className="w-full px-5 py-3 hover:bg-slate-50 flex items-start gap-3 transition-colors text-left border-none bg-transparent cursor-pointer"
                      >
                        <div className="bg-[#FFF3E0] p-1.5 rounded-lg text-orange-500 shrink-0">
                          <GraduationCap className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-slate-900 leading-tight">EDUSIS Moodle</p>
                          <p className="text-[10px] text-slate-500 font-medium leading-tight mt-0.5">Aula virtual y notas sincronizadas.</p>
                        </div>
                      </button>
                    </div>
                  )}
                </div>
                <a href="#blog" onClick={(e) => { e.preventDefault(); handleNavigation('blog'); }} className="hover:text-brand-blue transition-colors">Blog</a>
                <a href="#contacto" onClick={(e) => { e.preventDefault(); handleNavigation('contacto'); }} className="hover:text-brand-blue transition-colors">Contacto</a>
                <button
                  onClick={() => setPage('login')}
                  className="btn-solid-brand btn-small"
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
                <div>
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="text-xs font-black uppercase tracking-widest py-2 text-left flex items-center justify-between w-full border-none bg-transparent cursor-pointer animate-none"
                  >
                    <span>Servicios</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {mobileServicesOpen && (
                    <div className="pl-4 mt-2 flex flex-col gap-3 border-l border-slate-100 py-1">
                      <button
                        onClick={() => { setPage('libro-digital'); setMobileMenuOpen(false); setMobileServicesOpen(false); }}
                        className="text-xs font-bold text-slate-600 hover:text-slate-900 text-left py-1 border-none bg-transparent cursor-pointer"
                      >
                        EDUSIS Libro de Clases
                      </button>
                      <button
                        onClick={() => { setPage('edubot'); setMobileMenuOpen(false); setMobileServicesOpen(false); }}
                        className="text-xs font-bold text-slate-600 hover:text-slate-900 text-left py-1 border-none bg-transparent cursor-pointer"
                      >
                        EDUSIS Chatbots
                      </button>
                      <button
                        onClick={() => { setPage('moodle'); setMobileMenuOpen(false); setMobileServicesOpen(false); }}
                        className="text-xs font-bold text-slate-600 hover:text-slate-900 text-left py-1 border-none bg-transparent cursor-pointer"
                      >
                        EDUSIS Moodle
                      </button>
                    </div>
                  )}
                </div>
                <a href="#blog" className="text-xs font-black uppercase tracking-widest py-2" onClick={(e) => { e.preventDefault(); handleNavigation('blog'); }}>Blog</a>
                <a href="#contacto" className="text-xs font-black uppercase tracking-widest py-2" onClick={(e) => { e.preventDefault(); handleNavigation('contacto'); }}>Contacto</a>
                <button
                  onClick={() => { setPage('login'); setMobileMenuOpen(false); }}
                  className="btn-solid-brand btn-small w-full"
                >
                  Iniciar sesión
                </button>
              </div>
            )}
          </nav>

          {page === 'privacidad' ? (
            <PrivacyPage />
          ) : page === 'terminos' ? (
            <TermsPage />
          ) : (
            <>
              {/* --- HERO SECTION --- */}
              <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-[90vh] flex items-center bg-white">


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
                        <h1 className="text-4xl lg:text-6xl font-medium text-slate-900 leading-[1.1] tracking-tight mb-6 text-left normal-case">
                          {(() => {
                            const title = heroSlides[currentHeroSlide].title;
                            const words = title.split(' ');
                            const lastWord = words.pop();
                            const remainingText = words.join(' ');
                            return (
                              <>
                                {remainingText}{' '}
                                <span className="text-[#0b8393]">{lastWord}</span>
                                <span className="text-[#fcc20f]">.</span>
                              </>
                            );
                          })()}
                        </h1>
                        <p className="text-base text-slate-700 mb-10 leading-relaxed font-medium max-w-lg text-left">
                          {heroSlides[currentHeroSlide].desc}
                        </p>
                      </div>
                      <div className="flex gap-2 mb-8">
                        {heroSlides.map((_, idx) => (
                          <button key={idx} onClick={() => setCurrentHeroSlide(idx)} className={`h-2 rounded-full transition-all duration-300 ${currentHeroSlide === idx ? 'w-10 bg-[#0b8393]' : 'w-2 bg-slate-300 hover:bg-[#0b8393]/50'}`} />
                        ))}
                      </div>
                      <div className="flex flex-col sm:flex-row gap-4 mb-8 relative">
                        <a href="#contacto" className="btn-premium bg-[#0b8393] text-white hover:bg-[#096f7c] !rounded-xl !px-8 shadow-lg shadow-teal-900/20 hover:shadow-teal-900/40 hover:-translate-y-1.5 transition-all">
                          <Calendar className="w-4 h-4" /> Agenda una Asesoría
                        </a>
                        <a href="#demo" className="btn-outline-purple !rounded-xl !px-8">
                          <Play className="w-4 h-4 fill-current" /> Ver Demo
                        </a>
                      </div>

                      {/* Features Row */}
                      <div className="flex flex-wrap items-center gap-6 mt-8 pt-6 border-t border-slate-100">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-[#0b8393]/10 flex items-center justify-center shrink-0 shadow-sm">
                            <ShieldCheck className="w-4 h-4 text-[#0b8393]" />
                          </div>
                          <span className="text-xs font-bold text-slate-800 tracking-tight">Seguro y confiable</span>
                        </div>
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-[#0b8393]/10 flex items-center justify-center shrink-0 shadow-sm">
                            <Users className="w-4 h-4 text-[#0b8393]" />
                          </div>
                          <span className="text-xs font-bold text-slate-800 tracking-tight">Fácil de usar</span>
                        </div>
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-[#0b8393]/10 flex items-center justify-center shrink-0 shadow-sm">
                            <Cloud className="w-4 h-4 text-[#0b8393]" />
                          </div>
                          <span className="text-xs font-bold text-slate-800 tracking-tight">Acceso en cualquier lugar</span>
                        </div>
                      </div>
                    </div>
                    <div className="hidden lg:flex relative h-[650px] w-full items-center justify-center animate-fade-in-left delay-300 order-1 lg:order-2">
                      {/* Forma orgánica celeste decorativa detrás de la imagen del hero */}
                      <div
                        className="absolute w-[113%] h-[110%] bg-[#EAF6FD] z-0 pointer-events-none"
                        style={{
                          borderRadius: '40% 60% 50% 50% / 40% 30% 70% 60%',
                          left: '-8%',
                          top: '-5%'
                        }}
                      ></div>
                      <div key={currentHeroSlide} className="relative z-10 w-full max-w-[920px] transition-all duration-700 px-4 -translate-y-2">
                        <img src="/edusis-plataformas.png" alt="EduSis Plataformas" className="w-full h-auto relative z-10 scale-125" />

                        {/* Floating Squares on the top right */}
                        <div className="absolute top-[-32%] -right-12 w-36 h-36 pointer-events-none z-20">
                          {/* Top Right Square */}
                          <div
                            className="absolute -top-3 right-0 w-12 h-12 bg-[#35d9fc]/10 rounded-xl animate-float"
                            style={{ animationDelay: '0s' }}
                          ></div>
                          {/* Middle Left Square */}
                          <div
                            className="absolute top-10 left-16 w-9 h-9 bg-[#35d9fc]/60 rounded-lg animate-float"
                            style={{ animationDelay: '0.6s' }}
                          ></div>
                          {/* Bottom Center Square */}
                          <div
                            className="absolute top-20 right-4 w-5 h-5 bg-[#fcc20f]/50 rounded-md animate-float"
                            style={{ animationDelay: '1.2s' }}
                          ></div>
                        </div>

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

              <hr className="border-slate-100/80" />

              <section ref={introRef} className={`pt-16 pb-40 relative overflow-hidden transition-all duration-1000 ${introVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} bg-white text-left`}>
                {/* Clean Background */}
                <div className="absolute inset-0 pointer-events-none bg-white"></div>

                {/* Decorative Corner Curve (Top-Left Blue) - Mirrored Style */}
                <div className="absolute -top-20 -left-20 w-96 h-96 pointer-events-none z-10 opacity-80">
                  <svg viewBox="0 0 200 200" className="w-full h-full transform -scale-x-100">
                    <path d="M20,0 C20,100 100,180 200,180" fill="none" stroke="#0b8393" strokeWidth="32" strokeLinecap="round" />
                  </svg>
                </div>


                <div className="max-w-7xl mx-auto px-6 relative z-10">
                  {/* Header de la sección (reemplazo de la franja gigante) */}
                  <div className="text-center mb-24 transition-all duration-700">
                    <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight leading-none text-center">¿Qué es EduSis?</h2>
                    <div className="h-1.5 w-24 bg-[#0b8393]/30 mx-auto rounded-full mt-4"></div>
                    <p className="text-slate-400 font-black uppercase text-[10px] tracking-[0.3em] opacity-60 text-center mt-4">Ecosistema pedagógico inteligente</p>
                  </div>

                  <div className="grid lg:grid-cols-12 gap-8 items-stretch">
                    {/* Left Large Card */}
                    <div className="lg:col-span-7 flex relative">
                      {/* Organic Deformed Oval Shape directly behind the card */}
                      <div
                        className="absolute top-[-5%] left-[-8%] w-[113%] h-[110%] bg-[#EAF6FD] z-0 pointer-events-none"
                        style={{ borderRadius: '40% 60% 50% 50% / 40% 30% 70% 60%' }}
                      ></div>

                      <div className="w-full glass-card !p-12 lg:!p-16 flex flex-col items-center text-center justify-center shadow-[0_0_60px_-15px_rgba(0,0,0,0.1),0_40px_80px_-20px_rgba(0,0,0,0.15)] border-white/60 bg-white/40 backdrop-blur-3xl rounded-[3rem] relative z-10">
                        <div className="inline-block px-5 py-2 rounded-full bg-brand-blue/10 text-brand-blue text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                          La Nueva Era Educativa
                        </div>
                        <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight leading-[1.1]">
                          El primer ecosistema <br /><span className="text-[#0b8393] uppercase">Pedagógico Inteligente</span><span className="text-[#fcc20f]">.</span>
                        </h2>
                        <div className="h-1.5 w-20 bg-[#0b8393]/30 rounded-full mt-6 mb-8"></div>
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

              <hr className="border-t border-slate-100 w-full" />



              {/* --- SECCIÓN NUESTROS MÓDULOS (ESTILO PREMIUM COMPACTO) --- */}
              <section ref={demoRef} id="demo" className="py-32 px-6 relative bg-white overflow-hidden text-left">
                {/* Organic Deformed Shape in the Background (Left side) */}
                <div
                  className="absolute top-[5%] left-[-15%] w-[55vw] h-[90%] bg-[#EAF6FD] z-0 pointer-events-none opacity-80"
                  style={{ borderRadius: '30% 70% 50% 50% / 40% 30% 70% 60%' }}
                ></div>

                {/* Floating Colored Squares on the Right */}
                <div className="absolute top-[12%] right-[8vw] w-48 h-48 pointer-events-none z-0">
                  {/* Top Right Square */}
                  <div
                    className="absolute top-0 right-4 w-16 h-16 bg-[#35d9fc]/20 rounded-2xl animate-float"
                    style={{ animationDelay: '0s' }}
                  ></div>
                  {/* Middle Left Square */}
                  <div
                    className="absolute top-12 left-0 w-11 h-11 bg-[#35d9fc]/60 rounded-xl animate-float"
                    style={{ animationDelay: '0.6s' }}
                  ></div>
                  {/* Bottom Center Square */}
                  <div
                    className="absolute top-28 left-16 w-8 h-8 bg-[#A7F3D0]/60 rounded-lg animate-float"
                    style={{ animationDelay: '1.2s' }}
                  ></div>
                </div>

                <div className="max-w-7xl mx-auto relative z-10 text-center mb-24">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E0F2FE] border border-[#BEE3F8] text-[#0b8393] text-[10px] font-black uppercase tracking-[0.2em] mb-6 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-[#0b8393]"></span>
                    ECOSISTEMA EDUSIS
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight max-w-4xl mx-auto text-center">
                    Todo lo que tu colegio necesita, <br />en un <span className="text-[#0b8393]">ecosistema inteligente</span><span className="text-[#fcc20f]">.</span>
                  </h2>
                  <div className="h-1 w-20 bg-[#0b8393]/30 mx-auto rounded-full mt-6 mb-6"></div>
                  <p className="text-slate-500 font-semibold text-sm max-w-2xl mx-auto leading-relaxed text-center">
                    Gestión académica, administrativa y pedagógica conectada en una sola plataforma.
                  </p>
                </div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
                  {[
                    {
                      t: 'EDUSIS Libro de Clases',
                      d: 'Registro legal de asistencia, calificaciones y firmas 2FA bajo estándar Circular 30.',
                      i: <FileText />,
                      bg: '#EBF8FF', // Light Blue
                      color: '#2B6CB0', // Blue accent
                      page: 'libro-digital'
                    },
                    {
                      t: 'EDUSIS Chatbots',
                      d: 'Asistentes de IA para resolver dudas de apoderados, docentes y administrativos 24/7.',
                      i: <Bot />,
                      bg: '#FFFFE0', // Amarillo
                      color: '#B7791F',
                      page: 'edubot'
                    },
                    {
                      t: 'EDUSIS Moodle',
                      d: 'Aula virtual LMS unificada con sincronización automática de matrícula y notas.',
                      i: <GraduationCap />,
                      bg: '#FFF3E0', // Naranja
                      color: '#DD6B20',
                      page: 'moodle'
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
                      bg: '#FFF5F5', // Rojo
                      color: '#E53E3E'
                    },
                    {
                      t: 'Convivencia Escolar',
                      d: 'Gestión de protocolos y firma de actas digitales en tiempo real.',
                      i: <ShieldCheck />,
                      bg: '#F5F3FF', // Lila
                      color: '#7C3AED'
                    }
                  ].map((m, idx) => (
                    <div
                      key={idx}
                      onClick={() => { if (m.page) setPage(m.page); }}
                      className={`bg-white p-8 rounded-[2rem] border border-slate-100 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_45px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-500 group flex flex-col text-left relative overflow-hidden ${m.page ? 'cursor-pointer' : ''} ${demoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                      style={{ transitionDelay: `${idx * 0.1}s` }}
                    >
                      <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-white/60 group-hover:scale-110 transition-transform duration-500" style={{ backgroundColor: m.bg }}>
                        <div style={{ color: m.color }}>
                          {React.cloneElement(m.i, { size: 28, strokeWidth: 2 })}
                        </div>
                      </div>

                      <h3 className="text-lg font-bold text-slate-900 mb-2">
                        {m.t}
                      </h3>

                      <p className="text-xs font-semibold text-slate-500 leading-relaxed mb-8">
                        {m.d}
                      </p>

                      <div className="mt-auto flex items-center justify-between text-[#0b8393] group-hover:text-[#58b9cb] transition-colors font-bold text-sm tracking-tight pt-4 border-t border-slate-50">
                        <span>{m.page ? 'Saber más' : 'Ecosistema'}</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <hr className="border-t border-slate-100 w-full" />

              {/* --- BLOG SECTION (MINIMALIST) --- */}
              <section ref={blogRef} id="blog" className={`py-24 bg-white relative overflow-hidden transition-all duration-1000 ${blogVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                  {/* Organic Shape behind the Blog Article */}
                  <div
                    className="absolute top-[8%] -left-10 md:-left-16 w-[380px] h-[360px] md:w-[630px] md:h-[550px] bg-[#F0EEFD] z-0 pointer-events-none opacity-80"
                    style={{ borderRadius: '35% 65% 55% 45% / 45% 35% 65% 55%' }}
                  ></div>

                  <div className="text-center mb-16 relative z-10">
                    <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight leading-none text-center">Blog Educativo</h2>
                    <div className="h-1.5 w-20 bg-[#0b8393]/30 mx-auto rounded-full mt-4"></div>
                    <p className="text-slate-400 font-black uppercase text-[10px] tracking-[0.3em] opacity-60 text-center mt-4">Ingeniería Pedagógica & IA</p>
                  </div>

                  <article className="bg-white rounded-[2.5rem] overflow-hidden flex flex-col lg:flex-row items-stretch shadow-xl border border-purple-50 group cursor-pointer transition-all hover:shadow-2xl relative z-10">
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
                          <span className="text-[#0b8393] uppercase">EduBot elimina el 70% de la carga administrativa</span> automatizando planificaciones y reportes Mineduc en segundos.
                        </p>
                        <p className="text-slate-400 font-medium leading-relaxed text-sm italic">
                          Hoy, gracias a la inteligencia pedagógica, el foco vuelve a ser la interacción humana y el aprendizaje profundo, liberando a los docentes del papeleo para siempre.
                        </p>
                      </div>
                    </div>
                  </article>
                </div>
              </section >

              <hr className="border-t border-slate-100 w-full" />

              {/* --- FAQ SECTION (MINIMALIST) --- */}
              <section ref={faqRef} className={`py-16 bg-white px-6 relative overflow-hidden transition-all duration-1000 ${faqVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                {/* Clean Background */}
                <div className="absolute inset-0 pointer-events-none bg-white"></div>

                {/* Decorative Corner Curve (Top-Right Blue) */}
                <div className="absolute -top-20 -right-20 w-96 h-96 pointer-events-none z-0 opacity-80">
                  <svg viewBox="0 0 200 200" className="w-full h-full">
                    <path d="M20,0 C20,100 100,180 200,180" fill="none" stroke="#0b8393" strokeWidth="32" strokeLinecap="round" />
                  </svg>
                </div>

                <div className="max-w-3xl mx-auto relative z-10">


                  <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight leading-none text-center">Preguntas Frecuentes</h2>
                    <div className="h-1.5 w-20 bg-[#0b8393]/30 mx-auto rounded-full mt-4"></div>
                    <p className="text-slate-400 font-black uppercase text-[10px] tracking-[0.3em] opacity-60 text-center mt-4">Resolver tus dudas es nuestra prioridad</p>
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

                  {/* Call to action for Chatbot */}
                  <div className="text-center mt-10 animate-fade-in-up">
                    <p className="text-sm text-slate-500 font-medium">
                      ¿Te quedaste con dudas?{" "}
                      <button 
                        onClick={() => setIsChatbotOpen(true)}
                        className="text-[#0b8393] hover:text-[#0b8393]/80 font-bold underline transition-colors border-none bg-transparent cursor-pointer p-0"
                      >
                        ¡Conversa con nuestro asistente EduSis!
                      </button>
                    </p>
                  </div>
                </div>
              </section >

              <section ref={contactRef} id="contacto" className="pt-24 pb-48 relative overflow-hidden transition-all duration-700 text-left" style={{ background: 'linear-gradient(135deg, #b157dd 0%, #0b8393 100%)' }}>
                {/* Minimal, elegant curvature */}
                <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
                  <svg className="relative block w-full h-[40px] md:h-[80px]" viewBox="0 0 1440 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#ffffff" d="M0,0 L1440,0 L1440,20 C1000,20 440,100 0,100 Z"></path>
                  </svg>
                </div>

                {/* Subtle Background Pattern like the image */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                  <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
                </div>

                {/* Decorative Floating Elements */}
                <div className="absolute top-[20%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-blue-400/20 blur-[120px] animate-pulse-soft"></div>
                <div className="absolute bottom-[-10%] right-[-5%] w-[30vw] h-[30vw] rounded-full bg-purple-400/20 blur-[100px] animate-float"></div>

                <div className={`max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10 pt-10 ${contactVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} text-left`}>
                  <div className="text-white text-left">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white text-[10px] font-black uppercase tracking-[0.3em] mb-8 border border-white/20 backdrop-blur-md">
                      Únete al Cambio
                    </div>
                    <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-8 leading-tight text-left text-white">
                      Agenda una <br />
                      asesoría gratuita
                      <Check className="inline-block w-8 h-8 md:w-10 md:h-10 text-[#fcc20f] ml-3 align-middle" strokeWidth={3.5} />
                    </h2>
                    <p className="text-xl text-white/70 mb-12 font-medium leading-relaxed max-w-md text-left">Conversemos sobre los desafíos de gestión de tu establecimiento y descubre cómo Edusis puede ayudarte.</p>
                    <div className="flex flex-col gap-6 text-left">
                      <div className="flex items-center gap-4 text-left"><div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shadow-lg"><Check className="w-3 h-3 text-white" strokeWidth={5} /></div><span className="font-black text-[11px] uppercase tracking-widest text-white text-left">Diagnóstico de necesidades</span></div>
                      <div className="flex items-center gap-4 text-left"><div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shadow-lg"><Check className="w-3 h-3 text-white" strokeWidth={5} /></div><span className="font-black text-[11px] uppercase tracking-widest text-white text-left">Asesoría personalizada</span></div>
                      <div className="flex items-center gap-4 text-left"><div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shadow-lg"><Check className="w-3 h-3 text-white" strokeWidth={5} /></div><span className="font-black text-[11px] uppercase tracking-widest text-white text-left">Respuesta en menos de 24 horas</span></div>
                    </div>
                  </div>
                  <div className="glass-card !bg-white/60 !border-white/40 p-12 lg:p-16 shadow-2xl text-left relative overflow-hidden group backdrop-blur-[60px] rounded-[3rem] before:absolute before:inset-0 before:bg-gradient-to-br before:from-blue-500/5 before:to-emerald-400/5 before:pointer-events-none">
                    <h3 className="text-xl font-semibold text-slate-900 tracking-[0.2em] mb-10 text-left uppercase">Agenda tu Asesoría</h3>
                    <form className="space-y-6 text-left">
                      <input type="text" placeholder="Nombre y Apellido" className="w-full bg-white/40 border border-white/60 p-5 rounded-2xl text-slate-900 outline-none focus:bg-white/60 focus:border-white transition-all font-bold placeholder:text-slate-500 text-left" />
                      <input type="email" placeholder="Email Institucional" className="w-full bg-white/40 border border-white/60 p-5 rounded-2xl text-slate-900 outline-none focus:bg-white/60 focus:border-white transition-all font-bold placeholder:text-slate-500 text-left" />
                      <input type="text" placeholder="Institución Educativa" className="w-full bg-white/40 border border-white/60 p-5 rounded-2xl text-slate-900 outline-none focus:bg-white/60 focus:border-white transition-all font-bold placeholder:text-slate-500 text-left" />
                      <button className="w-full bg-slate-900 text-white font-black uppercase tracking-tighter italic p-7 rounded-2xl hover:scale-[1.02] transition-all shadow-xl !text-xs mt-6">
                        Solicitar asesoría
                      </button>
                    </form>
                  </div>
                </div>
              </section >
            </>
          )}

          <footer className="bg-gradient-to-b from-[#0f172a] to-[#020617] pt-20 pb-12 px-6 text-white text-left relative overflow-hidden">
            {/* Base Gradient Footer - No Blobs */}

            <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-20 border-b border-white/10 pb-12 mb-8 text-left relative z-10">
              <div className="space-y-6 text-left">
                <div className="flex items-center gap-4 text-left">
                  <img src="/logosolo.png" className="h-20 w-auto object-contain -mt-6" />
                </div>
                <div className="flex flex-col gap-4 text-sm text-white/80 font-medium text-left">
                  <button onClick={() => setPage('privacidad')} className="hover:text-white transition-colors outline-none text-left">Política de Privacidad</button>
                  <button onClick={() => setPage('terminos')} className="hover:text-white transition-colors outline-none text-left">Términos y Condiciones</button>
                </div>
              </div>
              <div className="text-left">
                <h4 className="text-white font-bold uppercase text-xs tracking-wider mb-6 text-left">Plataforma</h4>
                <ul className="text-sm space-y-4 text-white/80 font-medium text-left">
                  <li><button onClick={() => setPage('home')} className="hover:text-white transition-colors text-left border-none bg-transparent cursor-pointer font-medium p-0">Gestión Académica</button></li>
                  <li><button onClick={() => setPage('libro-digital')} className="hover:text-white transition-colors text-left border-none bg-transparent cursor-pointer font-medium p-0">EDUSIS Libro de Clases</button></li>
                  <li><button onClick={() => setPage('edubot')} className="hover:text-white transition-colors text-left border-none bg-transparent cursor-pointer font-medium p-0">EDUSIS Chatbots</button></li>
                  <li><button onClick={() => setPage('moodle')} className="hover:text-white transition-colors text-left border-none bg-transparent cursor-pointer font-medium p-0">EDUSIS Moodle</button></li>
                </ul>
              </div>
              <div className="text-left text-left">
                <h4 className="text-white font-bold uppercase text-xs tracking-wider mb-6 text-left">Compañía</h4>
                <ul className="text-sm space-y-4 text-white/80 font-medium text-left">
                  <li><a href="#" className="hover:text-white transition-colors text-left">Sobre EduSis</a></li>
                  <li><a href="#" className="hover:text-white transition-colors text-left">Misión 2030</a></li>
                  <li><a href="#" className="hover:text-white transition-colors text-left">Seguridad de Datos</a></li>
                  <li><a href="#" className="hover:text-white transition-colors text-left">Prensa</a></li>
                </ul>
              </div>
              <div className="text-left text-left">
                <h4 className="text-white font-bold uppercase text-xs tracking-wider mb-6 text-left">Contacto</h4>
                <ul className="text-sm space-y-4 text-white/80 font-medium text-left">
                  <li className="flex items-center gap-3 text-left text-left">
                    <Mail className="w-4 h-4 text-white text-left shrink-0" />
                    <span className="text-white/80">contacto@edusis.cl</span>
                  </li>
                  <li className="flex items-start gap-3 text-left text-left font-medium">
                    <MapPin className="w-4 h-4 text-white text-left shrink-0 mt-1" />
                    <span className="text-white/80 leading-normal">Av. Presidente Kennedy 5600, Of. 507, Vitacura, Santiago.</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="max-w-7xl mx-auto flex flex-col items-center text-xs text-white/50 text-center tracking-normal font-normal">
              <p>© 2026 EduSis SpA. Todos los derechos reservados.</p>
            </div>
          </footer>

          {/* Floating Chatbot UI */}
          <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end hidden lg:flex select-none">
            {/* Chatbot Window */}
            {isChatbotOpen && (
              <div className="w-80 h-96 bg-white border border-slate-100 rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-fade-in-up mb-4">
                {/* Header */}
                <div className="bg-[#0b8393] p-4 text-white flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></div>
                    <span className="font-bold text-xs tracking-wider uppercase">Asistente EduSis</span>
                  </div>
                  <button 
                    onClick={() => setIsChatbotOpen(false)} 
                    className="text-white hover:text-white/80 transition-colors border-none bg-transparent cursor-pointer p-1"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Messages Area */}
                <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-3 bg-slate-50/50 text-xs">
                  {chatMessages.map(msg => (
                    <div 
                      key={msg.id} 
                      className={`p-3 rounded-2xl max-w-[85%] font-medium leading-relaxed ${
                        msg.sender === 'bot' 
                          ? 'bg-slate-100 text-slate-800 rounded-tl-none self-start' 
                          : 'bg-[#0b8393] text-white rounded-tr-none self-end ml-auto'
                      }`}
                    >
                      {msg.text}
                    </div>
                  ))}
                </div>

                {/* Input Area */}
                <div className="p-3 bg-white border-t border-slate-100 flex gap-2 items-center">
                  <input 
                    type="text" 
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    onKeyDown={(e) => { if (e.key === 'Enter') handleSendMessage(); }}
                    placeholder="Escribe tu mensaje aquí..." 
                    className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-[#0b8393]/50 font-medium"
                  />
                  <button 
                    onClick={handleSendMessage}
                    className="w-8 h-8 rounded-xl bg-[#0b8393] text-white flex items-center justify-center hover:bg-[#0b8393]/90 transition-colors border-none cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {/* Floating Toggle Button */}
            <button 
              onClick={() => setIsChatbotOpen(!isChatbotOpen)} 
              className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#0b8393] to-[#58b9cb] text-white flex items-center justify-center shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border-none cursor-pointer"
            >
              <MessageCircle className="w-6 h-6" />
            </button>
          </div>
        </>
      )
      }
    </div >
  );
};

export default LandingPage;