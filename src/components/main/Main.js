import React from 'react';

import Content from '../content';
import Tasklist from '../Tasklist';

import './main.scss';
import { checkUser } from "../../services";
import Login from "../../pages/login";

class Main extends Component {
    state = {
        user: null,
        loading: true
    }

    componentDidMount() {
        checkUser()
            .then(data => this.setState({ user: data, loading: false }))
            .catch(() => this.setState({ loading: false }))

    }

    onLogin = (user) => {
        this.setState({
            user
        });
    };

    render() {
        const { user } = this.state;

        return (
            <main className='main'>
                <Content/>
                { user ?
                    <Tasklist/>
                    :
                    <Login onLogin={ this.onLogin }/>
                }
            </main>
        );
    }
}

export default Main;