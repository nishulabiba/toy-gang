import React, { useEffect, useState } from 'react';

const Marvel = ({toys}) => {

       const filteredToys = toys.filter(data => data.subCategory ==='Marvel')
      console.log(filteredToys)
    return (
        <div className='flex justify-center'>

            {
                    filteredToys.map(toy=> <div className="card card-compact w-50 bg-black mx-5  py-5 shadow-xl text-white" key= {toy._id}>
                    <figure ><img className=' w-52 h-48' src={toy.pictureUrl} alt="URL" /></figure>
                    <div className="card-body">
                    <h2 className="card-title">Toy Name: {toy.toyName}</h2>
                    <p>Price: {toy.price}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">View Details</button>
                    </div>
                </div>
              </div>)
            }

            
        </div>
    );
};

export default Marvel;