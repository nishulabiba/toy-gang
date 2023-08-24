import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const DetailsPage = () => {
  useTitle('Details')
    const {id} = useParams()
    const [data, setData] = useState([])
    useEffect(()=> { 
        fetch(`http://localhost:5000/toy/${id}`)
        .then(res=> res.json())
        .then(result=> setData(result))
      },[])
    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating - fullStars >= 0.5;
    
        const stars = [];
        for (let i = 0; i < fullStars; i++) {
          stars.push(<span key={i} className=' text-orange-500'>&#9733;</span>);
        }
        if (hasHalfStar) {
          stars.push(<span key={fullStars}>&#189;</span>);
        }
    
        return stars;
      };

    return (
        <div className='bg-black pb-64 pt-5 flex gap-10'>
            <img className=' mt-10 w-64 ms-40' src={data.pictureUrl} alt="" />
                                 <div className="mt-10">
                                 <h3 className="text-lg font-bold">{data.dataName}</h3>
                                  <p className="p-0">Seller: {data.sellerName}</p>
                                  <p className="p-0">Seller email: {data.sellerEmail}</p>
                                  <p className="p-0">Price: ${data.price}</p>
                                  <p className="p-0">Available quantity: {data.availableQuantity}</p>
                                  <p className="p-0">Rating: {renderStars(data.rating)}</p>
                                  <p className='w-1/2'>Description: {data.description}</p>
                                 </div>
        </div>
    );
};

export default DetailsPage;