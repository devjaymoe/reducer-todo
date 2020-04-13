import React, { useState, useReducer} from 'react';
import { reducer, initialState } from '../reducers/reducer';

function Todo (){
    const [todo, dispatch] = useReducer(reducer, initialState);

    // const [todo, setItem] = useState({
    //     task: 'Complete todo list',
    //     completed: false,
    //     id: Date.now()
    // });

    const handleChanges = e => {
        dispatch({ [e.target.name]: e.target.value});
    };

    // toggleTask = taskId => {
    // //console.log(taskId)
    //     setState({
    //         list: this.state.list.map(item => {
    //         if( taskId === item.id ){
    //             return {
    //             ...item,
    //             completed: !item.completed
    //             };
    //         }
    //         return item;
    //         })
    //     })
    // }
    return (
        <div>
            <div>
                <input
                className="todo-input"
                type="text"
                name="item"
                value={todo.task}
                onChange={handleChanges}
                />
                <button
                onClick={() =>
                    dispatch({ type: 'add-todo', payload: todo.task })
                }
                >
                Add Todo
                </button>
            </div>

            <ul className='task-container'>
                {todo.map( item => (
                    <div
                        className={`task ${item.completed ? 'completed' : ''}`}
                        // onClick={() => state.toggleTask(props.item.id)}
                    >
                        <li>{item.task}</li>
                    </div>
                ))}
            </ul>

        </div>
    );
}

export default Todo