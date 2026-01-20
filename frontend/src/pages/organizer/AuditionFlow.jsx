import React, { useState } from 'react';
// FIX: Added 'GitMerge' to this list
import { Search, Filter, MoreHorizontal, Clock, CheckCircle2, XCircle, Mail, Mic, GitMerge } from 'lucide-react';

// ... rest of the code remains exactly the same ...
// Mock Data reflecting different stages
const MOCK_PIPELINE = {
  registered: [
    { id: 1, name: "Aarav Patel", dept: "CS", status: "Pending Review", time: "2m ago" },
    { id: 2, name: "Sneha Gupta", dept: "EC", status: "Pending Review", time: "15m ago" },
    { id: 3, name: "Rohan Kumar", dept: "Mech", status: "Pending Review", time: "1h ago" },
  ],
  round1_audition: [
    { id: 4, name: "Priya Sharma", dept: "Des", slot: "Today, 2:00 PM", judge: "Pending" },
    { id: 5, name: "Vikram Singh", dept: "CS", slot: "Today, 2:15 PM", judge: "Pending" },
  ],
  shortlisted: [
    { id: 6, name: "Ananya Roy", dept: "CS", score: "9.2/10", judge: "Prof. Das" },
  ],
  rejected: [
     { id: 7, name: "Amit Verma", dept: "Civil", reason: "Low Score (4/10)" }
  ]
};

const AuditionFlow = () => {
  const [activeTab, setActiveTab] = useState('pipeline'); // pipeline | judge_view

  return (
    <div className="space-y-6">
      {/* Action Header */}
      <div className="flex justify-between items-end">
         <div className="flex bg-slate-900/50 p-1 rounded-xl border border-white/10 backdrop-blur-md relative z-10">
             <TabButton label="Pipeline View" active={activeTab === 'pipeline'} onClick={() => setActiveTab('pipeline')} icon={<GitMerge size={16}/>} />
             <TabButton label="Judge's Tablet Mode" active={activeTab === 'judge_view'} onClick={() => setActiveTab('judge_view')} icon={<Mic size={16}/>} />
         </div>

         <div className="flex gap-3">
             <div className="relative">
                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
                 <input type="text" placeholder="Search student..." className="pl-10 pr-4 py-2.5 bg-slate-900/50 border border-white/10 rounded-xl focus:border-blue-500/50 outline-none text-sm text-slate-300 w-64 transition-all" />
             </div>
             <button className="px-4 py-2.5 bg-slate-900/50 border border-white/10 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 transition-colors flex items-center gap-2 text-sm font-medium">
                 <Filter size={16} /> Filter
             </button>
             <button className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-sm font-bold transition-colors shadow-lg shadow-blue-600/20 flex items-center gap-2">
                 <Mail size={16} /> Send Bulk Emails
             </button>
         </div>
      </div>

      {/* KANBAN PIPELINE BOARD */}
      {activeTab === 'pipeline' && (
        <div className="grid grid-cols-4 gap-4 h-[calc(100vh-220px)]">
           <PipelineColumn title="Registered" count={MOCK_PIPELINE.registered.length} color="blue">
              {MOCK_PIPELINE.registered.map(p => <StudentCard key={p.id} data={p} type="registered" />)}
           </PipelineColumn>
           
           <PipelineColumn title="Round 1: Auditions" count={MOCK_PIPELINE.round1_audition.length} color="amber">
              {MOCK_PIPELINE.round1_audition.map(p => <StudentCard key={p.id} data={p} type="audition" />)}
           </PipelineColumn>
           
           <PipelineColumn title="Shortlisted (R2)" count={MOCK_PIPELINE.shortlisted.length} color="emerald">
              {MOCK_PIPELINE.shortlisted.map(p => <StudentCard key={p.id} data={p} type="shortlisted" />)}
           </PipelineColumn>

           <PipelineColumn title="Rejected" count={MOCK_PIPELINE.rejected.length} color="red">
              {MOCK_PIPELINE.rejected.map(p => <StudentCard key={p.id} data={p} type="rejected" />)}
           </PipelineColumn>
        </div>
      )}
      
      {activeTab === 'judge_view' && (
          <div className="h-96 flex items-center justify-center border-2 border-dashed border-white/10 rounded-3xl">
              <p className="text-slate-500">Judge's Tablet Interface coming in next module...</p>
          </div>
      )}

    </div>
  );
};

