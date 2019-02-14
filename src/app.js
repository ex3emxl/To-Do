import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { App } from './app.component';

import './components/general.scss';

const Wrapper = (
    <Router>
        <App/>
    </Router>
);

ReactDom.render(Wrapper, document.getElementById('app'));
