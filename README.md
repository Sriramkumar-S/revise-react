# React

- React a open source Javascript library (Not a framework), exclusively for UI which is create and maintained by FB
- Component based Architecture, hence Reusable
- React is Declarative

## Component Types

### Functional Components
    - Simple JS functions that returns a simple HTML
    - Props are accessed through --> (props.propname)
    - State is handled like --> 
        [state, setState], setState({
            state: newState
        })

### Class Components
    - ES6 classes which extends to a React Component, has a render() method which returns the HTML
    - Props are accessed through --> (this.props.propname)
    - State is handled like --> 
        this.state = {}
        this.setState({
            state: newState
        })
    
## Props
    - Props are shortform for Properties.
    - Props are properties/attributes which are passed from Parent to child components.
    - Props are used to define and alter the UI in child components.
    - Since props are shared from parent components, these are IMMUTABLE.
    - Hence props are used to display only static content. 
    - To display dynamic data in UI, STATE came into picture