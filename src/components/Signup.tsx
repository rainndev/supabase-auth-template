import { useState } from "react";
import supabase from "../helper/supabase";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider";

const Signup = () => {
  const navigate = useNavigate();
  const { user, loading } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  //check if user already login, is true go to dashboard
  if (loading) return <p>Loading...</p>;
  if (user) return <Navigate to="/dashboard" replace />;

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setMessage("");
    e.preventDefault();

    console.log("email", email);
    console.log("password", password);
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) return setMessage("Invalid Credentials");
    if (data) return navigate("/login");
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-[#212121] text-amber-300">
      <form onSubmit={onSubmit} className="flex flex-col gap-2 w-full max-w-xs">
        <p className="text-3xl text-white/80 ">Signup</p>
        {message && <p className="text-xl text-white/80 mb-5">{message}</p>}
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          id="email"
          className="p-2 ring rounded-lg ring-amber-300"
        />
        <label htmlFor="password">Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 ring rounded-lg ring-amber-300"
          type="password"
          id="password"
        />
        <button className="bg-amber-300 text-[#212121] p-2 mt-2 rounded-lg">
          Login
        </button>
      </form>
    </div>
  );
};

export default Signup;
