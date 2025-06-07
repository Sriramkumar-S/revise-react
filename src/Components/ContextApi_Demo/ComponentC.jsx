import React, { Component } from 'react'
import { UserConsumer } from './UserContext'

class ComponentC extends Component {
  render() {
    return (
    <UserConsumer>
        { (userName) => {
            return (
                <div>
                    <h2>Hello {userName}!!</h2>
                </div>
            )
        }}
    </UserConsumer>
    )
  }
}


export default ComponentC
