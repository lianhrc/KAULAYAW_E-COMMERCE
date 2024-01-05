import React from 'react'
import AdminSideSection from './AdminSideSection';

const Admin = () =>{
  return (
    <div className='AdminPage'>
       <AdminSideSection />
      <div className="AdminPageContainer">
        <div id="adminheadersection">Admin Panel</div>
        <div id="adminsection1">Section 1 Content</div>
        <div id="adminsection2">Section 2 Content</div>
        <div id="adminsection3">Section 3 Content</div>
        <div id="adminsection4">Section 4 Content</div>
      
      </div>
    </div>
  )
}

export default Admin
