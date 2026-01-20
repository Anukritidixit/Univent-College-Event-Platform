import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Globe, Shield, Zap, Play, CheckCircle } from 'lucide-react';

const LandingPage = () => {
  const navigate = useNavigate();

  // Helper for smooth scrolling
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Mock "Watch Demo" action
  const handleWatchDemo = () => {
    scrollToSection('features');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white font-['Inter'] selection:bg-blue-500 selection:text-white overflow-x-hidden">
      
      {/* --- NAVBAR --- */}
      <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/5">
        <div className="text-2xl font-bold font-['Outfit'] tracking-tighter flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/20">U</div>
          Univent
        </div>
        
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
          <button onClick={() => scrollToSection('features')} className="hover:text-white transition-colors">Features</button>
          <button onClick={() => scrollToSection('campuses')} className="hover:text-white transition-colors">Partner Campuses</button>
          <button onClick={() => scrollToSection('pricing')} className="hover:text-white transition-colors">Pricing</button>
        </div>
        
        <div className="flex gap-4">
           {/* Student Login */}
           <button onClick={() => navigate('/login')} className="text-sm font-bold text-white hover:text-blue-400 transition-colors">
             Student Login
           </button>
           
           {/* College Admin */}
           <button onClick={() => navigate('/login')} className="px-5 py-2 bg-white text-black rounded-full text-sm font-bold hover:bg-slate-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)]">
             College Admin
           </button>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <div className="relative min-h-[85vh] flex flex-col items-center justify-center p-6 text-center">
        
        {/* Animated Background Gradients */}
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-600 rounded-full blur-[120px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-purple-600 rounded-full blur-[120px] opacity-20 animate-pulse delay-1000"></div>

        {/* Floating Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 cursor-default animate-fade-in">
          <span className="text-xs font-bold tracking-widest uppercase text-blue-400">Now Live</span>
          <span className="w-1 h-4 bg-white/10 mx-2"></span>
          <span className="text-xs text-slate-300">Used by 50+ Top Institutes</span>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold font-['Outfit'] leading-tight tracking-tighter mb-6 relative z-10">
          The Operating System <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">for Campus Fests.</span>
        </h1>

        <p className="max-w-2xl text-lg text-slate-400 mb-10 leading-relaxed">
          One platform to manage Hackathons, Cult Fests, and Concerts. 
          <br/> Seamless registration for students. Powerful analytics for Deans.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 relative z-10">
          <button 
            onClick={() => navigate('/login')}
            className="px-8 py-4 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-500 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-900/50 hover:scale-105 active:scale-95"
          >
            Launch Your Fest <ArrowRight size={20} />
          </button>
          
          <button 
            onClick={handleWatchDemo}
            className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-md flex items-center justify-center gap-2 hover:scale-105 active:scale-95"
          >
            <Play size={18} fill="currentColor" /> Watch Demo
          </button>
        </div>
      </div>

      {/* --- PARTNER CAMPUSES --- */}
      <div id="campuses" className="border-y border-white/5 bg-black/20 backdrop-blur-sm py-12 overflow-hidden">
        <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-600 mb-8">Powering Next-Gen Fests At</p>
        <div className="flex justify-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500 flex-wrap px-6">
           <span className="text-xl font-bold font-serif text-white cursor-default">IIT Bombay</span>
           <span className="text-xl font-bold font-serif text-white cursor-default">BITS Pilani</span>
           <span className="text-xl font-bold font-serif text-white cursor-default">IIT Delhi</span>
           <span className="text-xl font-bold font-serif text-white cursor-default">NIT Trichy</span>
           <span className="text-xl font-bold font-serif text-white cursor-default">Banasthali</span>
        </div>
      </div>

      {/* --- FEATURES SECTION --- */}
      <div id="features" className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
           <h2 className="text-3xl md:text-5xl font-bold font-['Outfit'] mb-4">Everything you need to run a Fest.</h2>
           <p className="text-slate-400">Replace 10 different tools with one Unified Dashboard.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="md:col-span-2 bg-zinc-900/50 border border-white/10 rounded-3xl p-8 relative overflow-hidden group hover:border-blue-500/50 transition-colors">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10">
               <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-6 text-white">
                 <Globe size={24} />
               </div>
               <h3 className="text-2xl font-bold font-['Outfit'] mb-2">Cross-Campus Passport</h3>
               <p className="text-slate-400 max-w-md">
                 Students create one profile and use it to register for fests across IITs, NITs, and other partner colleges. One ID, infinite possibilities.
               </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-zinc-900/50 border border-white/10 rounded-3xl p-8 relative overflow-hidden group hover:border-emerald-500/50 transition-colors">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center mb-6 text-black">
               <Shield size={24} />
            </div>
            <h3 className="text-xl font-bold font-['Outfit'] mb-2">Secure Entry</h3>
            <p className="text-slate-400 text-sm">Dynamic QR codes that change every 30s to prevent ticket fraud.</p>
          </div>

          {/* Card 3 */}
          <div className="bg-zinc-900/50 border border-white/10 rounded-3xl p-8 relative overflow-hidden group hover:border-amber-500/50 transition-colors">
             <div className="absolute inset-0 bg-gradient-to-br from-amber-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
             <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center mb-6 text-black">
               <Zap size={24} />
            </div>
            <h3 className="text-xl font-bold font-['Outfit'] mb-2">Smart Workflows</h3>
            <p className="text-slate-400 text-sm">Automated emails for audition results, slot booking, and certificate generation.</p>
          </div>

          {/* Card 4 */}
          <div className="md:col-span-2 bg-zinc-900/50 border border-white/10 rounded-3xl p-8 relative overflow-hidden group">
             <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                   <h3 className="text-2xl font-bold font-['Outfit'] mb-4">Real-Time Dean's Dashboard</h3>
                   <ul className="space-y-3">
                     {['Live Footfall Tracking', 'Budget vs. Spend Analysis', 'Sponsor ROI Reports'].map(item => (
                       <li key={item} className="flex items-center gap-3 text-slate-400 text-sm">
                         <CheckCircle size={16} className="text-blue-500" /> {item}
                       </li>
                     ))}
                   </ul>
                </div>
                {/* Mock Graph Visual */}
                <div className="flex-1 w-full h-32 bg-slate-800/50 rounded-xl border border-white/5 flex items-end justify-between px-4 pb-0 overflow-hidden relative">
                   {[40, 70, 50, 90, 60, 80].map((h, i) => (
                      <div key={i} className="w-8 bg-gradient-to-t from-blue-600 to-purple-600 opacity-80 rounded-t-sm" style={{height: `${h}%`}}></div>
                   ))}
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* --- PRICING SECTION --- */}
      <div id="pricing" className="bg-slate-900 py-24 border-t border-white/5">
         <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold font-['Outfit'] mb-4">Transparent Pricing.</h2>
              <p className="text-slate-400">Choose the plan that fits your campus size.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {/* Plan 1 */}
               <div className="p-8 rounded-3xl border border-white/10 bg-black/20 hover:border-white/20 transition-all">
                  <h3 className="text-xl font-bold text-slate-300">Starter</h3>
                  <div className="text-4xl font-bold my-4 font-['Outfit']">Free</div>
                  <p className="text-sm text-slate-500 mb-6">Perfect for single societies.</p>
                  <ul className="space-y-3 mb-8 text-sm text-slate-400">
                     <li className="flex gap-2"><CheckCircle size={16}/> 1 Active Event</li>
                     <li className="flex gap-2"><CheckCircle size={16}/> 500 Registrations</li>
                     <li className="flex gap-2"><CheckCircle size={16}/> Basic Form Builder</li>
                  </ul>
                  <button className="w-full py-3 rounded-xl border border-white/20 hover:bg-white hover:text-black transition-colors font-bold text-sm">Get Started</button>
               </div>
               
               {/* Plan 2 - Popular */}
               <div className="p-8 rounded-3xl border border-blue-500/50 bg-blue-900/10 relative transform md:-translate-y-4">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">Most Popular</div>
                  <h3 className="text-xl font-bold text-white">Campus Pro</h3>
                  <div className="text-4xl font-bold my-4 font-['Outfit']">₹15k<span className="text-lg text-slate-500 font-normal">/fest</span></div>
                  <p className="text-sm text-blue-200 mb-6">For major college fests.</p>
                  <ul className="space-y-3 mb-8 text-sm text-slate-300">
                     <li className="flex gap-2"><CheckCircle size={16} className="text-blue-400"/> Unlimited Events</li>
                     <li className="flex gap-2"><CheckCircle size={16} className="text-blue-400"/> Sponsor CRM</li>
                     <li className="flex gap-2"><CheckCircle size={16} className="text-blue-400"/> Custom Branding</li>
                  </ul>
                  <button className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 transition-colors font-bold text-sm text-white shadow-lg shadow-blue-900/50">Contact Sales</button>
               </div>

               {/* Plan 3 */}
               <div className="p-8 rounded-3xl border border-white/10 bg-black/20 hover:border-white/20 transition-all">
                  <h3 className="text-xl font-bold text-slate-300">University</h3>
                  <div className="text-4xl font-bold my-4 font-['Outfit']">Custom</div>
                  <p className="text-sm text-slate-500 mb-6">Full ecosystem deployment.</p>
                  <ul className="space-y-3 mb-8 text-sm text-slate-400">
                     <li className="flex gap-2"><CheckCircle size={16}/> White-labeled App</li>
                     <li className="flex gap-2"><CheckCircle size={16}/> Dedicated Server</li>
                     <li className="flex gap-2"><CheckCircle size={16}/> 24/7 On-site Support</li>
                  </ul>
                  <button className="w-full py-3 rounded-xl border border-white/20 hover:bg-white hover:text-black transition-colors font-bold text-sm">Request Demo</button>
               </div>
            </div>
         </div>
      </div>

      {/* --- FOOTER --- */}
      <footer className="border-t border-white/10 bg-black py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
           <div className="text-slate-500 text-sm">
             © 2026 Univent Platforms Inc.
           </div>
           
           <div className="text-white font-['Outfit'] font-bold text-lg">
             Designed by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Anukriti Dixit</span>
           </div>
           
           <div className="flex gap-6 text-slate-500 text-sm">
             <button className="hover:text-white transition-colors">Privacy</button>
             <button className="hover:text-white transition-colors">Terms</button>
             <button className="hover:text-white transition-colors">Contact</button>
           </div>
        </div>
      </footer>

    </div>
  );
};

export default LandingPage;