import React, { useEffect, useState } from 'react';

const Marvel = ({toys}) => {

       const filteredToys = toys.filter(data => data.subCategory ==='Marvel')
      console.log(filteredToys)
    return (
        <div>

            
        </div>
    );
};

export default Marvel;