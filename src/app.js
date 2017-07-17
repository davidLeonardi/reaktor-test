import './helpers/polyfill/console';
import './helpers/polyfill/request-animation-frame';

import React from 'react';
import {render} from 'react-dom';
// Important, this polyfill needs to load AFTER React
// See: http://stackoverflow.com/questions/40897966/objects-are-not-valid-as-a-react-child-in-internet-explorer-11-for-react-15-4-1
import 'babel-polyfill';

import Root from './Root';

// Setup Hot module reloading
if ( process.env.HMR && module.hot ) {
  module.hot.accept();
}

render( <Root />, document.getElementById( 'app' ) );
