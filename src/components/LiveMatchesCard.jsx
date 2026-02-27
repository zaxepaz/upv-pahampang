import React from "react";
import OrgDetailsCard from "./OrgDetailsCard";



export default function LiveMatchesCard({ icon, colorClass, title, value, subtitle}) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                            <div>
                                <h3 className="text-lg font-bold text-slate-900">Live Matches Management</h3>
                                <p className="text-xs text-slate-500">Click Quick Edit to update scores in real-time</p>
                            </div>
        
                            <button className="text-xs font-bold text-secondary hover:underline uppercase tracking-wider flex items-center gap-1">
                                View All <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </button>
                        </div>
                        <div className="divide-y divide-slate-100">
                            <div className="p-6 flex items-center justify-between group hover:bg-slate-50/50 transition-colors">
                                <div className="flex items-center gap-8">
                                    <div className="w-12 text-center">
                                        <span className="text-[10px] font-bold text-primary uppercase animate-pulse">Live</span>
                                        <p className="text-xs font-bold text-slate-400 mt-1">Q4 02:45</p>
                                    </div>
                                    <div className="flex items-center gap-6">
                                       <OrgDetailsCard acadOrgAbb="ELEK" acadOrgLogo="./public/elek_logo.jpg"/>
                                        <div className="flex items-center gap-4 px-4 py-1.5 bg-slate-900 rounded-lg">
                                            <span className="text-xl font-black text-white">84</span>
                                            <span className="text-slate-600 font-bold">-</span>
                                            <span className="text-xl font-black text-white">79</span>
                                        </div>
                                        <OrgDetailsCard acadOrgAbb="SOTECH" acadOrgLogo="./public/sotech_logo.png"/>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <button className="px-4 py-2 border border-secondary text-secondary rounded-lg text-xs font-bold hover:bg-secondary hover:text-white transition-all flex items-center gap-2">
                                        <span className="material-symbols-outlined text-sm">edit</span> Quick Edit
                                    </button>
                                    <button className="p-2 text-slate-400 hover:text-slate-600">
                                        <span className="material-symbols-outlined">more_vert</span>
                                    </button>
                                </div>
                            </div>
                            <div className="p-6 flex items-center justify-between group hover:bg-slate-50/50 transition-colors">
                                <div className="flex items-center gap-8">
                                    <div className="w-12 text-center">
                                        <span className="text-[10px] font-bold text-primary uppercase animate-pulse">Live</span>
                                        <p className="text-xs font-bold text-slate-400 mt-1">Set 3</p>
                                    </div>
                                    <div className="flex items-center gap-6">
                                        
                                        <OrgDetailsCard acadOrgAbb="FISH" acadOrgLogo="./public/fish_logo.jpg"/>
                                       
                                        <div className="flex items-center gap-4 px-4 py-1.5 bg-slate-900 rounded-lg">
                                            <span className="text-xl font-black text-white">2</span>
                                            <span className="text-slate-600 font-bold">-</span>
                                            <span className="text-xl font-black text-white">0</span>
                                        </div>
                                        <OrgDetailsCard acadOrgAbb="CLOVERS" acadOrgLogo="./public/clovers_logo.jpg"/>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <button className="px-4 py-2 border border-secondary text-secondary rounded-lg text-xs font-bold hover:bg-secondary hover:text-white transition-all flex items-center gap-2">
                                        <span className="material-symbols-outlined text-sm">edit</span> Quick Edit
                                    </button>
                                    <button className="p-2 text-slate-400 hover:text-slate-600">
                                        <span className="material-symbols-outlined">more_vert</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
  );
}