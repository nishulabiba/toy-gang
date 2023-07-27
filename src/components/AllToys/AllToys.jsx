import React from 'react';

const AllToys = () => {
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
  
    useEffect(() => {
      // Function to fetch data from the API and update the state
      const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:5000/toys'); // Replace the URL with your API endpoint
          const jsonData = await response.json(); // Parse the response as JSON
  
          // Limit the data to 20 rows
          const limitedData = jsonData.slice(0, 20);
  
          setData(limitedData); // Update the 'data' state variable with the limited API response
        } catch (error) {
          console.error('Error fetching data:', error);
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
        <div>
      <h1>Toy Products</h1>
      <input
        type="text"
        placeholder="Search by toy name..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <table>
        <thead>
          <tr>
            <th>Seller Name</th>
            <th>Seller Email</th>
            <th>Toy Name</th>
            <th>Price</th>
            <th>Rating</th>
            <th>Sub Category</th>
            <th>Available Quantity</th>
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    );
};

export default AllToys;