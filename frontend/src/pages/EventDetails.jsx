import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, MapPin, Users, Share2, Info } from 'lucide-react';
import { EVENTS } from '../data/mockData';
import { THEMES } from '../utils/themeConfig';

const EventDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const event = EVENTS.find(e => e.id === parseInt(id));

  if (!event) return <div>Event not found</div>;

  const theme = THEMES[event.theme] || THEMES.default;

  return (
    <div className={`min-h-screen ${theme.bg} ${theme.font} relative pb-28 animate-fade-in`}>
      
      {/* Immersive Header Image Area */}
      <div className="relative h-72 w-full overflow-hidden">
        <div className={`absolute inset-0 ${theme.accent} opacity-20`}></div>
        {/* Abstract Shapes for visual interest */}
        <div className={`absolute -bottom-24 -right-24 w-64 h-64 rounded-full ${theme.accent} blur-3xl opacity-40`}></div>
        <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/30 to-transparent`}></div>

        {/* Floating Nav */}
        <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-center z-20">
          <button 
            onClick={() => navigate(-1)} 
            className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-all"
          >
            <ArrowLeft size={20} />
          </button>
          <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-all">
            <Share2 size={18} />
          </button>
        </div>

        {/* Event Title in Header */}
        <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent">
           <span className="px-2 py-1 bg-white/20 backdrop-blur-md border border-white/10 rounded text-[10px] font-bold text-white uppercase tracking-wider mb-2 inline-block">
             {event.category}
           </span>
           <h1 className="text-3xl font-extrabold text-white font-['Outfit'] leading-tight shadow-sm">
             {event.title}
           </h1>
        </div>
      </div>

      <div className="p-6 max-w-3xl mx-auto -mt-4 relative z-10 bg-inherit rounded-t-3xl">
        
        {/* Quick Stats Row */}
        <div className="flex gap-4 overflow-x-auto pb-4 mb-6 scrollbar-hide">
           <Badge icon={<Calendar size={16}/>} label={event.date} theme={theme} />
           <Badge icon={<Clock size={16}/>} label={event.time} theme={theme} />
           <Badge icon={<Users size={16}/>} label="Team: 1-4" theme={theme} />
        </div>

        {/* Content Body */}
        <div className="space-y-8">
          
          <div className={`p-4 rounded-2xl border ${theme.card} bg-opacity-50 flex items-start gap-4`}>
             <div className={`p-3 rounded-full ${theme.accent} text-white shrink-0`}>
                <MapPin size={20} />
             </div>
             <div>
                <p className={`text-xs uppercase font-bold opacity-50 ${theme.text} mb-1`}>Venue</p>
                <p className={`font-bold ${theme.text} text-lg`}>{event.venue}</p>
                <p className={`text-xs opacity-60 ${theme.text}`}>Bansthali Vidyapith Campus</p>
             </div>
          </div>

          <div>
             <h3 className={`text-lg font-bold font-['Outfit'] mb-3 flex items-center gap-2 ${theme.text}`}>
               <Info size={18} className="opacity-50"/> About Event
             </h3>
             <p className={`text-sm leading-7 opacity-80 ${theme.text}`}>
               {event.description} <br/><br/>
               Join us for an immersive experience where creativity meets technology. 
               Whether you are a beginner or a pro, this event offers something for everyone.
             </p>
          </div>

          {event.is_audition && (
            <div className="p-4 bg-amber-50 border border-amber-100 rounded-xl flex gap-3">
              <span className="text-2xl">🎭</span>
              <div>
                <h4 className="font-bold text-amber-900 text-sm">Audition Required</h4>
                <p className="text-amber-700 text-xs leading-relaxed">
                  This is a shortlisted event. You must clear the preliminary audition round to participate in the finals.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Senior Level Sticky Action Bar (Glassmorphism) */}
      <div className={`fixed bottom-6 left-6 right-6 max-w-3xl mx-auto p-2 rounded-2xl border bg-white/80 backdrop-blur-xl shadow-2xl flex items-center justify-between gap-4 z-50 ${theme.card}`}>
        <div className="pl-4">
          <p className={`text-xs font-bold opacity-50 uppercase ${theme.text}`}>Status</p>
          <p className={`text-sm font-bold ${event.status === 'OPEN' ? 'text-green-600' : 'text-red-500'}`}>
            {event.status === 'OPEN' ? 'Registrations Open' : 'Closed'}
          </p>
        </div>
        <button 
          className={`px-8 py-3 rounded-xl font-bold text-white shadow-lg transition-transform active:scale-95 ${theme.accent}`}
          disabled={event.status === 'CLOSED'}
        >
          {event.status === 'CLOSED' ? 'Closed' : 'Register Now'}
        </button>
      </div>

    </div>
  );
};

const Badge = ({ icon, label, theme }) => (
  <div className={`flex items-center gap-2 px-4 py-2 rounded-full border ${theme.card} whitespace-nowrap`}>
     <span className={`opacity-70 ${theme.text}`}>{icon}</span>
     <span className={`text-sm font-bold ${theme.text}`}>{label}</span>
  </div>
);

export default EventDetail;