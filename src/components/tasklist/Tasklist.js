import './tasklist.scss';

import { FaTrashAlt, FaBatteryThreeQuarters, FaCheck } from 'react-icons/fa';

class Tasklist extends Component {

    userId = 3;

    noResults = 'No Results';

    state = {
        todos: [],
        displayFilter: []
    };

    componentDidMount() {
        fetch(`https://jsonplaceholder.typicode.com/todos?userId=${ this.userId }`)
            .then(response => response.json())
            .then(todos => {
                return this.setState({ todos })
            })
    }

    deleteTask = () => {
        console.log('deleted')
    }
    inProgress = () => {
        console.log('in progress')
    }
    completeTask = (key, e) => {
        const userTasks = this.state.todos.map(
            el => {
                if (!el.completed) {
                    el.id === key ? el.completed = true : '';
                } else if (el.completed) {
                    el.id === key ? el.completed = false : '';
                }
                return el
            }
        );
        this.setState({ todos: userTasks });
        e.preventDefault();
    }

    handleInputChange = (e) => {
        if (e.target.value.length > 2) {
            let displayFilter = this.state.todos.filter(task => task.title.includes(e.target.value));
            displayFilter = displayFilter.length ? displayFilter : this.noResults;
            this.setState({ displayFilter: displayFilter })

        } else {
            this.setState({ displayFilter: [] })
        }
        return true
    }

    render() {

        const { todos, displayFilter } = this.state;
        const tasks = displayFilter.length ? displayFilter : todos;

        return (
            <div>
                <label>Filter</label>
                <input onChange={ this.handleInputChange } type="text"/>
                <span>Need type more than 3 symbols</span>
                { displayFilter === this.noResults ?
                    <div className='tasklist'>{ this.noResults }</div> :
                    <ol className='tasklist'>
                        {
                            tasks.map(el => (
                                <li className={ el.completed ? 'completed' : '' } key={ el.id }>
                                    { el.title }
                                    <a className="delete" onClick={ this.deleteTask }><FaTrashAlt/></a>
                                    <a className="in-progress" onClick={ this.inProgress }><FaBatteryThreeQuarters/></a>
                                    <a className={ el.completed ? '' : 'complete' }
                                       onClick={ (e) => this.completeTask(el.id, e) }><FaCheck/></a>
                                </li>
                            ))
                        }
                    </ol>
                }
            </div>
        );
    }
}

export default Tasklist;