import React, { useEffect, useState } from 'react';
import Banner from './Banner/Banner';
import Gallery from './Gallery/Gallery';
import PrivateRoute from '../../PrivateRoute/PrivateRoute';
import Tabbs from './Tabs/Tabs';
import useTitle from '../../hooks/useTitle';
import ToyChart from './Graph/ToyChart';
import Feedback from '../Feedback/Feedback';


const Home = () => {
    const [toys, setToys] =  useState([]) 
    const [loading, setLoading] = useState(true);
    useTitle('Home')
   

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('https://assignment11-server-green.vercel.app/toys'); // Replace the URL with your API endpoint
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

    
  const filteredM = toys.filter(item => item.subCategory == "Marvel")
  const filteredT = toys.filter(item => item.subCategory == "Transformers")
  const filteredA = toys.filter(item => item.subCategory == "Avengers")
  const m = filteredM.length
  const a = filteredA.length
  const t = filteredT.length
  const tm = filteredM.reduce((total, item) => total + parseFloat(item.availableQuantity), 0)
  const ta = filteredA.reduce((total, item) => total + parseFloat(item.availableQuantity), 0)
  const tt = filteredT.reduce((total, item) => total + parseFloat(item.availableQuantity), 0)
  
    return (
      
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <h1 className=' text-slate-200 text-4xl bg-black  font-serif font-bold text-center p-10'>Checkout our exciting categories!!   </h1>
            { loading ? (
          
                <div className="toast toast-middle toast-center  ">
                  <div className=" alert alert-error opacity-50 rounded-3xl">
                    
                  <span className=' loading animate-bounce'>Loading....</span>
                  </div>
                </div>
                ) : ( 
                    <Tabbs toys = {toys} ></Tabbs> 
                    ) 
            }
            <ToyChart m={m} t={t} a = {a} tm={tm} ta={ta } tt={tt} /> 
            <Feedback/>
        </div>
        
      
    );
};

export default Home;