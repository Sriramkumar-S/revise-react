import React from 'react'

function Person({person}) {
  return (
    <div>
      I am {person.name} a.k.a {person.heroName}
    </div>
  )
}

export default Person
