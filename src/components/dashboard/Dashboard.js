import React from 'react';

class Dashboard extends Component {

    state = {
        done: 0,
        inProgress: 0,
        waiting: 0
    };

    render() {
        const { done, inProgress, waiting } = this.state;
        const allTaks = done + inProgress + waiting;

        return (
            <div className='dashboard'>
                <p>You have <b>{allTaks}</b> tasks</p>
                <p>Done: <b>{done}</b></p>
                <p>In progress: <b>{inProgress}</b></p>
                <p>Waiting: <b>{waiting}</b></p>
            </div>
        );
    }
}

export default Dashboard;