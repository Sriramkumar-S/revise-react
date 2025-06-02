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

## Destructuring
    - Destructuring is a process of extracting the values from an array or an object and assign it to 
        distinct variable.

        const { prop1, prop2 } = this.props;
        const { state1, state2 } = this.state;

## Passing Method as Props
    - Methods are passed as a prop to the child component from parent, when the child component needs
        to communicate with the parent component.
    - Steps to implement,
        - Add a method in Parent component
        - Bind the method in Parent component constructor
        - In Parent comp, add the method as a prop to child comp
        - In Child comp, using event handlers and an arrow function call the parent method
            and pass any parameters if neccessary.

## Styling using CSS
    - First approach is by using seperate stylesheet file (styles.css) and importing the styles
        - className: 'error', className: `${errorClass} error`
    - Inline styles mentioned in the same file using styles tag
        - style={{ color: 'green', fontSize: '24px' }}
    - Using module.css file ( styles.module.css )
        - import style from '../styles.module.css'
        - <h1 className={style.error}>Error</h1>
        - using this file, the style rules are specific to the component and it cannot be inherited
            by their child component, unlike normal styles.css file
        - when DOM is generated, these tags where module styles are used will have a unique text
            appended to the class name to make them unique and accessible only to those component tags

## Class component Lifecycle method
### Mounting lifecycle
    - constructor(props)
    - getDerivedStateFromProps(state, props)
    - render()
    - componentDidMount()

