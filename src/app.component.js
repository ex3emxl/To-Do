import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { Pages } from './pages/Pages';
import { Main } from './components/main';
import { Header } from './components/header';
import { check } from "./store/user";

class App extends Component {

    componentDidMount() {
        this.props.dispatch(check());
    }

    render() {

        const { user, info } = this.props;

        return (
            <div className="wrapper">
                <Header />
                <Main>
                    <Pages user={ user } info={ info } />
                </Main>
            </div>
        );
    }
}

const mapState = state => ({ user: state.user, info: state.info });

export default withRouter(connect(mapState)(App));
