import React from 'react';

import './tasklist.scss';

import {FaTrashAlt, FaBatteryThreeQuarters, FaCheck} from 'react-icons/fa';

class Tasklist extends Component {

    userId = 3;

    state = {
        todos: []
    };

    componentDidMount() {
        fetch(`https://jsonplaceholder.typicode.com/todos?userId=${this.userId}`)
            .then(response => response.json())
            .then(todos => {
                return this.setState({todos})
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
                if (el.completed === false) {
                    el.id === key ? el.completed = true : el.completed = el.completed;
                } else if(el.completed === true) {
                    el.id === key ? el.completed = false : el.completed = el.completed;
                }
                return el
            }
        );
        this.setState({ todos: userTasks });
        e.preventDefault();
    }

    render() {

        const {todos} = this.state;

        return (
            <ol className='tasklist'>
                {
                    todos.map(el => (
                        <li className={el.completed ? 'completed' : ''} key={el.id} onClick={() => null}>
                            {el.title}
                            <a className="delete" onClick={this.deleteTask}><FaTrashAlt/></a>
                            <a className="in-progress" onClick={this.inProgress}><FaBatteryThreeQuarters/></a>
                            <a className={el.completed ? '' : 'complete'} onClick={(e) => this.completeTask(el.id, e)}><FaCheck/></a>
                        </li>
                    ))
                }
            </ol>
        );
    }
}

export default Tasklist;