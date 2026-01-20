import React, { useState } from 'react';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import { 
  LayoutDashboard, Users, GitMerge, Megaphone, Settings, 
  Bell, ChevronDown, LogOut, Sparkles 
} from 'lucide-react';

const OrganizerLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // Mock current event context
  const currentEvent = { name: "Voice of Banasthali", status: "Live" };

  const isActive = (path) => location.pathname.includes(path);

  return (
    <div className="min-h-screen bg-slate-950 flex font-['Inter'] text-slate-200 selection:bg-blue-500/30">
      
      {/* PREMIUM SIDEBAR */}
      <aside className="w-72 bg-slate-900/50 backdrop-blur-xl border-r border-white/5 flex flex-col fixed h-full z-20 font-['Outfit']">
        {/* Event Context Switcher (The "Crore-Winning" Detail) */}
        <div className="p-6 border-b border-white/5 mb-6">
           <div className="flex items-center gap-3 cursor-pointer group">
             <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
                <Sparkles size={20} className="text-white" />
             </div>
             <div className="flex-1 truncate">
                <h1 className="text-sm font-bold text-white truncate">{currentEvent.name}</h1>
                <p className="text-xs text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span> {currentEvent.status}
                </p>
             </div>
             <ChevronDown size={16} className="text-slate-500 group-hover:text-white transition-colors" />
           </div>
        </div>
        
        <nav className="flex-1 px-4 space-y-1">
          <NavItem icon={<LayoutDashboard size={20} />} label="Dashboard" active={isActive('/organizer/dashboard')} onClick={() => navigate('/organizer/dashboard')} />
          <NavItem icon={<Users size={20} />} label="Participants (CRM)" active={isActive('/organizer/participants')} onClick={() => navigate('/organizer/participants')} />
          
          {/* The Core Feature */}
          <div className="pt-6 pb-2 px-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Workflows</div>
          <NavItem icon={<GitMerge size={20} />} label="Audition Pipeline" active={isActive('/organizer/auditions')} onClick={() => navigate('/organizer/auditions')} highlight />
          <NavItem icon={<Megaphone size={20} />} label="Communication HQ" active={isActive('/organizer/comms')} onClick={() => navigate('/organizer/comms')} />
        </nav>

        <div className="p-4 border-t border-white/5">
          <NavItem icon={<Settings size={20} />} label="Event Settings" onClick={() => {}} />
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 md:ml-72 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950">
        {/* Top Header */}
        <header className="h-16 border-b border-white/5 bg-slate-900/50 backdrop-blur-md px-8 flex items-center justify-between sticky top-0 z-10">
           <h2 className="font-['Outfit'] text-xl font-bold text-white">
             {/* Dynamic Title based on route would go here */}
             Audition Pipeline
           </h2>
           
           <div className="flex items-center gap-6">
             <div className="relative cursor-pointer">
               <Bell size={20} className="text-slate-400 hover:text-white transition-colors" />
               <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
             </div>
             
             {/* Profile Dropdown */}
             <div className="relative">
                <button onClick={() => setIsProfileOpen(!isProfileOpen)} className="flex items-center gap-3 hover:bg-white/5 p-2 rounded-lg transition-all">
                  <img src="https://i.pravatar.cc/150?u=org" className="w-8 h-8 rounded-full ring-2 ring-blue-500/50" alt="Profile" />
                  <div className="text-left hidden sm:block">
                      <p className="text-sm font-bold text-white leading-tight">Rahul Sharma</p>
                      <p className="text-[10px] text-slate-400">Head Coordinator</p>
                  </div>
                  <ChevronDown size={16} className={`text-slate-500 transition-transform ${isProfileOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {/* Dropdown Menu */}
                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-slate-900 border border-white/10 rounded-xl shadow-2xl py-2 animate-fade-in z-50">
                     <button className="w-full text-left px-4 py-2 text-sm text-slate-300 hover:bg-white/5 hover:text-white flex items-center gap-2">
                       <Settings size={16} /> Profile Settings
                     </button>
                     <div className="my-1 border-t border-white/5"></div>
                     <button onClick={() => navigate('/login')} className="w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-red-500/10 flex items-center gap-2">
                       <LogOut size={16} /> Sign Out
                     </button>
                  </div>
                )}
             </div>
           </div>
        </header>

        {/* Render nested routes here */}
        <div className="p-8">
           <Outlet />
        </div>
      </main>
    </div>
  );
};

const NavItem = ({ icon, label, active, onClick, highlight }) => (
  <button 
    onClick={onClick} 
    className={`w-full text-left px-4 py-3 rounded-xl flex items-center gap-3 transition-all font-medium text-sm relative group overflow-hidden ${
      active 
        ? 'text-white bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.15)]' 
        : 'text-slate-400 hover:bg-white/5 hover:text-white'
    } ${highlight ? 'hover:border-blue-500/30' : ''}`}
  >
    {/* Subtle hover glow effect */}
    <div className={`absolute inset-0 bg-gradient-to-r from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${active ? 'hidden' : ''}`}></div>
    <span className="relative z-10">{icon}</span>
    <span className="relative z-10">{label}</span>
  </button>
);

export default OrganizerLayout;