import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const MyToys = () => {

  useTitle('My Toys')
  

  
    const {user} = useContext(AuthContext)
    const [data , setData] = useState([]);
    const [control, setControl] = useState(false)
    const [ok, setOk] = useState(false)

    const [loading, setLoading] = useState(true);
    const [ascending, setAscending] = useState(true)
    const [d, setD] = useState([])
   
    useEffect(() => {
      // Function to fetch data from the API and update the state
      const fetchData = async () => {
        try {
          const response = await fetch('https://assignment11-server-green.vercel.app/toys'); // Replace the URL with your API endpoint
          const jsonData = await response.json(); // Parse the response as JSON
        
          
          const email = user?.email;
          const filtered = jsonData.filter(data => data.sellerEmail === email)
          setData(filtered);
          setLoading(false)
        } catch (error) {
          console.error('Error fetching data:', error);
          setLoading(false)
        }
      };
      fetchData(); // Call the fetch function when the component mounts
    }, [control]);
   const handleSort = () => {
    const sortedData = [...data];

    if (ascending) {
      sortedData.sort((a, b) => a.price - b.price);
      setLoading(false)
    } else {
      sortedData.sort((a, b) => b.price - a.price);
      setLoading(false)
    }

    setData(sortedData);
    setAscending(!ascending);
  };

   const handleDelete = (id) =>{
    fetch(`https://assignment11-server-green.vercel.app/delete/${id}`, {
      method: 'DELETE',
      headers: {"Content-Type" : "application/json"}
    })
    .then(res=> res.json())
    .then(data => {
      if(data?.deletedCount > 0) {
        setControl(!control)
        setOk(true)
      }
    })
   }


  

    return (
        <div className=' bg-black pt-5'>
      <div className="flex flex-col justify-center items-center gap-5 m-5">
      <h1 className='font-bold  text-2xl'> My <span className=' text-amber-500'>Toy</span> Products</h1>
      <span className='text-sm font-semibold'>Sort</span><button className='btn btn-warning btn-outline' onClick={handleSort}>
        {ascending ? 'Descending' : 'Ascending'}
      </button>
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
            <th>Toy Name</th>
            <th>Price</th>
            <th>Rating</th>
            <th>Sub Category</th>
            <th>Available Quantity</th>
            <th >Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              
              <td>{item.toyName}</td>
              <td>${item.price}</td>
              <td>{item.rating}</td>
              <td>{item.subCategory}</td>
              <td>{item.availableQuantity}</td>
              <td><Link to={item._id} className="btn btn-error btn-sm  m-2">Update 
              </Link >

              </td>
              
              <td>
              <label htmlFor="my_modal_7"  className="btn btn-error btn-sm  m-2">Delete</label>

{/* Put this part before </body> tag */}
<input type="checkbox" id="my_modal_7" className="modal-toggle" />
<div className="modal">
  <div className="modal-box bg-zinc-700">
    <h3 className="text-lg font-bold">Hello!</h3>
    <p className="py-4">Are you sure ?</p>
    
  <label className="modal-backdrop btn" htmlFor="my_modal_7">Cancel</label>
  <label onClick={()=>handleDelete(item._id)} htmlFor='my_modal_7' className=' modal-backdrop btn btn-danger btn-outline ms-14 '> Delete </label>
  </div>
</div>
              {
                ok?(
                  <div className="toast toast-top toast-end">
                    <div className="alert alert-info">
                      <span>Toy product deleted successfully!</span>
                    </div>
                    
                  </div>
                ):(
                  <div className=""></div>
                )
              }
              </td>
              
            </tr>
              
          ))}
        </tbody>
      </table>) 
      
      }
    </div>
    
    );
};

export default MyToys;