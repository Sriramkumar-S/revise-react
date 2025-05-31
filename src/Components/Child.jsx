import React from 'react'

function Child(props) {
  return (
    <div>
      <button onClick={() => props.greetHandler('child')}>Greet</button>
    </div>
  )
}

export default Child
