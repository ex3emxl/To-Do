import React from 'react';

import './main.scss';
import { checkUser } from "../../services";
import Login from "../../pages/login";
import Dashboard from "../../pages/Dashboard";

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

                { user ?
                    <Dashboard/>
                    :
                    <Login onLogin={ this.onLogin }/>
                }
            </main>
        );
    }
}

export default Main;