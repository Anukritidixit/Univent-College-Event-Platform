import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Import Pages
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import StudentHome from './pages/StudentHome';
import EventDetail from './pages/EventDetails';
import AdminDashboard from './pages/AdminDashboard';
import CreateEvent from './pages/CreateEvent'; 
import MyRegistrations from './pages/MyRegistrations';

// Import Organizer Modules
import OrganizerLayout from './layouts/OrganizerLayout';
import AuditionFlow from './pages/organizer/AuditionFlow';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        
        {/* Student Routes */}
        <Route path="/student/home" element={<StudentHome />} />
        <Route path="/student/registrations" element={<MyRegistrations />} />
        <Route path="/event/:id" element={<EventDetail />} />

        {/* Admin Routes */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/create-event" element={<CreateEvent />} /> 

        {/* --- NEW: ORGANIZER ROUTES (Nested Routing) --- */}
        <Route path="/organizer" element={<OrganizerLayout />}>
           {/* When going to /organizer, redirect to the audition flow */}
           <Route index element={<Navigate to="auditions" replace />} />
           <Route path="auditions" element={<AuditionFlow />} />
           
           {/* Placeholder for future routes */}
           <Route path="*" element={<div className="text-white p-10">Page under construction</div>} />
        </Route>

      </Routes>
    </Router>
  );
}

export default App;