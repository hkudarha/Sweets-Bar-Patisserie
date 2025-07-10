import { useEffect } from "react";
import UserDashboardNav from "./UserDashboardNav";


const UserDashboard = ({ user }) => {



  return (
    <div>
      <UserDashboardNav user={user} />
    </div>
  );
};

export default UserDashboard;
