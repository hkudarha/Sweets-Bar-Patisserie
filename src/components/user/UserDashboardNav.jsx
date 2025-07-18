import { FaEnvelope, FaPhone, FaUserCircle, FaIdBadge } from "react-icons/fa";

const UserDashboardNav = ({ user }) => {
  if (!user) return null;

  return (
    <div className="bg-white shadow sm:px-[8rem] border-t-1 border-gray-300 px-[2rem] py-4 flex flex-wrap md:flex-nowrap items-center justify-between rounded gap-4">
      <div className="flex items-center gap-3">
        {user.picture ? (
          <img
            src={user.picture}
            alt={user.name}
            className="w-[5rem] h-[5rem] rounded-full object-cover"
          />
        ) : (
          <FaUserCircle className="text-5xl [#0e4d65]" />
        )}
        <h2 className="text-xl font-semibold">{user.name}</h2>
      </div>

      <div className="flex items-center gap-1">
        <FaEnvelope className="text-[#0e4d65]" />
        <span>{user.email}</span>
      </div>

      {user.phone && (
        <div className="flex items-center gap-1">
          <FaPhone className="text-[#0e4d65]" />
          <span>{user.phone}</span>
        </div>
      )}

      {user.role && (
        <div className="flex items-center gap-1">
          <FaIdBadge className="text-[#0e4d65]" />
          <span className="capitalize">{user.role}</span>
        </div>
      )}
    </div>
  );
};

export default UserDashboardNav;
