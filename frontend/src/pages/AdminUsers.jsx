import  { useEffect, useState } from "react";
import axios from "axios";

const AdminUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/v1/admin/users");
        setUsers(response.data);
      } catch (error) {
        console.error("Error Fetching Users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h2>All Registered Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            {user.fullname} - {user.email} - {user.role}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminUsers;
//frontend/pages/AdminUsers.jsx