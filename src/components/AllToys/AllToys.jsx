import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';

const AllToys = () => {
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState(''); 
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      // Function to fetch data from the API and update the state
      const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:5000/toys'); // Replace the URL with your API endpoint
          const jsonData = await response.json(); // Parse the response as JSON
  
          // Limit the data to 20 rows
          const limitedData = jsonData.slice(0, 20);
  
          setData(limitedData);
          setLoading(false)
        } catch (error) {
          console.error('Error fetching data:', error);
          setLoading(false)
        }
      };
  
      fetchData(); // Call the fetch function when the component mounts
    }, []);
  
    // Function to handle changes in the search input
    const handleSearch = (event) => {
      setSearchTerm(event.target.value);
    };
  
    // Filter the data based on the search term
    const filteredData = data.filter((item) =>
      item.toyName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
        <div className=' bg-black pt-5'>
      <div className="flex flex-col justify-center items-center gap-5 m-5">
      <h1 className='font-bold  text-2xl'> All <span className=' text-amber-500'>Toy</span> Products</h1>
      <input className='input input-bordered input-warning w-full max-w-xs'
        type="text"
        placeholder="Search by toy name..."
        value={searchTerm}
        onChange={handleSearch}
      />
      </div>
      { loading ? (
        // Show loading spinner while data is being fetched
          
          <div className="toast toast-middle toast-center  ">
          <div className=" alert alert-error opacity-50 rounded-3xl">
            
        <span className=' loading animate-bounce'>Loading....</span>
          </div>
        </div>
      ): ( 
      <table className=' table-zebra w-full bg-slate-600 text-center'>
        <thead>
          <tr>
            <th>Seller Name</th>
            <th>Seller Email</th>
            <th>Toy Name</th>
            <th>Price</th>
            <th>Rating</th>
            <th>Sub Category</th>
            <th>Available Quantity</th>
            <th >Details</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index}>
              <td>{item.sellerName}</td>
              <td>{item.sellerEmail}</td>
              <td>{item.toyName}</td>
              <td>${item.price}</td>
              <td>{item.rating}</td>
              <td>{item.subCategory}</td>
              <td>{item.availableQuantity}</td>
              <td><Link to={item._id} className="btn btn-warning btn-sm  m-2">View Details</Link>
              
              </td>
            </tr>
          ))}
        </tbody>
      </table>) }
    </div>
    );
};

export default AllToys;