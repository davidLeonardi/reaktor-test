import React from 'react';

import RouterApp from './routes/';
import store from './redux/store';
import {Provider} from 'react-redux';
import {AppContainer} from 'react-hot-loader';

// Fix for hot module reloading
// @see: https://github.com/gaearon/react-hot-loader/issues/298
const Root = ()=>(
    <AppContainer>
        <Provider
            store={store}
        >
            <RouterApp />
        </Provider>
    </AppContainer>
  );

export default Root;
