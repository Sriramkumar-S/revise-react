import React, { useState } from 'react'
import ChildRender from './ChildRender';

const ParentRender = ({ name, children }) => {
    const [count, setCount] = useState(0);
    console.log('Parent Rendered')
  return (
    <div>
      <button onClick={() => setCount(c => c + 1) }>Count - {count}</button>
      <button onClick={() => setCount(0)}>Set to 0</button>
      <button onClick={() => setCount(5)}>Set to 5</button>
      <input type="text" value={name} readOnly/>
      <ChildRender />
      {/* {children} */}
    </div>
  )
}

export default ParentRender
