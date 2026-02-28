import React from "react";

export default function ConfirmationModal({ isOpen, onClose, onConfirm }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-slate-900 w-full max-w-md rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        
        <div className="px-8 py-6 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-full bg-red-100 flex items-center justify-center">
              <span className="material-symbols-outlined text-red-600">delete</span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">Delete Announcement</h3>
              <p className="text-sm text-slate-500">This action cannot be undone.</p>
            </div>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600 transition-colors">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div className="px-8 py-6">
          <p className="text-sm text-slate-600">
            Are you sure you want to delete this announcement? 
          </p>
        </div>

        <div className="px-8 py-5 border-t border-slate-200 flex items-center justify-end gap-3 bg-slate-50">
          <button
            onClick={onClose}
            className="px-5 py-2 text-sm font-bold text-slate-600 hover:text-slate-900 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-bold text-sm transition-all"
          >
            Yes, Delete
          </button>
        </div>

      </div>
    </div>
  );
}