import './tasklist.scss';

import { getTasks, login } from '../../services';

import { FaTrashAlt, FaBatteryThreeQuarters, FaCheck } from 'react-icons/fa';
import { Tab, Tabs } from "../tabs";

class Tasklist extends Component {

    state = {
        tasks: [...Array(7)].map(el => [])
    };

    componentDidMount() {
        login({ email: 'admin@a.com', password: 'admin' });
        getTasks()
            .then(tasks => this.setState({ tasks: tasks }));
    }

    deleteTask = () => {
        console.log('deleted')
    }
    inProgress = () => {
        console.log('in progress')
    }
    completeTask = (key, e) => {
        const userTasks = this.state.tasks.map(
            (tasks) => {
                tasks.map((el) => {
                        if (!el.done) {
                            el.id === key ? el.done = true : '';
                        } else if (el.done) {
                            el.id === key ? el.done = false : '';
                        }
                        return el
                    }
                )
                return tasks
            }
        );
        this.setState({ tasks: userTasks });
        e.preventDefault();
    }

    render() {

        const { tasks } = this.state;

        return (
            <div>
                <Tabs>
                    {
                        tasks.map((taskList, index) => (
                            <Tab title={ `Tab ${ index + 1 }` } key={ index }>
                                <ol className='tasklist'>
                                    {
                                        taskList.map(el => (
                                            <li className={ el.done ? 'completed' : '' } key={ el.id }>
                                                { el.title }
                                                <a className="delete" onClick={ this.deleteTask }><FaTrashAlt/></a>
                                                <a className="in-progress"
                                                   onClick={ this.inProgress }><FaBatteryThreeQuarters/></a>
                                                <a className={ el.done ? '' : 'complete' }
                                                   onClick={ (e) => this.completeTask(el.id, e) }><FaCheck/></a>
                                            </li>
                                        ))
                                    }
                                </ol>
                            </Tab>
                        ))
                    }
                </Tabs>
            </div>
        );
    }
}

export default Tasklist;