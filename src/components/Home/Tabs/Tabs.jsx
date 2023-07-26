import React, { useEffect, useState } from 'react';
import "./tabs.css"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SoftToy from '../../SoftToy/SoftToy';
import Marvel from '../../Marvel/Marvel';

const Tabbs = ({toys}) =>
 (

    <Tabs id='t' >
      <TabList className=' tab'>
        <Tab className='tab tab-lifted'>Marvel Universe</Tab>
        <Tab className='tab tab-lifted'>Transformers </Tab>
        <Tab className='tab tab-lifted'> Avengers</Tab>
      </TabList>
  
      <TabPanel> <Marvel toys ={toys}/></TabPanel>

      <TabPanel>2</TabPanel>
      <TabPanel>  </TabPanel>

    </Tabs>
  );
export default Tabbs;