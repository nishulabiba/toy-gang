import React, { useEffect, useState } from 'react';
import Banner from './Banner/Banner';
import Gallery from './Gallery/Gallery';
import PrivateRoute from '../../PrivateRoute/PrivateRoute';
import Tabbs from './Tabs/Tabs';


const Home = () => {
    const [toys, setToys] =  useState([]) 
    const [loading, setLoading] = useState(true);
   

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:5000/toys'); // Replace the URL with your API endpoint
          const data = await response.json(); // Parse the response as JSON
          setToys(data); 
          setLoading(false)
        } catch (error) {
          console.error('Error fetching data:', error);
          setLoading(false)
        }
      };
  
      fetchData(); // Call the fetch function when the component mounts
    }, []); 

    return (
      
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <h1 className=' text-slate-200 text-4xl bg-black  font-serif font-bold text-center p-10'>Checkout our exciting categories!!   </h1>
            { loading ? (
        // Show loading spinner while data is being fetched
          
          <div className="toast toast-middle toast-center  ">
          <div className=" alert alert-error opacity-50 rounded-3xl">
            
        <span className=' loading animate-bounce'>Loading....</span>
          </div>
        </div>
      ): ( 
            <Tabbs toys = {toys} ></Tabbs> ) }
            <PrivateRoute></PrivateRoute>
        </div>
    );
};

export default Home;