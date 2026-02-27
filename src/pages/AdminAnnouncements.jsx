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

