export const initialState = {
    todos: [
        {
            task: 'Complete todo list',
            completed: false,
            id: Date.now()
        }
    ]
}

export const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            //console.log(action.payload)
            return {
                ...state,
                todos: [...state.todos, 
                    { 
                        task: action.payload, 
                        completed: false, 
                        id: Date.now()
                    }
                ]
            }
        case 'TOGGLE_COMPLETE':
            return {
                ...state,
                todos: state.todos.map(item => {
                    if ( action.payload === item.id ){
                        return {
                            ...item,
                            completed: !item.completed
                        };
                    }
                    return item;
                })
            }
        case 'CLEAR_COMPLETED':
            // list: this.state.list.filter(task => !task.completed)
            return {
                ...state,
                todos: state.todos.filter( item => !item.completed)
            }
        default:
            return state;
    }
};
