import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Fragment } from "react";
import AllCountriesCards from './modules/countriesCards/countries'
import CountryByNameCard from './modules/countriesCards/country.jsx'
 

function App() {
  return (
    <div className="App">
      <>
     <Router>
       <Switch>

         <Route path="/">
        <Fragment>
      <AllCountriesCards/>
      </Fragment>
      </Route>
      
      <Route exact path="/countries?name=">
      <Fragment>
      <CountryByNameCard/>
      </Fragment>
      </Route>
      
      </Switch>
      </Router>
     </>
    </div>
  );
}

export default App;
