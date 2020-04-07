import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from '../Components/Header';
import Actions from '../Components/MyMail/index';
import TabsContainer from './Tabs/TabsContainer';

import 'semantic-ui-css/semantic.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <Fragment>
      <Header Username='sagi'/>
      <TabsContainer />
      <Actions />
    </Fragment>
  );
}

export default App;
