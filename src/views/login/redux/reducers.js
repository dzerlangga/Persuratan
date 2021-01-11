import * as type from './type'
import createReducer  from "../../../libraries/createReducer";
// import { combineReducers } from 'redux'

const initialState = {
    Auth: {},
    AuthSelect: JSON.parse(localStorage.getItem('USER_PERSURATAN'))
  }
  
export const LoginRducer = createReducer(initialState, {
    [type.PUT_USER](state, payload) {
      const{ items } = payload.data
      return {
        ...state,
        Auth: items.user,
      }
    }
  })
