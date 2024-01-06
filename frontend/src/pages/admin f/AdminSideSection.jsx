import React from 'react';
import iconlogo from '../img/icon-logo.png';



const AdminSideSection = () => {
  return (
    <aside className="admin-side-section">
            <img className='adminlogo' src={iconlogo} alt="" />
      <nav>
        <ul>
          <li><a href="#adminsection1">Home</a></li>
          <li><a href="#adminsection2">Products</a></li>
          <li><a href="#adminsection3">Analytics</a></li>
          <li><a href="#adminsection4">Settings</a></li>
        </ul>
      </nav>
    </aside>
  );
};

export default AdminSideSection;
