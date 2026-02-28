import React, { useEffect, useState } from "react";
import AnnouncementTableRow from "./AnnouncementTableRow";
import axios from "axios";

function AnnouncementsTable({ announcements, onDelete, onEdit, currentPage, setCurrentPage, itemsPerPage, activeFilter}) {

  // filtering and pagination 
  const filtered = activeFilter === "All"
    ? announcements
    : announcements.filter((ann) => ann.category === activeFilter);

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginated = filtered.slice(startIndex, startIndex + itemsPerPage);

  return (
    
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
      <tbody className="divide-y divide-slate-100">
        {filtered.length === 0 ? (
          <tr>
            <td
              colSpan="5"
              className="px-6 py-12 text-center text-slate-500 text-sm"
            >
              No announcements found.
            </td>
          </tr>
        ) : (
          paginated.map((ann) => {
            const dateObj = new Date(ann.created_at);

            const formattedDate = dateObj.toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            });

            const formattedTime = dateObj.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
              hour12: true,
            });

            return (
              <AnnouncementTableRow
                key={ann.id}
                id={ann.id}
                title={ann.title}
                category={ann.category}
                date={formattedDate}
                time={formattedTime}
                authorName={ann.author}
                status={ann.status}
                onDelete={onDelete}
                 onEdit={() => onEdit(ann)} 
              />
            );
          })
        )}
  </tbody>
      </table>
     <div className="p-6 border-t border-slate-100 flex items-center justify-between">
        {filtered.length > 0 && (
          <p className="text-xs font-medium text-slate-500">
            Showing {paginated.length} of {filtered.length} announcements  
          </p>
        )}
        {filtered.length > 0 && (
           <div className="flex items-center gap-2">
          {/* Prev button */}
          <button
            onClick={() => setCurrentPage((p) => p - 1)}
            disabled={currentPage === 1}
            className="size-8 flex items-center justify-center rounded-lg border border-slate-200 text-slate-400 hover:bg-slate-50 disabled:opacity-50"
          >
            <span className="material-symbols-outlined text-lg">chevron_left</span>
          </button>

          {/* Page numbers */}
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`size-8 flex items-center justify-center rounded-lg text-xs font-bold
                ${currentPage === page
                  ? "bg-primary text-white"
                  : "border border-slate-200 text-slate-600 hover:bg-slate-50"
                }`}
            >
              {page}
            </button>
          ))}

          {/* Next button */}
          <button
            onClick={() => setCurrentPage((p) => p + 1)}
            disabled={currentPage === totalPages}
            className="size-8 flex items-center justify-center rounded-lg border border-slate-200 text-slate-400 hover:bg-slate-50 disabled:opacity-50"
          >
            <span className="material-symbols-outlined text-lg">chevron_right</span>
          </button>
        </div>
        )}
       
      </div>
    </div>
  );
}

export default AnnouncementsTable;