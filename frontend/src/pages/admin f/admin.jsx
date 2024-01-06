import React from 'react'
import AdminSideSection from './AdminSideSection';
import updateicon from '../img/updateicon.png';
import deleteicon from '../img/deleteicon.png';

const Admin = () =>{
  return (
    <div className='AdminPage'>
       <AdminSideSection />
      <div className="AdminPageContainer">
        <div id="adminheadersection">Admin Panel</div>
        <div id="adminsection1">
          <div className="section1contentcontainer">
           
          </div>
        </div>
        <div id="adminsection2">
          <div className="section2contentcontainer">
          <table>
                <thead>
                    <tr>
                      <th>Product id</th>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Stock</th>
                      <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                      <td>1001</td>
                      <td>Liyag Blends</td>
                      <td>300.00</td>
                      <td>5</td>
                      <td className='actionstd'> 
                        <button className='update'><img src={updateicon} alt="" /></button>
                        <button className='delete'><img src={deleteicon} alt="" /></button>
                      </td>
                    </tr>

                    <tr>
                      <td>1001</td>
                      <td>Liyag Blends</td>
                      <td>300.00</td>
                      <td>5</td>
                      <td className='actionstd'> 
                        <button className='update'><img src={updateicon} alt="" /></button>
                        <button className='delete'><img src={deleteicon} alt="" /></button>
                      </td>
                    </tr>

                    <tr>
                      <td>1001</td>
                      <td>Liyag Blends</td>
                      <td>300.00</td>
                      <td>5</td>
                      <td className='actionstd'> 
                        <button className='update'><img src={updateicon} alt="" /></button>
                        <button className='delete'><img src={deleteicon} alt="" /></button>
                      </td>
                    </tr>

                    <tr>
                      <td>1001</td>
                      <td>Liyag Blends</td>
                      <td>300.00</td>
                      <td>5</td>
                      <td className='actionstd'> 
                        <button className='update'><img src={updateicon} alt="" /></button>
                        <button className='delete'><img src={deleteicon} alt="" /></button>
                      </td>
                    </tr>

                    <tr>
                      <td>1001</td>
                      <td>Liyag Blends</td>
                      <td>300.00</td>
                      <td>5</td>
                      <td className='actionstd'> 
                        <button className='update'><img src={updateicon} alt="" /></button>
                        <button className='delete'><img src={deleteicon} alt="" /></button>
                      </td>
                    </tr>
                </tbody>
            </table>
          </div>
        </div>
        <div id="adminsection3">
          <div className="section3contentcontainer">
                
                </div>
        </div>
        <div id="adminsection4">
        <div className="section4contentcontainer">
                
                </div>
        </div>
      </div>
    </div>
  )
}

export default Admin
