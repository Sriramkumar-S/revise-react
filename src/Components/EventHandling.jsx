import React, { Component } from 'react'

class EventHandling extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: 'Hello!!!'
        }

        {/* Approach 4 - Binding in constructor */ }
        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler() {
        console.log(this)
        this.setState({
            message: 'GoodBye!!!'
        })
    }

    // Approach 5 - Using arrow function syntax for writing function definition
    // clickHandler = () => {
    //     console.log(this)
    //     this.setState({
    //         message: 'GoodBye!!!'
    //     })
    // }

    render() {
        return (
            <>
                <p>{this.state.message}</p>
                {/* Approach 1 */} {/* // this will be undefined in this approach */}
                {/* <button onClick={this.clickHandler}>Click Me</button> */}

                {/* Approach 2 - Using bind() in render method --- Causes multiple rerenders so not feasible */}
                {/* <button onClick={this.clickHandler.bind(this)}>Click Me</button> */}

                {/* Approach 3 - Using Arrow function in render method --- Feasible when arguments needs to be passed */}
                {/* <button onClick={() => this.clickHandler()}>Click Me</button> */}

                {/* Approach 4 - Binding in constructor --- Recommended approach in react docs */}
                <button onClick={this.clickHandler}>Click Me</button>

                {/* Approach 5 - Using arrow function syntax for writing function definition */}
                {/* <button onClick={this.clickHandler}>Click Me</button> */}
            </>
        )
    }
}

export default EventHandling
