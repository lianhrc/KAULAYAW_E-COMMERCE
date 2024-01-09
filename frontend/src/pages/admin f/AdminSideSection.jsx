import React from 'react';
import iconlogo from '../img/icon-logo.png';



const AdminSideSection = () => {
  return (
    <aside className="admin-side-section">
            <img className='adminlogo' src={iconlogo} alt="" />
      <nav>
        <ul>
          <li><a href="#adminsection1">Products</a></li>
          <li><a href="#adminsection2">Order History</a></li>
          <li><a href="#adminsection3">Users</a></li>
          <li><a href="#adminsection4">Inventory</a></li>
        </ul>
      </nav>
    </aside>
  );
};

export default AdminSideSection;
