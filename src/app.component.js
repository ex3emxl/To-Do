import React from 'react';
// import ReactDom from 'react-dom';

import { Pages } from './pages/Pages';
import { Header } from './components/header';

export const App = () => (
    <div className="wrapper">
        <Header />
        <Pages />
        {/*<Footer />*/}
    </div> );
