import React, { useState } from 'react'

const initialState = ['IronMan', 'SpiderMan'];

const ArrayImmutability = () => {
    const [heros, setHeros] = useState(initialState);

    const handleHeroChange = () => {
        // heros.push('CaptionAmerica');
        // heros.push('HawkEye');
        // setHeros(heros)

        const newHeros = [...heros];
        newHeros.push('CaptionAmerica');
        newHeros.push('HawkEye');
        setHeros(newHeros)
    }
    console.log('Array rendered')
  return (
    <div>
      <button onClick={handleHeroChange}>Add heros</button>
      {
        heros.map(hero => (
            <div key={hero}>{hero}</div>
        ))
      }
    </div>
  )
}

export default ArrayImmutability
