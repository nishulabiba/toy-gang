import React, { useEffect, useState } from 'react';

const SoftToy = () => {

  const [toys, setToys] = useState([]); // Initialize data as an empty array

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
console.log(toys)
     const filteredToys = toys.filter(data => data.toyname ==='LEGO Classic Bricks')
    console.log(filteredToys)
    return (
        <div>
         

           
        </div>
    );
};

export default SoftToy;