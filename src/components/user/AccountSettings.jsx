import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const AccountSettings = ({ setCurrentUser, setShowAccountDropdown }) => {
  const [showDeleteFlow, setShowDeleteFlow] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleDelete = () => {
    if (!agreed) {
      setError("You must agree with the above points before continuing.");
      return;
    }

    localStorage.removeItem("user");
    setCurrentUser(null);
    setShowAccountDropdown(false);
    navigate("/");
    window.location.reload();
  };

  return (
    <div className="sm:p-[1rem] p-[0.5rem]">
      {!showDeleteFlow ? (
        <div>
          <h3 className=" mb-4">Account Settings</h3>
          <div className="border border-[#0e4d65] p-4">
            <h4 className="bg-white mb-4 text-lg">
              Data & Privacy Settings
            </h4>
            <button
              onClick={() => setShowDeleteFlow(true)}
              className=""
            >
              Delete Account
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div>
            <p
              onClick={() => {
                setShowDeleteFlow(false);
                setError("");
                setAgreed(false);
              }}
              className="text-xl mb-4 cursor-pointer"
            >
              <FaArrowLeft />
            </p>
            <h3 className="font-bold text-[1.5rem]">Delete My Account</h3>
          </div>
          <p className="mb-2">
            Sorry to hear that you would like to Delete your account!
          </p>
          <p className="mb-4">
            We will deactivate your account for 30 days, and delete your
            account after that. During this period you will not be able to
            access your account, in case you want to reactivate your account
            during this period, you can get in touch with our Support Team.
          </p>
          <p className="mb-4">
            Once your account is deleted, you will lose all your stored data
            like
          </p>
          <ul className="list-disc ml-6 space-y-1 mb-4">
            <li>past orders</li>
            <li>saved address</li>
            <li>your saved occasions</li>
            <li>saved payment information</li>
            <li>reward points</li>
          </ul>
          <div className="mb-4 flex items-center gap-2">
            <input
              type="checkbox"
              id="agree"
              checked={agreed}
              onChange={(e) => {
                setAgreed(e.target.checked);
                if (e.target.checked) setError("");
              }}
            />
            <label htmlFor="agree">I agree with the above points</label>
          </div>
          {error && (
            <p className="text-red-600 mb-2">{error}</p>
          )}
          <button
            onClick={handleDelete}
            className=""
          >
            Continue
          </button>
        </div>
      )}
    </div>
  );
};

export default AccountSettings;
