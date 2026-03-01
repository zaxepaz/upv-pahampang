import Sidebar from "../components/Sidebar";
import StatCard from "../components/StatCard";
import DashboardHeader from "../components/DashboardHeader";
import LiveMatchesCard from "../components/LiveMatchesCard";
import PendingReviews from "../components/PendingReviews";
import RecentActivity from "../components/RecentActivity";
import "../index.css";
import React, { useState } from "react";
import AnnouncementsHeader from "../components/announcements/AnnouncementsHeader";
import AnnouncementsModal from "../components/announcements/AnnouncementsModal";
import AnnouncementsTable from "../components/announcements/AnnouncementsTable";
import ConfirmationModal from "../components/Confirmation";
import { useEffect } from "react";
import axios from "axios";

const AdminAnnouncements = () => {
 const [active, setActive] = useState("All"); 
 const filters = ["All", "Urgent", "Schedule Change", "Sports Results", "Sponsors", "General Update"];
const [searchQuery, setSearchQuery] = useState("");

 // pagenation states
 const [currentPage, setCurrentPage] = useState(1);
 const itemsPerPage = 5;

 const [announcements, setAnnouncements] = useState([]);

 const [editingAnnouncement, setEditingAnnouncement] = useState(null);

 // for modal
 const [isModalOpen, setIsModalOpen] = useState(false);
 const handleOpenModal = () => setIsModalOpen(true);
 // when closing, reset
const handleCloseModal = () => {
  setIsModalOpen(false);
  setEditingAnnouncement(null);
};
 
 // for delete confirmation
 const [isConfirmOpen, setIsConfirmOpen] = useState(false);
 const [pendingDeleteId, setPendingDeleteId] = useState(null);

 // reset pagination on filter change
 const handleFilterChange = (filter) => {
  setActive(filter);
  setCurrentPage(1);  
};
 // fetch announcements from backend
  const fetchAnnouncements = async () => {
  try {
    const res = await axios.get("http://localhost:5000/api/announcements");
    setAnnouncements(res.data);
  } catch (err) {
    console.error("Announcements fetch error:", err);
  }
};
// fetch on component mount
useEffect(() => {
  fetchAnnouncements();
}, []);

  // after publishing, refetch announcements and close modal
  const handlePublish = async (data) => {
    console.log("Publishing:", data);
    await fetchAnnouncements(); 
    handleCloseModal();
  };
  // delete announcement by row id
  const handleDelete = async (id) => {
    try {
        await axios.delete(`http://localhost:5000/api/announcements/${id}`);
        fetchAnnouncements(); 
    } catch (err) {
        console.error("Delete error:", err);
    }
    }
  // when delete button is clicked, open confirmation modal and store id of announcement to delete
  const handleDeleteClick = (id) => {
  setPendingDeleteId(id);
  setIsConfirmOpen(true);
};
// when delete is confirmed, call delete function with stored id, then close confirmation modal and clear stored id
const handleConfirmDelete = async () => {
  await handleDelete(pendingDeleteId);
  // calculate new total pages after deletion
  const newTotal = announcements.length - 1;
  const newTotalPages = Math.ceil(newTotal / itemsPerPage);

  // if current page no longer exists, go back one page
  if (currentPage > newTotalPages) {
    setCurrentPage((p) => p - 1);
  }
  setIsConfirmOpen(false);
  setPendingDeleteId(null);
};

const handleEditClick = (announcement) => {
  setEditingAnnouncement(announcement);
  setIsModalOpen(true);
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
                  onClick={() => handleFilterChange(btn)} 
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
        <input
          className="bg-transparent border-none focus:ring-0 text-sm w-full placeholder:text-slate-400"
          placeholder="Search by title or author..."
          type="text"
          value={searchQuery}
          onChange={(e) => {
          setSearchQuery(e.target.value);
          setCurrentPage(1);
        }}
        />
        <span class="material-symbols-outlined text-slate-300 text-lg ml-2 cursor-pointer">tune</span>
        </div>
        </div>
        
        <AnnouncementsTable searchQuery={searchQuery} announcements={announcements} onDelete={handleDeleteClick} onEdit={handleEditClick}
        currentPage={currentPage} setCurrentPage={setCurrentPage} itemsPerPage={itemsPerPage} activeFilter={active} />
       
        </div>
        </main>
        <ConfirmationModal
          isOpen={isConfirmOpen}
          onClose={() => setIsConfirmOpen(false)}
          onConfirm={handleConfirmDelete}
        />

        {isModalOpen && (
        <AnnouncementsModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onPublish={handlePublish}
          mode={editingAnnouncement ? "edit" : "create"}  
          announcement={editingAnnouncement} 
        />
      )}
    </div>);
};

export default AdminAnnouncements;

