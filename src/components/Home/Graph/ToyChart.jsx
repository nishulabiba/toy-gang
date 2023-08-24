import React, { useEffect, useState } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';




const ToyChart = ({m , a, t, tm, ta, tt }) => {
  
  

  const data = [
    {
      subCategory: "Marvel",
      Toys: m,
      Quantity: tm
    },
    {
      subCategory: "Transformers",
      Toys: t,
      Quantity: tt
    },
    {
      subCategory: "Avengers",
      Toys: a,
      Quantity: ta
    }
  ];
      return (
        <div className="bg-black flex flex-col justify-center items-center">
          <div className=' class="border-t border-gray-300 w-full my-4 font-bold text-7xl'></div>
          <h1 className=' text-5xl font-serif text-purple-400 mb-20'>See the Category-wise available quantity !</h1>
          <BarChart 
      width={ 600 }
      height={400}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3"  />
      <XAxis dataKey="subCategory" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="Quantity" fill="#8884d8" />
      <Bar dataKey="Toys" fill="#82ca9d" />
    </BarChart>
        </div>
    
        
      );
};

export default ToyChart;