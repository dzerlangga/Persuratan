import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './assets/scss/style.scss';
import {Loading}  from "./modules/component";
import { RouteAuthenticated, RouteHome } from './libraries';

// Containers
const TheLayout = React.lazy(() => import('./containers/TheLayout'));

// Pages
const Login = React.lazy(() => import('./views/login/Login'));
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'));
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'));

class App extends Component {

  render() {
    return (
      <HashRouter>
          <React.Suspense fallback={Loading}>
            <Switch>
              <RouteHome path="/" exact name="root" component={Login} />
              <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
              <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} />
              <RouteAuthenticated path="/home" name="Home" render={props => <TheLayout {...props}/>} />
              {/* <Route path="/home" name="Home" render={props => <TheLayout {...props}/>} /> */}
              {/* <Route
                exact
                name="404"
                render={props => <Redirect to="/home" />}
              /> */}
            </Switch>
          </React.Suspense>
      </HashRouter>
    );
  }
}

export default App;
