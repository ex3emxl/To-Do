import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';
import { App } from './app.component';

import './components/general.scss';

const Wrapper = (
    <Provider store={ store }>
        <Router>
            <App/>
        </Router>
    </Provider>
);

ReactDom.render(Wrapper, document.getElementById('app'));
