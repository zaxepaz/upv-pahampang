import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate(); 

  const handleLogin = () => {
    navigate("/dashboard"); 
  };

  return (
    <div className="p-6">
        <p>Admin Login Page</p>
        <button onClick={handleLogin} className="bg-primary text-white px-4 py-2 rounded-lg mt-4">Login</button>
    </div>
  );
}

export default LoginPage;