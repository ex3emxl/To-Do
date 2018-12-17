import React from 'react';

import Hello from '../hello';
import Counter from '../counter';


import './content.scss';

const Content = () => (
    <div className='content'>
        <Hello
            name="Se Mi"
        />
        <br/>

        <Counter/>

    </div>
);

export default Content;