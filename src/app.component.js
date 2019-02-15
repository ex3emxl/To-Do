import React from 'react';
import { connect } from 'react-redux';

import { Pages } from './pages/Pages';
import { Header } from './components/header';

export const App = () => (
    <div className="wrapper">
        <Header />
        <Pages />
    </div> );

// export const App = connect()(AppComponent);
