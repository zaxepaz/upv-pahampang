import React, { useEffect, useState } from "react";
import AnnouncementTableRow from "./AnnouncementTableRow";

function AnnouncementsTable() {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/announcements");
        const data = await res.json();
        setAnnouncements(data);
      } catch (err) {
        console.error("Announcements fetch error:", err);
      }
    };

    fetchAnnouncements();
  }, []); 

  return (
    
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
 
        {announcements.map((ann) => (
          <AnnouncementTableRow
            key={ann.id}
            title={ann.title}
            category={ann.category}
            subtitle={ann.subtitle}
            date={ann.created_at.split("T")[0]}
            time={ann.time}
            authorName={ann.author}
            status={ann.status}
          />
        ))}
      </tbody>
    </table>
  );
}

export default AnnouncementsTable;