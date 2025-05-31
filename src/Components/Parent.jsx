import React, { Component } from 'react'
import Child from './Child'

class Parent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            parentName: 'Parent'
        }

        this.greetParent = this.greetParent.bind(this)
    }

    greetParent(childName) {
        alert(`Hello ${this.state.parentName} from ${childName}`)
    }
    // greetParent = (childName) => {
    //     alert(`Hello ${this.state.parentName} from ${childName}`)
    // }

    render() {
        return (
            <>
                <Child greetHandler={this.greetParent}/>
            </>
        )
    }
}

export default Parent
