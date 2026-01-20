import React from 'react';
import { ArrowLeft, Calendar, MapPin, Download, Share2, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MY_TICKETS = [
  {
    id: 1,
    event: "TechnoSurge 2026",
    category: "Hackathon",
    date: "15 Mar, 2026",
    time: "09:00 AM",
    venue: "Main Auditorium",
    status: "CONFIRMED",
    bg_gradient: "from-blue-600 to-indigo-900",
    qr_code: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Ticket001"
  },
  {
    id: 2,
    event: "Voice of Banasthali",
    category: "Cultural",
    date: "16 Mar, 2026",
    time: "02:00 PM",
    venue: "Amphitheatre",
    status: "WAITLIST",
    bg_gradient: "from-orange-500 to-rose-900",
    qr_code: null
  }
];

const MyRegistrations = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 p-6 pb-24 font-['Inter']">
      <header className="flex items-center justify-between mb-8 max-w-4xl mx-auto">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigate('/student/home')}
            className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:shadow-lg transition-all"
          >
            <ArrowLeft size={20} />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-slate-900 font-['Outfit']">My Wallet</h1>
            <p className="text-sm text-slate-500">Your digital passes</p>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto space-y-8">
        {MY_TICKETS.map((ticket) => (
          <TicketCard key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
};

const TicketCard = ({ ticket }) => {
  // QA FIX: Check confirmation status
  const isConfirmed = ticket.status === 'CONFIRMED';

  return (
    <div className="ticket-container group perspective-1000">
      <div className={`ticket-card relative w-full h-auto md:h-64 bg-white rounded-3xl shadow-xl flex flex-col md:flex-row overflow-hidden border border-slate-100`}>
        
        {/* LEFT: Art Side */}
        <div className={`w-full md:w-[65%] relative p-8 flex flex-col justify-between text-white overflow-hidden`}>
           <div className={`absolute inset-0 bg-gradient-to-br ${ticket.bg_gradient}`}></div>
           <div className="absolute inset-0 holo-overlay opacity-30"></div>
           
           <div className="relative z-10">
             <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/10 text-[10px] font-bold uppercase tracking-wider">
               {ticket.category}
             </span>
             <h2 className="text-3xl font-extrabold mt-4 font-['Outfit'] leading-tight">{ticket.event}</h2>
           </div>

           <div className="relative z-10 flex gap-6 text-sm font-medium opacity-90">
              <div className="flex items-center gap-2"><Calendar size={16} /> {ticket.date}</div>
              <div className="flex items-center gap-2"><MapPin size={16} /> {ticket.venue}</div>
           </div>
        </div>

        <div className="hidden md:block w-[1px] relative tear-line h-full border-dashed border-slate-300"></div>

        {/* RIGHT: Entry Side (QA FIXED) */}
        <div className="w-full md:w-[35%] bg-white p-6 flex flex-col items-center justify-center relative">
           
           <div className={`absolute top-4 right-4 px-2 py-0.5 rounded text-[10px] font-bold border ${
             isConfirmed ? 'bg-green-50 text-green-600 border-green-200' : 'bg-amber-50 text-amber-600 border-amber-200'
           }`}>
             {ticket.status}
           </div>

           <div className="text-center space-y-3">
             <div className={`p-3 bg-white border border-slate-200 rounded-xl shadow-inner inline-block relative group/qr ${isConfirmed ? 'cursor-pointer' : 'cursor-not-allowed grayscale opacity-50'}`}>
                {isConfirmed ? (
                  <>
                    <img src={ticket.qr_code} alt="Entry QR" className="w-32 h-32 opacity-90 group-hover/qr:scale-105 transition-transform" />
                    <p className="text-[10px] text-slate-400 mt-2 font-mono tracking-widest">SCAN FOR ENTRY</p>
                  </>
                ) : (
                  <div className="w-32 h-32 flex flex-col items-center justify-center bg-slate-50 rounded-lg text-slate-400 gap-2">
                    <Lock size={24} />
                    <span className="text-[10px] font-bold uppercase">Locked</span>
                  </div>
                )}
             </div>
             
             {/* QA FIX: Disabled buttons if not confirmed */}
             <div className={`flex gap-4 justify-center pt-2 ${!isConfirmed && 'pointer-events-none opacity-40'}`}>
               <ActionButton icon={<Download size={16} />} label="Save" />
               <ActionButton icon={<Share2 size={16} />} label="Share" />
             </div>
           </div>
        </div>

      </div>
    </div>
  );
};

const ActionButton = ({ icon, label }) => (
  <button className="flex flex-col items-center gap-1 text-slate-400 hover:text-blue-600 transition-colors group">
    <div className="p-2 rounded-full bg-slate-50 group-hover:bg-blue-50 transition-colors">
      {icon}
    </div>
    <span className="text-[10px] font-bold">{label}</span>
  </button>
);

export default MyRegistrations;