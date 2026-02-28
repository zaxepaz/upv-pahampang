import React, { useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function AnnouncementsModal({ isOpen, onClose, onPublish, onSave, mode = "create", announcement = null }) {

  const [title, setTitle] = useState(announcement?.title || "");
  const [category, setCategory] = useState(announcement?.category || "General Update");
  const [publishDate, setPublishDate] = useState(
    announcement?.created_at ? new Date(announcement.created_at) : null
  );
  const [body, setBody] = useState(announcement?.content || "");
  const [errors, setErrors] = useState({});

  if (!isOpen) return null;

  const handleDiscard = () => {
    setTitle("");
    setCategory("General Update");
    setPublishDate(null);
    setBody("");
    setErrors({});
    onClose();
  };

  const handleSave = () => {
    onSave?.({ title, category, publishDate, body });
  };

  const handlePublish = async () => {
    // Validate
    const newErrors = {};
    if (!title.trim()) newErrors.title = "Title is required.";
    if (!body.trim()) newErrors.body = "Body content is required.";
    if (!publishDate) newErrors.publishDate = "Publish date is required.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    try {
      const now = new Date();
      const phTime = new Date(now.getTime() + (8 * 60 * 60 * 1000));

      const payload = {
        title,
        content: body,
        category,
        created_at: mode === "edit"
          ? phTime.toISOString()
          : (() => {
              const combined = new Date(
                publishDate.getFullYear(),
                publishDate.getMonth(),
                publishDate.getDate(),
                now.getHours(),
                now.getMinutes(),
                now.getSeconds()
              );
              return new Date(combined.getTime() + (8 * 60 * 60 * 1000)).toISOString();
            })(),
        author: "Juan Admin",
        status: "Published",
      };

      let response;

      if (mode === "edit") {
        response = await axios.put(`http://localhost:5000/api/announcements/${announcement.id}`, payload);
        console.log("Announcement updated:", response.data);
      } else {
        response = await axios.post("http://localhost:5000/api/announcements", payload);
        console.log("Announcement published:", response.data);
      }

      setTitle("");
      setCategory("General Update");
      setPublishDate(null);
      setBody("");
      setErrors({});
      onPublish(response.data);

    } catch (error) {
      console.error("Failed to publish announcement:", error);
      alert("Error publishing announcement!");
    }
  };

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-slate-900 w-full max-w-2xl rounded-2xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden">

        <div className="px-8 py-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold text-slate-900">
              {mode === "edit" ? "Edit Announcement" : "Create Announcement"}
            </h3>
            <p className="text-sm text-slate-500">Fill in the details for the festival-wide update.</p>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <div className="px-8 py-6 overflow-y-auto custom-scrollbar flex flex-col gap-6">

          <div>
            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
              Announcement Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Schedule Change for Basketball Finals"
              className={`w-full bg-slate-50 dark:bg-slate-800 border rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all
                ${errors.title ? "border-red-400" : "border-slate-200 dark:border-slate-700"}`}
            />
            {errors.title && <p className="text-xs text-red-500 mt-1">{errors.title}</p>}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary appearance-none"
              >
                <option>General Update</option>
                <option>Sports Results</option>
                <option>Logistics</option>
                <option>Urgent</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                Publish Date
              </label>
              <DatePicker
                selected={publishDate}
                onChange={(date) => setPublishDate(date)}
                dateFormat="MMMM d, yyyy"
                placeholderText="Select date"
                className={`w-full bg-slate-50 dark:bg-slate-800 border rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary
                  ${errors.publishDate ? "border-red-400" : "border-slate-200 dark:border-slate-700"}`}
              />
              {errors.publishDate && <p className="text-xs text-red-500 mt-1">{errors.publishDate}</p>}
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
              Body Content
            </label>
            <div className={`border rounded-lg overflow-hidden ${errors.body ? "border-red-400" : "border-slate-200 dark:border-slate-700"}`}>
              <div className="bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 px-3 py-2 flex items-center gap-1">
                <button className="p-1.5 hover:bg-white dark:hover:bg-slate-700 rounded text-slate-600 dark:text-slate-400">
                  <span className="material-symbols-outlined text-[18px]">format_bold</span>
                </button>
                <button className="p-1.5 hover:bg-white dark:hover:bg-slate-700 rounded text-slate-600 dark:text-slate-400">
                  <span className="material-symbols-outlined text-[18px]">format_italic</span>
                </button>
                <button className="p-1.5 hover:bg-white dark:hover:bg-slate-700 rounded text-slate-600 dark:text-slate-400">
                  <span className="material-symbols-outlined text-[18px]">format_list_bulleted</span>
                </button>
                <div className="w-px h-5 bg-slate-200 dark:bg-slate-700 mx-1"></div>
                <button className="p-1.5 hover:bg-white dark:hover:bg-slate-700 rounded text-slate-600 dark:text-slate-400">
                  <span className="material-symbols-outlined text-[18px]">link</span>
                </button>
                <button className="p-1.5 hover:bg-white dark:hover:bg-slate-700 rounded text-slate-600 dark:text-slate-400">
                  <span className="material-symbols-outlined text-[18px]">image</span>
                </button>
              </div>
              <textarea
                rows={6}
                value={body}
                onChange={(e) => setBody(e.target.value)}
                placeholder="Write your announcement message here..."
                className="w-full bg-white dark:bg-slate-900 border-none px-4 py-3 text-sm focus:ring-0 resize-none"
              />
            </div>
            {errors.body && <p className="text-xs text-red-500 mt-1">{errors.body}</p>}
          </div>

        </div>

        <div className="px-8 py-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-end gap-3 bg-slate-50 dark:bg-slate-800/30">
          <button
            onClick={handleDiscard}
            className="px-5 py-2 text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 transition-colors"
          >
            Discard Draft
          </button>
          <button
            onClick={handleSave}
            className="bg-primary/10 text-primary hover:bg-primary/20 px-6 py-2 rounded-lg font-bold text-sm transition-all border border-primary/20"
          >
            Save as Draft
          </button>
          <button
            onClick={handlePublish}
            className="bg-primary hover:bg-primary/90 text-white px-8 py-2 rounded-lg font-bold text-sm shadow-lg shadow-primary/20 transition-all"
          >
            {mode === "edit" ? "Save Changes" : "Publish Now"}
          </button>
        </div>

      </div>
    </div>
  );
}