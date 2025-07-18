import React, { useEffect, useState } from "react";
import { getAllUsers } from "../../api/user.api"; 

const Demo = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers()
      .then((data) => setUsers(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h2>All Users</h2>
      {users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user._id}>
              {user.name} — {user.email} — {user.age}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Demo;
