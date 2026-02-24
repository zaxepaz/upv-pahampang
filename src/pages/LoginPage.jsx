import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate(); 

  const handleLogin = () => {
    navigate("/dashboard"); 
  };

  return (
    <button
      className="bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-lg text-sm font-bold shadow-lg shadow-primary/20 transition-all"
      onClick={handleLogin} 
    >
      Login
    </button>
  );
}

export default LoginPage;