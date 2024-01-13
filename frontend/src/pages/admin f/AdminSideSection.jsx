import React from 'react';
import iconlogo from '../img/icon-logo.png';
import usersicon from '../img/usersicon.png'
import productsicon from '../img/productsicon.png'
import logout from '../img/logouticon.png'



const AdminSideSection = () => {
  return (
    <aside className="admin-side-section">
        <div className="imgcontainerside">
        <img className='adminlogo' src={iconlogo} alt="" />
      </div>     
       
    <div className="sidecontent">  
    <nav>
        <ul>
          <li><a href="#adminsection1"><img src={productsicon} alt="" />Products </a></li>
          <li><a href="#adminsection2"><img src={usersicon} alt="" />Users</a></li>
          <li><a href="#adminsection3"><img src={logout} alt="" />Logout</a></li>
        </ul>
      </nav>
      </div>
    </aside>
  );
};

export default AdminSideSection;
