import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate(); 

  const handleLogin = () => {
    navigate("/dashboard"); 
  };

  return (
    <div className="p-6">
        <p>Admin Login Page</p>
    </div>
  );
}

export default LoginPage;