import {combineReducers} from 'redux-immutablejs'
import {routerReducer} from 'react-router-redux'

const currentReducers = {
  router: routerReducer,
}

export default (newReducers = {}) => {
  Object.assign(currentReducers, newReducers)
  return combineReducers(currentReducers)
}
