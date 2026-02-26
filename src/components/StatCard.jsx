import React from "react";

export default function StatCard({ icon, colorClass, title, value, subtitle }) {
  return (
    <div className="stat-card">
      <div className={`size-12 rounded-2xl ${colorClass}/10 flex items-center justify-center ${colorClass}`}>
        <span className="material-symbols-outlined text-3xl">{icon}</span>
      </div>
      <div>
        <p className="text-sm font-medium text-slate-500">{title}</p>
        <p className="text-3xl font-black text-slate-900">{value}</p>
        {subtitle && (
          <p className="text-[10px] text-secondary font-bold mt-1">
            <span className="material-symbols-outlined text-[12px]">trending_up</span> {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}

