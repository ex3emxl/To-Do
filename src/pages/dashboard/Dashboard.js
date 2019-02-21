import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

import Hello from '../../components/hello';

class Dashboard extends Component {

    static propTypes={
        info: PropTypes.object,
        user: PropTypes.object,
    }

    render() {

        const {user = {}, info} = this.props;

        return (
            <div className='dashboard'>
                <Hello name={user.firstName} />
                <br/>
                <Link to="/tasklist">Go to the task list</Link>
            </div>
        );
    }
}

export default Dashboard;