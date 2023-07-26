import React, { useEffect, useState } from 'react';
import Banner from './Banner/Banner';
import Gallery from './Gallery/Gallery';
import PrivateRoute from '../../PrivateRoute/PrivateRoute';
import Tabbs from './Tabs/Tabs';


const Home = () => {
    

    return (
      
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <h1 className=' text-slate-200 text-4xl  font-serif font-bold text-center p-10'>Checkout our exciting categories!!   </h1>
            <Tabbs  ></Tabbs>
            <PrivateRoute></PrivateRoute>
        </div>
    );
};

export default Home;