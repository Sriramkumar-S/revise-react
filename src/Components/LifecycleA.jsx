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

    render() {
        console.log('Lifecycle A Render')
        return (
            <div>
                <div>Lifecycle A</div>
                <LifecycleB />
            </div>
        )
    }
}

export default LifecycleA
