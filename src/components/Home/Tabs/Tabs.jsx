import React from 'react';
import "./tabs.css"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Tabbs = () => (
    <Tabs id='t' >
      <TabList className=' tab'>
        <Tab className='tab tab-lifted'>Marvel Universe</Tab>
        <Tab className='tab tab-lifted'>DC </Tab>
        <Tab className='tab tab-lifted'> Avengers</Tab>
      </TabList>
  
      <TabPanel>
        <Tabs className='flex gap-20 flex-col'>
        <TabList className='tab'>
        <Tab className='tab tab-lifted m-10'>Marvel</Tab>
        <Tab className='tab tab-lifted'>DC </Tab>
        <Tab className='tab tab-lifted'> Avengers</Tab>
      </TabList>
      <TabPanel>content</TabPanel>
      <TabPanel>,djshfdkj</TabPanel>
      <TabPanel>mcmvnmnmv</TabPanel>



        </Tabs>
      </TabPanel>
      <TabPanel>
        <h2>Any content 2</h2>
      </TabPanel>
      <TabPanel>
        <h2>okkkk</h2>
      </TabPanel>
    </Tabs>
  );
export default Tabbs;