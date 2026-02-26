import React from "react";

export default function LiveMatchesCard({ icon, colorClass, title, value, subtitle }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                            <div>
                                <h3 className="text-lg font-bold text-slate-900">Live Matches Management</h3>
                                <p className="text-xs text-slate-500">Click Quick Edit to update scores in real-time</p>
                            </div>
                            <button className="text-xs font-bold text-secondary hover:underline uppercase tracking-wider flex items-center gap-1">
                                View All <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </button>
                        </div>
                        <div className="divide-y divide-slate-100">
                            <div className="p-6 flex items-center justify-between group hover:bg-slate-50/50 transition-colors">
                                <div className="flex items-center gap-8">
                                    <div className="w-12 text-center">
                                        <span className="text-[10px] font-bold text-primary uppercase animate-pulse">Live</span>
                                        <p className="text-xs font-bold text-slate-400 mt-1">Q4 02:45</p>
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <div className="flex items-center gap-3">
                                            <div className="size-8 rounded-full bg-slate-100 p-1">
                                                <img alt="CAS" className="w-full h-full object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAitNXuNjoCoUt3maa_iJHyMdWyg11fDGwma-R16LGjHrsIqmZBhEjg1lL--QffUdmMKWn74UakC4WEl3WkSn0FNnqXsl8TRG085b-_ENQVmogSKzyGZgmg6tBYyatzoldenO5KdRBKx-bDKKG8K9gazPVEduW5zgeVwX2kf6MdJUnRCONSdjHGaTgGBRrw3jHqdjZQXWzsJlhuyVB7DOsLH3zxr-9f5x5NGAbwuO_NFa4crRn3U_i9WUErIoawSypZZaTAZShyJHo" />
                                            </div>
                                            <span className="text-sm font-bold w-12 text-center">CAS</span>
                                        </div>
                                        <div className="flex items-center gap-4 px-4 py-1.5 bg-slate-900 rounded-lg">
                                            <span className="text-xl font-black text-white">84</span>
                                            <span className="text-slate-600 font-bold">-</span>
                                            <span className="text-xl font-black text-white">79</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span className="text-sm font-bold w-12 text-center">SOTECH</span>
                                            <div className="size-8 rounded-full bg-slate-100 p-1">
                                                <img alt="SOTECH" className="w-full h-full object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8OQzQdA7l55Pk78uyDAmpiJNWiEywNf8zXFvnLJFnAYk1y772GAij9_LYtfPIEnG9CRLAozvf0yDV6t_ZxPggfCuGrRuFCb9mgdsIGcqV1UGB7Vnb9PjWiGg7EvfZFaOzbBH42albhmcWeclj0D5TElu_XMsm1gUO_fkKWw7BBP1QgqDy62IgdxziG94DalkRtaFoAEmNVZBQBCUKGKj1I4XMT0VUeQM-GSz4l4dBmcJYflGghtPffK26-0yqGkUnJh46kaLaunw" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <button className="px-4 py-2 border border-secondary text-secondary rounded-lg text-xs font-bold hover:bg-secondary hover:text-white transition-all flex items-center gap-2">
                                        <span className="material-symbols-outlined text-sm">edit</span> Quick Edit
                                    </button>
                                    <button className="p-2 text-slate-400 hover:text-slate-600">
                                        <span className="material-symbols-outlined">more_vert</span>
                                    </button>
                                </div>
                            </div>
                            <div className="p-6 flex items-center justify-between group hover:bg-slate-50/50 transition-colors">
                                <div className="flex items-center gap-8">
                                    <div className="w-12 text-center">
                                        <span className="text-[10px] font-bold text-primary uppercase animate-pulse">Live</span>
                                        <p className="text-xs font-bold text-slate-400 mt-1">Set 3</p>
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <div className="flex items-center gap-3">
                                            <div className="size-8 rounded-full bg-slate-100 p-1">
                                                <img alt="CFOS" className="w-full h-full object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNAC8sji-ODOgUDQitdIepGpUUx1IoP30v1n54iCqvqtH5UlpjtH_Z1t5t-KJVZAn3_dUzMdf9EjXaULa_95qpUghou7tNqHYSd_gtNvcGzSVG6ChGFG4fLzGyfjBSywL7zcrTfck50U3GAFSZu69qpPyNNmOZfLrVV2wHkilmdeNZwvjqKU3Ldy4Xny_FHP7-tfbycaULOOV5bPQtZ9Ex28u1fMuvGsFgrM8li0p9qCyjAuHNxmHlJCFL6G3u9CnBCRbmsFClqLY" />
                                            </div>
                                            <span className="text-sm font-bold w-12 text-center">CFOS</span>
                                        </div>
                                        <div className="flex items-center gap-4 px-4 py-1.5 bg-slate-900 rounded-lg">
                                            <span className="text-xl font-black text-white">2</span>
                                            <span className="text-slate-600 font-bold">-</span>
                                            <span className="text-xl font-black text-white">0</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span className="text-sm font-bold w-12 text-center">UPVTC</span>
                                            <div className="size-8 rounded-full bg-slate-100 p-1">
                                                <img alt="UPVTC" className="w-full h-full object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBu2XtPPnqBMPOAS3iHISku7w_mTOf2M23-Co_YnRukk3si-LRbc5geoq6FhkrIGF6m41b-BJ_YtOPpnLfR95T6rXGMOrXYEd1R54IYgfL8t8bnW2FjGrmCpCxL9IRCmM3wJ7JnhfpYaa3wpGjlG6vRYmbnYL3b9Wan7cnXh0zsBOYhbrXZfmyDyTl1gkBc82shEk6jMY0Aa5-4W_yJODEC_9QnbHpW3s1OdWlfK9MH7EV1ODWGgwS94AScfkfwwdUbSYNjOwCf8Qc" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <button className="px-4 py-2 border border-secondary text-secondary rounded-lg text-xs font-bold hover:bg-secondary hover:text-white transition-all flex items-center gap-2">
                                        <span className="material-symbols-outlined text-sm">edit</span> Quick Edit
                                    </button>
                                    <button className="p-2 text-slate-400 hover:text-slate-600">
                                        <span className="material-symbols-outlined">more_vert</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
  );
}