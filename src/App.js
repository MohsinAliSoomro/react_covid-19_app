import React, { useState } from 'react';
import './App.css';
import Appbar from './compenent/AppBar'
import GlobalInfo from './compenent/GlobalInfo'
import FooterNav from './compenent/footerNav'
function App() {
  const screenconfig = useState(0);
  return (
    <>
      <Appbar />
      <GlobalInfo  screenconfig={screenconfig[0]}/>
      <FooterNav screenconfig={screenconfig}/>
    </>
  );
}

export default App;
