import React from 'react'
import ComponentC from './ComponentC'
import UseContextHook from './UseContextHook'

function ComponentB() {
  return (
    <div>
      <ComponentC />
      <hr />
      <UseContextHook />
    </div>
  )
}

export default ComponentB
