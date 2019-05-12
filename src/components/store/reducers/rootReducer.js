import authReducer from './authReducer'
import projectReducer from './projectReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: authReducer,  // auth property is the authReducer.js file
  project: projectReducer  // project property
});

export default rootReducer

// the key name will be the data property on the state object
