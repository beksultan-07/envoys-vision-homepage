import React, { useState } from 'react';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import InfoBlock from './components/InfoBlock/InfoBlock';
import SideBar from './components/SideBar/SideBar';

const App:React.FC = () => {
  const block1 = require('./assets/block/block1.svg')['default']
  const block2 = require('./assets/block/block2.svg')['default'] 
  const block3 = require('./assets/block/block3.svg')['default'] 

  
  return (
    <>
      <Header/>
      <SideBar/>
      <Banner/>
      <InfoBlock id={1} img={block1} shadow='#FF8E33' color='#FFA760' title='1. Exchange' text="The Exchange is an organizer of trading in commodities, currency, securities, derivatives and other market instruments. Trading is conducted by standard contracts or batches, the size of which is regulated by the exchange's regulatory documents" btn='Exchange'/>

      <InfoBlock id={1} img={block2} shadow='#003E73' color='#4478BB' title='2. DEX' text="The Exchange is an organizer of trading in commodities, currency, securities, derivatives and other market instruments. Trading is conducted by standard contracts or batches, the size of which is regulated by the exchange's regulatory documents" btn='Exchange'/>

      <InfoBlock id={1} img={block3} shadow='#007361' color='#049983' title='3. Processing' text="The Exchange is an organizer of trading in commodities, currency, securities, derivatives and other market instruments. Trading is conducted by standard contracts or batches, the size of which is regulated by the exchange's regulatory documents" btn='Exchange'/>
      <Footer/> 
    </>
  );
}

export default App;
