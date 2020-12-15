import React from "react";
import { Route, Redirect } from "react-router-dom";

//redux
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
// import { fetchMenu } from "modules/auth/actions";
// import { fetchText } from "modules/application/actions";

const RouteAuthenticated = ({
  component: Component,
  render,
  auth,
  Auth,
  // fetchMenu,
  // fetchText,
  ...res
}) => {
  const isLoggedIn = false
  // const { result: isLoggedIn, menu } = Auth;
  const [isError, setError] = React.useState(false);
  const [isLoading, setLoading] = React.useState(
    isLoggedIn ? true : false
  );
  if (!isLoggedIn) {
    return <Redirect from="/:any" to="/" />;
  }
  if (isLoggedIn && !isError) {
    // Promise.all([fetchText(), fetchMenu()])
    //   .then(([text, menu]) => {
    //     if (!text.status || !menu.status) {
    //       setError(true);
    //     }
    //     setLoading(false);
    //   })
    //   .catch(response => {
    //     setError(true);
    //     setLoading(false);
    //   });
  }
  if (isError) {
    return (
      <div>
        error occured when fetching data
        <span>
          <button onClick={_ => window.location.reload()}>try again ?</button>
        </span>
      </div>
    );
  }
  if (isLoading) {
    return <div> loading </div>;
  }
  return (
    <Route
      {...res}
      render={render ? render : props => <Component {...props} />}
    />
  );
};

const Home = ({ component: Component, render, auth, Auth, ...res }) => {
  const isLoggedIn = false
  // const { result: isLoggedIn } = Auth;
  if (isLoggedIn) {
    return <Redirect from="/:any" to="/home/check-in" />;
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

// const mapDispatch = dispatch =>
//   bindActionCreators({ fetchMenu, fetchText }, dispatch);

const RouteHome = connect(mapState, null)(Home);

export default connect(mapState, null)(RouteAuthenticated);
export { RouteHome };
