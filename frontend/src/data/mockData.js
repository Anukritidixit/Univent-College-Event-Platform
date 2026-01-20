// src/data/mockData.js
export const EVENTS = [
  {
    id: 1,
    title: "CodeWarriors Hackathon",
    fest_name: "TechnoSurge 2026",
    date: "2026-03-15",
    time: "09:00 AM",
    venue: "Main Auditorium",
    category: "Technical",
    status: "OPEN", 
    is_audition: false,
    user_status: "REGISTERED", 
    description: "A 24-hour coding marathon to solve real-world problems. Teams of 1-4 allowed.",
    // NEW FIELDS FOR THEMES
    theme: "tech", // Options: tech, party, classical, dark, default
    logo_url: "https://cdn-icons-png.flaticon.com/512/2010/2010990.png"
  },
  {
    id: 2,
    title: "Voice of Banasthali",
    fest_name: "Cultural Fest",
    date: "2026-03-16",
    time: "02:00 PM",
    venue: "Amphitheatre",
    category: "Cultural",
    status: "OPEN",
    is_audition: true,
    user_status: null, 
    description: "Solo singing competition. Classical and Bollywood genres allowed.",
    // NEW FIELDS FOR THEMES
    theme: "classical",
    logo_url: "https://cdn-icons-png.flaticon.com/512/3075/3075908.png"
  },
  {
    id: 3,
    title: "RoboRace",
    fest_name: "TechnoSurge 2026",
    date: "2026-03-17",
    time: "10:00 AM",
    venue: "Sports Ground",
    category: "Technical",
    status: "CLOSED",
    is_audition: false,
    user_status: null,
    description: "Build a bot that can traverse the obstacle course in minimum time.",
    // NEW FIELDS FOR THEMES
    theme: "dark",
    logo_url: "https://cdn-icons-png.flaticon.com/512/1693/1693746.png"
  }
];