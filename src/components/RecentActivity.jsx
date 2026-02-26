import React from "react";



export default function RecentActivity() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm sticky top-28">
        <div className="p-6 border-b border-slate-100">
            <h3 className="text-lg font-bold text-slate-900">Recent Activity</h3>
            <p className="text-xs text-slate-500">Log entries of administrator actions</p>
        </div>
        <div className="p-6 space-y-6">
            <div className="flex gap-4 relative">
                <div className="before:content-[''] before:absolute before:left-5 before:top-10 before:bottom-[-16px] before:w-px before:bg-slate-100">
                    <div className="size-10 rounded-full border border-slate-200 overflow-hidden relative z-10 bg-white">
                        <img alt="Admin 1" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCT4TRPb3zkg2QMpcRANXsqrIAmJxN33C_TG0FpjgJGhZZec1B4OzwKefjgfmCxahkw7yUHInOTnnH4-XhfyIY7lWFlJCPPnNDjjcJcFmZTPqn276v9SD0ZBoe5pLgX-M5KNwYsS5RjGfCyJ_qjuWYNnodkJPjzGO_oUChdjlkwj36QsNVGC0aikQj4Pz7ZjG3mWWPjZnXWTWDsc16nWEdjcuU3tJQ00-DAcOG7p20RsfbzK80E2qlC3uEhFMs5nHir_sKAYedas8w" />
                    </div>
                </div>
                <div className="flex-1">
                    <p className="text-xs text-slate-900"><span className="font-bold">Admin Marco</span> updated score for <span className="font-medium">Basketball Men's</span></p>
                    <p className="text-[10px] text-slate-400 mt-1 uppercase font-bold tracking-tight">12 Minutes Ago</p>
                    <div className="mt-2 text-[11px] bg-slate-50 p-2 rounded border border-slate-100 text-slate-600 italic">
                        "Correction on Q3 score for CAS."
                    </div>
                </div>
            </div>
            <div className="flex gap-4 relative">
                <div className="before:content-[''] before:absolute before:left-5 before:top-10 before:bottom-[-16px] before:w-px before:bg-slate-100">
                    <div className="size-10 rounded-full border border-slate-200 overflow-hidden relative z-10 bg-white">
                        <img alt="Admin 2" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMsI994-3MkxJygdiewPFd4IpJCCaKZy7NeLaHxTwxofg1ko4TAR45BPDWz5KfYutZje0vRyyHaWsNGocUubUtHn2M-ouyskWnApomyR04mcKIgr_NfYmYncOu0f15xMU9D8_QaL7nG3s5EG1QVCYHId4C-0B06rq6jdSIOJjNj6inrofekJhcHpkRn06zYVBGqXGDA-EDWJlBjzjrN5sZzC3SVOqWlDzfMe-om1jo24ad8c2UK5Ke09WNVEvnvj7zmh-smH0ne3s" />
                    </div>
                </div>
                <div className="flex-1">
                    <p className="text-xs text-slate-900"><span className="font-bold">Super Admin Jose</span> approved announcement <span className="font-medium">"Rain Delay Update"</span></p>
                    <p className="text-[10px] text-slate-400 mt-1 uppercase font-bold tracking-tight">45 Minutes Ago</p>
                </div>
            </div>
            <div className="flex gap-4">
                <div className="size-10 rounded-full border border-slate-200 overflow-hidden relative z-10 bg-white">
                    <img alt="Admin 3" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBV6WgqGw1sA_21bmtIGlkVmmOS9fDgrw8Sj-PEedGKJgBuO5qxlUyYTCWq4dEFIxhdhqUEQk4oVDN2XcsGkiZ2Np7VJ61U0TALdRyQwN8v6PzjplqWshuTJqvHoWaKkDjU1T0nC_uY0btXHzg_Hllz2wGBbl-K1CBBJ1pJPkAmo5gHy-WBLXx6UWqbulQER33NSIX7mqjq9uyHUerzXrzMAlk0b2JeNl2sgQS-c77YrmkXxeCShNPdxryEEu0kySKCqiB90eT-aw8" />
                </div>
                <div className="flex-1">
                    <p className="text-xs text-slate-900"><span className="font-bold">Admin Lea</span> modified bracket for <span className="font-medium">Football Semi-Finals</span></p>
                    <p className="text-[10px] text-slate-400 mt-1 uppercase font-bold tracking-tight">1 Hour Ago</p>
                </div>
            </div>
            <button className="w-full py-3 text-xs font-bold text-slate-400 hover:text-primary border border-dashed border-slate-200 rounded-xl transition-all">
                View Full Audit Logs
            </button>
        </div>
    </div>
  );
}

