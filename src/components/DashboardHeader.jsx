import React from "react";

export default function DashboardHeader() {
  return (

    <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-30 px-8 py-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <h1 className="text-xl font-bold text-slate-900">Admin Management Dashboard</h1>
                    <div className="px-3 py-1 bg-secondary/10 text-secondary text-[10px] font-bold rounded-full uppercase tracking-widest">System Online</div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex items-center bg-slate-100 rounded-full px-4 py-2 border border-slate-200">
                        <span className="material-symbols-outlined text-slate-400 text-lg mr-2">search</span>
                        <input className="bg-transparent border-none focus:ring-0 text-xs w-48 placeholder:text-slate-400" placeholder="Search data, users, logs..." type="text" />
                    </div>
                    <button className="relative p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors">
                        <span className="material-symbols-outlined">notifications</span>
                        <span className="absolute top-2 right-2 size-2 bg-primary rounded-full border-2 border-white"></span>
                    </button>
                </div>
            </div>
        </header>
  );
}