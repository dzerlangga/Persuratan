import { createStore, compose, applyMiddleware } from 'redux';
import { LoginRducer } from "./views/login/redux/reducers";
import thunk from 'redux-thunk';

// const initialState = {
//   sidebarShow: 'responsive'
// }

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// const changeState = (state = initialState, { type, ...rest }) => {
//   switch (type) {
//     case 'set':
//       return {...state, ...rest }
//     default:
//       return state
//   }
// }

const store = createStore(LoginRducer,composeEnhancers(applyMiddleware(thunk)))
export default store