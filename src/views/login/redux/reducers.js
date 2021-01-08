import * as type from './type'
import createReducer  from "../../../libraries/createReducer";
import { combineReducers } from 'redux'

const initialState = {
    Auth: {}
  }
  
export const LoginRducer = createReducer(initialState, {
    [type.PUT_USER](state, payload) {
      const{ items } = payload.data
      return {
        ...state,
        Auth: items,
      }
    }
  })
