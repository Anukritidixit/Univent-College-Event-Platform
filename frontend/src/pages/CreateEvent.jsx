import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, MapPin, Smartphone, CheckCircle } from 'lucide-react';
import { THEMES } from '../utils/themeConfig';

const CreateEvent = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    fest: 'TechnoSurge 2026',
    date: '',
    venue: '',
    description: '',
    theme: 'default' 
  });

  // Get Today's Date in YYYY-MM-DD format for validation
  const today = new Date().toISOString().split('T')[0];

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const activeTheme = THEMES[formData.theme] || THEMES.default;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row font-['Inter']">
      
      {/* LEFT PANEL */}
      <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto h-screen bg-white border-r border-slate-200">
        <div className="flex items-center gap-4 mb-10">
          <button onClick={() => navigate(-1)} className="p-3 hover:bg-slate-50 rounded-full text-slate-500 transition-colors border border-transparent hover:border-slate-200">
            <ArrowLeft size={24} />
          </button>
          <div>
            <h1 className="text-3xl font-bold text-slate-900 font-['Outfit']">Create Event</h1>
            <p className="text-slate-500 mt-1">Design and publish your event instantly.</p>
          </div>
        </div>

        <div className="space-y-8 max-w-lg mx-auto md:mx-0">
          <div className="group">
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Event Title</label>
            <input 
              name="title" 
              value={formData.title} 
              onChange={handleChange}
              placeholder="e.g. Hackathon 2026" 
              className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all font-medium text-lg"
            />
          </div>

          <div className="grid grid-cols-2 gap-6">
             <div className="group">
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Date</label>
                <input 
                  name="date" 
                  type="date" 
                  min={today}
                  onChange={handleChange} 
                  className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all font-medium text-slate-700" 
                />
             </div>
             <div className="group">
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Venue</label>
                <input name="venue" onChange={handleChange} placeholder="Auditorium" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all font-medium" />
             </div>
          </div>

          <div>
            <div className="flex justify-between items-end mb-4">
               <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider">Select UI Theme</label>
               <span className="text-xs text-blue-600 font-medium bg-blue-50 px-2 py-1 rounded">Live Preview →</span>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              {Object.keys(THEMES).map((key) => {
                const t = THEMES[key];
                const isSelected = formData.theme === key;
                return (
                  <button
                    key={key}
                    onClick={() => setFormData({...formData, theme: key})}
                    className={`relative p-1 rounded-2xl border-2 transition-all duration-300 group overflow-hidden ${
                      isSelected 
                        ? 'border-blue-600 shadow-xl shadow-blue-100 scale-105 bg-white' 
                        : 'border-transparent bg-slate-50 hover:bg-slate-100'
                    }`}
                  >
                    <div className={`h-16 w-full rounded-xl mb-2 ${t.bg} border border-black/5 shadow-inner relative flex items-center justify-center overflow-hidden`}>
                       <div className={`w-8 h-8 rounded-full ${t.accent} opacity-80 blur-md absolute -bottom-2 -right-2`}></div>
                       <div className={`w-full h-1/2 ${t.card} absolute bottom-0 opacity-50`}></div>
                       {isSelected && <CheckCircle size={20} className="text-white relative z-10 drop-shadow-md" />}
                    </div>
                    <span className={`text-xs font-bold capitalize block text-center pb-2 ${isSelected ? 'text-blue-700' : 'text-slate-400'}`}>
                      {key}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          <div className="group">
             <div className="flex justify-between">
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Description</label>
                <span className={`text-xs font-bold ${formData.description.length > 450 ? 'text-red-500' : 'text-slate-400'}`}>
                  {formData.description.length}/500
                </span>
             </div>
             <textarea 
               name="description" 
               maxLength={500}
               onChange={handleChange} 
               rows="4" 
               className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all font-medium resize-none" 
               placeholder="Write something engaging..."
             ></textarea>
          </div>

          <button onClick={() => alert("Event Created!")} className="w-full bg-slate-900 text-white font-bold py-5 rounded-2xl hover:bg-slate-800 hover:shadow-2xl hover:shadow-slate-400/50 transition-all active:scale-[0.99] flex items-center justify-center gap-3 text-lg">
            Publish Event
          </button>
        </div>
      </div>

      {/* RIGHT PANEL: Live Mobile Preview */}
      <div className="hidden md:flex w-1/2 bg-slate-100 items-center justify-center p-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full blur-[100px] opacity-50 mix-blend-multiply"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200 rounded-full blur-[100px] opacity-50 mix-blend-multiply"></div>

        <div className="relative z-10 flex flex-col items-center">
            <div className="mb-6 flex items-center gap-2 text-slate-400 font-medium uppercase tracking-widest text-xs">
                <Smartphone size={16} /> Live Student View
            </div>
            
            <div className={`w-[360px] h-[720px] rounded-[3rem] border-[8px] border-slate-900 bg-slate-900 overflow-hidden shadow-2xl relative ring-1 ring-white/20`}>
              <div className={`h-full w-full overflow-y-auto ${activeTheme.bg} ${activeTheme.text} rounded-[2.5rem]`}>
                
                <div className={`p-6 border-b flex items-center gap-4 ${activeTheme.card} pt-12`}>
                   <div className="w-10 h-10 rounded-full bg-slate-200/50 animate-pulse"></div>
                   <span className="font-bold truncate text-lg opacity-90">{formData.title || "Your Event Title"}</span>
                </div>

                <div className="p-6 space-y-6">
                   <div className={`w-full h-48 rounded-2xl ${activeTheme.accent} shadow-lg opacity-90 relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                   </div>

                   <div className="grid grid-cols-2 gap-3">
                      <div className={`p-4 rounded-2xl border ${activeTheme.card} opacity-80`}>
                        <Calendar size={20} className="mb-2 opacity-70"/>
                        <div className="text-xs font-bold">{formData.date || "Date"}</div>
                      </div>
                      <div className={`p-4 rounded-2xl border ${activeTheme.card} opacity-80`}>
                        <MapPin size={20} className="mb-2 opacity-70"/>
                        <div className="text-xs font-bold truncate">{formData.venue || "Venue"}</div>
                      </div>
                   </div>

                   <div>
                     <h3 className="font-bold mb-3 opacity-90 text-lg">About</h3>
                     <p className="text-sm opacity-70 leading-relaxed break-words">
                       {formData.description || "The event description will appear here. As you type in the left panel, this preview updates instantly to show you exactly what students will see."}
                     </p>
                   </div>
                </div>

                <div className={`absolute bottom-0 w-full p-6 pb-8 border-t ${activeTheme.card} backdrop-blur-md`}>
                   <div className={`w-full py-4 rounded-xl text-center font-bold text-white shadow-lg ${activeTheme.accent}`}>
                     Register Now
                   </div>
                </div>

              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEvent;