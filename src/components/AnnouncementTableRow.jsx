import React from "react";

export default function AnnouncementTableRow({
  title,
  category,
  date,
  time,
  authorName,
  status
}) 


{   
    return (
        <tr class="hover:bg-slate-50/50 transition-colors">
            <td class="px-6 py-5">
                <div class="flex items-start gap-3">
                    {category === "Urgent" && (
                    <div className="mt-1 size-2 rounded-full bg-red-500 shrink-0"></div>
                    )}
                    <div>
                        <p class="text-sm font-bold text-slate-900 leading-snug">{title}</p>
                        <p class="text-[11px] text-slate-500 mt-1">{category}</p>
                    </div>
                </div>
            </td>
            <td class="px-6 py-5">
                <p class="text-sm text-slate-600 font-medium">{date}</p>
                <p class="text-[10px] text-slate-400">{time}</p>
            </td>
            <td class="px-6 py-5">
                <div class="flex items-center gap-2">
                    <span class="text-sm font-medium text-slate-700">{authorName}</span>
                </div>
            </td>
            <td class="px-6 py-5">
                <span class="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-green-100 text-green-700 border border-green-200">{status}</span>
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
      );
};