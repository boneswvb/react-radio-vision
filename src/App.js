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
import Forms from './pages/Forms'

// import Form2 from './pages/Form2'
// import Form3 from './pages/Form3'

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
        <Route path="/forms">
          <Forms />
        </Route>                 
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

// <Form2 />
// <Form3 />
