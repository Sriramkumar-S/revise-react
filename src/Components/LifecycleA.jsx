import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Tony Stark'
        }
        console.log('Lifecylce A constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('Lifecylce A getDerivedStateFromProps')
        return null;
    }

    componentDidMount() {
        console.log('Lifecycle A componentDidMount')
    }

    shouldComponentUpdate() {
        console.log('Lifecycle A shouldComponentUpdate')
        return true;
    }
    
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('Lifecycle A getSnapshotBeforeupdate')
        return null;
    }
    
    componentDidUpdate() {
        console.log('Lifecycle A componentDidUpdate')
    }
    
    changeStateHandler = () => {
        this.setState({
            name: 'Iron Man'
        })
    }
    
    render() {
        console.log('Lifecycle A Render')
        return (
            <div>
                <div>Lifecycle A</div>
                <button onClick={this.changeStateHandler}>Change State</button>
                <LifecycleB />
            </div>
        )
    }
}

export default LifecycleA
