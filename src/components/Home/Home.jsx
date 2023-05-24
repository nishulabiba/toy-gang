import React, { useState } from 'react';
import Banner from './Banner/Banner';
import Gallery from './Gallery/Gallery';
import PrivateRoute from '../../PrivateRoute/PrivateRoute';

const Home = () => {

    return (
      
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <PrivateRoute></PrivateRoute>
        </div>
    );
};

export default Home;