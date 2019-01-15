import React from 'react';

import Content from '../content';
import Tasklist from '../Tasklist';

import './main.scss';

const Main = () => (
    <main className='main'>
        <Content />
        <Tasklist />
    </main>
);


export default Main;