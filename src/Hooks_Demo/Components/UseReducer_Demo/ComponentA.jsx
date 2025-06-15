import React, { useContext } from 'react'
import { CountContext } from './UseReducerWithContext'

function ComponentA() {
    const countContext = useContext(CountContext);
    return (
        <div>
            <div>Component A count - {countContext.countState}</div>
            <button onClick={() => countContext.countDispatch({ type: 'increment' })}>Increment</button>
            <button onClick={() => countContext.countDispatch({ type: 'decrement' })}>Decrement</button>
            <button onClick={() => countContext.countDispatch({ type: 'reset' })}>Reset</button>
        </div>
    )
}

export default ComponentA
