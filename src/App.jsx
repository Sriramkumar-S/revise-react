import './App.css'
import Functional from './Components/Functional'
import Class from './Components/Class'
import Counter from './Components/Counter'
import EventHandling from './Components/EventHandling'
import Parent from './Components/Parent'
import ConditionalRendering from './Components/ConditionalRendering'
import ListRendering from './Components/ListRendering'
import Styling from './Components/Styling'
import FormHandling from './Components/FormHandling'
import LifecycleA from './Components/LifecycleA'
import ParentComponent from './Components/ParentComponents'
import RefsDemo from './Components/Refs_Demo/RefsDemo'
import ParentRef from './Components/Refs_Demo/ParentRef'
import ParentFwdRef from './Components/Refs_Demo/ParentFwdRef'
import ErrorBoundary from './Components/ErrorBoundary_Demo/ErrorBoundary'
import Heros from './Components/ErrorBoundary_Demo/Heros'
import CounterHOC from './Components/HigherOrderComponents/CounterHOC'
import HoverHOC from './Components/HigherOrderComponents/HoverHOC'
import RenderProps from './Components/RenderProps_Demo/RenderProps'
import CounterRenderProps from './Components/RenderProps_Demo/CounterRenderProps'
import HoverRenderProps from './Components/RenderProps_Demo/HoverRenderProps'
import ComponentA from './Components/ContextApi_Demo/ComponentA'
import { UserProvider } from './Components/ContextApi_Demo/UserContext'
import Hook_useState from './Hooks_Demo/Components/Hook_useState'
import Hook_useEffect from './Hooks_Demo/Components/Hook_useEffect'
import Hook_useEffect_TickCounter from './Hooks_Demo/Components/Hook_useEffect_TickCounter'
import Hook_useEffect_FetchingData from './Hooks_Demo/Components/Hook_useEffect_FetchingData'
import ClassContext from './Hooks_Demo/Components/Context_API_Demo/ClassContext'
import UseReducerCounter from './Hooks_Demo/Components/UseReducer_Demo/UseReducerCounter'
import UseReducerCounterTwo from './Hooks_Demo/Components/UseReducer_Demo/UseReducerCounterTwo'
import UseReducerCounterThree from './Hooks_Demo/Components/UseReducer_Demo/UseReducerCounterThree'
import UseReducerWithContext from './Hooks_Demo/Components/UseReducer_Demo/UseReducerWithContext'
import UseReducerFetchData from './Hooks_Demo/Components/UseReducer_Demo/UseReducerFetchData'

function App() {

  return (
    <>

      <UseReducerFetchData />
      {/* <UseReducerWithContext /> */}
      {/* <UseReducerCounterThree /> */}
      {/* <ClassContext /> */}
      {/* <Hook_useEffect_FetchingData /> */}
      {/* <Hook_useEffect_TickCounter /> */}
      {/* <Hook_useEffect /> */}
      {/* <Hook_useState /> */}

      {/* <UserProvider value='Iron Man'>
        <ComponentA />
      </UserProvider> */}

      {/* <RenderProps>
        {(count, increamentCount) => {
          console.log(count, increamentCount)
          return <CounterRenderProps count={count} increamentCount={increamentCount} />
        }}
      </RenderProps>
      <RenderProps>
        {(count, increamentCount) => {
          return <HoverRenderProps count={count} increamentCount={increamentCount} />
        }}
      </RenderProps> */}
      {/* <RenderProps render={(count, increamentCount) => {
        console.log(count, increamentCount)
        return <CounterRenderProps count={count} increamentCount={increamentCount}/>
      }}/>
      <RenderProps render={(count, increamentCount) => {
        return <HoverRenderProps count={count} increamentCount={increamentCount}/>
      }}/> */}

      {/* <CounterHOC name='Sriram'/>
      <HoverHOC /> */}

      {/* <ErrorBoundary>
        <Heros heroName='Iron Man' />
      </ErrorBoundary>
      <ErrorBoundary>
        <Heros heroName='Spider Man' />
      </ErrorBoundary>
      <ErrorBoundary>
        <Heros heroName='Thanos' />
      </ErrorBoundary> */}

      {/* <ParentFwdRef /> */}
      {/* <ParentRef /> */}
      {/* <RefsDemo /> */}

      {/* <ParentComponent /> */}

      {/* <LifecycleA /> */}

      {/* <FormHandling /> */}

      {/* <Styling /> */}

      {/* <ListRendering /> */}

      {/* <ConditionalRendering /> */}

      {/* <Parent /> */}

      {/* <EventHandling /> */}

      {/* <Counter /> */}

      {/* <Functional name="Tony Stark" heroName="Iron man">
        <p>Jarvis is from children props</p>
      </Functional> */}
      {/* <Functional name="Steve Rogers" heroName="Captian America"/> */}
      {/* <Class name="Bruce Banner" heroName="Hulk">
        <p>She Hulk is from children props</p>
      </Class> */}
      {/* <Class name="Peter parker" heroName="Spider man"/> */}
    </>
  )
}

export default App
