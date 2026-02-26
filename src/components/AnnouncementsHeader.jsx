import React from "react";

export default function AnnouncementHeader() {
  return (
        <header class="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-30 px-8 py-4">
            <div class="max-w-7xl mx-auto flex items-center justify-between">
            <div class="flex items-center gap-4">
            <h1 class="text-xl font-bold text-slate-900">Announcement Management</h1>
            <div class="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded-full uppercase tracking-widest">Active Bulletin</div>
            </div>
            <div class="flex items-center gap-4">
            <button class="relative p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors">
            <span class="material-symbols-outlined">notifications</span>
            <span class="absolute top-2 right-2 size-2 bg-primary rounded-full border-2 border-white"></span>
            </button>
            <div class="h-8 w-px bg-slate-200 mx-2"></div>
            <button class="bg-primary text-white px-6 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all flex items-center gap-2">
            <span class="material-symbols-outlined text-lg">add_circle</span>
                                Create Announcement
                            </button>
            </div>
            </div>
            </header>
      );
};