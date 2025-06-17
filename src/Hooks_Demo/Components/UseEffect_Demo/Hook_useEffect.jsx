import React, { useEffect, useState } from 'react'

function Hook_useEffect() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');
    useEffect(() => {
        console.log('UseEffect called...Updating counter')
        document.title = `Clicked ${count} times`
    }, [count])


  return (
    <div>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => setCount(prevCount => prevCount + 1)}>Clicked {count} times</button>
    </div>
  )
}

export default Hook_useEffect
