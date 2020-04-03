import React from 'react';
import {Switch, Route} from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import MainMenu from './components/MainMenu'
import Index from './pages/Index'
import About from './pages/About'
import Products from './pages/Products'
import Services from './pages/Services'
import Contacts from './pages/Contacts'
import ServiceCallForm from './components/ServiceCallForm'
import GeneralInquiryForm from './components/GeneralInquiryForm'
import FridgeFreezerEnquiry from './components/FridgeFreezerEnquiry'

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MainMenu />
      <Switch>
        <Route exact path="/">
          <Index />
        </Route>
        <Route path="/about">
          <About />
        </Route> 
        <Route path="/products">
          <Products />
        </Route> 
        <Route path="/services">
          <Services />   
        </Route>
        <Route path="/contacts">
          <Contacts /> 
        </Route> 
        
        <Route path="/ServiceCallForm">
          <ServiceCallForm />
        </Route> 
        <Route path="/GeneralInquiryForm">
          <GeneralInquiryForm />
        </Route> 
        <Route path="/FridgeFreezerEnquiry">
          <FridgeFreezerEnquiry />
        </Route>                 
      </Switch>
      <Footer />
    </div>
  );
}

export default App;