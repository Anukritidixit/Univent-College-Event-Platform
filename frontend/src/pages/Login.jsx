import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(''); // Clear any old errors

    try {
      // 1. Send Login Request
      const res = await axios.post('http://localhost:5000/api/users/login', {
        email,
        password,
      });

      // 2. Check if we got data back
      if (res.data) {
        // Save the token so the user stays logged in
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('userInfo', JSON.stringify(res.data)); // Save name/email too

        // 3. THE MAGIC SWITCH (Redirect logic)
        if (res.data.isAdmin) {
          console.log("👑 Admin Detected! Redirecting to Dashboard...");
          navigate('/admin/dashboard'); 
        } else {
          console.log("🎒 Student Detected! Redirecting to Home...");
          navigate('/student/home');
        }
      }
    } catch (err) {
      console.error("Login Error:", err);
      // Show a helpful error message on screen
      setError(
        err.response?.data?.message || 
        "Login failed. Is the Backend Server running?"
      );
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded shadow-md w-96">
        <h1 className="mb-6 text-2xl font-bold text-center text-blue-900">Login</h1>
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-4 text-sm">
            {error}
          </div>
        )}
        
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Email</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="anukriti@test.com"
              required 
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Password</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="password123"
              required 
            />
          </div>

          <button 
            type="submit" 
            className="w-full p-2 text-white bg-blue-900 rounded hover:bg-blue-800 transition-colors font-bold"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;