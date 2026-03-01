import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function LoginPage() {
  const navigate = useNavigate();
  const [identity, setIdentity] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
  
      const res = await axios.post("http://localhost:5000/api/login", {
        email: identity,
        password,
      });

      const data = res.data;

      localStorage.setItem("adminUser", JSON.stringify(data.user));
      console.log("user object:", data.user); 

      setLoading(false);
      navigate("/dashboard"); 
    } catch (err) {
      console.error(err);

      if (err.response) {
      
        setError(err.response.data.message || "Login failed");
      } else if (err.request) {
        setError("No response from server. Try again.");
      } else {

        setError("Something went wrong. Try again.");
      }
      setLoading(false);
    }
  };

  return (

    
    <div>
    
      <button
        onClick={() => navigate("/")}
        className="absolute top-6 left-6 w-auto bg-primary text-white py-3.5 px-4 rounded-lg font-bold text-sm shadow-lg shadow-primary/20 hover:bg-primary/90 hover:shadow-xl hover:-translate-y-0.5 transition-all active:translate-y-0 flex items-center justify-center gap-2 z-20"
      >
        <span className="material-symbols-outlined text-base">arrow_back</span>
        Home
      </button>

  <div className="bg-background-light text-slate-900 min-h-screen flex items-center justify-center p-6 relative overflow-hidden">
    <div className="watermark-bg"></div>

    <div className="flex flex-col items-center w-full max-w-md relative z-10">

      <div className="flex flex-col items-center gap-3 mb-8">
        <div className="size-16 bg-white rounded-2xl flex items-center justify-center text-primary border border-slate-100 shadow-sm">
          <span className="material-symbols-outlined text-4xl">school</span>
        </div>
        <div className="flex flex-col items-center text-center">
          <h2 className="text-primary text-2xl font-black leading-tight tracking-tight">UPV Pahampang</h2>
          <span className="text-xs uppercase tracking-[0.15em] font-bold text-slate-500">Admin Console</span>
        </div>
      </div>

      <div className="login-card">
        <div className="mb-8 text-center">
          <h1 className="text-lg font-bold text-slate-900">Sign In</h1>
          <p className="text-sm text-slate-500 mt-1">Access the sports management dashboard.</p>
        </div>

        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>

          <div className="input-group w-full">
          <label htmlFor="identity" className="block mb-1 font-semibold text-sm">Email or Username</label>
  
            <div className="relative w-full flex items-center">
                <span className="material-symbols-outlined absolute left-3 text-slate-400 text-[20px]">
                person
                </span>
                <input id="identity" type="text" placeholder="admin@upv.edu.ph" required value={identity} onChange={(e) => setIdentity(e.target.value)} className="input-field w-full pl-10 py-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"/>
            </div>
            </div>


         <div className="input-group w-full">
            <div className="flex justify-between items-center mb-1.5">
                <label htmlFor="password" className="mb-0">Password</label>
            </div>

            <div className="relative w-full flex items-center">
               
                <span className="material-symbols-outlined absolute left-3 text-slate-400 text-[20px]">lock</span>

                <input id="password" type="password" placeholder="••••••••••••" required value={password} onChange={(e) => setPassword(e.target.value)} className="input-field w-full pl-10 pr-10 py-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"/>
                <button type="button" className="absolute right-3 flex items-center justify-center text-slate-400 hover:text-slate-600 transition-colors">
                    <span className="material-symbols-outlined text-[20px]">visibility</span>
                </button>
            </div>
        </div>

          <div className="flex items-center justify-between pt-1">
            <div className="flex items-center gap-2">
              <input className="size-4 rounded border-slate-300 text-secondary focus:ring-secondary/20 cursor-pointer" id="remember" type="checkbox" />
              <label className="text-xs text-slate-600 font-medium cursor-pointer select-none" htmlFor="remember">Remember me</label>
            </div>
            <a className="text-xs font-semibold text-secondary hover:text-secondary/80 hover:underline transition-colors" href="#">Forgot Password?</a>
          </div>
          
          {error && <p className="text-xs text-red-500 mt-1">{error}</p>}

          <button className="w-full bg-primary text-white py-3.5 rounded-lg font-bold text-sm shadow-lg shadow-primary/20 hover:bg-primary/90 hover:shadow-xl hover:-translate-y-0.5 transition-all active:translate-y-0 flex items-center justify-center gap-2 mt-2" type="submit" disabled={loading} onClick={handleLogin}>
            {loading ? "Signing In..." : "Sign In"}
          </button>

        </form>
      </div>

      <div className="mt-10 text-center">
        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.15em] mb-4">University of the Philippines Visayas</p>
        <div className="flex items-center justify-center gap-6 opacity-70 hover:opacity-100 transition-opacity">
          <img alt="CAS" className="h-8 grayscale hover:grayscale-0 transition-all cursor-help" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAitNXuNjoCoUt3maa_iJHyMdWyg11fDGwma-R16LGjHrsIqmZBhEjg1lL--QffUdmMKWn74UakC4WEl3WkSn0FNnqXsl8TRG085b-_ENQVmogSKzyGZgmg6tBYyatzoldenO5KdRBKx-bDKKG8K9gazPVEduW5zgeVwX2kf6MdJUnRCONSdjHGaTgGBRrw3jHqdjZQXWzsJlhuyVB7DOsLH3zxr-9f5x5NGAbwuO_NFa4crRn3U_i9WUErIoawSypZZaTAZShyJHo" />
          <img alt="SOTECH" className="h-8 grayscale hover:grayscale-0 transition-all cursor-help" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8OQzQdA7l55Pk78uyDAmpiJNWiEywNf8zXFvnLJFnAYk1y772GAij9_LYtfPIEnG9CRLAozvf0yDV6t_ZxPggfCuGrRuFCb9mgdsIGcqV1UGB7Vnb9PjWiGg7EvfZFaOzbBH42albhmcWeclj0D5TElu_XMsm1gUO_fkKWw7BBP1QgqDy62IgdxziG94DalkRtaFoAEmNVZBQBCUKGKj1I4XMT0VUeQM-GSz4l4dBmcJYflGghtPffK26-0yqGkUnJh46kaLaunw" />
          <img alt="CFOS" className="h-8 grayscale hover:grayscale-0 transition-all cursor-help" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNAC8sji-ODOgUDQitdIepGpUUx1IoP30v1n54iCqvqtH5UlpjtH_Z1t5t-KJVZAn3_dUzMdf9EjXaULa_95qpUghou7tNqHYSd_gtNvcGzSVG6ChGFG4fLzGyfjBSywL7zcrTfck50U3GAFSZu69qpPyNNmOZfLrVV2wHkilmdeNZwvjqKU3Ldy4Xny_FHP7-tfbycaULOOV5bPQtZ9Ex28u1fMuvGsFgrM8li0p9qCyjAuHNxmHlJCFL6G3u9CnBCRbmsFClqLY" />
          <img alt="UPVTC" className="h-8 grayscale hover:grayscale-0 transition-all cursor-help" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBu2XtPPnqBMPOAS3iHISku7w_mTOf2M23-Co_YnRukk3si-LRbc5geoq6FhkrIGF6m41b-BJ_YtOPpnLfR95T6rXGMOrXYEd1R54IYgfL8t8bnW2FjGrmCpCxL9IRCmM3wJ7JnhfpYaa3wpGjlG6vRYmbnYL3b9Wan7cnXh0zsBOYhbrXZfmyDyTl1gkBc82shEk6jMY0Aa5-4W_yJODEC_9QnbHpW3s1OdWlfK9MH7EV1ODWGgwS94AScfkfwwdUbSYNjOwCf8Qc" />
        </div>
        <p className="text-[10px] text-slate-400 mt-6">© 2026 Pahampang Management System. <br />Authorized Personnel Only.</p>
      </div>

    </div>
  </div>
</div>
  );
}

export default LoginPage;