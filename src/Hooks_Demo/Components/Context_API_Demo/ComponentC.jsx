import React from 'react'
import { SportsContext, UserContext } from './ClassContext'

function ComponentC() {
  return (
    <div>
      <UserContext.Consumer>
        {
            user => {
                return (
                    <SportsContext.Consumer>
                        {
                            sport => {
                                return <div>My name is {user} & I play {sport}</div>
                            }
                        }
                    </SportsContext.Consumer>
                )
            }
        }
      </UserContext.Consumer>
    </div>
  )
}

export default ComponentC
