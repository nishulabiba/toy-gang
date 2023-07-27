import React, { useEffect, useState } from 'react';

const Marvel = ({toys}) => {

       const marvelToys = toys.filter(data => data.subCategory ==='Marvel')
      console.log(marvelToys)
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
        <div className='flex justify-center'>

            {
                    marvelToys.map(toy=> <div className="card card-compact w-50 bg-white  mx-5  mb-5 p-5 shadow-xl text-zinc-700 font-serif flex flex-col justify-center" key= {toy._id}>
                    <figure ><img className=' w-52 h-48 rounded-sm' src={toy.pictureUrl} alt="URL" /></figure>
                    <div className="card-body">
                    <p className=" text-lg font-bold w-72 ">Toy Name: {toy.toyName}</p>
                    <p>Price: ${toy.price}</p>
                    <p>Rating: {renderStars(toy.rating)}</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-error btn-outline">View Details</button>
                    </div>
                </div>
              </div>)
            }

            
        </div>
    );
};

export default Marvel;