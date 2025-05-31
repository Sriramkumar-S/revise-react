import React, { Component } from 'react'

class Counter extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       count: 0
    }
  }
  
  increment() {
    // this.state.count = this.state.count + 1; // This will update the value of state object but doesn't update the UI, since the DOM is not re-rendered
    this.setState({
        count: this.state.count + 1
    }, () => {
        console.log('Asynchronous Count value:', this.state.count)
    })
    console.log('Synchronous Count value:', this.state.count)
  }

  incrementsForFive() {
    // Passing function as first param for setState to do multiple updates
    this.setState((prevState, props) => ({
        count: prevState.count + 1
    }), () => {
        console.log('Asynchronous Count value:', this.state.count)
    })
    console.log('Synchronous Count value:', this.state.count)
  }

  incrementFive() {
    this.incrementsForFive();
    this.incrementsForFive();
    this.incrementsForFive();
    this.incrementsForFive();
    this.incrementsForFive();
  }

  render() {
    return (
      <>
        <p>Count - {this.state.count}</p>
        <button onClick={() => this.increment()}>Increment</button>
        <button onClick={() => this.incrementFive()}>Increment 5</button>
      </>
    )
  }
}

export default Counter
