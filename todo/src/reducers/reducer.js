import React from 'react';

export const initialState = {
    task: 'Complete todo list',
    completed: false,
    id: Date.now()
}

export const reducer = (state, action) => {
    switch (action.type) {
      default:
        return state;
    }
};
