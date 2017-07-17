import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import {INIT_STORE} from './reducers/types';

let enhancer = applyMiddleware( ...[thunk] );

enhancer = composeWithDevTools( enhancer );

const store = createStore( reducers, enhancer );
store.dispatch( {type: INIT_STORE} );

export {
    reducers,
    enhancer,
};

export default store;
