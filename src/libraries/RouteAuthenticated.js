import React from "react";
import { Route, Redirect } from "react-router-dom";

//redux
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as AuthAction from "../views/login/redux/action";

const RouteAuthenticated = ({
  component: Component,
  render,
  auth,
  Auth,
  fetchMenu,
  fetchText,
  ...res
}) => {
  const [isError, setError] = React.useState(false);
  if (!localStorage.getItem('TOKEN_PERSURATAN')) {
    return <Redirect from="/:any" to="/" />;
  }
  if (localStorage.getItem('TOKEN_PERSURATAN') && !isError)
  return (
    <Route
      {...res}
      render={render ? render : props => <Component {...props} />}
    />
  );
};

//page home
const Home = ({ component: Component, render, auth, Auth, ...res }) => {
  if (localStorage.getItem('TOKEN_PERSURATAN')) {
    return <Redirect from="/:any" to="/home" />;
  }
  return (
    <Route
      {...res}
      render={render ? render : props => <Component {...props} />}
    />
  );
};

const mapState = state => ({
  Auth: state.Auth
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...AuthAction }, dispatch);
}
const RouteHome = connect(mapState, mapDispatchToProps)(Home);

export default connect(mapState, mapDispatchToProps)(RouteAuthenticated);
export { RouteHome };
