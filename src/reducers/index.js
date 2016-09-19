import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import { users } from './users'

export const rootReducer = combineReducers({
  routing,
  users
})
