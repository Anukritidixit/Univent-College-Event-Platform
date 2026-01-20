import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, Calendar, ClipboardCheck, Edit, Trash2, LogOut, TrendingUp, Search, Bell, Mail } from 'lucide-react';
import { EVENTS } from '../data/mockData';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [eventsList, setEventsList] = useState(EVENTS);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [searchTerm, setSearchTerm] = useState('');

  // --- Handlers ---
  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) navigate('/login');
  };

  const handleDeleteEvent = (id) => {
    if (window.confirm("Delete this event? Action is permanent.")) {
      setEventsList(eventsList.filter(e => e.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex font-['Inter']">
      
      {/* SIDEBAR - Dark & Sleek */}
      <aside className="w-64 bg-slate-900 text-white hidden md:flex flex-col fixed h-full z-20">
        <div className="p-6 text-2xl font-bold font-['Outfit'] tracking-wide border-b border-slate-800 flex items-center gap-3">
           <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-sm shadow-lg shadow-blue-900/50">BV</div>
           Admin
        </div>
        
        <nav className="flex-1 mt-6 space-y-2 px-4">
          <SidebarItem icon={<TrendingUp size={20} />} label="Overview" active={activeTab === 'dashboard'} onClick={() => setActiveTab('dashboard')} />
          <SidebarItem icon={<Calendar size={20} />} label="Events" active={activeTab === 'events'} onClick={() => setActiveTab('events')} />
          <SidebarItem icon={<Users size={20} />} label="Coordinators" active={activeTab === 'leads'} onClick={() => setActiveTab('leads')} />
        </nav>

        <div className="p-4 border-t border-slate-800">
          <button onClick={() => navigate('/admin/create-event')} className="w-full bg-blue-600 hover:bg-blue-500 text-white p-3 rounded-xl flex items-center justify-center gap-2 transition-all font-bold shadow-lg shadow-blue-900/20 mb-4">
              <Edit size={18} /> New Event
          </button>
          <button onClick={handleLogout} className="w-full flex items-center gap-3 text-slate-400 hover:text-red-400 hover:bg-red-500/10 p-3 rounded-lg transition-colors text-sm font-medium">
            <LogOut size={18} /> Sign Out
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 md:ml-64 p-8 animate-fade-in">
        
        {/* TOP BAR */}
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 font-['Outfit']">
              {activeTab === 'dashboard' ? 'Command Center' : activeTab === 'events' ? 'Event Management' : 'Coordinators'}
            </h1>
            <p className="text-slate-500 text-sm">Welcome back, Coordinator.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 shadow-sm relative cursor-pointer hover:bg-slate-50">
                <Bell size={20} />
                <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
             </div>
             <div className="w-10 h-10 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-700 font-bold text-sm">
                AD
             </div>
          </div>
        </header>

        {/* --- VIEW: DASHBOARD (Updated with Quick Actions) --- */}
        {activeTab === 'dashboard' && (
          <div className="space-y-6">
             {/* 1. Stats Row */}
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               <StatCard icon={<Users />} label="Total Registrations" value="1,240" trend="+12%" color="bg-blue-50 text-blue-600" />
               <StatCard icon={<Calendar />} label="Active Events" value={eventsList.length} trend="+2 new" color="bg-purple-50 text-purple-600" />
               <StatCard icon={<ClipboardCheck />} label="Pending Approvals" value="18" trend="Urgent" color="bg-amber-50 text-amber-600" />
             </div>

             <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* Quick Actions Grid (Fills empty space) */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                   <div className="mb-4">
                     <h3 className="font-bold text-slate-800">Quick Actions</h3>
                     <p className="text-xs text-slate-400">Common tasks for today</p>
                   </div>
                   <div className="grid grid-cols-2 gap-3">
                      <button onClick={() => navigate('/admin/create-event')} className="p-4 bg-slate-50 hover:bg-blue-50 border border-slate-100 rounded-xl text-left transition-colors group">
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-2 group-hover:scale-110 transition-transform"><Edit size={16}/></div>
                        <span className="text-xs font-bold text-slate-600 block">Draft Event</span>
                      </button>
                      <button className="p-4 bg-slate-50 hover:bg-emerald-50 border border-slate-100 rounded-xl text-left transition-colors group">
                        <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600 mb-2 group-hover:scale-110 transition-transform"><Mail size={16}/></div>
                        <span className="text-xs font-bold text-slate-600 block">Email All</span>
                      </button>
                   </div>
                </div>

                {/* Recent Activity Feed */}
                <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
                   <h3 className="font-bold text-slate-800 mb-4">Live Activity</h3>
                   <div className="flex-1 overflow-y-auto space-y-4 pr-2 max-h-60">
                      <ActivityItem user="Anukriti D." action="registered for" target="Hackathon" time="2m ago" />
                      <ActivityItem user="Rahul S." action="created team" target="CodeX" time="15m ago" />
                      <ActivityItem user="System" action="server backup" target="Completed" time="1h ago" />
                      <ActivityItem user="Priya M." action="withdrew from" target="RoboWar" time="3h ago" />
                      <ActivityItem user="Admin" action="published" target="TechnoSurge" time="5h ago" />
                   </div>
                   <button className="w-full mt-4 py-2 text-xs font-bold text-slate-500 hover:text-blue-600 border border-slate-100 rounded-lg hover:bg-slate-50 transition-colors">
                     View All History
                   </button>
                </div>
             </div>
          </div>
        )}

        {/* --- VIEW: EVENTS LIST --- */}
        {activeTab === 'events' && (
          <div className="space-y-6">
            <div className="flex gap-4 mb-4">
               <div className="flex-1 relative">
                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                 <input 
                    type="text" 
                    placeholder="Search event name, venue..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                 />
               </div>
               <button className="bg-white px-4 border border-slate-200 rounded-xl text-slate-600 hover:bg-slate-50">
                 <TrendingUp size={18} />
               </button>
            </div>
            
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
               <table className="w-full text-left text-sm text-slate-600">
                 <thead className="bg-slate-50 text-slate-400 font-medium uppercase text-xs">
                   <tr>
                     <th className="p-5 font-bold tracking-wider">Event Name</th>
                     <th className="p-5 font-bold tracking-wider">Status</th>
                     <th className="p-5 font-bold tracking-wider">Venue</th>
                     <th className="p-5 font-bold tracking-wider text-right">Actions</th>
                   </tr>
                 </thead>
                 <tbody className="divide-y divide-slate-50">
                   {eventsList.filter(e => e.title.toLowerCase().includes(searchTerm.toLowerCase())).map((event) => (
                     <tr key={event.id} className="hover:bg-slate-50/80 transition-colors group">
                       <td className="p-5 font-bold text-slate-800">{event.title}</td>
                       <td className="p-5">
                          <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide border ${
                             event.status === 'OPEN' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 'bg-slate-100 text-slate-500 border-slate-200'
                          }`}>
                            {event.status}
                          </span>
                       </td>
                       <td className="p-5 text-slate-500">{event.venue}</td>
                       <td className="p-5 text-right">
                         <div className="flex justify-end gap-2 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                            <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"><Edit size={16}/></button>
                            <button onClick={() => handleDeleteEvent(event.id)} className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"><Trash2 size={16}/></button>
                         </div>
                       </td>
                     </tr>
                   ))}
                 </tbody>
               </table>
            </div>
          </div>
        )}

        {/* --- VIEW: LEADS --- */}
        {activeTab === 'leads' && (
          <div className="h-[60vh] flex flex-col items-center justify-center text-center p-8 bg-white rounded-2xl border border-slate-200 border-dashed">
             <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-4">
                <Users size={32} className="text-slate-300" />
             </div>
             <h3 className="text-lg font-bold text-slate-900">Coordinators Access</h3>
             <p className="text-slate-500 max-w-sm mt-2 mb-6">You need Super Admin privileges to manage student leads. Contact the IT Cell.</p>
             <button className="px-6 py-2 bg-slate-900 text-white rounded-lg text-sm font-bold hover:bg-slate-800 transition-colors">Request Access</button>
          </div>
        )}

      </main>
    </div>
  );
};

// --- SUB-COMPONENTS ---

const SidebarItem = ({ icon, label, active, onClick }) => (
  <button onClick={onClick} className={`w-full text-left p-3 rounded-xl flex items-center gap-3 transition-all font-medium text-sm ${active ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/20' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}>
    {icon} {label}
  </button>
);

const StatCard = ({ icon, label, value, trend, color }) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow cursor-default group">
    <div className="flex justify-between items-start mb-4">
       <div className={`p-3 rounded-xl ${color} group-hover:scale-110 transition-transform`}>{icon}</div>
       <span className="text-[10px] font-bold bg-slate-50 px-2 py-1 rounded-full text-slate-500">{trend}</span>
    </div>
    <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">{label}</p>
    <p className="text-3xl font-extrabold text-slate-900 mt-1 font-['Outfit']">{value}</p>
  </div>
);

const ActivityItem = ({ user, action, target, time }) => (
  <div className="flex gap-3 items-start text-sm">
     <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-500 shrink-0">
        {user.charAt(0)}
     </div>
     <div>
        <p className="text-slate-700 leading-tight">
           <span className="font-bold">{user}</span> {action} <span className="font-bold text-blue-600">{target}</span>
        </p>
        <p className="text-[10px] text-slate-400 mt-0.5">{time}</p>
     </div>
  </div>
);

export default AdminDashboard;