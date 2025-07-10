import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserDashboardNav = ({ user }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("user");
        navigate("/");

    };
 

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded">
            <h2 className="text-2xl font-bold mb-4">Welcome, {user.name} 👋</h2>

            {user.picture && (
                <div className="mb-4">
                    <img
                        src={user.picture}
                        alt={user.name}
                        className="w-24 h-24 rounded-full mx-auto"
                    />
                </div>
            )}

            <div className="space-y-2 text-gray-700">
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Role:</strong> {user.role}</p>
            </div>

            <button
                onClick={handleLogout}
                className="mt-6 w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
            >
                Logout
            </button>
        </div>
    );
};

export default UserDashboardNav;
