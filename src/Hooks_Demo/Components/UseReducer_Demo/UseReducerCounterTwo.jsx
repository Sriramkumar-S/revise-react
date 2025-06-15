import React, { useReducer } from 'react'

const initialState = {
    firstCounter: 0,
    secondCounter: 10
};
const reducer = (currState, action) => {
    switch (action.type) {
        case 'increment':
            return { ...currState, firstCounter: currState.firstCounter + action.value }
        case 'decrement':
            return { ...currState, firstCounter: currState.firstCounter - action.value }
        case 'incrementTwo':
            return { ...currState, secondCounter: currState.secondCounter + action.value }
        case 'decrementTwo':
            return { ...currState, secondCounter: currState.secondCounter - action.value }
        case 'reset':
            return { firstCounter: initialState.firstCounter, secondCounter: initialState.secondCounter }
        default:
            return { ...currState }
    }
}
function UseReducerCounterTwo() {
    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <div>Count - {count.firstCounter}</div>
            <button onClick={() => dispatch({ type: 'increment', value: 1 })}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>Decrement</button>
            <button onClick={() => dispatch({ type: 'increment', value: 5 })}>Increment by 5</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 5 })}>Decrement by 5</button>
            <hr />
            <div>Counter Two - {count.secondCounter}</div>
            <button onClick={() => dispatch({ type: 'incrementTwo', value: 1 })}>Increment Counter 2</button>
            <button onClick={() => dispatch({ type: 'decrementTwo', value: 1 })}>Decrement Counter 2</button>
            <hr />
            <div>
                <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
            </div>
        </div>
    )
}

export default UseReducerCounterTwo
