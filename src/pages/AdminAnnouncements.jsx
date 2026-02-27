import Sidebar from "../components/Sidebar";
import StatCard from "../components/StatCard";
import DashboardHeader from "../components/DashboardHeader";
import LiveMatchesCard from "../components/LiveMatchesCard";
import PendingReviews from "../components/PendingReviews";
import RecentActivity from "../components/RecentActivity";
import "../index.css";
import React, { useState } from "react";
import AnnouncementsHeader from "../components/AnnouncementsHeader";
import AnnouncementsModal from "../components/AnnouncementsModal";
import AnnouncementsTable from "../components/AnnouncementsTable";
import AnnouncementTableRow from "../components/AnnouncementTableRow";

const AdminAnnouncements = () => {
 const [active, setActive] = useState("All"); 
 const filters = ["All", "Urgent", "Schedule Change", "Results", "Sponsors", "General"];

 // for modal
 const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handlePublish = (data) => {
    console.log("Publishing:", data);
    handleCloseModal();
  };

  return (
    <div className="min-h-screen flex bg-background-light text-slate-900">
      <Sidebar />
      <main className="flex-1 flex flex-col">
        <AnnouncementsHeader onCreate={handleOpenModal}/>
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
        
        <AnnouncementTableRow title="Weather Alert: Outdoor Games Suspended" category="Urgent" subtitle="Affected: All Ball Games" date="Oct 24, 2023" time="09:15 AM" authorName="Marco Dela Cruz" authorAvatar="https://lh3.googleusercontent.com/aida-public/AB6AXuCT4TRPb3zkg2QMpcRANXsqrIAmJxN33C_TG0FpjgJGhZZec1B4OzwKefjgfmCxahkw7yUHInOTnnH4-XhfyIY7lWFlJCPPnNDjjcJcFmZTPqn276v9SD0ZBoe5pLgX-M5KNwYsS5RjGfCyJ_qjuWYNnodkJPjzGO_oUChdjlkwj36QsNVGC0aikQj4Pz7ZjG3mWWPjZnXWTWDsc16nWEdjcuU3tJQ00-DAcOG7p20RsfbzK80E2qlC3uEhFMs5nHir_sKAYedas8w" status="Published"/>
        <AnnouncementTableRow title="Closing Ceremony Venue Change" category="Schedule Change" subtitle="Affected: All Colleges" date="Oct 25, 2023" time="2:30 PM" authorName="Jose Mari P." authorAvatar="https://lh3.googleusercontent.com/aida-public/AB6AXuDMsI994-3MkxJygdiewPFd4IpJCCaKZy7NeLaHxTwxofg1ko4TAR45BPDWz5KfYutZje0vRyyHaWsNGocUubUtHn2M-ouyskWnApomyR04mcKIgr_NfYmYncOu0f15xMU9D8_QaL7nG3s5EG1QVCYHId4C-0B06rq6jdSIOJjNj6inrofekJhcHpkRn06zYVBGqXGDA-EDWJlBjzjrN5sZzC3SVOqWlDzfMe-om1jo24ad8c2UK5Ke09WNVEvnvj7zmh-smH0ne3s" status="Published"/>
        <AnnouncementTableRow title="Basketball Men's Semi-Final Results" category="Results" subtitle="General Audience" date="Oct 23, 2023" time="11:00 AM" authorName="Lea Rodriguez" authorAvatar="https://lh3.googleusercontent.com/aida-public/AB6AXuBV6WgqGw1sA_21bmtIGlkVmmOS9fDgrw8Sj-PEedGKJgBuO5qxlUyYTCWq4dEFIxhdhqUEQk4oVDN2XcsGkiZ2Np7VJ61U0TALdRyQwN8v6PzjplqWshuTJqvHoWaKkDjU1T0nC_uY0btXHzg_Hllz2wGBbl-K1CBBJ1pJPkAmo5gHy-WBLXx6UWqbulQER33NSIX7mqjq9uyHUerzXrzMAlk0b2JeNl2sgQS-c77YrmkXxeCShNPdxryEEu0kySKCqiB90eT-aw8" status="Draft"/>
        <AnnouncementTableRow title="Sponsor Appreciation Night" category="Sponsors" subtitle="Private Event" date="Oct 22, 2023" time="08:00 AM" authorName="Juan Admin" authorAvatar="https://lh3.googleusercontent.com/aida-public/AB6AXuBsWHBtuWQIVizj823YSzQyZh76UGiVcVHl-Xg5VfquhCgWYXUA2jh85SS7evhEWtaGWY_eiDQvPlHMmRlWm5xsrqMgoqmyYB3-TQFxLiuRegzygzt1ug6dFEms9hIs00fMoiQBCVo0h2Ifuvl0pRvRaSkjo17PnGJ-L-F4cG3WeeBBy1-swJMAPdcCW-gNm0HUhNgiPgDA_aZEkZwd0n3QF-HO_pOqnF2JtHBSY_aZk3aYF_JXlkxcInbD308FfYwWXExSAvA-wDU" status="Published"/>
        
        </tbody>
        </table>
        <AnnouncementsTable />
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
        {isModalOpen && (
        <AnnouncementsModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onPublish={handlePublish}
        />
      )}
    </div>);
};

export default AdminAnnouncements;

