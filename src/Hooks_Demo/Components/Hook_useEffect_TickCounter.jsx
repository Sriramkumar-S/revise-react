import React, { useEffect, useState } from 'react'

function Hook_useEffect_TickCounter() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log('UseEffect called...')
        const interval = setInterval(tick, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [])

    const tick = () => {
        setCount(prevCount => prevCount + 1)
    }

  return (
    <div>
      {count}
    </div>
  )
}

export default Hook_useEffect_TickCounter
