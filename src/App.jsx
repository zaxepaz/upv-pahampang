import { useState } from 'react'
import './App.css'
import Header from "./components/Header";
import heroBanner from "./assets/hero_banner.png";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
  <div className="relative flex min-h-screen flex-col overflow-x-hidden">
      <Router>
        
        <Header />

        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<AdminDashboard />} />
        </Routes>
      </Router>
      
      
      {/* Live Ticker */}
      <div className="bg-forest-green text-white py-2 overflow-hidden whitespace-nowrap border-y border-white/10">
        <div className="flex items-center gap-12 px-6 animate-marquee">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-sm text-yellow-400">campaign</span>
            <span className="text-xs font-bold tracking-wide uppercase">LIVE UPDATES:</span>
          </div>
          
          <span className="text-sm font-medium">Basketball Finals: CAS vs CFOS starting at 3:00 PM (Upper Gym)</span>
          <span className="text-sm font-medium opacity-50">|</span>
          <span className="text-sm font-medium">Weather Advisory: Tennis matches moved to Indoor Courts due to light rain</span>
          <span className="text-sm font-medium opacity-50">|</span>
          <span className="text-sm font-medium">New Record: SOTECH breaks 4x100m relay record!</span>
          <span className="text-sm font-medium opacity-50">|</span>
          <span className="text-sm font-medium">Swimming results updated for 100m Freestyle</span>
      </div>
    </div>

      {/* Main */}
    <main className="flex-1 max-w-[1280px] mx-auto w-full p-6 space-y-8">
  
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-2">
            <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase">Pahampang 2026</span>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white leading-tight">Experience the Spirit <br/> of <span className="text-primary">Athleticism</span></h1>
            <p className="text-slate-600 dark:text-slate-400 text-lg max-w-xl">Join the roar of the crowd and track your favorite academic organizations. The official management platform for UP Visayas' biggest sports festival.</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 shadow-xl shadow-primary/30 transition-transform hover:-translate-y-1">
                                    View Today's Matches
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
            <button className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                                    Explore Brackets
            </button>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="aspect-video lg:aspect-square bg-slate-200 dark:bg-slate-800 rounded-3xl overflow-hidden shadow-2xl relative group">
            <img alt="Athletes competing on a track during a sports event" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Intense track and field competition with athletes in red and green uniforms" src={heroBanner}/>
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-40">
            
            </div>
            <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/90 dark:bg-slate-900/90 backdrop-blur rounded-2xl shadow-lg border border-white/20">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-primary uppercase tracking-widest">Ongoing Match</p>
                  <h3 className="text-lg font-bold">Men's Volleyball</h3>
                  <p className="text-sm text-slate-500">CAS (2) vs (1) SOTECH</p>
                </div>
                <div className="bg-red-500 animate-pulse w-3 h-3 rounded-full">
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <a className="group p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl hover:border-primary transition-all shadow-sm" href="#">
          <div className="bg-primary/10 text-primary w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
            <span className ="material-symbols-outlined">calendar_month</span>
          </div>
      
          <h3 className="font-bold text-lg mb-1">Schedules</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 leading-snug">Track every game across all campuses.</p>
        </a>

        <a className="group p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl hover:border-forest-green transition-all shadow-sm" href="#">
          <div className="bg-forest-green/10 text-forest-green w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:bg-forest-green group-hover:text-white transition-colors">
            <span className="material-symbols-outlined">account_tree</span>
          </div>
          <h3 className="font-bold text-lg mb-1">Brackets</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 leading-snug">Tournament progress and eliminations.</p>
        </a>
        <a className="group p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl hover:border-primary transition-all shadow-sm" href="#">
          <div className="bg-primary/10 text-primary w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
          <span className="material-symbols-outlined">scoreboard</span>
          </div>
          <h3 className="font-bold text-lg mb-1">Live Scores</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 leading-snug">Real-time updates from every court.</p>
        </a>
        <a className="group p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl hover:border-forest-green transition-all shadow-sm" href="#">
          <div className="bg-forest-green/10 text-forest-green w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:bg-forest-green group-hover:text-white transition-colors">
            <span className="material-symbols-outlined">photo_library</span>
          </div>
          <h3 className="font-bold text-lg mb-1">Gallery</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 leading-snug">Photos and highlights of the spirit.</p>
        </a>
      </section>
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between px-2">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">leaderboard</span>
              <h2 className="text-xl font-bold">Current Standings</h2>
            </div>
            <a className="text-sm font-semibold text-primary hover:underline" href="#">Full Leaderboard</a>
          </div>
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm">
            <table className="w-full text-left">
              <thead className="bg-slate-50 dark:bg-slate-800/50">
                <tr>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Rank</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Organization</th>
                  <th className="px-6 py-4 text-right text-xs font-bold text-slate-500 uppercase tracking-wider">Total Points</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-5 font-bold text-slate-400">01</td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-black text-[10px]">CAS</div>
                      <span className="font-bold">Arts and Sciences</span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-right font-black text-primary">145</td>
                </tr>

                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-5 font-bold text-slate-400">02</td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-forest-green/20 flex items-center justify-center text-forest-green font-black text-[10px]">SOTECH</div>
                        <span className="font-bold">School of Tech</span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-right font-black text-primary">128</td>
                </tr>

                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-5 font-bold text-slate-400">03</td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500 font-black text-[10px]">CFOS</div>
                      <span className="font-bold">Fisheries &amp; Ocean Sciences</span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-right font-black text-primary">95</td>
                </tr>

                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-5 font-bold text-slate-400">04</td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500 font-black text-[10px]">CM</div>
                      <span className="font-bold">Management</span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-right font-black text-primary">58</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      
        <div className="space-y-4">
          <div className="flex items-center justify-between px-2">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-forest-green">event_upcoming</span>
              <h2 className="text-xl font-bold">Upcoming</h2>
            </div>
          </div>
          <div className="space-y-4">
  
            <div className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <span className="bg-forest-green/10 text-forest-green text-[10px] font-bold px-2 py-0.5 rounded uppercase">Football</span>
                <span className="text-[10px] font-bold text-slate-400 uppercase">Today • 16:30</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <div className="flex-1 flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-primary mb-1 border-2 border-primary/20 flex items-center justify-center text-white text-[10px] font-bold">CAS</div>
                    <span className="text-xs font-bold truncate w-full text-center">CAS</span>
                  </div>
                  <div className="text-slate-300 font-black">VS</div>
                  <div className="flex-1 flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-blue-500 mb-1 border-2 border-blue-500/20 flex items-center justify-center text-white text-[10px] font-bold">CFOS</div>
                      <span className="text-xs font-bold truncate w-full text-center">CFOS</span>
                    </div>
                  </div>
              </div>
              
              <div className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-0.5 rounded uppercase">Badminton</span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Tomorrow • 08:00</span>
                </div>
              <div className="flex items-center justify-between gap-4">
                <div className="flex-1 flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-orange-500 mb-1 border-2 border-orange-500/20 flex items-center justify-center text-white text-[10px] font-bold">CM</div>
                  <span className="text-xs font-bold truncate w-full text-center">CM</span>
                </div>
                <div className="text-slate-300 font-black">VS</div>
                <div className="flex-1 flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-forest-green mb-1 border-2 border-forest-green/20 flex items-center justify-center text-white text-[10px] font-bold">SOT</div>
                    <span className="text-xs font-bold truncate w-full text-center">SOTECH</span>
                  </div>
              </div>
            </div>

            <div className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm group cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              <div className="flex items-center justify-center gap-2 text-slate-400 font-bold text-sm">
                <span>View Full Schedule</span>
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_right_alt</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer className="bg-slate-900 text-white mt-12 py-12">
      <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2 space-y-4">
          <div className="flex items-center gap-3">
            <div className="bg-primary p-1.5 rounded-lg text-white">
              <span className="material-symbols-outlined text-2xl">sports_score</span>
            </div>
            <h2 className="text-xl font-black tracking-tight">UPV PAHAMPANG</h2>
          </div>
          <p className="text-slate-400 max-w-sm text-sm">Official sports management portal of the University of the Philippines Visayas. Celebrating unity, sportsmanship, and academic excellence.</p>
        </div>
        <div className="space-y-4">
          <h4 className="font-bold text-sm uppercase tracking-widest text-primary">Quick Links</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li><a className="hover:text-white transition-colors" href="#">Event History</a></li>
            <li><a className="hover:text-white transition-colors" href="#">List of Sports</a></li>
            <li><a className="hover:text-white transition-colors" href="#">Medal Tally History</a></li>
            <li><a className="hover:text-white transition-colors" href="#">Pahampang Rules</a></li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="font-bold text-sm uppercase tracking-widest text-primary">Support</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a className="hover:text-white transition-colors" href="#">Contact Committee</a></li>
              <li><a className="hover:text-white transition-colors" href="#">Report Score Issue</a></li>
              <li><a className="hover:text-white transition-colors" href="#">Help Center</a></li>
              <li><a className="hover:text-white transition-colors" href="#">Terms of Service</a></li>
            </ul>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
        <p>© 2024 University of the Philippines Visayas. All Rights Reserved.</p>
        <div className="flex gap-6">
          <a className="hover:text-white transition-colors" href="#">Facebook</a>
          <a className="hover:text-white transition-colors" href="#">Twitter</a>
          <a className="hover:text-white transition-colors" href="#">Instagram</a>
        </div>
      </div>
    </footer>
  </div>
  );
}

export default App;