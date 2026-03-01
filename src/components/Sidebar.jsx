import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";


export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const returnToDashboard = () => {
    navigate("/dashboard"); 
  } 
  const announcementsPage = () => {
    navigate("/dashboard/announcements"); 
  }

  const [active, setActive] = useState("Dashboard"); 

  const user = JSON.parse(localStorage.getItem("adminUser"));
  const fullName = user?.full_name || "Admin";
  
  const links = [
    { name: "Dashboard", icon: "grid_view", path: "/dashboard" },
    { name: "Announcements", icon: "campaign", path: "/dashboard/announcements" },
    { name: "Live Scores", icon: "scoreboard", path: "#" },
    { name: "Brackets", icon: "account_tree", path: "#" },
    { name: "Sponsors", icon: "handshake", path: "#" },
    { name: "Users", icon: "group", path: "#" },
  ];

  const activePath = location.pathname;

  return (
    <aside className="w-72 bg-white border-r border-slate-200 h-screen sticky top-0 hidden lg:flex flex-col p-6">
      
      <div className="flex items-center gap-3 text-primary mb-10 px-2">
        <div className="size-10 bg-primary rounded-xl flex items-center justify-center text-white">
          <span className="material-symbols-outlined text-2xl">dashboard</span>
        </div>
        <div className="flex flex-col">
          <h2 className="text-slate-900 text-lg font-bold leading-none tracking-tight">Pahampang</h2>
          <span className="text-[10px] uppercase tracking-widest font-semibold opacity-70">Admin Console</span>
        </div>
      </div>
      
      <nav className="flex-1 space-y-2">
        <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 px-4 mb-2">Main Menu</p>

        {links.map((link) => (
          <a
            key={link.name}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              navigate(link.path); 
            }}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all w-full
              ${activePath === link.path
                ? "bg-primary text-white shadow-lg shadow-primary/20 font-semibold"
                : "text-slate-600 hover:bg-primary/5 hover:text-primary font-medium"
            }`}
          >
            <span className="material-symbols-outlined">{link.icon}</span>
            {link.name}
          </a>
        ))}

        <div className="pt-8">
          <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 px-4 mb-2">Settings</p>
          <a class="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-primary/5 hover:text-primary rounded-xl transition-all font-medium" href="#">
                    <span class="material-symbols-outlined">settings</span>
                    System Config
                </a>
                <a class="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-primary/5 hover:text-primary rounded-xl transition-all font-medium" href="#">
                    <span class="material-symbols-outlined">security</span>
                    Logs & Security
                </a>
        </div>
      </nav>

      <div className="mt-auto border-t border-slate-100 pt-6">
        <div className="flex items-center gap-3 px-2">
          <div className="size-10 rounded-full overflow-hidden bg-slate-100 border border-slate-200">
            <img
              alt="Admin Avatar"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsWHBtuWQIVizj823YSzQyZh76UGiVcVHl-Xg5VfquhCgWYXUA2jh85SS7evhEWtaGWY_eiDQvPlHMmRlWm5xsrqMgoqmyYB3-TQFxLiuRegzygzt1ug6dFEms9hIs00fMoiQBCVo0h2Ifuvl0pRvRaSkjo17PnGJ-L-F4cG3WeeBBy1-swJMAPdcCW-gNm0HUhNgiPgDA_aZEkZwd0n3QF-HO_pOqnF2JtHBSY_aZk3aYF_JXlkxcInbD308FfYwWXExSAvA-wDU"
            />
          </div>
          <div className="flex-1">
            <p className="text-xs font-bold text-slate-900">{fullName}</p>
            <p className="text-[10px] text-slate-500">Super Administrator</p>
          </div>
          <button onClick={() => navigate("/login")} className="p-1.5 text-slate-400 hover:text-primary transition-colors">
            <span className="material-symbols-outlined text-xl">logout</span>
          </button>
        </div>
      </div>
    </aside>
  );
}