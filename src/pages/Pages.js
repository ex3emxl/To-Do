import { Route, Switch } from 'react-router-dom';
import Hello from '../components/hello';
import Main from '../components/main';
import Tasklist from '../components/Tasklist';
import Form from '../components/form';

export const Pages = () => (
    <Switch>
        <Route path="/form" component={ Form } key="user"/>
        <Route path="/tasklist" component={ Tasklist } key="tasklist"/>
        <Route path="/" exact component={ Main } key="home"/>
        <Route render={ ({ location }) => <h1>Requested page { location.pathname } not found</h1> }/>
    </Switch>
);
