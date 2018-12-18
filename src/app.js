import React from 'react';
import ReactDom from 'react-dom';

import Main from './components/main';

import './components/general.scss';

const Wrapper = (
    <Main title="Title"/>
);

ReactDom.render(Wrapper, document.getElementById('app'));
