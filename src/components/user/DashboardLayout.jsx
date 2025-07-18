import { useNavigate, Outlet } from "react-router-dom";
import { useEffect } from "react";
import Sidebar from "../../constants/Sidebar";
import UserDashboardNav from "./UserDashboardNav";

const DashboardLayout = ({ user }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || user.role !== "user") {
      navigate("/login");
    }
  }, [user, navigate]);

  if (!user) return null; 

  return (
    <div className="min-h-screen bg-gray-50">
      <UserDashboardNav user={user} />
     <div className="flex flex-col lg:flex-row sm:px-16 px-8 py-8 gap-4">
  <Sidebar />
  
  <main className="flex-1 p-6 bg-white shadow-lg">
    <Outlet />
  </main>
</div>

    </div>
  );
};

export default DashboardLayout;
