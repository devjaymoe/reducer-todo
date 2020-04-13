import React, { useState, useReducer} from 'react';
import { initialState, reducer } from '../reducers/reducer';

function Todo (){
    const [newTodo, setNewTodo] = useState();
    const [state, dispatch] = useReducer(reducer, initialState);

    // handle changes for input
    const handleChanges = e => {
        e.preventDefault();
        setNewTodo(e.target.value);
    };

    // clearTodo = e => {
    //     e.preventDefault();
    //     dispatch({
    //         list: this.state.list.filter(task => !task.completed)
    //     });
    // };

    const toggleTask = taskId => {
        //console.log(taskId)
        dispatch({ type: 'TOGGLE_COMPLETE', payload: taskId })
    }

    return (
        <div>
            <div>
                <input
                    className='todoInput'
                    type='text'
                    value={newTodo}
                    onChange={handleChanges}
                />
                <button onClick={() => dispatch({ type: 'ADD_TODO', payload: newTodo})}>Add Todo</button>
            </div>
            <ul>
                {/* map over todo's and create li's, on click toggle complete */}
                {state.todos.map( ( item, index ) => (
                    <li
                        className={`task ${item.completed ? 'completed' : ''}`}
                        key={index}
                        onClick={() => toggleTask(item.id)}
                    >{item.task}</li>
                ))}
            </ul>
        </div>
    );
}

export default Todo