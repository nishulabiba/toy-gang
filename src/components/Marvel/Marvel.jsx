import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Marvel = ({toys}) => {
  const {user} = useContext(AuthContext)

       const marvelToys = toys.filter(data => data.subCategory ==='Marvel')
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
        <div className=' grid grid-cols-3 place-content-center w-5/6 place-items-center mx-28 '>

            {
                    marvelToys.map(toy=> <div className="card card-compact  bg-white  mx-5  mb-5 p-5 shadow-xl text-zinc-700 font-serif flex flex-col justify-center" key= {toy._id}>
                    <figure ><img className=' w-52 h-48 rounded-sm' src={toy.pictureUrl} alt="URL" /></figure>
                    <div className="card-body">
                    <p className=" text-lg font-bold w-72 ">Toy Name: {toy.toyName}</p>
                    <p>Price: ${toy.price}</p>
                    <p>Rating: {renderStars(toy.rating)}</p>
                    <div className="card-actions justify-center">
                      {user?
                       (
                        <div className="">
                          <label htmlFor={toy._id} className="btn btn-error btn-outline">
                       View Details</label>
                       <input type="checkbox" id={toy._id} className="modal-toggle" />
                              <div className="modal">
                                <div className="modal-box w-3/5 h-4/5 p-10 max-w-5xl bg-white gap-1 flex flex-col justify-center items-center">
                                  <img className=' mt-10' src={toy.pictureUrl} alt="" />
                                  <h3 className="text-lg font-bold">{toy.toyName}</h3>
                                  <p className="p-0">Seller: {toy.sellerName}</p>
                                  <p className="p-0">Seller email: {toy.sellerEmail}</p>
                                  <p className="p-0">Price: ${toy.price}</p>
                                  <p className="p-0">Available quantity: {toy.availableQuantity}</p>
                                  <p className="p-0">Rating: {renderStars(toy.rating)}</p>
                                  <p>Description: {toy.description}</p>
                                  
                                <label className="modal-backdrop btn btn-sm btn-circle btn-ghost absolute right-2 top-2" htmlFor={toy._id}>✕ </label>
                                </div>
                              </div>
                        </div>
                        ):(<Link to="/user" className="btn btn-error btn-outline">
                       View Details</Link>
                              )}
                  


                    </div>
                </div>
              </div>)
            }

            
        </div>
    );
};

export default Marvel;