const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-[1280px] mx-auto px-6 py-4 flex items-center justify-between">

          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="bg-primary p-1.5 rounded-lg text-white">
                <span className="material-symbols-outlined text-2xl">sports_score</span>
              </div>

              <div className="flex flex-col">
                <h2 className="text-lg font-extrabold leading-none tracking-tight">
                  UPV PAHAMPANG
                </h2>
                <span className="text-[10px] font-bold text-forest-green tracking-widest uppercase">
                  Spirit of the Visayas
                </span>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-8">
              <a className="text-primary text-sm font-bold border-b-2 border-primary pb-1">Home</a>
              <a className="text-slate-600 dark:text-slate-400 hover:text-primary text-sm font-medium transition-colors">Announcements</a>
              <a className="text-slate-600 dark:text-slate-400 hover:text-primary text-sm font-medium transition-colors">Games</a>
              <a className="text-slate-600 dark:text-slate-400 hover:text-primary text-sm font-medium transition-colors">Schedule</a>
              <a className="text-slate-600 dark:text-slate-400 hover:text-primary text-sm font-medium transition-colors">Results</a>
              <a className="text-slate-600 dark:text-slate-400 hover:text-primary text-sm font-medium transition-colors">Standings</a>
              <a className="text-slate-600 dark:text-slate-400 hover:text-primary text-sm font-medium transition-colors">Bracket</a>
              <a className="text-slate-600 dark:text-slate-400 hover:text-primary text-sm font-medium transition-colors">Sponsors</a>
              <a className="text-slate-600 dark:text-slate-400 hover:text-primary text-sm font-medium transition-colors">Contact</a>
            </nav>
          </div>

          <div className="flex items-center gap-4 ml-4">
            <div className="hidden md:flex items-center bg-primary/5 dark:bg-primary/10 rounded-full px-4 py-1.5 border border-primary/10">
              <span className="material-symbols-outlined text-primary text-lg mr-2">search</span>
              <input className="bg-transparent border-none focus:ring-0 text-sm w-40 placeholder:text-slate-400" placeholder="Search matches..." type="text"/>
            </div>
          </div>
          <button className="bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-lg text-sm font-bold shadow-lg shadow-primary/20 transition-all">
                        Login
          </button>
        </div>
      </header>
  );
};