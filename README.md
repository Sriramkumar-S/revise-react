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

## State
    - State is used to track the dynamic properties which alter the UI. 
    - Since it is specific to a component, it is mutable and hence can display dynamic data
    - State value cannot be directly updated, rather it should be update within a (Setstate) method,
        becoz setState method rerenders the DOM after state update and display the updated value but 
        directly modifying the state variable doesn't rerender the DOM
    - setState is an asynchronous method, hence trying to access the values directly after setState 
        won't return updated values.
    - setState({}, () => {}) is the setState syntax. The second parameter is a Callback function, 
        which gets triggered after the value is updated.
    - React groups all setState calls and considers them as one and don't remember the previous values.
        Hence to update the state multiple times, pass it as function rather than a object in the first parameter. When passed as function, first param is the previous state and second param is props.