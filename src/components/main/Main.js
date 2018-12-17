import React from 'react';
import Sidebar from '../sidebar';
import Content from '../content';
import List from '../list';

import './main.scss';

class Main extends Component {
    state = {
        users: [],
        posts: []
    };

    constructor(props) {
        super(props);
    }

    render() {

        return (<main className='main'>
                    <Content/>
        </main>);
    }
}


export default Main;