import React from 'react';

import { Helmet } from 'react-helmet';
import {Switch, Route} from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import MainMenu from './components/MainMenu'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Services from './pages/Services'
import Contacts from './pages/Contacts'
import ServiceCallForm from './components/ServiceCallForm'
import GeneralInquiryForm from './components/GeneralInquiryForm'
import FridgeFreezerEnquiry from './components/FridgeFreezerEnquiry'
import DomesticFreezersContent from './containers/DomesticFreezersContent'
import DomesticFridgesContent from './containers/DomesticFridgesContent'
import CommercialFridgesContext from './containers/CommercialFridgesContext'
import CommercialFreezersContent from './containers/CommercialFreezersContent'
import CommercialDeepFreezersContent from './containers/CommercialDeepFreezersContent'
import IcecreamFreezersContent from './containers/IcecreamFreezersContent'
import BackOfBarFridgesContent from './containers/BackOfBarFridgesContent'

import './App.css';

function App() {
  return (
    <div className="tc">
      <Helmet>
        <meta name="keywords" content="service of fridges, service of washing machines,service of dish washer, service of tv, service of hi-fi, 
          service of dvd, service of ice maker, service of inverters, service of tumble drier, insurance assessments, 
          lg, samsung, defy, electrolux, kelvinator, aeg, bosch, siemens, miele, smeg" />
        <meta name="description" content="Agents for LG household appliences and electronics - Radio Vision" />
        <title>Welcom to Radio Vision - Digital Electronics</title>
      </Helmet>
      <Header />
      <MainMenu />
      <Switch>
        <Route exact path="/react-radio-vision">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route> 
        <Route strict path="/products">
          <Products />
        </Route> 
        <Route path="/DomesticFridgesContent">
          <DomesticFridgesContent />
        </Route>
        <Route path="/DomesticFreezersContent">
          <DomesticFreezersContent />
        </Route>
        <Route path="/CommercialFridgesContext">
          <CommercialFridgesContext />
        </Route>
        <Route path="/CommercialFreezersContent">
          <CommercialFreezersContent />
        </Route>
        <Route path="/CommercialDeepFreezersContext">
          <CommercialDeepFreezersContent />
        </Route>
        <Route path="/IcecreamFreezersContent">
          <IcecreamFreezersContent />
        </Route>
        <Route path="/BackOfBarFridgesContent">
          <BackOfBarFridgesContent />
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