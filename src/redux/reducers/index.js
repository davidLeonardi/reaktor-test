// Imports
import {combineReducers} from 'redux';

// Import all reducers
import packageDataReducer from './packageData/index.js';
import {
    RESET_STORE,
} from './types';

// Combine reducers using redux function
const appReducer = combineReducers( {packageData: packageDataReducer} );

export default ( state, action ) => {
  if ( action.type === RESET_STORE ) {
    state = undefined;
  }

  return appReducer( state, action );
};
