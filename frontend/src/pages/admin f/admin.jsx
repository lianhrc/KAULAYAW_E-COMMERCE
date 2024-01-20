import React, { useEffect, useState } from 'react';

import AdminSideSection from './AdminSideSection';
import updateicon from '../img/updateicon.png';
import deleteicon from '../img/deleteicon.png';
import axios from 'axios';

const Admin = () => {
  const [beans, setBeans] = useState([]);                           // State to manage the list of beans
  const [isAddModalOpen, setAddModalOpen] = useState(false);        // State to manage the visibility of the add item modal
  const [isUpdateModalOpen, setUpdateModalOpen] = useState(false);  // State to manage the visibility of the update item modal
  const [selectedItem, setSelectedItem] = useState(null);           // State to store the currently selected item for update
  const [inputs, setInputs] = useState({                            // State to manage form input values
    coffeename: '',
    coffeecover: '',
    coffeeprice: null,
  });

  // to fetch all beans from the server when the component mounts
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

  //formatter for currency
  const f = new Intl.NumberFormat('en-us', {
    currency: 'PHP',
    style: 'currency',
  });

  // Functions to control the visibility of add and update modals
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
  };

  const closeUpdateModal = () => {
    setUpdateModalOpen(false);
    setSelectedItem(null);
    setInputs({
      coffeename: '',
      coffeecover: '',
      coffeeprice: null,
    });
  };

  // Function to handle changes in form inputs
  const handleChange = (e) => {
    if (e.target.name === 'coffeecover') {
      // If the input is a file (coffeecover), update with the selected file
      setInputs((prev) => ({ ...prev, coffeecover: e.target.files[0] }));
    } else {
      // If the input is not a file, update with the input value
      setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };

  // Function to handle adding a new item
  const handleAddClick = async () => {
    try {
      // Create form data to send as part of the request
      const formData = new FormData();
      formData.append('coffeename', inputs.coffeename);
      formData.append('coffeecover', inputs.coffeecover);
      formData.append('coffeeprice', inputs.coffeeprice);

      // Send a POST request to add a new bean
      const response = await axios.post('http://localhost:8801/beans', formData);
      console.log('API response after adding:', response.data);

      // Fetch the updated list of products after adding a new one
      const res = await axios.get('http://localhost:8801/beans');
      setBeans(res.data);

      // Close the add item modal
      closeAddModal();
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  // Function to handle updating an existing item
  const handleUpdateClick = async () => {
    try {
      // Create an updated item object with the new values
      const updatedItem = {
        ...selectedItem,
        coffeename: inputs.coffeename,
        coffeeprice: inputs.coffeeprice,
      };

      // Check if the coffeecover input is a file
      if (inputs.coffeecover instanceof File) {
        // If it's a file, create form data for file upload
        const formData = new FormData();
        formData.append('coffeename', inputs.coffeename);
        formData.append('coffeecover', inputs.coffeecover);
        formData.append('coffeeprice', inputs.coffeeprice);

        // Send a PUT request with form data for file upload
        await axios.put(`http://localhost:8801/beans/${selectedItem.coffeeid}`, formData);
      } else {
        // If it's not a file, send a PUT request with the updated item object
        await axios.put(`http://localhost:8801/beans/${selectedItem.coffeeid}`, updatedItem);
      }

      // Update the beans state with the updated item
      setBeans((prevBeans) =>
        prevBeans.map((bean) => (bean.coffeeid === selectedItem.coffeeid ? updatedItem : bean))
      );

      // Close the update item modal and reset input values
      closeUpdateModal();
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

  // Function to handle deleting an item
  const handleclickDelete = async (id) => {
    try {
      // Send a DELETE request to remove the specified bean
      await axios.delete(`http://localhost:8801/beans/${id}`);
      
      // Update the beans state by filtering out the deleted bean
      const updatedBeans = beans.filter((bean) => bean.coffeeid !== id);
      setBeans(updatedBeans);
    } catch (error) {
      console.error(error);
    }
  };

  // JSX rendering of the Admin component
  return (
    <div className='AdminPage'>
      {/* Render the AdminSideSection component */}
      <AdminSideSection/>
      {/* Main content container for the admin page */}
      <div className='AdminPageContainer'>
        <div id='adminsection1'>
          {/* Container for displaying the list of beans in a table */}
          <div className='section1contentcontainer'>
            <table>
              {/* Table header */}
              <thead>
                <tr>
                  <th>Beans id</th>
                  <th>Beans name</th>
                  <th>Beans Price</th>
                  <th>Beans Photo</th>
                  <th>Actions</th>
                </tr>
              </thead>
              {/* Table body containing rows of beans */}
              <tbody>
                {beans.map((bean) => (
                  <tr key={bean.coffeeid}>
                    <td>{bean.coffeeid}</td>
                    <td>{bean.coffeename}</td>
                    <td>{f.format(bean.coffeeprice)}</td>
                    {/* Display image of the bean (needs correction in the 'src' attribute) */}
                    <td>
                      <img src alt={`image of ${bean.coffeename}`} />
                    </td>
                    {/* Actions column with buttons for updating and deleting beans */}
                    <td className='actionstd'>
                      {/* Button to open the update item modal */}
                      <button className='update' onClick={() => openUpdateModal(bean)}>
                        <img src={updateicon} alt='' />
                      </button>
                      {/* Conditional rendering of the update item modal */}
                      {isUpdateModalOpen && (
                        <div className='modal-overlay'>
                          <div className='modal-content'>
                            {/* Button to close the update item modal */}
                            <span className='close-button' onClick={closeUpdateModal}>
                              &times;
                            </span>
                            {/* Form for updating item information */}
                            <form onSubmit={(e) => e.preventDefault()}>
                              <h2>Update Item</h2>
                              {/* Input field for beans name */}
                              <input
                                className="addinputfield"
                                type="text"
                                placeholder="beans name"
                                value={inputs.coffeename}
                                onChange={handleChange}
                                name="coffeename"
                              />
                              {/* Input field for beans price */}
                              <input
                                className="addinputfield"
                                type="number"
                                placeholder="beans price"
                                value={inputs.coffeeprice}
                                onChange={handleChange}
                                name="coffeeprice"
                              />
                              {/* Input field for beans photo (file upload) */}
                              <input
                                className='addinputfield'
                                type='file'
                                placeholder='beans photo'
                                onChange={(e) =>
                                  setInputs((prev) => ({ ...prev, coffeecover: e.target.files[0] }))
                                }
                                name='coffeecover'
                              />
                              {/* Button to submit the update */}
                              <button className="subbtn" onClick={handleUpdateClick} type="submit">
                                Submit
                              </button>
                            </form>
                          </div>
                        </div>
                      )}
                      {/* Button to delete the bean */}
                      <button className='delete' onClick={() => handleclickDelete(bean.coffeeid)}>
                        <img src={deleteicon} alt='' />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Button to open the add item modal */}
          <button onClick={openAddModal} className='Additembtn'>
            Add Item
          </button>
          {/* Conditional rendering of the add item modal */}
          {isAddModalOpen && (
            <div className='modal-overlay'>
              <div className='modal-content'>
                {/* Button to close the add item modal */}
                <span className='close-button' onClick={closeAddModal}>
                  &times;
                </span>
                {/* Form for adding a new item */}
                <form onSubmit={(e) => {
                  // Call your custom form submission logic
                  handleAddClick();
                  // Prevent default form submission behavior
                  e.preventDefault();
                }} encType="multipart/form-data">
                  <h2>Add Item</h2>
                  {/* Input field for beans name */}
                  <input
                    className='addinputfield'
                    type='text'
                    placeholder='beans name'
                    onChange={handleChange}
                    name='coffeename'
                  />
                  {/* Input field for beans price */}
                  <input
                    className='addinputfield'
                    type='number'
                    placeholder='beans price'
                    onChange={handleChange}
                    name='coffeeprice'
                  />
                  {/* Input field for beans photo (file upload) */}
                  <input
                    className='addinputfield'
                    type='file'
                    placeholder='beans photo'
                    onChange={(e) =>
                      setInputs((prev) => ({ ...prev, coffeecover: e.target.files[0] }))
                    }
                    name='coffeecover'
                  />
                  {/* Button to submit the add item form */}
                  <button className='subbtn' type='submit'>
                    Submit
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>

        {/* Container for additional content in admin section 2 */}
        <div id='adminsection2'>
          <div className='section2contentcontainer'></div>
        </div>
      </div>
    </div>
  );
};

// Export the Admin component as the default export
export default Admin;
