import React from 'react';

import Hello from './hello';
import Dashboard from './Dashboard';

import './content.scss';

const Content = () => (
    <div className='content'>
        <Hello
            name="Se Mi"
        />
        <br/>
        <Dashboard />
        <br/>
        <a href="#">Go to the task list</a>

    </div>
);

export default Content;