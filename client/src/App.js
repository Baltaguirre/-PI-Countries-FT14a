import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Fragment } from "react";
import LandingPage from './modules/landing/index'
import Home from './modules/home/index'

import CountryDetail from './modules/countriesCards/detail/countryDetail'
import ActivityPost from './modules/activitiesCards/postActivities'

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


          <Route exact path="/createactivity">
            <ActivityPost />
          </Route>


          <Route exact path="/detail/:id"
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
