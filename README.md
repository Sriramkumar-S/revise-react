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
    - static getDerivedStateFromProps(state, props)
    - render()
    - componentDidMount()

### Updating Lifecycle
    - static getDerivedStateFromProps(state, props)
    - shouldComponentUpdate()
    - render()
    - getSnapshotBeforeUpdate(prevProps, prevState)
    - componentDidUpdate()

### Unmounting Lifecycle
    - componentWillUnmount()

### Error handling Lifecycle
    - static getDerivedStateFromError(error)
    - componentDidCatch(error, info)

## Pure components
    - In React the components are rendered when there is change in either Prop or State value,
    - When value is set using setState or new props are received from parent component react rerenders the DOM
    - But if the same value is being set in state or sent through props, normal react component rerenders
        the DOM even though there is no change in value. This affects performance of applications.
    - PURE components are those which will verify the new state or prop with its old value and only if there 
        is a difference it rerenders the DOM, thereby imporving perfomance.
    - This is for CLASS components
    - Need to import the component from PureComponent
        import React, { PureComponent } from 'react'

## Memo
    - React memo is analogous to Pure component but for Functional Components
    - While exporting the component need to pass it as parameter to React.memo
        export default React.memo(MemoComponent)

## Refs
    - React Refs are used to store and access either the html elements or components.
    - Unlike State or porps, updating refs won't rerender the DOM
    - Refs can be created using 2 ways
        - React.CreateRef()
        - Callback Ref
    - Refs are exclusively used for CLASS components

### Forwarding Refs
    - Forwarding Refs is used to directly gain access to the native elements in child elements,
        rather than referencing the child comp and using a handler inside child comp to access the native 
        element
    - When a ref is created using React.createRef() method then the ref is automatically passed as 
        second argument to the child comp, while the first argument being props

## Error Boundary
    - A class component that implements either **getDerivedStateFromError** or **componentDidCatch** lifecycle 
        method becomes an Error boundary
    - **getDerivedStateFromError** is used to render an fallback UI in case of error
    - **componentDidCatch** is used for error logging

## Higher Order Components (HOC)
    - HOC is a pattern where a component is passed as an argument to a function and that function returns 
        the enhanced component
    - HOC is used to share common functionalities between components without having to duplicate code
    - class WithCounter extends React.Component {
            render() {
                return <WrappedComponent >
            }
        }
        return WithCounter

## Render Props
    - Render props is also a method for sharing common functionalities between different components
    - This is a process of sharing a function as a prop to determine what to be rendered

## Context API
    - When there is a neccessity to communicate between components and share details to deeply nested 
        components, we have to use props to drill the value deep to that component.
    - To overcome this, context APIs are introduced where it makes it easy to share the details
        - Create a **UserContext** with default value and create a **UserProvider and UserConsumer** from it
        - Add the **UserProvider** tag in a component in such a way that all its decendent components can 
            make use of it. Using **value** property send the value to be shared
        - In the component where the value needs to be retrived, inside the render method return a function
            which returns the component code. These are enclosed within the **UserConsumer** tag
            **<UserConsumer>
                {(propName) => {
                    return ( <div>Hello {propName}</div> )
                }}
            </UserConsumer>**
        - **contextType** can also be used to, but it has 2 disadvantages
            - It is specific to **class** components
            - Cannot send multiple context

## Hooks
    - Hooks are released in React 16 which allows to use react features without using class
    - Hooks wont work inside classes
    - Allows to reuse stateful logic
    - Allows to directly access API

### Rules of Hooks
    - Only call hooks at the Top level --> Dont call inside loops, conditions or nested functions
    - Only call hooks from within react funcions --> Not from insided regular JS functions

## useState Hook
    - way to implement **State** inside **Functional component**
    - In class comp., state is always an object but it is not the case in functional comp.
    - When dealing with arrays or objects always spread the state variable and then update.
        
        const [state, setState] = useState(initialValue)

        {() => setState(prevState => prevState + newValue)}

