import React, { useMemo, useState } from 'react'

function UseMemoDemo() {
    const [sumOne, setSumOne] = useState(0);
    const [sumTwo, setSumTwo] = useState(0);

    const isEven = useMemo(() => {
        let i = 0;
        while(i < 1000000000) i++
        return sumOne % 2 == 0;
    }, [sumOne])
  return (
    <div>
      <button onClick={() => setSumOne(prevSumOne => prevSumOne + 1)}>Sum 1 - {sumOne}</button>
      <span>{isEven ? 'Even' : 'Odd'}</span>
      <button onClick={() => setSumTwo(prevSumTwo => prevSumTwo + 1)}>Sum 2 - {sumTwo}</button>
    </div>
  )
}

export default UseMemoDemo
