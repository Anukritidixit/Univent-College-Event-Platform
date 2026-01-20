import React from 'react';
import { Calendar, MapPin, ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { THEMES } from '../utils/themeConfig';

const EventCard = ({ event }) => {
  const navigate = useNavigate();

  // 1. Get the specific theme for this event (or fallback to default)
  // This makes the card's accent colors match the event's actual page!
  const theme = THEMES[event.theme] || THEMES.default;

  return (
    <div 
      onClick={() => navigate(`/event/${event.id}`)}
      className="group bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 cursor-pointer relative overflow-hidden"
    >
      {/* 2. Dynamic Hover Gradient based on the Event's Theme */}
      {/* If it's a 'party' event, this hover will be purple/pink. If 'tech', green. */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 ${theme.accent}`} />

      <div className="relative z-10">
        <div className="flex justify-between items-start mb-4">
          
          {/* 3. Dynamic Icon Box */}
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl shadow-sm border border-slate-100 overflow-hidden relative ${theme.bg}`}>
            {event.logo_url ? (
               <img 
                 src={event.logo_url} 
                 alt={`${event.title} logo`} 
                 className="w-full h-full object-cover" 
               />
            ) : (
               // If no logo, show a colored block based on theme
               <span className={`${theme.text}`}>⚡</span>
            )}
          </div>

          {/* Status Badge */}
          <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
            event.status === 'OPEN' ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' : 'bg-slate-100 text-slate-500'
          }`}>
            {event.status}
          </span>
        </div>

        <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors font-['Outfit'] truncate">
          {event.title}
        </h3>
        <p className="text-slate-500 text-xs mb-4 font-medium">{event.fest_name}</p>

        <div className="flex items-center gap-4 text-slate-400 text-xs font-medium border-t border-slate-50 pt-4">
          <div className="flex items-center gap-1.5">
            <Calendar size={14} />
            {event.date}
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin size={14} />
            <span className="truncate max-w-[80px]">{event.venue}</span>
          </div>
        </div>
        
        {/* Floating Action Icon */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
            <ArrowUpRight size={20} className="text-slate-400" />
        </div>
      </div>
    </div>
  );
};

export default EventCard;