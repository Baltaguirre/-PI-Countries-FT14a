import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Fragment } from "react";
import LandingPage from './modules/landing/index'
import Home from './modules/home/index'
import CountryName from './modules/countriesCards/countryName'
import CountryDetail from './modules/countriesCards/countryDetail'
function App() {
  return (

    <>
      <Router>
        <Switch>

        <Route exact path="/">
            <LandingPage />
          </Route>

          <Route exact path="/home">
            <Home />
          </Route>

          <Route exact path="/countryName?name=name"
            render={(match) => (

              <CountryName match={match}>
              </CountryName>

            )}
          ></Route>

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
