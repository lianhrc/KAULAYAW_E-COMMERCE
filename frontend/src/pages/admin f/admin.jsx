import React, { useEffect, useState } from 'react';
import AdminSideSection from './AdminSideSection';
import updateicon from '../img/updateicon.png';
import deleteicon from '../img/deleteicon.png';
import Modal from 'react-modal';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const [beans, setBeans] = useState([]);
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [isUpdateModalOpen, setUpdateModalOpen] = useState(false);
  const [isUpdateMode, setIsUpdateMode] = useState(false); // Add this line
  const [selectedItem, setSelectedItem] = useState(null);
  const [inputs, setInputs] = useState({
    coffeename: '',
    coffeecover: '',
    coffeeprice: null,
  });



  const navigate = useNavigate();

  useEffect(() => {
    const fetchAllBeans = async () => {
      try {
        const res = await axios.get('http://localhost:8801/beans');
        setBeans(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAllBeans();
  }, []);

  const f = new Intl.NumberFormat('en-us', {
    currency: 'PHP',
    style: 'currency',
  });

  const openAddModal = () => {
    setAddModalOpen(true);
  };

  const closeAddModal = () => {
    setAddModalOpen(false);
  };

  const openUpdateModal = (bean) => {
    setSelectedItem(bean);
    setInputs({
      coffeename: bean.coffeename,
      coffeecover: bean.coffeecover,
      coffeeprice: bean.coffeeprice,
    });
    setUpdateModalOpen(true);
    setIsUpdateMode(true); // Add this line to set isUpdateMode to true
  };

  const closeUpdateModal = () => {
    setUpdateModalOpen(false);
    setSelectedItem(null);
    setInputs({
      coffeename: '',
      coffeecover: '',
      coffeeprice: null,
    });
    setIsUpdateMode(false); // Add this line to reset isUpdateMode
  };

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleAddClick = async () => {
    try {
      console.log('Handling Add Click');
      const formData = new FormData();
      formData.append('coffeename', inputs.coffeename);
      formData.append('coffeecover', inputs.coffeecover);
      formData.append('coffeeprice', inputs.coffeeprice);
  
      await axios.post('http://localhost:8801/beans', formData);
      console.log('Item added successfully!');
      navigate('/admin');
      closeAddModal();
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };
  
  

  const handleUpdateClick = async () => {
    try {
      const updatedItem = {
        ...selectedItem,
        coffeename: inputs.coffeename,
        coffeeprice: inputs.coffeeprice,
        coffeecover: inputs.coffeecover,
      };
  
      await axios.put(`http://localhost:8801/beans/${selectedItem.coffeeid}`, updatedItem);
  
      console.log('Item updated successfully!');
  
      // Update the local state with the updated item
      setBeans((prevBeans) =>
        prevBeans.map((bean) => (bean.coffeeid === selectedItem.coffeeid ? updatedItem : bean))
      );
  
      // Close the modal after successful submission
      closeUpdateModal();
  
      // Reset the state
      setSelectedItem(null);
      setInputs({
        coffeename: '',
        coffeecover: '',
        coffeeprice: null,
      });
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };
  

  const handleclickDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8801/beans/${id}`);
      const updatedBeans = beans.filter((bean) => bean.coffeeid !== id);
      setBeans(updatedBeans);
    } catch (error) {
      console.log(error);
    }
  };

  

  return (
    <div className='AdminPage'>
      <AdminSideSection />
      <div className='AdminPageContainer'>
        <div id='adminsection1'>
          <div className='section1contentcontainer'>
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
                {beans.map((bean) => (
                  <tr key={bean.coffeeid}>
                    <td>{bean.coffeeid}</td>
                    <td>{bean.coffeename}</td>
                    <td>{f.format(bean.coffeeprice)}</td>
                    <td>
                    <img src={`http://localhost:8801/public/images/${bean.coffeecover}`} width="50" height="50" alt={bean.coffeename} />
                  </td>

                    <td className='actionstd'>
                      <button className='update' onClick={() => openUpdateModal(bean)}>
                        <img src={updateicon} alt='' />
                      </button>
                      {isUpdateModalOpen && (
                        <div className='modal-overlay'>
                          <div className='modal-content'>
                            <span className='close-button' onClick={closeUpdateModal}>
                              &times;
                            </span>
                            <form onSubmit={(e) => e.preventDefault()}>
                                <h2>Update Item</h2>
                                <input
                                  className="addinputfield"
                                  type="text"
                                  placeholder="beans name"
                                  value={inputs.coffeename}
                                  onChange={handleChange}
                                  name="coffeename"
                                />
                                <input
                                  className="addinputfield"
                                  type="number"
                                  placeholder="beans price"
                                  value={inputs.coffeeprice}
                                  onChange={handleChange}
                                  name="coffeeprice"
                                />
                                <input
                                  className="addinputfield"
                                  type="file"
                                  placeholder="beans photo"
                                  onChange={handleChange}
                                  name="coffeecover"
                                />
                                <button className="subbtn" onClick={handleUpdateClick} type="button">
                                  Submit
                                </button>
                              </form>

                          </div>
                        </div>
                      )}
                      <button className='delete' onClick={() => handleclickDelete(bean.coffeeid)}>
                        <img src={deleteicon} alt='' />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button onClick={openAddModal} className='Additembtn'>
            Add Item
          </button>
          {/* Add Item Modal */}
          {isAddModalOpen && (
            <div className='modal-overlay'>
              <div className='modal-content'>
                <span className='close-button' onClick={closeAddModal}>
                  &times;
                </span>
                <form onSubmit={handleAddClick} encType="multipart/form-data">

                  <h2>Add Item</h2>
                  <input
                    className='addinputfield'
                    type='text'
                    placeholder='beans name'
                    onChange={handleChange}
                    name='coffeename'
                  />
                  <input
                    className='addinputfield'
                    type='number'
                    placeholder='beans price'
                    onChange={handleChange}
                    name='coffeeprice'
                  />
                  <input
                    className='addinputfield'
                    type='file'
                    placeholder='beans photo'
                    onChange={(e) => setInputs((prev) => ({ ...prev, coffeecover: e.target.files[0] }))}
                    name='coffeecover'
                  />
                  <button className='subbtn' type='submit'>
                    Submit
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>

        <div id='adminsection2'>
          <div className='section2contentcontainer'></div>
        </div>
        <div id='adminsection3'>
          <div className='section3contentcontainer'></div>
        </div>
        <div id='adminsection4'>
          <div className='section4contentcontainer'></div>
        </div>
      </div>
    </div>
  );
};

export default Admin;