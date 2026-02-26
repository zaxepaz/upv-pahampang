import React from "react";



export default function PendingReviews() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-slate-900">Pending Review</h3>
        <button
            className="px-4 py-2 rounded-lg text-xs font-bold text-white flex items-center gap-1"
            style={{ backgroundColor: "var(--color-secondary)" }}
        >
            <span className="material-symbols-outlined text-sm">add</span>
            Create New
        </button>
        </div>
        <div className="space-y-4">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className="size-10 bg-amber-100 text-amber-600 rounded-lg flex items-center justify-center">
                        <span className="material-symbols-outlined">campaign</span>
                    </div>
                    <div>
                        <p className="text-sm font-bold">Reschedule: Women's Volleyball Finals</p>
                        <p className="text-[10px] text-slate-500">By Moderator Sarah • 2 hours ago</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <button className="p-1.5 text-secondary hover:bg-secondary/10 rounded-lg transition-colors">
                        <span className="material-symbols-outlined text-xl">check_circle</span>
                    </button>
                    <button className="p-1.5 text-primary hover:bg-primary/10 rounded-lg transition-colors">
                        <span className="material-symbols-outlined text-xl">cancel</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
}
