import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Fragment } from "react";
import AllCountriesCards from './modules/countriesCards/countries'
import SearchBar from './modules/searchbar/index.js'
import LandingPage from './modules/landing/index' 
import Home from './modules/home/index'
import CountryDetail from './modules/countriesCards/countryDetail'
function App() {
  return (
    
      <>
     <Router>
       <Switch>

          <Route exact path="/">
        <Fragment>
      <LandingPage/>
      </Fragment>
      </Route>  
      
      <Route exact path="/home">
      <Home/>
      </Route>
      
      <Route exact path="/CountryDetail/:id"
      render={(match) => (
        <React.Fragment>
      <CountryDetail match={match}>
      </CountryDetail>
      </React.Fragment>
       )}
      ></Route>
      

      </Switch>
      </Router>
     </>
   
  );
}

export default App;