// --- SUB-COMPONENTS (The Building Blocks) ---

const TabButton = ({ label, active, onClick, icon }) => (
    <button onClick={onClick} className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${active ? 'bg-blue-600 text-white shadow-md' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}>
        {icon} {label}
    </button>
);

const PipelineColumn = ({ title, count, children, color }) => {
    const colorMap = {
        blue: { border: 'border-blue-500/30', bg: 'bg-blue-500/10', text: 'text-blue-400' },
        amber: { border: 'border-amber-500/30', bg: 'bg-amber-500/10', text: 'text-amber-400' },
        emerald: { border: 'border-emerald-500/30', bg: 'bg-emerald-500/10', text: 'text-emerald-400' },
        red: { border: 'border-red-500/30', bg: 'bg-red-500/10', text: 'text-red-400' },
    };
    const theme = colorMap[color];

    return (
        <div className="flex flex-col h-full">
            <div className={`flex items-center justify-between px-4 py-3 mb-4 rounded-xl border ${theme.border} ${theme.bg} backdrop-blur-md`}>
                <h3 className={`text-sm font-bold ${theme.text} font-['Outfit'] tracking-wide`}>{title}</h3>
                <span className="px-2 py-0.5 bg-slate-900/50 rounded-md text-xs font-bold text-slate-300">{count}</span>
            </div>
            <div className="flex-1 overflow-y-auto space-y-3 scrollbar-hide pb-4">
                {children}
            </div>
        </div>
    );
};

const StudentCard = ({ data, type }) => (
    <div className="bg-slate-900/80 border border-white/5 p-4 rounded-2xl shadow-sm hover:border-blue-500/30 hover:shadow-[0_0_15px_rgba(59,130,246,0.1)] transition-all cursor-grab group relative overflow-hidden">
        {/* Hover Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
        
        <div className="flex justify-between items-start mb-3 relative z-10">
            <div>
                <h4 className="font-bold text-white">{data.name}</h4>
                <p className="text-xs text-slate-400">{data.dept} Dept.</p>
            </div>
            <button className="text-slate-500 hover:text-white transition-colors"><MoreHorizontal size={16}/></button>
        </div>

        {/* Dynamic Footer based on Stage */}
        <div className="pt-3 border-t border-white/5 relative z-10">
            {type === 'registered' && (
                 <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500 flex items-center gap-1"><Clock size={12}/> {data.time}</span>
                    <span className="text-blue-400 bg-blue-400/10 px-2 py-0.5 rounded-full">{data.status}</span>
                 </div>
            )}
            {type === 'audition' && (
                 <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs text-amber-400 bg-amber-400/10 p-2 rounded-lg">
                        <Mic size={14} /> <span>Slot: <b>{data.slot}</b></span>
                    </div>
                    <div className="flex gap-2 mt-2">
                        <button className="flex-1 py-1.5 bg-emerald-600/20 text-emerald-400 border border-emerald-600/30 rounded-lg text-xs font-bold hover:bg-emerald-600 hover:text-white transition-all">Select</button>
                        <button className="flex-1 py-1.5 bg-red-600/20 text-red-400 border border-red-600/30 rounded-lg text-xs font-bold hover:bg-red-600 hover:text-white transition-all">Reject</button>
                    </div>
                 </div>
            )}
            {type === 'shortlisted' && (
                 <div className="flex items-center justify-between text-xs bg-emerald-500/10 p-2 rounded-lg border border-emerald-500/20">
                    <span className="text-emerald-400 flex items-center gap-1"><CheckCircle2 size={14}/> Score: <b>{data.score}</b></span>
                    <span className="text-slate-400">by {data.judge}</span>
                 </div>
            )}
             {type === 'rejected' && (
                 <div className="flex items-center gap-2 text-xs text-red-400 bg-red-400/10 p-2 rounded-lg border border-red-500/20">
                    <XCircle size={14} /> Reason: {data.reason}
                 </div>
            )}
        </div>
    </div>
);

export default AuditionFlow;