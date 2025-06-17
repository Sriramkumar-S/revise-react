import React, { useRef, useEffect, useState } from 'react'

function UseRefDemo() {
    const inputRef = useRef(null);
    const [counter, setCounter] = useState(0);
    
    const intervalRef = useRef();
    useEffect(() => {
        inputRef.current.focus();
        intervalRef.current = setInterval(() => {
            setCounter(prevCounter => prevCounter + 1);

            return () => {
                clearInterval(intervalRef.current)
            }
        }, 1000)
    }, [])
  return (
    <div>
      <input type="text" ref={inputRef}/>
      <hr />
      Counter - {counter}
      <button onClick={() => clearInterval(intervalRef.current)}>Clear Interval</button>
    </div>
  )
}

export default UseRefDemo
