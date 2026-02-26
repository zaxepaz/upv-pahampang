import { useState } from 'react'
import './App.css'
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import AdminDashboard from './pages/AdminDashboard';
import AdminAnnouncements from './pages/AdminAnnouncements';
import Homepage from './pages/Homepage';
import Footer from './components/Footer';

function App() {
  return (
    
  <div className="relative flex min-h-screen flex-col overflow-x-hidden">
      <Router>
          <Routes>
            <Route path="/" element={
              <Homepage />
              } 
            />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<AdminDashboard />} />
            <Route path="/dashboard/announcements" element={<AdminAnnouncements />} />
          </Routes>
      </Router>

  </div>
  );
}

export default App;