## useEffect Hook
    - useEffect hook is way to perform side effect in functional components
    - It replaces the work done by **componentDidMount**, **componentDidUpdate** and      **componentWillUnmount**   in class components
    - useEffect(() => {
        <!-- code to be executed either during mounting or updating phase -->

        return () => {
            <!-- code to be executed during unmounting phase -->
        }
    }, [<dependencyArray>])

    - useEffect is a function which takes 2 parameters. 
        First is a function which is used to execute code during mounting and unmounting phase
        Second is a dependency array
    - Dependency array is used to let react know to keep track of state or props and trigger a rerender
        when either of the value changes
        - When dependency array is not added, react rerender the page continuously thereby affecting performance
        - When an empty [] is given, then the code in useEffect block will be executed only during
            mounting phase
        - When the [state, prop] mentioned, then the useEffect triggers rerender during mounting phase
            and also during change in value of any of the state or props mentioned in the array
    - Unmounting phase code can be written inside an arrow function which will be returned inside the
        useEffect code block

## useContext Hook
    - Context API is used to share common functionalities between different components, wherein 
        passing props manually to multiple levels is a problem since it rerenders the components 
    - **useContext** hook is used to replicate what context API did for class component in functional
        components
    - useContext hook has a three step process
        1. export const UserContext = createContext(<defaultValue>);+
        2. <UserContext value={valueTobePassed}>
                <Components>
            </UserContext>
        3. Inside the component where the value needs to be used
            const user = useContext(UserContext);

## useReducer Hook
    - **useReducer** is a hook used for state management in React and it is related to **reducer** function
    - syntax
        **const initialState = {
            state_1: <initialValue>
        }

        const reducerFn => (currentState, action) {
            switch(action.type) {
                case 'action_1':
                    return newState
            }
        }

        const [state, dispatchFn] = useReducer(reducerFn, initialState)
        
        dispatchFn({ type: 'action_1' }) **

## useState vs useReducer

### useState
1. Type of State - Numbers, string, boolean
2. Number of state transitions - Lower no of setState to be implemented (one or two)
3. Related state transition - When related state variables needs to be updated based one scenario like either success or failure, then useState is not recommended
4. Business logic - When updating the value doesn't involve any complex computations
5. Local vs Global - useState is used only for maitaining Local state


### useReducer
1. Type of State - Arrays and objects
2. Number of state transitions - More no of repetion of updates to be done (like more than 5)
3. Related state transition - useReducer is recommended when there are multiple variables which are related and needs to be updated based on particular scenario
4. Business logic - When complex computations or business logics needs to be implemented before updating
5. Local vs Global - useReducer is used for maintaining Global state, it is sometimes combined with useContext hook to implement this.

## useCallback Hook
    - One of the performance optimization techniques used in react is using the useCallback Hook.
    - It is used when passing a callback function to a performance optimized component where referential equality is implemented. 
    - It memoizes the callback function which is passed as prop to the child components.                                                                 
    - syntax
        const funcName = useCallback(() => {}, [dependencies])

## useRef Hook
    - useRef hook is used to store a mutable value or get access to a DOM element directly
        in a functional component.
    - userRef values can be persisted across DOM rerenders.
    - Change in useRef values doesn't cause rerender.
    - syntax
        const exampleRef = useRef(<initialValue>)

        exampleRef.current

## useMemo Hook
    - useMemo Hook is also one of the performance optimization technique.
    - useMemo hook caches the return value of the function which involves complex calculations or
        computations which takes up a lot of time to execute.
    - It has a dependency array which specifies on update of which value should the calucations be 
        done again and should not share the cached value.
    - syntax
        const functionName = useMemo(() => {
            <complex calculations>
        }, [<dependency array>])

        instead of calling function using <functionName()> just pass the reference <functionName>

## Rendering in React
    - There 2 phases in react for a component to be visible in DOM
        1. Rendering phase
            - All the component starting from root (App) to the leaf component are listed
            - React flags the components where there is a change in value triggered
            - React then uses the createElement() method to react elements which are JS objects from JSX
            - React reconciliation then happens where the previous rendered elements are compared
                with newly rendered elements
            - Then the changes are given to committing phase
        2. Committing phase
            - The changes are then committed to the DOM

    - Commit phase is usually very fast, only the rendering phase is slow

### useState/useReducer and Render
    - The setter/dispatch function in useState/useReducer will cause the component to rerender
    - Only exception when it doesn't rerender is when the value is set to same value
    - There are two cases to it,
        1. Same value after initial render --> Component will not rerender
        2. Same value after rerender --> Component will rerender once and then stops from rerendering again

    