import React, { Component } from 'react'

class LifecycleB extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Tony Stark'
        }
        console.log('Lifecylce B constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('Lifecylce B getDerivedStateFromProps')
        return null;
    }

    componentDidMount() {
        console.log('Lifecycle B componentDidMount')
    }

    render() {
        console.log('Lifecycle B Render')
        return (
            <div>
                <div>Lifecycle B</div>

            </div>
        )
    }
}

export default LifecycleB
