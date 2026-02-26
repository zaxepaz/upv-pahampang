import Sidebar from "../components/Sidebar";
import StatCard from "../components/StatCard";
import DashboardHeader from "../components/DashboardHeader";
import LiveMatchesCard from "../components/LiveMatchesCard";
import PendingReviews from "../components/PendingReviews";
import RecentActivity from "../components/RecentActivity";
import "../index.css";
import React, { useState } from "react";
import AnnouncementsHeader from "../components/AnnouncementsHeader";

const AdminAnnouncements = () => {
 const [active, setActive] = useState("All"); 
 const filters = ["All", "Urgent", "Schedule Change", "Results", "Sponsors", "General"];

  return (
    <div className="min-h-screen flex bg-background-light text-slate-900">
      <Sidebar />
      <main className="flex-1 flex flex-col">
        <AnnouncementsHeader/>
        <div className="p-8 max-w-7xl mx-auto w-full">
        <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-3 overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
        
        {filters.map((btn) => (
                <button
                  key={btn}
                  onClick={() => setActive(btn)}
                  className={`
                    px-4 py-2 rounded-full text-xs font-bold cursor-pointer transition-all
                    ${active === btn
                      ? "border-primary bg-primary/5 text-primary"
                      : "border-slate-200 bg-white text-slate-500 hover:border-primary hover:text-primary"
                    }
                  `}
                >
                  {btn}
                </button>
                ))}
        </div>

        <div class="flex items-center bg-white rounded-xl px-4 py-2.5 border border-slate-200 shadow-sm min-w-[320px]">
        <span class="material-symbols-outlined text-slate-400 text-lg mr-2">search</span>
        <input class="bg-transparent border-none focus:ring-0 text-sm w-full placeholder:text-slate-400" placeholder="Search by title or author..." type="text"/>
        <span class="material-symbols-outlined text-slate-300 text-lg ml-2 cursor-pointer">tune</span>
        </div>
        </div>
        <div class="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <table class="w-full text-left border-collapse">
        <thead>
        <tr class="bg-slate-50 border-b border-slate-100">
        <th class="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Announcement Title</th>
        <th class="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Date Created</th>
        <th class="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Author</th>
        <th class="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Status</th>
        <th class="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider text-right">Actions</th>
        </tr>
        </thead>
        <tbody class="divide-y divide-slate-100">
        <tr class="hover:bg-slate-50/50 transition-colors">
        <td class="px-6 py-5">
        <div class="flex items-start gap-3">
        <div class="mt-1 size-2 rounded-full bg-red-500 shrink-0"></div>
        <div>
        <p class="text-sm font-bold text-slate-900 leading-snug">Weather Alert: Outdoor Games Suspended</p>
        <p class="text-[11px] text-slate-500 mt-1">Urgent • Affected: All Ball Games</p>
        </div>
        </div>
        </td>
        <td class="px-6 py-5">
        <p class="text-sm text-slate-600 font-medium">Oct 24, 2023</p>
        <p class="text-[10px] text-slate-400">09:15 AM</p>
        </td>
        <td class="px-6 py-5">
        <div class="flex items-center gap-2">
        <img alt="Author" class="size-6 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCT4TRPb3zkg2QMpcRANXsqrIAmJxN33C_TG0FpjgJGhZZec1B4OzwKefjgfmCxahkw7yUHInOTnnH4-XhfyIY7lWFlJCPPnNDjjcJcFmZTPqn276v9SD0ZBoe5pLgX-M5KNwYsS5RjGfCyJ_qjuWYNnodkJPjzGO_oUChdjlkwj36QsNVGC0aikQj4Pz7ZjG3mWWPjZnXWTWDsc16nWEdjcuU3tJQ00-DAcOG7p20RsfbzK80E2qlC3uEhFMs5nHir_sKAYedas8w"/>
        <span class="text-sm font-medium text-slate-700">Marco Dela Cruz</span>
        </div>
        </td>
        <td class="px-6 py-5">
        <span class="status-pill bg-green-100 text-green-700 border border-green-200">Published</span>
        </td>
        <td class="px-6 py-5">
        <div class="flex items-center justify-end gap-2">
        <button class="p-2 text-slate-400 hover:text-primary hover:bg-primary/5 rounded-lg transition-all" title="Edit">
        <span class="material-symbols-outlined text-xl">edit</span>
        </button>
        <button class="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-all" title="Hide from public">
        <span class="material-symbols-outlined text-xl">visibility_off</span>
        </button>
        <button class="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all" title="Delete">
        <span class="material-symbols-outlined text-xl">delete</span>
        </button>
        </div>
        </td>
        </tr>
        <tr class="hover:bg-slate-50/50 transition-colors">
        <td class="px-6 py-5">
        <div class="flex items-start gap-3">
        <div class="mt-1 size-2 rounded-full bg-transparent shrink-0"></div>
        <div>
        <p class="text-sm font-bold text-slate-900 leading-snug">Closing Ceremony Venue Change</p>
        <p class="text-[11px] text-slate-500 mt-1">Schedule Change • Affected: All Colleges</p>
        </div>
        </div>
        </td>
        <td class="px-6 py-5">
        <p class="text-sm text-slate-600 font-medium">Oct 25, 2023</p>
        <p class="text-[10px] text-slate-400">02:30 PM</p>
        </td>
        <td class="px-6 py-5">
        <div class="flex items-center gap-2">
        <img alt="Author" class="size-6 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMsI994-3MkxJygdiewPFd4IpJCCaKZy7NeLaHxTwxofg1ko4TAR45BPDWz5KfYutZje0vRyyHaWsNGocUubUtHn2M-ouyskWnApomyR04mcKIgr_NfYmYncOu0f15xMU9D8_QaL7nG3s5EG1QVCYHId4C-0B06rq6jdSIOJjNj6inrofekJhcHpkRn06zYVBGqXGDA-EDWJlBjzjrN5sZzC3SVOqWlDzfMe-om1jo24ad8c2UK5Ke09WNVEvnvj7zmh-smH0ne3s"/>
        <span class="text-sm font-medium text-slate-700">Jose Mari P.</span>
        </div>
        </td>
        <td class="px-6 py-5">
        <span class="status-pill bg-amber-100 text-amber-700 border border-amber-200">Scheduled</span>
        </td>
        <td class="px-6 py-5">
        <div class="flex items-center justify-end gap-2">
        <button class="p-2 text-slate-400 hover:text-primary hover:bg-primary/5 rounded-lg transition-all" title="Edit">
        <span class="material-symbols-outlined text-xl">edit</span>
        </button>
        <button class="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-all" title="Hide from public">
        <span class="material-symbols-outlined text-xl">visibility_off</span>
        </button>
        <button class="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all" title="Delete">
        <span class="material-symbols-outlined text-xl">delete</span>
        </button>
        </div>
        </td>
        </tr>
        <tr class="hover:bg-slate-50/50 transition-colors">
        <td class="px-6 py-5">
        <div class="flex items-start gap-3">
        <div class="mt-1 size-2 rounded-full bg-transparent shrink-0"></div>
        <div>
        <p class="text-sm font-bold text-slate-900 leading-snug">Basketball Men's Semi-Final Results</p>
        <p class="text-[11px] text-slate-500 mt-1">Results • General Audience</p>
        </div>
        </div>
        </td>
        <td class="px-6 py-5">
        <p class="text-sm text-slate-600 font-medium">Oct 23, 2023</p>
        <p class="text-[10px] text-slate-400">11:00 AM</p>
        </td>
        <td class="px-6 py-5">
        <div class="flex items-center gap-2">
        <img alt="Author" class="size-6 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBV6WgqGw1sA_21bmtIGlkVmmOS9fDgrw8Sj-PEedGKJgBuO5qxlUyYTCWq4dEFIxhdhqUEQk4oVDN2XcsGkiZ2Np7VJ61U0TALdRyQwN8v6PzjplqWshuTJqvHoWaKkDjU1T0nC_uY0btXHzg_Hllz2wGBbl-K1CBBJ1pJPkAmo5gHy-WBLXx6UWqbulQER33NSIX7mqjq9uyHUerzXrzMAlk0b2JeNl2sgQS-c77YrmkXxeCShNPdxryEEu0kySKCqiB90eT-aw8"/>
        <span class="text-sm font-medium text-slate-700">Lea Rodriguez</span>
        </div>
        </td>
        <td class="px-6 py-5">
        <span class="status-pill bg-slate-100 text-slate-500 border border-slate-200">Draft</span>
        </td>
        <td class="px-6 py-5">
        <div class="flex items-center justify-end gap-2">
        <button class="p-2 text-slate-400 hover:text-primary hover:bg-primary/5 rounded-lg transition-all" title="Edit">
        <span class="material-symbols-outlined text-xl">edit</span>
        </button>
        <button class="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-all" title="Hide from public">
        <span class="material-symbols-outlined text-xl">visibility_off</span>
        </button>
        <button class="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all" title="Delete">
        <span class="material-symbols-outlined text-xl">delete</span>
        </button>
        </div>
        </td>
        </tr>
        <tr class="hover:bg-slate-50/50 transition-colors">
        <td class="px-6 py-5">
        <div class="flex items-start gap-3">
        <div class="mt-1 size-2 rounded-full bg-transparent shrink-0"></div>
        <div>
        <p class="text-sm font-bold text-slate-900 leading-snug">Sponsor Appreciation Night</p>
        <p class="text-[11px] text-slate-500 mt-1">Sponsors • Private Event</p>
        </div>
        </div>
        </td>
        <td class="px-6 py-5">
        <p class="text-sm text-slate-600 font-medium">Oct 22, 2023</p>
        <p class="text-[10px] text-slate-400">08:00 AM</p>
        </td>
        <td class="px-6 py-5">
        <div class="flex items-center gap-2">
        <img alt="Author" class="size-6 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsWHBtuWQIVizj823YSzQyZh76UGiVcVHl-Xg5VfquhCgWYXUA2jh85SS7evhEWtaGWY_eiDQvPlHMmRlWm5xsrqMgoqmyYB3-TQFxLiuRegzygzt1ug6dFEms9hIs00fMoiQBCVo0h2Ifuvl0pRvRaSkjo17PnGJ-L-F4cG3WeeBBy1-swJMAPdcCW-gNm0HUhNgiPgDA_aZEkZwd0n3QF-HO_pOqnF2JtHBSY_aZk3aYF_JXlkxcInbD308FfYwWXExSAvA-wDU"/>
        <span class="text-sm font-medium text-slate-700">Juan Admin</span>
        </div>
        </td>
        <td class="px-6 py-5">
        <span class="status-pill bg-green-100 text-green-700 border border-green-200">Published</span>
        </td>
        <td class="px-6 py-5">
        <div class="flex items-center justify-end gap-2">
        <button class="p-2 text-slate-400 hover:text-primary hover:bg-primary/5 rounded-lg transition-all" title="Edit">
        <span class="material-symbols-outlined text-xl">edit</span>
        </button>
        <button class="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-all" title="Hide from public">
        <span class="material-symbols-outlined text-xl">visibility_off</span>
        </button>
        <button class="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all" title="Delete">
        <span class="material-symbols-outlined text-xl">delete</span>
        </button>
        </div>
        </td>
        </tr>
        </tbody>
        </table>
        <div class="p-6 border-t border-slate-100 flex items-center justify-between">
        <p class="text-xs font-medium text-slate-500">Showing 4 of 32 announcements</p>
        <div class="flex items-center gap-2">
        <button class="size-8 flex items-center justify-center rounded-lg border border-slate-200 text-slate-400 hover:bg-slate-50 disabled:opacity-50" disabled="">
        <span class="material-symbols-outlined text-lg">chevron_left</span>
        </button>
        <button class="size-8 flex items-center justify-center rounded-lg bg-primary text-white text-xs font-bold">1</button>
        <button class="size-8 flex items-center justify-center rounded-lg border border-slate-200 text-slate-600 text-xs font-bold hover:bg-slate-50">2</button>
        <button class="size-8 flex items-center justify-center rounded-lg border border-slate-200 text-slate-600 text-xs font-bold hover:bg-slate-50">3</button>
        <button class="size-8 flex items-center justify-center rounded-lg border border-slate-200 text-slate-400 hover:bg-slate-50">
        <span class="material-symbols-outlined text-lg">chevron_right</span>
        </button>
        </div>
        </div>
        </div>
        </div>
        </main>
    </div>);
};

export default AdminAnnouncements;

