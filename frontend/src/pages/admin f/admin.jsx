import React, { useEffect, useState } from 'react'
import AdminSideSection from './AdminSideSection';
import updateicon from '../img/updateicon.png';
import deleteicon from '../img/deleteicon.png';
import Modal from 'react-modal';


import axios from 'axios'
import { useNavigate } from 'react-router-dom';



const Admin = () =>{

  const [beans, setBeans] = useState([])

  useEffect(()=>{
    const fetchAllBeans = async () =>{
        try {
            const res = await axios.get("http://localhost:8801/beans")
            setBeans(res.data);
        } catch (error) {
            console.error(error)
        }
    }
    fetchAllBeans()
},[])


const f = new Intl.NumberFormat("en-us",{
  currency: "PHP",
  style: "currency"
})


const [isAddModalOpen, setAddModalOpen] = useState(false);

const openAddModal = () => {
  setAddModalOpen(true);
};

const closeAddModal = () => {
  setAddModalOpen(false);
};


const [inputs, setInputs] = useState({
    coffeeid:"",
    coffeename:"",
    coffeecover:"",
    coffeeprice:null
});

const navigate = useNavigate()

const handleChange = (e) => {
  setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
};

const handleAddClick = async () => {
  try {
    await axios.post("http://localhost:8801/beans", inputs);
    console.log("Item added successfully!");
    navigate("/admin");
    closeAddModal(); // Close the modal after successful submission
  } catch (error) {
    console.error("Error adding item:", error);
  }
};


console.log(inputs)

const handleclickDelete = async (id) =>{
  try {
    await axios.delete("http://localhost:8801/beans/"+id)
    window.location.reload()
  } catch (error) {
    console.log(error);
  }
}

  return (
    <div className='AdminPage'>
      <AdminSideSection />
      <div className="AdminPageContainer">
       
          <div id="adminsection1">
            <div className="section1contentcontainer">  
            <table>
               <thead>
                <tr>
                  <th>Beans id</th>
                  <th>Beans name</th>
                  <th>Beans Price</th>
                  <th>Beans Photo</th>
                  <th>Actions</th>
                </tr>
                
            </thead>
            <tbody>

                {beans.map(bean=>(
                  <tr key={bean.coffeeid}>
                    <td>{bean.coffeeid}</td>
                    <td>{bean.coffeename}</td>
                    <td>{f.format(bean.coffeeprice)}</td>
                    <td>{bean.coffeecover}</td>
                    <td className='actionstd'> 
                      <button className='update'><img src={updateicon} alt="" /></button>
                      <button className='delete' onClick={() => handleclickDelete(bean.coffeeid)}><img src={deleteicon} alt="" /></button>
                    </td>
                 </tr>
                ))}

            </tbody>
        </table>
        </div>
        <button onClick={openAddModal} className='Additembtn' >Add Item</button>
                    {/* Add Item Modal */}
      {isAddModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <span className="close-button" onClick={closeAddModal}>
              &times;
            </span>
            <form onSubmit={handleAddClick}>

            
              <h2>Add Item</h2>
              <input className='addinputfield' type="text" placeholder="beans name" onChange={handleChange} name="coffeename" />
              <input className='addinputfield' type="number" placeholder="beans price" onChange={handleChange} name="coffeeprice" />
              <input className='addinputfield' type="text" placeholder="beans photo" onChange={handleChange} name="coffeecover" />

    
              <button className='subbtn' type='submit'>
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
        </div>

        <div id="adminsection2">
          <div className="section2contentcontainer">
          
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
