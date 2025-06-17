import { useNavigate } from "react-router-dom";
import supabase from "../helper/supabase";

const Dashboard = () => {
  const navigate = useNavigate();
  const signout = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) throw error;
    navigate("/login");
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-[#212121] text-amber-300  flex-col ">
      <span className="mb-5">Dashboard</span>
      <button
        onClick={() => signout()}
        className="px-4 py-2 bg-amber-300 rounded-lg text-[#212121]"
      >
        Sign out
      </button>
    </div>
  );
};

export default Dashboard;
