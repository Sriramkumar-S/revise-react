import React, { createContext, useReducer } from 'react'
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';
import ComponentC from './ComponentC';

export const CountContext = createContext();
const initialState = 0;
const reducer = (currState, action) => {
    switch (action.type) {
        case 'increment':
            return currState + 1
        case 'decrement':
            return currState - 1
        case 'reset':
            return initialState
        default:
            return currState
    }
}
function UseReducerWithContext() {
    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <CountContext value={{ countState: count, countDispatch: dispatch }}>
                <div>Global Count - {count}</div>
                <ComponentA />
                <ComponentB />
                <ComponentC />
            </CountContext>
        </div>
    )
}

export default UseReducerWithContext
