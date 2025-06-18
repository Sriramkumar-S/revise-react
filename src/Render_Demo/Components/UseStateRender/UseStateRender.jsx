import React, { useState } from 'react'

const UseStateRender = () => {
    const [counter, setCounter] = useState(0);
    console.log('Rendering useState')
  return (
    <div>
      <button onClick={() => setCounter(prevCounter => prevCounter + 1)}>Counter - {counter}</button>
      <button onClick={() => setCounter(0)}>Set to 0</button>
      <button onClick={() => setCounter(10)}>Set to 10</button>
    </div>
  )
}

export default UseStateRender
