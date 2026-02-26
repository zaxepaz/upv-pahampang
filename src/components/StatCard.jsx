import React from "react";

export default function StatCard({ icon, backgroundClass, colorClass, title, value, subtitle,subIcon}) {
  return ( 
    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-5">
      <div className={`size-12 rounded-2xl ${backgroundClass} flex items-center justify-center ${colorClass}`}>
        <span className="material-symbols-outlined text-3xl">{icon}</span>
      </div>
      <div>
        <p className="text-sm font-medium text-slate-500">{title}</p>
        <p className="text-3xl font-black text-slate-900">{value}</p>
        <p className="text-[10px] text-secondary font-bold mt-1">
            <span className="material-symbols-outlined text-[12px]">{subIcon}</span> {subtitle}
        </p>
      
      </div>
    </div>
  );
}

