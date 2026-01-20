import React, { useState } from 'react';
import { Search, Bell, SlidersHorizontal, Ticket } from 'lucide-react'; // Added Ticket
import { useNavigate } from 'react-router-dom';
import { EVENTS } from '../data/mockData';
import EventCard from '../components/EventCard';

const StudentHome = () => {
  const [filter, setFilter] = useState('All');
  const navigate = useNavigate();
  
  const categories = ['All', 'Technical', 'Cultural', 'Workshops'];
  const filteredEvents = filter === 'All' ? EVENTS : EVENTS.filter(e => e.category === filter);

  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      {/* Header */}
      <header className="bg-white sticky top-0 z-20 border-b border-slate-100 px-6 py-4 flex justify-between items-center glass">
        <div>
           <h1 className="text-xl font-bold font-['Outfit'] text-slate-900">Discover</h1>
           <p className="text-xs text-slate-400 font-medium">Banasthali Vidyapith</p>
        </div>
        <div 
          onClick={() => navigate('/student/registrations')}
          className="p-2 bg-slate-50 rounded-full hover:bg-slate-100 transition-colors cursor-pointer relative"
        >
          <Bell size={20} className="text-slate-600" />
          <span className="absolute top-1.5 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </div>
      </header>

      <main className="p-6 max-w-5xl mx-auto space-y-8 animate-fade-in">
        
        {/* Search Bar */}
        <div className="flex gap-3">
          <div className="flex-1 bg-white p-3 rounded-2xl border border-slate-200 flex items-center gap-3 shadow-sm focus-within:ring-2 focus-within:ring-blue-100 transition-all">
            <Search size={20} className="text-slate-400" />
            <input 
              placeholder="Find events, fests..." 
              className="flex-1 outline-none text-sm font-medium text-slate-700 placeholder:text-slate-400"
            />
          </div>
          <button className="p-3 bg-slate-900 text-white rounded-2xl shadow-lg shadow-slate-300 hover:bg-slate-800 transition-colors">
            <SlidersHorizontal size={20} />
          </button>
        </div>

        {/* Featured Section */}
        <section>
          <div className="flex justify-between items-end mb-4">
            <h2 className="text-lg font-bold font-['Outfit'] text-slate-900">Live Now 🔥</h2>
            <button className="text-blue-600 text-xs font-bold hover:underline">View All</button>
          </div>
          <div className="relative w-full h-48 rounded-3xl overflow-hidden shadow-xl shadow-blue-900/20 group cursor-pointer">
             <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Fest" />
             <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent p-6 flex flex-col justify-end">
                <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded w-fit mb-2">LIVE</span>
                <h3 className="text-2xl font-bold text-white font-['Outfit']">TechnoSurge 2026</h3>
                <p className="text-slate-300 text-xs">Main Auditorium • Ending in 2h</p>
             </div>
          </div>
        </section>

        {/* Category Tabs */}
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all ${
                filter === cat 
                ? 'bg-slate-900 text-white shadow-lg shadow-slate-200' 
                : 'bg-white text-slate-500 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Event Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        {/* FLOATING ACTION BUTTON (FAB) */}
        <button
          onClick={() => navigate('/student/registrations')}
          className="fixed bottom-6 right-6 bg-slate-900 text-white p-4 rounded-full shadow-2xl shadow-slate-400 hover:scale-110 active:scale-95 transition-all z-50 flex items-center gap-2 group"
        >
          <Ticket size={24} className="text-blue-400" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap font-bold">
            My Passes
          </span>
        </button>

      </main>
    </div>
  );
};

export default StudentHome;