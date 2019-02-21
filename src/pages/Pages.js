import { Route, Switch } from 'react-router-dom';

import Dashboard from './dashboard';
import Login from '../pages/login';
import Tasklist from '../components/tasklist';

export const Pages = ({user}) => (
    <Switch>
        {
            user ? [
                <Route path="/tasklist" component={ Tasklist } key="tasklist"/>,
                <Route path="/"
                       exact
                       render={() => <Dashboard user={user}/>}
                       key="dashboard"/>
            ] : [
                <Route path="/" exact component={ Login } key="login"/>
            ]
        }

        <Route render={ ({ location }) => <h1>Requested page { location.pathname } not found</h1> }/>
    </Switch>
);
