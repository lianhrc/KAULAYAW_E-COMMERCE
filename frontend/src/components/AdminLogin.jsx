import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminLogin = ({ onLogin }) => {
  const [adminInput, setAdminInput] = useState({
    uname: "",
    passw: ""
  });

  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        const res = await axios.get("http://localhost:8801/admin_users");
        setAdminUsers(res.data); // Set the admin users in state
      } catch (err) {
        console.log(err);
      }
    };

    fetchAdmins();
  }, []);

  const [adminUsers, setAdminUsers] = useState([]);

  const handleChange = (e) => {
    setAdminInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const matchedUser = adminUsers.find(
      (user) =>
        user.admin_username === adminInput.uname && user.admin_password === adminInput.passw
    );

    if (matchedUser) {
      setTimeout(() => {
        window.location.href = '/admin';
      }, 1000);
    } else {
      alert("Incorrect username or password!");
    }
  };

  return (
    <div className='adminloginpage'>
      <div className="adminlogincontainer">
        <div className="adminloginimgcontainer">
          {/* Add any content for the image container if needed */}
        </div>

        <input
          type='text'
          placeholder='Username'
          name="uname"
          value={adminInput.uname}
          onChange={handleChange}
        />
        <input
          type='password'
          placeholder='Password'
          name="passw"
          value={adminInput.passw}
          onChange={handleChange}
        />
        <button typeof='submit' onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default AdminLogin;
