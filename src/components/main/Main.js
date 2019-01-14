import React from 'react';

import Content from '../content';
import Tasklist from '../Tasklist';
import { Tabs, Tab } from '../tabs';
import img from './logo.png';

import './main.scss';

const tabs = [
    {title: 'Tab 1', content: 'Some text is here'},
    {title: 'Tab 2', content: 'Another content'},
    {title: 'Tab 3', content: 'Third text'}
];


const Main = () => (
    <main className='main'>
        {/*<img src={img}/>*/}
        <Content />
        <Tasklist />

        {/*<Tabs tabs={tabs}/>*/}
    </main>
);


export default Main;