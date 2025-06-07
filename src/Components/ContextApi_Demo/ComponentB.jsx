import React, { Component } from 'react'
import ComponentC from './ComponentC'
import UserContext from './UserContext'

class ComponentB extends Component {
    render() {
        return (
            <>
                <div>Component B Context: {this.context}</div>
                <ComponentC />
            </>
        )
    }
}

ComponentB.contextType = UserContext;

export default ComponentB
