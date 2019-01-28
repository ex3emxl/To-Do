import './tasklist.scss';

import { getTasks } from '../../services';

import { FaTrashAlt, FaBatteryThreeQuarters, FaCheck } from 'react-icons/fa';
import { Tab, Tabs } from "../tabs";
import * as Constants from '../../constants';

class Tasklist extends Component {

    state = {
        tasks: [...Array(7)].map(el => [])
    };

    today = new Date().getDay();

    componentDidMount() {
        getTasks()
            .then(tasks => this.setState({ tasks }))
    }

    deleteTask = () => {
        console.log('deleted')
    }
    inProgress = () => {
        console.log('in progress')
    }
    completeTask = (outIndex, innerIndex, e) => {
        const { tasks } = this.state;
        tasks[outIndex][innerIndex].done === false ?
            tasks[outIndex][innerIndex].done = true :
            tasks[outIndex][innerIndex].done = false;

        this.setState({ tasks });
        e.preventDefault();
    }

    render() {
        const { tasks } = this.state;

        return (
            <div>
                <Tabs selectedIndex={ this.today }>
                    {
                        tasks.map((taskList, index) => (
                            <Tab title={ Constants.DAYS_OF_WEEK[index] } key={ index }>
                                <ol className='tasklist'>
                                    {
                                        taskList.map((el, i) => (
                                            <li className={ el.done ? 'completed' : '' } key={ el.id }>
                                                { el.title }
                                                <a className="delete" onClick={ this.deleteTask }><FaTrashAlt/></a>
                                                <a className="in-progress"
                                                   onClick={ this.inProgress }><FaBatteryThreeQuarters/></a>
                                                <a className={ el.done ? '' : 'complete' }
                                                   onClick={ (e) => this.completeTask(index, i, e) }><FaCheck/></a>
                                            </li>
                                        ))
                                    }
                                </ol>
                                <span>{ Constants.ADD_NEW }</span>
                            </Tab>
                        ))
                    }
                </Tabs>
            </div>
        );
    }
}

export default Tasklist;