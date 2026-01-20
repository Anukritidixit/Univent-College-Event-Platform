// src/utils/themeConfig.js

// NOTE: Do NOT import anything here. This file defines the themes.

export const THEMES = {
  // 1. "Corporate Clean" - Professional, Trustworthy, Airy
  default: {
    bg: "bg-slate-50",
    text: "text-slate-800",
    accent: "bg-indigo-600",
    card: "bg-white border-slate-200 shadow-sm",
    font: "font-sans",
    status_open: "bg-emerald-100 text-emerald-700 border-emerald-200",
    status_closed: "bg-slate-100 text-slate-500 border-slate-200"
  },

  // 2. "Midnight Pro" - Modern, Sleek, Reduces Eye Strain
  dark: {
    bg: "bg-slate-950",
    text: "text-slate-200",
    accent: "bg-blue-500",
    card: "bg-slate-900 border-slate-800 shadow-lg",
    font: "font-sans",
    status_open: "bg-blue-900/30 text-blue-300 border-blue-800",
    status_closed: "bg-slate-800 text-slate-500 border-slate-700"
  },

  // 3. "Cyberpunk" - High Energy, futuristic, Bold
  tech: {
    bg: "bg-zinc-950",
    text: "text-green-400",
    accent: "bg-green-600",
    card: "bg-zinc-900 border-green-900/50 shadow-[0_0_15px_rgba(34,197,94,0.1)]",
    font: "font-mono",
    status_open: "bg-green-900/20 text-green-400 border-green-500/30",
    status_closed: "bg-zinc-800 text-zinc-500 border-zinc-700"
  },

  // 4. "Royal Elegance" - Sophisticated, Warm, Cultural
  classical: {
    bg: "bg-[#fffbf0]",
    text: "text-[#4a3b32]",
    accent: "bg-[#c2410c]",
    card: "bg-white border-orange-100 shadow-orange-100/50",
    font: "font-serif",
    status_open: "bg-orange-100 text-orange-800 border-orange-200",
    status_closed: "bg-stone-200 text-stone-500 border-stone-300"
  },

  // 5. "Electric Vibe" - Exciting, Loud, Youthful
  party: {
    bg: "bg-purple-950",
    text: "text-fuchsia-100",
    accent: "bg-fuchsia-600",
    card: "bg-purple-900/50 border-fuchsia-500/30 backdrop-blur-md",
    font: "font-sans",
    status_open: "bg-fuchsia-500 text-white shadow-lg shadow-fuchsia-500/20",
    status_closed: "bg-purple-900 text-purple-400 border-purple-800"
  }
};