import React, { useEffect, useState } from 'react';
import "./tabs.css"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SoftToy from '../../SoftToy/SoftToy';

const Tabbs = () =>
 (

    <Tabs id='t' >
      <TabList className=' tab'>
        <Tab className='tab tab-lifted'>Marvel Universe</Tab>
        <Tab className='tab tab-lifted'>Transformers </Tab>
        <Tab className='tab tab-lifted'> Avengers</Tab>
      </TabList>
  
      <TabPanel>1</TabPanel>

      <TabPanel>2</TabPanel>
      <TabPanel> <SoftToy/> </TabPanel>

    </Tabs>
  );
export default Tabbs;