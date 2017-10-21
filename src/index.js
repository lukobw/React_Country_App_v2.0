import React from 'react';
import {render} from 'react-dom';
import { Router, hashHistory } from 'react-router';
import {Provider} from 'react-redux';
import store from './store/store';
import routes from './routes';
import {getCountries} from './actions/actions-countries';
import DevTools from './DevTools';

render(
    <Provider store={store}>
        <div>
             <Router history={hashHistory} routes={routes}/>
             <DevTools/>
        </div>
    </Provider>,
    document.getElementById('root')
);

store.dispatch(getCountries());
console.log(store.getState());