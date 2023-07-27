import React, { useEffect, useState } from 'react';
import Banner from './Banner/Banner';
import Gallery from './Gallery/Gallery';
import PrivateRoute from '../../PrivateRoute/PrivateRoute';
import Tabbs from './Tabs/Tabs';


const Home = () => {
    const [toys, setToys] =  useState([]) // Initialize data as an empty array
   

    useEffect(() => {
      // Function to fetch data from the API and update the state
      const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:5000/toys'); // Replace the URL with your API endpoint
          const data = await response.json(); // Parse the response as JSON
          setToys(data); // Update the 'data' state variable with the API response
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData(); // Call the fetch function when the component mounts
    }, []); 

    return (
      
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <h1 className=' text-slate-200 text-4xl bg-black  font-serif font-bold text-center p-10'>Checkout our exciting categories!!   </h1>
            <Tabbs toys = {toys} ></Tabbs>
            <PrivateRoute></PrivateRoute>
        </div>
    );
};

export default Home;