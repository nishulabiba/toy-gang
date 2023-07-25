import React, { useState } from 'react';
import Banner from './Banner/Banner';
import Gallery from './Gallery/Gallery';
import PrivateRoute from '../../PrivateRoute/PrivateRoute';
import Tabbs from './Tabs/Tabs';


const Home = () => {

    return (
      
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Tabbs></Tabbs>
            <PrivateRoute></PrivateRoute>
        </div>
    );
};

export default Home;