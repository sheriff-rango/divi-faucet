import './App.scss';

import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Header } from '../Shared/Header/Header';
import { Footer } from '../Shared/Footer/Footer';

import { Api } from '../Route/Api/Api';
import { Home } from '../Route/Home/Home';

/*
* The main application component. Which renders any routes as well as the header and footer.
*/
export class App extends Component {
  public constructor(props: any) {
    super(props);
  }

  public render() {
    return(
      <Router>
        <Header/>
        <div className="container">
          <Switch>
            <Route path="/api"><Api/></Route>
            <Route path="/"><Home/></Route>
          </Switch>
        </div>
        <Footer/>
      </Router>
    );
  }
}
