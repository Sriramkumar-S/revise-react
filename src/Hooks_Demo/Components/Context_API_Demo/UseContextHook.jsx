import React, { useContext } from 'react'
import { SportsContext, UserContext } from './ClassContext'

function UseContextHook() {
    const user = useContext(UserContext);
    const sport = useContext(SportsContext);
  return (
    <div>
      My name is {user} and I play {sport}
    </div>
  )
}

export default UseContextHook
