const Footer = () => {
     return (
        <footer className="bg-slate-900 text-white mt-12 py-12">
            <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="col-span-1 md:col-span-2 space-y-4">
                <div className="flex items-center gap-3">
                    <div className="bg-primary p-1.5 rounded-lg text-white">
                    <span className="material-symbols-outlined text-2xl">sports_score</span>
                    </div>
                    <h2 className="text-xl font-black tracking-tight">UPV PAHAMPANG</h2>
                </div>
                <p className="text-slate-400 max-w-sm text-sm">Official sports management portal of the University of the Philippines Visayas. Celebrating unity, sportsmanship, and academic excellence.</p>
                </div>
                <div className="space-y-4">
                <h4 className="font-bold text-sm uppercase tracking-widest text-primary">Quick Links</h4>
                <ul className="space-y-2 text-sm text-slate-400">
                    <li><a className="hover:text-white transition-colors" href="#">Event History</a></li>
                    <li><a className="hover:text-white transition-colors" href="#">List of Sports</a></li>
                    <li><a className="hover:text-white transition-colors" href="#">Medal Tally History</a></li>
                    <li><a className="hover:text-white transition-colors" href="#">Pahampang Rules</a></li>
                </ul>
                </div>
                <div className="space-y-4">
                <h4 className="font-bold text-sm uppercase tracking-widest text-primary">Support</h4>
                    <ul className="space-y-2 text-sm text-slate-400">
                    <li><a className="hover:text-white transition-colors" href="#">Contact Committee</a></li>
                    <li><a className="hover:text-white transition-colors" href="#">Report Score Issue</a></li>
                    <li><a className="hover:text-white transition-colors" href="#">Help Center</a></li>
                    <li><a className="hover:text-white transition-colors" href="#">Terms of Service</a></li>
                    </ul>
                </div>
            </div>

            <div className="max-w-[1280px] mx-auto px-6 mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
                <p>© 2024 University of the Philippines Visayas. All Rights Reserved.</p>
                <div className="flex gap-6">
                <a className="hover:text-white transition-colors" href="#">Facebook</a>
                <a className="hover:text-white transition-colors" href="#">Twitter</a>
                <a className="hover:text-white transition-colors" href="#">Instagram</a>
                </div>
            </div>
        </footer>
        
     );

};

export default Footer;