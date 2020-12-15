import React, { Component } from 'react';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import './scss/style.scss';

import { RouteAuthenticated, RouteHome } from './libraries';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

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
          <React.Suspense fallback={loading}>
            <Switch>
              <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
              <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} />
              {/* <RouteAuthenticated path="/home" name="Home" render={props => <TheLayout {...props}/>} /> */}
              <Route path="/home" name="Home" render={props => <TheLayout {...props}/>} />
            <RouteHome path="/" exact name="root" component={Login} />
              <Route
                exact
                name="404"
                render={props => <Redirect to="/home" />}
              />
            </Switch>
          </React.Suspense>
      </HashRouter>
    );
  }
}

export default App;
