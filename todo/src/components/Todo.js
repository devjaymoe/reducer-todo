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

    // handlers for submittion of form
    // addTodo = e => {
    //     e.preventDefault();
    //     dispatch({ task: '' });
    // };

    // clearTodo = e => {
    //     e.preventDefault();
    //     dispatch({
    //         list: this.state.list.filter(task => !task.completed)
    //     });
    // };

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
                        // onClick={() => props.toggleTask(props.item.id)}
                    >{item.task}</li>
                ))}
            </ul>
        </div>
    );
}

export default Todo