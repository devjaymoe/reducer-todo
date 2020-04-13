import React, { useState, useReducer} from 'react';
import { reducer, initialState } from '../reducers/reducer';

function Todo (){
    const [state, dispatch] = useReducer(reducer, initialState);

    const [todo, setItem] = useState({
        task: 'Complete todo list',
        completed: false,
        id: Date.now()
    });

    const handleChanges = e => {
        setItem({ [e.target.name]: e.target.value});
      };

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
        </div>
    );
}

export default Todo