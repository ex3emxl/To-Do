import { Route, Switch } from 'react-router-dom';
import Main from '../components/main';
import Tasklist from '../components/tasklist';

export const Pages = () => (
    <Switch>
        <Route path="/tasklist" component={ Tasklist } key="tasklist"/>
        <Route path="/" exact component={ Main } key="home"/>
        <Route render={ ({ location }) => <h1>Requested page { location.pathname } not found</h1> }/>
    </Switch>
);
