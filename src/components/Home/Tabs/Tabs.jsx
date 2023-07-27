import React, { useEffect, useState } from 'react';
import "./tabs.css"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Marvel from '../../Marvel/Marvel';
import Avengers from '../../Avengers/Avengers';
import Transformers from '../../Transformers/Transformers';

const Tabbs = ({toys}) =>
 (

    <Tabs id='t' className="bg-black">
      <TabList className=' tab mb-10'>
        <Tab className='tab tab-lifted'>Marvel Universe</Tab>
        <Tab className='tab tab-lifted'>Transformers </Tab>
        <Tab className='tab tab-lifted'> Avengers</Tab>
      </TabList>
  
      <TabPanel> <Marvel toys ={toys}/></TabPanel>

      <TabPanel>
        <Transformers toys ={toys}/>
      </TabPanel>
      <TabPanel> 
        <Avengers toys={toys}/> </TabPanel>

    </Tabs>
  );
export default Tabbs;